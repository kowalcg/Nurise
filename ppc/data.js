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
    {done: true, text: "<strong>Bidding strategy → down-only</strong> on SaluSpa — done Aug 13."},
    {done: true, text: "<strong>Negative keywords added as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — done Aug 13, confirmed live Aug 21."},
    {done: true, text: "<strong>Exact-match winners at $1.40</strong> (“saluspa hot tub filter”, “saluspa inflatable spa filter”) — done Aug 13, confirmed live Aug 21."},
    {done: true, text: "<strong>Broad bids to $1.30</strong> + generic “hot tub filter” Broad paused — done Aug 13, confirmed still paused Aug 21."},
    {done: true, text: "<strong>6 zero-sale campaigns paused</strong> — confirmed still PAUSED Aug 21, no drift."},
    {done: true, text: "<strong>B0D9YW9DC1 Auto-Discovery</strong> — pause request withdrawn Aug 17 after it converted; still enabled, watching."},
    {done: false, text: "<strong>Pause or fix B0D9YVZFPT SI trio</strong> — barely serving: $0.90 spend this window, no sales since 03-Jul launch. Check targeting or pause."},
    {done: false, text: "<strong>Consider pausing B0D9YSNYBG Auto-Discovery</strong> — still enabled, $7.37 zero-sale spend this window (converted once in an earlier window; low priority)."},
    {done: false, text: "<strong>Reactivate the three B0DZ31B3RP campaigns when restocked</strong> — best performers in the account historically, paused only for stockout. Restock date needed from Douae."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — Selling Partner API application still in Amazon's developer review queue. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "🏆 Win of the week: account ACOS improved to 12.5% (from 22.2%) while sales grew 48% and spend fell 16% — B0DBVZFBFV Auto-Discovery is carrying the account at 4% ACOS.",
    "🔍 Watch item: SaluSpa window ACOS improved to 36% (from 48%) and is now under the 40–45% concern line, but 2 of 5 days were zero-sale and Aug 19–20 will restate upward — recheck Monday.",
    "⚠️ Still open: the B0D9YVZFPT SI trio (launched 03-Jul) remains barely serving — targeting review or pause still needed.",
    "⚠️ Still open: B0DZ31B3RP restock ETA still needed from Douae to reactivate the account's historically best-performing campaigns.",
    "⏳ Season note: products sell through late September/early October — sell-through beats ACOS perfection from here on."
  ]
};
