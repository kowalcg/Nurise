// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Aug 16–20, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Friday, Aug 21, 2026",
  account: {
    spend: 163.83, sales: 1309.80, orders: 16, clicks: 221,
    acos: "12.5%", acosClass: "good", acosSub: "healthy vs 40–45% ceiling, improved from 22.2%",
    spendSub: "≈ $33/day · 7 campaigns with spend", clicksSub: "33 campaigns in account"
  },
  bestPerformer: "B0DBVZFBFV — Auto-Discovery alone spent $30.20 for $727.93 in sales (7 orders, 4% ACOS) — the single best campaign in the account this window. The B0DBVZFBFV trio (Product Targeting + Auto-Discovery + Manual Exact) spent $98.62 for $1,117.89 (85% of account ad sales).",
  biggestLeak: "B0D9YSNYBG - Auto - Discovery spent $7.37 with zero sales, still ENABLED (converted once in a prior window — low-priority pause candidate). B0D9YVZFPT - Auto SI spent $0.90 with zero sales, part of the SI trio still barely serving since 03-Jul launch.",
  campaigns: [
    {name: "B0DBVZFBFV - Product Targeting", spend: 41.44, sales: 199.98, orders: 2},
    {name: "B0D9YW9DC1 - Auto - Discovery", spend: 31.09, sales: 119.99, orders: 1},
    {name: "B0DBVZFBFV - Auto - Discovery", spend: 30.20, sales: 727.93, orders: 7},
    {name: "B0DBVZFBFV - Manual Exact", spend: 26.98, sales: 189.98, orders: 2},
    {name: "SaluSpa Filter (B08R11D8NJ)", spend: 25.85, sales: 71.92, orders: 4},
    {name: "B0D9YSNYBG - Auto - Discovery (zero-sale, enabled)", spend: 7.37, sales: 0, orders: 0},
    {name: "B0D9YVZFPT - Auto SI (barely serving)", spend: 0.90, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · window ACOS 36% (Aug 19–20 will restate upward)",
    daily: [
      {date: "Aug 16", spend: 5.87, sales: 0, orders: 0, clicks: 5},
      {date: "Aug 17", spend: 4.42, sales: 17.98, orders: 1, clicks: 4},
      {date: "Aug 18", spend: 8.12, sales: 35.96, orders: 2, clicks: 6},
      {date: "Aug 19", spend: 3.57, sales: 0, orders: 0, clicks: 3},
      {date: "Aug 20", spend: 3.87, sales: 17.98, orders: 1, clicks: 3}
    ]
  },
  history: [
    {week: "Aug 16–20, 2026", spend: 163.83, sales: 1309.80, orders: 16, acos: "12.5%"},
    {week: "Aug 12–16, 2026", spend: 195.71, sales: 881.84, orders: 12, acos: "22.2%"},
    {week: "Aug 9–13, 2026", spend: 322.27, sales: 1089.80, orders: 15, acos: "30%"}
  ],
  actions: [
    {done: true, text: "<strong>SaluSpa filter re-tuned for the rest of the season</strong> — Douae's plan approved Aug 21: $8/day, Down Only, Exact keywords ~$0.90, Broad ~$0.80, phrase negatives + generic “hot tub filter” Broad stay paused. Campaign stays ON at break-even; no further changes until early September."},
    {done: true, text: "<strong>Negative keywords added as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — done Aug 13, confirmed live Aug 21."},
    {done: true, text: "<strong>6 zero-sale campaigns paused</strong> — confirmed still PAUSED Aug 21, no drift."},
    {done: true, text: "<strong>B0CDXN72C4 + B0D9YW2776 paused</strong> (209 clicks, 1 order in 90 days — listing/price issue, not an ads issue) — done by Douae Aug 20."},
    {done: true, text: "<strong>B0D9YW9DC1 Auto-Discovery</strong> — pause request withdrawn Aug 17 after it converted; still enabled and converting (26% ACOS this window)."},
    {done: false, text: "<strong>Pause B0D9YSNYBG Auto-Discovery</strong> — requested Aug 21 ($7.37 zero-sale spend this window). Confirm on next pull."},
    {done: false, text: "<strong>Pause or fix B0D9YVZFPT SI trio</strong> — barely serving: $0.90 spend this window, no sales since 03-Jul launch. Low priority."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy sold out; the three paused campaigns were the account's best performers. Needs a real reorder decision from Todd, then reactivate."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — Selling Partner API application still in Amazon's developer review queue. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "🏆 Win of the week: account ACOS improved to 12.5% (from 22.2%) while sales grew 48% and spend fell 16% — B0DBVZFBFV Auto-Discovery is carrying the account at 4% ACOS.",
    "✅ Decision Aug 21: SaluSpa filter campaign runs lean at break-even ($8/day, lower bids) and is left alone until early September. Ads are ~7% of filter volume and stock is ~700 units (8–9 weeks) — no sell-through emergency, no reason to keep tuning it. Filter break-even is ~24.5% ACOS; this window ran 36%, converting days 22–25%.",
    "📦 The season's constraint is stock, not ads: pumps, pool/spa accessories and SupportRest all sold out (74% sell-through overall), several with zero ad support. Second container in progress — packing list requested.",
    "⚠️ Still open: B0D9YSNYBG pause (requested Aug 21), B0D9YVZFPT SI trio barely serving, B0DZ31B3RP needs a reorder decision.",
    "⏳ Season note: products sell through late September/early October — sell-through beats ACOS perfection from here on."
  ]
};
