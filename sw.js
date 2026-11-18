/* Locked dashboard: decrypts vault files in the browser after the password is entered.
   Everything under this folder except index.html, sw.js, 404.html and vault/ is served from
   the encrypted vault. Key = PBKDF2-SHA256(password, salt), kept in this browser's IndexedDB. */
const BASE = new URL("./", self.registration.scope).pathname;
const PUBLIC = new Set(["", "index.html", "sw.js", "404.html"]);
let state = null;           // { key, manifest, at }

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("message", (e) => { if (e.data === "reset") state = null; });

function idb() {
  return new Promise((ok, bad) => {
    const r = indexedDB.open("locked-dashboard", 1);
    r.onupgradeneeded = () => r.result.createObjectStore("kv");
    r.onsuccess = () => ok(r.result);
    r.onerror = () => bad(r.error);
  });
}
async function idbGet(k) {
  const db = await idb();
  return new Promise((ok) => {
    const q = db.transaction("kv").objectStore("kv").get(k);
    q.onsuccess = () => ok(q.result); q.onerror = () => ok(undefined);
  });
}

async function decrypt(key, buf) {
  const b = new Uint8Array(buf);
  return crypto.subtle.decrypt({ name: "AES-GCM", iv: b.slice(0, 12) }, key, b.slice(12));
}

async function load(fresh) {
  if (state && !fresh && Date.now() - state.at < 60000) return state;
  const saved = await idbGet("key");
  if (!saved || !saved.bits || (saved.exp && saved.exp < Date.now())) { state = null; return null; }
  const key = await crypto.subtle.importKey("raw", saved.bits, "AES-GCM", false, ["decrypt"]);
  const res = await fetch(BASE + "vault/m.bin", { cache: "no-store" });
  if (!res.ok) return null;
  try {
    const m = JSON.parse(new TextDecoder().decode(await decrypt(key, await res.arrayBuffer())));
    state = { key, manifest: m, at: Date.now() };
    return state;
  } catch (_) { state = null; return null; }     // wrong or outdated key
}

function page(title, body, status) {
  return new Response(
    `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title><style>body{font:15px/1.6 -apple-system,Segoe UI,sans-serif;max-width:760px;margin:40px auto;padding:0 16px;color:#1d2733}
a{color:#0A6C94}li{margin:4px 0}h1{font-size:1.3rem}</style>${body}`,
    { status: status || 200, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
}

function listing(st, dir) {
  const files = st.manifest.files, prefix = dir ? dir + "/" : "";
  const subdirs = new Set(), items = [];
  for (const p of Object.keys(files)) {
    if (!p.startsWith(prefix)) continue;
    const rest = p.slice(prefix.length);
    if (rest.includes("/")) subdirs.add(rest.split("/")[0]); else items.push(rest);
  }
  if (!subdirs.size && !items.length) return null;
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const enc = (s) => encodeURIComponent(s);
  const name = dir.split("/").pop();
  const li = [...[...subdirs].sort().map((d) => `<li>📁 <a href="${enc(d)}/">${esc(d)}</a></li>`),
              ...items.sort().map((f) => `<li><a href="${enc(f)}">${esc(f)}</a></li>`)].join("");
  return page(esc(name), `<p><a href="javascript:history.back()">← Back</a></p><h1>${esc(name)}</h1><ul>${li}</ul>`);
}

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin || !url.pathname.startsWith(BASE)) return;
  let rel;
  try { rel = decodeURIComponent(url.pathname.slice(BASE.length)); } catch (_) { return; }
  if (PUBLIC.has(rel) || rel.startsWith("vault/")) return;
  e.respondWith(serve(e.request, rel));
});

async function serve(req, rel) {
  const nav = req.mode === "navigate";
  const st = await load(nav);
  if (!st) {
    if (nav) return Response.redirect(BASE + "?next=" + encodeURIComponent(rel), 302);
    return new Response("Locked", { status: 401 });
  }
  const files = st.manifest.files;
  let p = rel.replace(/\/+$/, "");
  let f = files[p];
  if (!f && files[(p ? p + "/" : "") + "index.html"]) {
    if (!rel.endsWith("/") && p) return Response.redirect(BASE + p.split("/").map(encodeURIComponent).join("/") + "/", 302);
    f = files[(p ? p + "/" : "") + "index.html"];
  }
  if (!f) {
    if (nav) {
      const l = listing(st, p);
      if (l) {
        if (!rel.endsWith("/")) return Response.redirect(BASE + p.split("/").map(encodeURIComponent).join("/") + "/", 302);
        return l;
      }
      return page("Not found", `<h1>This page isn't part of the dashboard</h1><p><a href="${BASE}">Back to the dashboard</a></p>`, 404);
    }
    return new Response("Not found", { status: 404 });
  }
  const res = await fetch(BASE + "vault/" + f.id + ".bin");
  if (!res.ok) return new Response("Missing file", { status: 502 });
  const body = await decrypt(st.key, await res.arrayBuffer());
  return new Response(body, { headers: { "Content-Type": f.m, "Cache-Control": "no-store" } });
}
