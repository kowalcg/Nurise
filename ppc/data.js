// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Aug 12–16, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Monday, Aug 17, 2026",
  account: {
    spend: 195.71, sales: 881.84, orders: 12, clicks: 236,
    acos: "22.2%", acosClass: "good", acosSub: "healthy vs 40–45% ceiling",
    spendSub: "≈ $39/day · 13 campaigns with spend", clicksSub: "33 campaigns in account"
  },
  bestPerformer: "B0DBVZFBFV — 3 campaigns spent $88.52 for $689.93 in sales (7 orders, ~13% ACOS). 78% of the account's ad sales this window; Auto-Discovery alone did $299.97 at 10% ACOS.",
  biggestLeak: "The 6 zero-sale campaigns spent $40.36 (Aug 12–13, before the pauses landed) — all 6 now PAUSED, so the leak is closed. Largest single: B0D9YW9DC1 Product Targeting at $8.82.",
  campaigns: [
    {name: "B0DBVZFBFV - Product Targeting", spend: 40.06, sales: 199.98, orders: 2},
    {name: "SaluSpa Filter (B08R11D8NJ)", spend: 34.66, sales: 71.92, orders: 4},
    {name: "B0DBVZFBFV - Auto - Discovery", spend: 29.70, sales: 299.97, orders: 3},
    {name: "B0D9YW9DC1 - Auto - Discovery", spend: 29.54, sales: 119.99, orders: 1},
    {name: "B0DBVZFBFV - Manual Exact", spend: 18.76, sales: 189.98, orders: 2},
    {name: "B0D9YW9DC1 - Product Targeting (paused)", spend: 8.82, sales: 0, orders: 0},
    {name: "B0CDXN72C4 - Auto - Discovery (paused)", spend: 8.35, sales: 0, orders: 0},
    {name: "B0CDXN72C4 - Product Targeting (paused)", spend: 7.91, sales: 0, orders: 0},
    {name: "B0D9YW2776 - Auto - Discovery (paused)", spend: 6.72, sales: 0, orders: 0},
    {name: "B0D9YSNYBG - Product Targeting (paused)", spend: 4.41, sales: 0, orders: 0},
    {name: "B0D9YW2776 - Product Targeting (paused)", spend: 4.15, sales: 0, orders: 0},
    {name: "B0D9YSNYBG - Auto - Discovery (still enabled)", spend: 1.21, sales: 0, orders: 0},
    {name: "B0D9YVZFPT - Auto SI (new, barely serving)", spend: 1.06, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $15/day budget · down-only bidding · window ACOS 48% (Aug 15–16 will restate upward)",
    daily: [
      {date: "Aug 12", spend: 7.68, sales: 17.98, orders: 1, clicks: 3},
      {date: "Aug 13", spend: 9.68, sales: 35.96, orders: 2, clicks: 4},
      {date: "Aug 14", spend: 2.63, sales: 0, orders: 0, clicks: 2},
      {date: "Aug 15", spend: 8.80, sales: 17.98, orders: 1, clicks: 8},
      {date: "Aug 16", spend: 5.87, sales: 0, orders: 0, clicks: 5}
    ]
  },
  history: [
    {week: "Aug 12–16, 2026", spend: 195.71, sales: 881.84, orders: 12, acos: "22.2%"},
    {week: "Aug 9–13, 2026", spend: 322.27, sales: 1089.80, orders: 15, acos: "30%"}
  ],
  actions: [
    {done: true, text: "<strong>Bidding strategy → down-only</strong> on SaluSpa — done Aug 13."},
    {done: true, text: "<strong>Negative keywords added as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — done Aug 13, confirmed live Aug 17."},
    {done: true, text: "<strong>Exact-match winners at $1.40</strong> (“saluspa hot tub filter”, “saluspa inflatable spa filter”) — done Aug 13."},
    {done: true, text: "<strong>Broad bids to $1.30</strong> + generic “hot tub filter” Broad paused — done Aug 13, confirmed still paused Aug 17."},
    {done: true, text: "<strong>Budget $8 → $15/day</strong> on SaluSpa — done Aug 13."},
    {done: true, text: "<strong>6 zero-sale campaigns paused</strong> — all 6 confirmed PAUSED Aug 17; their residual $40.36 spend landed Aug 12–13 before the pauses took effect."},
    {done: true, text: "<strong>B0D9YW9DC1 Auto-Discovery</strong> — pause request withdrawn: it converted Aug 16 ($119.99 sale, 25% ACOS on the window). Keep enabled, keep watching."},
    {done: false, text: "<strong>Pause or fix B0D9YVZFPT SI trio</strong> — 3 new campaigns ($24/day combined budget) barely serving: $1.06 spend, near-zero impressions, no sales since 03-Jul launch. Check targeting or pause."},
    {done: false, text: "<strong>Consider pausing B0D9YSNYBG Auto-Discovery</strong> — still enabled, $1.21 zero-sale this window (it did convert once in the prior window; low priority)."},
    {done: false, text: "<strong>Reactivate the three B0DZ31B3RP campaigns when restocked</strong> — best performers in the account (11% ACOS), paused only for stockout. Restock date needed from Douae."},
    {done: false, text: "<strong>Todd authorizes SP-API access</strong> (one click, 5 min) — unlocks total sales, TACOS, margin and inventory on this page."}
  ],
  notes: [
    "🏆 Win of the week: the cleanup held — all 6 zero-sale campaigns are paused and account ACOS improved to 22.2% (from 30% last window). B0DBVZFBFV is carrying the account.",
    "🔍 Watch item: SaluSpa window ACOS is 48%, above the 40–45% line — but the last 2 days restate upward and CPC improved to $1.58 (from ~$2.84 pre-optimization). If Friday's restated read is still ~50%, trim broad bids.",
    "✅ Reversal: B0D9YW9DC1 Auto-Discovery, flagged Friday as the 7th zero-sale leak, converted Aug 16 — pause request withdrawn.",
    "⚠️ New: the three B0D9YVZFPT SI campaigns (launched 03-Jul, $24/day budget) are barely serving — targeting review or pause needed.",
    "⏳ Season note: products sell through late September — sell-through beats ACOS perfection from here on."
  ]
};
