// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Aug 23–27, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Friday, Aug 28, 2026",
  account: {
    spend: 143.85, sales: 621.88, orders: 9, clicks: 178,
    acos: "23.1%", acosClass: "warn", acosSub: "needs attention; jumped +8.5 pts from 14.6% last review",
    spendSub: "≈ $29/day · 7 campaigns with spend · avg CPC $0.81", clicksSub: "33 campaigns in account"
  },
  bestPerformer: "B0DBVZFBFV — Auto-Discovery spent $30.32 for $299.97 in sales (3 orders, 10% ACOS) — an order on each of Aug 25, 26 and 27, like clockwork. The B0DBVZFBFV trio (Auto-Discovery + Product Targeting + Manual Exact) spent $86.51 for $567.94 — 91% of all account ad sales at 15% blended ACOS. Product Targeting also recovered from 41% ACOS last window to 22%.",
  biggestLeak: "B0D9YW9DC1 - Auto - Discovery spent $31.38 with ZERO sales and is STILL ENABLED — the pause requested on Aug 24 has not been actioned. That is ~$61 of pure waste across two windows (41 clicks on ~10,200 impressions this window), and its impressions spiked to 3,278 on Aug 27, so it is accelerating rather than fading. The single clearest dollar saving available in the account.",
  campaigns: [
    {name: "B0DBVZFBFV - Product Targeting", spend: 44.39, sales: 199.98, orders: 2},
    {name: "B0D9YW9DC1 - Auto - Discovery (zero-sale, still ENABLED)", spend: 31.38, sales: 0, orders: 0},
    {name: "B0DBVZFBFV - Auto - Discovery", spend: 30.32, sales: 299.97, orders: 3},
    {name: "SaluSpa Filter (B08R11D8NJ)", spend: 24.31, sales: 53.94, orders: 3},
    {name: "B0DBVZFBFV - Manual Exact", spend: 11.80, sales: 67.99, orders: 1},
    {name: "B0D9YVZFPT - Auto SI (enabled, barely serving, no sales)", spend: 1.16, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · window ACOS 45% (≈33% excluding the two lagging days) · break-even ~24.5% · untouched per the Aug 21 decision hold",
    daily: [
      {date: "Aug 23", spend: 10.30, sales: 35.96, orders: 2, clicks: 5},
      {date: "Aug 24", spend: 1.72, sales: 0, orders: 0, clicks: 1},
      {date: "Aug 25", spend: 5.61, sales: 17.98, orders: 1, clicks: 5},
      {date: "Aug 26", spend: 2.59, sales: 0, orders: 0, clicks: 2},
      {date: "Aug 27", spend: 4.09, sales: 0, orders: 0, clicks: 2}
    ]
  },
  history: [
    {week: "Aug 23–27, 2026", spend: 143.85, sales: 621.88, orders: 9, acos: "23.1%"},
    {week: "Aug 19–23, 2026", spend: 154.57, sales: 1055.79, orders: 15, acos: "14.6%"},
    {week: "Aug 16–20, 2026", spend: 163.83, sales: 1309.80, orders: 16, acos: "12.5%"},
    {week: "Aug 12–16, 2026", spend: 195.71, sales: 881.84, orders: 12, acos: "22.2%"},
    {week: "Aug 9–13, 2026", spend: 322.27, sales: 1089.80, orders: 15, acos: "30%"}
  ],
  actions: [
    {done: true, text: "<strong>B0D9YSNYBG Auto-Discovery paused</strong> — requested Aug 21, confirmed done Aug 24, re-confirmed Aug 28: still PAUSED, no spend."},
    {done: true, text: "<strong>SaluSpa filter re-tuned for the rest of the season</strong> — Douae's plan approved Aug 21: $8/day, Down Only, Exact keywords ~$0.90, Broad ~$0.80, phrase negatives + generic “hot tub filter” Broad stay paused. Campaign stays ON; no further changes until early September."},
    {done: true, text: "<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — done Aug 13, re-confirmed Aug 28: all seven still ENABLED."},
    {done: true, text: "<strong>Generic “hot tub filter” Broad still paused</strong> — re-confirmed Aug 28, no drift."},
    {done: true, text: "<strong>6 zero-sale campaigns + B0CDXN72C4 + B0D9YW2776 paused</strong> — all re-confirmed still PAUSED Aug 28, no drift anywhere in the account."},
    {done: false, text: "<strong>Pause B0D9YW9DC1 Auto-Discovery</strong> — REQUESTED AUG 24, NOT YET DONE. Still ENABLED; burned a further $31.38 with zero sales this window (41 clicks, ~10,200 impressions), for ~$61 wasted across two windows. Top priority for Douae."},
    {done: false, text: "<strong>Pause B0D9YSNYBG Manual Exact</strong> — NEW this week: still ENABLED, served 190 impressions for 1 click / $0.49 / zero sales, while its sibling Auto-Discovery and Product Targeting campaigns are already paused. Trivial money, but it should follow the others."},
    {done: false, text: "<strong>Pause or fix B0D9YVZFPT SI trio</strong> — all three still ENABLED at $8/day; only $1.16 spend this window and no sales since the 03-Jul launch."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; the three paused campaigns were the account's best performers. Reactivation needs a real reorder decision from Todd on buying more units — not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "🏆 Win of the week: B0DBVZFBFV keeps carrying the account — the trio spent $86.51 for $567.94 (91% of all ad sales) at 15% blended ACOS, with Auto-Discovery at 10% and an order on each of the last three days. Product Targeting also fixed itself: 41% ACOS last window down to 22%, so the Aug 24 concern did not repeat.",
    "⚠️ Watch: ad sales fell 41% ($1,055.79 → $621.88) on roughly flat spend, and orders dropped 15 → 9, pushing blended ACOS from 14.6% to 23.1%. Some of that is the ~2-day reporting lag, but the order count is a real decline. The account is still profitable in aggregate — the cushion is just much thinner than a week ago.",
    "🩸 Leak unactioned: B0D9YW9DC1 Auto-Discovery was flagged for pause on Aug 24 and is still running — another $31.38 with zero sales, impressions spiking to 3,278 on Aug 27. Pausing it is the single clearest saving available.",
    "📉 SaluSpa filter went the wrong way: 31% → 45% ACOS, sales and orders both roughly halved ($107.88 → $53.94, 6 → 3 orders). Excluding the two lagging days it is ≈33%, so the true number is likely low-to-mid 30s — still above the ~24.5% break-even and still loss-making on ad-attributed sales. Left untouched per the Aug 21 decision hold.",
    "📌 For the early-September re-tune (not before): realised CPC is ~$1.62 against the approved ~$0.80–0.90 bids; the $8 budget was breached once (Aug 23, $10.30); and the campaign carries an ENABLED Negative Exact for “saluspa hot tub filter” while also running an ENABLED Exact keyword on the same term at $0.86 — if that is not deliberate it is blocking its own best-intent search term, which would explain only 15 clicks on 4,098 impressions.",
    "⏳ Season note: products sell through late September/early October — sell-through beats ACOS perfection from here on. Ads are ~7% of filter volume and stock is ~700 units (8–9 weeks cover), so there is no sell-through emergency. There is also no reason to keep paying for a campaign that sells nothing."
  ]
};
