// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Sep 27 - Oct 1, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Friday, Oct 2, 2026",
  account: {
    spend: 41.30, sales: 143.84, orders: 8, clicks: 30,
    acos: "28.7%", acosClass: "warn", acosSub: "up from 26.5% last review - spend +24%, ad sales +14% (Sep 30-Oct 1 still restating)",
    spendSub: "~ $8.26/day · SaluSpa is still the only campaign converting", clicksSub: "5 of 33 campaigns enabled (SaluSpa + 4 zero-sale pause candidates)"
  },
  bestPerformer: "SaluSpa Filter (B08R11D8NJ) — $143.84 in sales from $37.79 spend (8 orders, 26.3% ACOS, was 23.3%). Sep 27-29 (settled) ran at 20.2% ACOS (6 orders / $21.75); Sep 30 (53%) and Oct 1 (37%) are the two lagging days and usually restate upward. Avg CPC up to $1.64 from $1.47.",
  biggestLeak: "B0D9YSNYBG Manual Exact — $2.12 spent, zero sales, still ENABLED (all on Sep 27-28). B0D9YVZFPT Auto SI added $1.39 / 0 sales. Zero-sale spend $3.51 = 8.5% of the account (was $4.10 = 12%).",
  campaigns: [
    {name: "SaluSpa Filter (B08R11D8NJ) — enabled, $8/day", spend: 37.79, sales: 143.84, orders: 8},
    {name: "B0D9YSNYBG - Manual Exact (enabled, zero sales, pause candidate)", spend: 2.12, sales: 0, orders: 0},
    {name: "B0D9YVZFPT - Auto SI (enabled, zero sales, pause candidate)", spend: 1.39, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · Down Only · window ACOS 26.3% (23.3% last review) · break-even ~24.5% · avg CPC $1.64 vs approved caps ~$0.90 Exact / ~$0.80 Broad",
    daily: [
      {date: "Sep 27", spend: 7.92, sales: 35.96, orders: 2, clicks: 5},
      {date: "Sep 28", spend: 5.71, sales: 35.96, orders: 2, clicks: 3},
      {date: "Sep 29", spend: 8.12, sales: 35.96, orders: 2, clicks: 5},
      {date: "Sep 30", spend: 9.47, sales: 17.98, orders: 1, clicks: 6},
      {date: "Oct 1", spend: 6.57, sales: 17.98, orders: 1, clicks: 4}
    ]
  },
  history: [
    {week: "Sep 27 - Oct 1, 2026", spend: 41.30, sales: 143.84, orders: 8, acos: "28.7%"},
    {week: "Sep 23 - Sep 27, 2026", spend: 33.41, sales: 125.86, orders: 7, acos: "26.5%"},
    {week: "Sep 20 - Sep 24, 2026", spend: 31.39, sales: 71.92, orders: 4, acos: "43.6%"},
    {week: "Sep 16 - Sep 20, 2026", spend: 22.99, sales: 71.92, orders: 4, acos: "32.0%"},
    {week: "Sep 13 - Sep 17, 2026", spend: 28.52, sales: 89.90, orders: 5, acos: "31.7%"},
    {week: "Sep 9 - Sep 13, 2026", spend: 27.42, sales: 35.96, orders: 2, acos: "76.3%"},
    {week: "Sep 6 - Sep 10, 2026", spend: 45.84, sales: 135.95, orders: 3, acos: "33.7%"},
    {week: "Sep 2 - Sep 6, 2026", spend: 135.66, sales: 1129.77, orders: 15, acos: "12.0%"},
    {week: "Aug 30 - Sep 3, 2026", spend: 157.66, sales: 1147.83, orders: 12, acos: "13.7%"},
    {week: "Aug 26–30, 2026", spend: 140.46, sales: 669.85, orders: 8, acos: "21.0%"},
    {week: "Aug 23–27, 2026", spend: 143.85, sales: 621.88, orders: 9, acos: "23.1%"},
    {week: "Aug 19–23, 2026", spend: 154.57, sales: 1055.79, orders: 15, acos: "14.6%"},
    {week: "Aug 16–20, 2026", spend: 163.83, sales: 1309.80, orders: 16, acos: "12.5%"},
    {week: "Aug 12–16, 2026", spend: 195.71, sales: 881.84, orders: 12, acos: "22.2%"},
    {week: "Aug 9–13, 2026", spend: 322.27, sales: 1089.80, orders: 15, acos: "30%"}
  ],
  actions: [
    {done: false, text: "<strong>Pause the four still-enabled zero-sale campaigns</strong> — B0D9YSNYBG Manual Exact ($2.12 this window, 3 clicks, 0 sales), B0D9YVZFPT Auto SI ($1.39, 4 clicks), Discovery SI ($0, 334 impressions, 0 clicks) and Sales SI (no activity). Open for a second review in a row; their Auto-Discovery siblings are already paused."},
    {done: false, text: "<strong>End-of-season wind-down — decide this week</strong> — the season is ending now. Agree the date to step the SaluSpa $8/day budget down (suggested Mon Oct 5) and what, if anything, runs over the off-season. SaluSpa still spent the full budget every day this window (over it on Sep 29-30), so demand hasn't stopped yet."},
    {done: false, text: "<strong>SaluSpa bids still above the Aug 21 caps</strong> (Exact ~$0.90 / Broad ~$0.80): 'saluspa filter' Broad $2.06, 'saluspa inflatable spa filter' Exact $1.59, 'saluspa filters' $1.07, 'saluspa coronado filters' $0.99, 'spa filter vi' $0.92. Avg CPC rose to $1.64. Easiest moment to reset them is at the budget step-down."},
    {done: false, text: "<strong>Negative Exact 'saluspa hot tub filter' conflict</strong> — the ENABLED Negative Exact still blocks the same term's Exact ($0.86) and Broad ($0.50) keywords. Unchanged since first flagged."},
    {done: true, text: "<strong>B0D9YW9DC1 Manual Exact paused</strong> — confirmed still PAUSED Oct 2, no spend this window."},
    {done: true, text: "<strong>B0D9YSNYBG Auto-Discovery paused</strong> (requested Aug 21) — confirmed still PAUSED Oct 2."},
    {done: true, text: "<strong>B0D9YW9DC1 Auto-Discovery paused</strong> — confirmed still PAUSED Oct 2."},
    {done: true, text: "<strong>B0DBVZFBFV Product Targeting + Auto-Discovery paused</strong> — both confirmed PAUSED Oct 2."},
    {done: true, text: "<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — confirmed Oct 2: all seven ENABLED, no drift."},
    {done: true, text: "<strong>Generic 'hot tub filter' Broad paused</strong> — confirmed Oct 2, no drift."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; all three campaigns confirmed PAUSED. Reactivation needs a real reorder decision from Todd on buying more units - not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "✅ Win of the week: 8 SaluSpa orders, the most in a review window since early September. Sep 27-29 (fully settled) ran at 20.2% ACOS, under break-even.",
    "⚠️ Window ACOS 26.3% is just over the ~24.5% break-even, driven by Sep 30 (53%) and Oct 1 (37%). Those two days usually restate upward; check again Monday.",
    "⚠️ Avg CPC rose to $1.64 (from $1.47). B0D9YSNYBG Manual Exact and B0D9YVZFPT Auto SI spent $3.51 with no sales; four zero-sale campaigns are still enabled.",
    "📊 Account: $41.30 spend / $143.84 ad sales / 8 orders. Ad-attributed only; total sales and TACOS still need SP-API.",
    "🍂 Season is ending. Set the SaluSpa budget step-down (suggested Oct 5) and reset bids to the Aug 21 caps at the same time."
  ]
};
