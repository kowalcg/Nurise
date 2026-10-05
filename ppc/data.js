// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Sep 30 - Oct 4, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Monday, Oct 5, 2026",
  account: {
    spend: 38.51, sales: 125.86, orders: 5, clicks: 25,
    acos: "30.6%", acosClass: "warn", acosSub: "up from 28.7% last review - spend -7%, ad sales -12.5% (Oct 3-4 still restating)",
    spendSub: "~ $7.70/day · SaluSpa is the only campaign converting (98% of spend)", clicksSub: "5 of 33 campaigns enabled (SaluSpa + 4 zero-sale pause candidates)"
  },
  bestPerformer: "SaluSpa Filter (B08R11D8NJ) — $125.86 in sales from $37.61 spend (5 orders, 29.9% ACOS, was 26.3%). Settled days Sep 30-Oct 2 ran at 24.0% (3 orders / $21.60), right at break-even; Sep 30 and Oct 1 did NOT restate upward. Lagging Oct 3-4 sit at 44.5% (Oct 4 spent $13.99 on the $8 budget). Avg CPC still $1.64.",
  biggestLeak: "B0D9YVZFPT Auto SI — $0.90 spent, 2 clicks, zero sales, still ENABLED. Zero-sale spend fell to $0.90 = 2.3% of the account (was $3.51 = 8.5%). B0D9YSNYBG Manual Exact spent $0 (236 impressions, no clicks) but is still ENABLED.",
  campaigns: [
    {name: "SaluSpa Filter (B08R11D8NJ) — enabled, $8/day", spend: 37.61, sales: 125.86, orders: 5},
    {name: "B0D9YVZFPT - Auto SI (enabled, zero sales, pause candidate)", spend: 0.90, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · Down Only · window ACOS 29.9% (26.3% last review) · break-even ~24.5% · avg CPC $1.64 vs approved caps ~$0.90 Exact / ~$0.80 Broad",
    daily: [
      {date: "Sep 30", spend: 9.47, sales: 17.98, orders: 1, clicks: 6},
      {date: "Oct 1", spend: 6.57, sales: 17.98, orders: 1, clicks: 4},
      {date: "Oct 2", spend: 5.56, sales: 53.94, orders: 1, clicks: 4},
      {date: "Oct 3", spend: 2.02, sales: 0, orders: 0, clicks: 1},
      {date: "Oct 4", spend: 13.99, sales: 35.96, orders: 2, clicks: 8}
    ]
  },
  history: [
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
    {done: false, text: "<strong>Pause the four still-enabled zero-sale campaigns</strong> — B0D9YVZFPT Auto SI ($0.90 this window, 2 clicks, 0 sales), B0D9YSNYBG Manual Exact ($0, 236 impressions, 0 clicks), B0D9YVZFPT Discovery SI ($0, 117 impressions) and Sales SI (no activity). Open for a third review in a row; small dollars, but they should be off for the off-season."},
    {done: false, text: "<strong>End-of-season wind-down — decide this week</strong> — SaluSpa still took 5 orders in 5 days, so demand hasn't stopped. Keep the $8/day budget while orders keep coming (sell-through first), and agree the trigger for stepping down (e.g. under ~1 order/day for a week) plus what runs over the off-season."},
    {done: false, text: "<strong>SaluSpa bids still above the Aug 21 caps</strong> (Exact ~$0.90 / Broad ~$0.80): 'saluspa filter' Broad $2.06, 'saluspa inflatable spa filter' Exact $1.59, 'saluspa filters' $1.07, 'saluspa coronado filters' $0.99, 'spa filter vi' $0.92. Avg CPC $1.64 — resetting these is the cheapest way back under break-even without losing volume."},
    {done: false, text: "<strong>Negative Exact 'saluspa hot tub filter' conflict</strong> — the ENABLED Negative Exact still blocks the same term's Exact ($0.86) and Broad ($0.50) keywords. Unchanged since first flagged."},
    {done: true, text: "<strong>B0D9YW9DC1 Manual Exact paused</strong> — confirmed still PAUSED Oct 5, no spend this window."},
    {done: true, text: "<strong>B0D9YSNYBG Auto-Discovery paused</strong> (requested Aug 21) — confirmed still PAUSED Oct 5."},
    {done: true, text: "<strong>B0D9YW9DC1 Auto-Discovery paused</strong> — confirmed still PAUSED Oct 5."},
    {done: true, text: "<strong>B0DBVZFBFV Product Targeting + Auto-Discovery paused</strong> — both confirmed PAUSED Oct 5."},
    {done: true, text: "<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — confirmed Oct 5: all seven ENABLED, no drift."},
    {done: true, text: "<strong>Generic 'hot tub filter' Broad paused</strong> — confirmed Oct 5, no drift."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; all three campaigns confirmed PAUSED. Reactivation needs a real reorder decision from Todd on buying more units - not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "✅ Win of the week: zero-sale spend down to $0.90 (2.3% of the account, from 8.5%), and settled SaluSpa days Sep 30-Oct 2 ran at 24.0% ACOS, right at break-even. Oct 2 brought a $53.94 multi-unit order.",
    "⚠️ Window ACOS 29.9% on SaluSpa, over the ~24.5% break-even. Sep 30 (53%) and Oct 1 (37%) did not restate upward; Oct 3-4 (44.5%) are still lagging. Oct 4 spent $13.99 on the $8 budget (Amazon allows up to 2x on a single day).",
    "⚠️ Avg CPC still $1.64 — the 'saluspa filter' Broad bid ($2.06) and Inflatable Exact ($1.59) are well above the Aug 21 caps. Four zero-sale campaigns still enabled.",
    "📊 Account: $38.51 spend / $125.86 ad sales / 5 orders. Ad-attributed only; total sales and TACOS still need SP-API.",
    "🍂 Season is ending but orders are still coming (5 in 5 days). Keep the budget while it sells, reset bids now, and set a step-down trigger for the off-season."
  ]
};
