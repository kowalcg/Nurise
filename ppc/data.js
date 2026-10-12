// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Oct 7 - Oct 11, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Monday, Oct 12, 2026",
  account: {
    spend: 28.89, sales: 201.91, orders: 5, clicks: 23,
    acos: "14.3%", acosClass: "good", acosSub: "down from 35.6% last review - but one $129.99 order (B0D9YVZFPT Auto SI) drives it; excluding that order the account ran at 40%",
    spendSub: "~ $5.78/day · SaluSpa is 86% of spend", clicksSub: "5 of 33 campaigns enabled (SaluSpa + B0D9YVZFPT Auto SI converting + 3 zero-sale pause candidates)"
  },
  bestPerformer: "By sales: B0D9YVZFPT Auto SI — $129.99 from just $1.44 of spend (1 order, 1.1% ACOS) on Oct 10, its first sale in the window after being a pause candidate for 4 reviews. Keep it running at its low spend. SaluSpa Filter (B08R11D8NJ) brought $71.92 from $24.73 (4 orders, 34.4% ACOS vs ~24.5% break-even).",
  biggestLeak: "B0D9YSNYBG Manual Exact — $2.72 spent, 4 clicks, zero sales, still ENABLED, and its spend is climbing ($0.47 -> $0.75 -> $1.50/day). Zero-sale spend $2.72 = 9.4% of the account (was $0.85 = 3.3%). Discovery SI ($0, 61 impressions) and Sales SI (no activity) remain ENABLED.",
  campaigns: [
    {name: "SaluSpa Filter (B08R11D8NJ) — enabled, $8/day", spend: 24.73, sales: 71.92, orders: 4},
    {name: "B0D9YSNYBG - Manual Exact — enabled, zero sales (pause)", spend: 2.72, sales: 0, orders: 0},
    {name: "B0D9YVZFPT - Auto SI — enabled, $8/day", spend: 1.44, sales: 129.99, orders: 1}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · Down Only · window ACOS 34.4% (34.5% last review) · break-even ~24.5% · avg CPC $1.65 vs approved caps ~$0.90 Exact / ~$0.80 Broad · Oct 11 spent $12.69 on an $8 budget",
    daily: [
      {date: "Oct 7", spend: 3.75, sales: 0, orders: 0, clicks: 2},
      {date: "Oct 8", spend: 2.12, sales: 35.96, orders: 2, clicks: 2},
      {date: "Oct 9", spend: 0, sales: 0, orders: 0, clicks: 0},
      {date: "Oct 10", spend: 6.17, sales: 0, orders: 0, clicks: 4},
      {date: "Oct 11", spend: 12.69, sales: 35.96, orders: 2, clicks: 7}
    ]
  },
  history: [
    {week: "Oct 7 - Oct 11, 2026", spend: 28.89, sales: 201.91, orders: 5, acos: "14.3%"},
    {week: "Oct 4 - Oct 8, 2026", spend: 25.63, sales: 71.92, orders: 4, acos: "35.6%"},
    {week: "Sep 30 - Oct 4, 2026", spend: 38.51, sales: 125.86, orders: 5, acos: "30.6%"},
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
    {done: false, text: "<strong>Pause B0D9YSNYBG Manual Exact now</strong> — $2.72 this window, 4 clicks, 0 sales, spend rising daily. Open for a fifth review in a row."},
    {done: false, text: "<strong>Pause B0D9YVZFPT Discovery SI + Sales SI</strong> — zero sales; Discovery SI $0 on 61 impressions, Sales SI no activity. Low cost, but still enabled with no return."},
    {done: true, text: "<strong>Keep B0D9YVZFPT Auto SI</strong> — removed from the pause list: $129.99 order on $1.44 of spend (Oct 10). Watch it, no change needed."},
    {done: false, text: "<strong>Off-season step-down</strong> — SaluSpa still at $8/day (Oct 11 spent $12.69). Recommended: drop to ~$4/day and keep it running for low-cost sell-through rather than switching it off."},
    {done: false, text: "<strong>SaluSpa bids still above the Aug 21 caps</strong> (Exact ~$0.90 / Broad ~$0.80), unchanged since last review: 'saluspa filter' Broad $2.06, 'saluspa inflatable spa filter' Exact $1.59, 'saluspa filters' $1.07, 'saluspa coronado filters' $0.99, 'spa filter vi' $0.92. Avg CPC rose to $1.65 (from $1.55)."},
    {done: false, text: "<strong>Negative Exact 'saluspa hot tub filter' conflict</strong> — the ENABLED Negative Exact still blocks the same term's Exact ($0.86) and Broad ($0.50) keywords. Unchanged since first flagged."},
    {done: true, text: "<strong>B0D9YSNYBG Auto-Discovery paused</strong> (requested Aug 21) — confirmed still PAUSED Oct 12."},
    {done: true, text: "<strong>B0D9YW9DC1 Manual Exact + Auto-Discovery paused</strong> — confirmed PAUSED Oct 12."},
    {done: true, text: "<strong>B0DBVZFBFV Product Targeting + Auto-Discovery paused</strong> — both confirmed PAUSED Oct 12."},
    {done: true, text: "<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — confirmed Oct 12: all seven ENABLED, no drift."},
    {done: true, text: "<strong>Generic 'hot tub filter' Broad paused</strong> — confirmed Oct 12, no drift."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; all three campaigns confirmed PAUSED. Reactivation needs a real reorder decision from Todd on buying more units - not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "✅ Win of the week: B0D9YVZFPT Auto SI turned $1.44 of spend into a $129.99 order (1.1% ACOS), lifting the account to $201.91 ad sales and 14.3% ACOS.",
    "⚠️ SaluSpa window ACOS 34.4% (flat vs 34.5%), still above the ~24.5% break-even. Settled Oct 7-9 ran at 16.3% ($5.87 for $35.96); Oct 10-11 ($18.86 spend) will restate upward.",
    "⚠️ Oct 11 SaluSpa spent $12.69 on an $8 budget (7 clicks at $1.81). Avg CPC up to $1.65; bids still above the Aug 21 caps.",
    "⚠️ B0D9YSNYBG Manual Exact leak grew to $2.72 (9.4% of spend) - fifth review asking for the pause.",
    "🍂 Off-season: step SaluSpa to ~$4/day with bids at the caps for low-cost sell-through. Ad-attributed only; TACOS needs SP-API (awaiting Amazon's approval)."
  ]
};
