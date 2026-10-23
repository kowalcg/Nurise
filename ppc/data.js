// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Oct 18 - Oct 22, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Friday, Oct 23, 2026",
  account: {
    spend: 29.40, sales: 183.93, orders: 4, clicks: 25,
    acos: "16.0%", acosClass: "good", acosSub: "down from 68.9% last review, but $129.99 of the $183.93 is one B0D9YSNYBG order. SaluSpa alone ran 44.5%",
    spendSub: "~ $5.88/day · SaluSpa is 82% of spend", clicksSub: "5 of 33 campaigns enabled (SaluSpa + 4 B0D9Y campaigns)"
  },
  bestPerformer: "B0D9YSNYBG Manual Exact — 1 order for $129.99 on Oct 20 from $2.70 spend (2.1% ACOS). It was on the pause list for 7 reviews; this sale takes it off. One order only, so keep it on watch rather than scale it.",
  biggestLeak: "B0D9YVZFPT Auto SI — $2.69, 6 clicks, zero sales, still ENABLED. Third window in a row with no sale (last sale $129.99 on Oct 10). Zero-sale spend $2.69 = 9.1% of the account (was 13.6%).",
  campaigns: [
    {name: "SaluSpa Filter (B08R11D8NJ) — enabled, $8/day", spend: 24.01, sales: 53.94, orders: 3},
    {name: "B0D9YSNYBG - Manual Exact — enabled, $5/day ($129.99 order Oct 20)", spend: 2.70, sales: 129.99, orders: 1},
    {name: "B0D9YVZFPT - Auto SI — enabled, $8/day (3rd window with no sale: pause)", spend: 2.69, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · Down Only · window ACOS 44.5% (59.5% last review) · break-even ~24.5% · avg CPC $1.72 vs approved caps ~$0.90 Exact / ~$0.80 Broad · bids unchanged",
    daily: [
      {date: "Oct 18", spend: 5.64, sales: 17.98, orders: 1, clicks: 4},
      {date: "Oct 19", spend: 10.33, sales: 17.98, orders: 1, clicks: 6},
      {date: "Oct 20", spend: 1.94, sales: 0, orders: 0, clicks: 1},
      {date: "Oct 21", spend: 4.12, sales: 0, orders: 0, clicks: 2},
      {date: "Oct 22", spend: 1.98, sales: 17.98, orders: 1, clicks: 1}
    ]
  },
  history: [
    {week: "Oct 18 - Oct 22, 2026", spend: 29.40, sales: 183.93, orders: 4, acos: "16.0%"},
    {week: "Oct 14 - Oct 18, 2026", spend: 24.77, sales: 35.96, orders: 2, acos: "68.9%"},
    {week: "Oct 11 - Oct 15, 2026", spend: 26.87, sales: 53.94, orders: 3, acos: "49.8%"},
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
    {done: false, text: "<strong>Pause B0D9YVZFPT Auto SI</strong> — $2.69, 6 clicks, 0 sales this window; third window in a row with no sale since the $129.99 order on Oct 10."},
    {done: false, text: "<strong>Pause B0D9YVZFPT Discovery SI + Sales SI</strong> — zero sales; Discovery SI $0 on 33 impressions, Sales SI no activity. Both still ENABLED at $8/day."},
    {done: true, text: "<strong>B0D9YSNYBG Manual Exact: pause request withdrawn</strong> — 1 order for $129.99 on Oct 20 from $2.70 spend (2.1% ACOS). Keep running at $5/day; re-check next review."},
    {done: false, text: "<strong>Off-season step-down</strong> — SaluSpa still at $8/day and overspent it on Oct 19 ($10.33, 6 clicks, 1 sale). Window ACOS 44.5% vs ~24.5% break-even. Recommended: drop to ~$4/day and keep it running for low-cost sell-through."},
    {done: false, text: "<strong>SaluSpa bids still above the Aug 21 caps</strong> (Exact ~$0.90 / Broad ~$0.80), unchanged: 'saluspa filter' Broad $2.06, 'saluspa inflatable spa filter' Exact $1.59, 'saluspa filters' $1.07, 'saluspa coronado filters' $0.99, 'spa filter vi' $0.92. Avg CPC $1.72 (was $1.53)."},
    {done: false, text: "<strong>Negative Exact 'saluspa hot tub filter' conflict</strong> — the ENABLED Negative Exact still blocks the same term's Exact ($0.86) and Broad ($0.50) keywords. Unchanged since first flagged."},
    {done: true, text: "<strong>B0D9YSNYBG Auto-Discovery paused</strong> (requested Aug 21) — confirmed still PAUSED Oct 23."},
    {done: true, text: "<strong>B0D9YW9DC1 Manual Exact + Auto-Discovery paused</strong> — confirmed PAUSED Oct 23."},
    {done: true, text: "<strong>B0DBVZFBFV Product Targeting + Auto-Discovery paused</strong> — both confirmed PAUSED Oct 23."},
    {done: true, text: "<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — confirmed Oct 23: all seven ENABLED, no drift."},
    {done: true, text: "<strong>Generic 'hot tub filter' Broad paused</strong> — confirmed Oct 23, no drift."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; all three campaigns confirmed PAUSED. Reactivation needs a real reorder decision from Todd on buying more units - not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "✅ Win of the week: B0D9YSNYBG Manual Exact sold a $129.99 order on Oct 20 from $2.70 spend, after seven reviews with no sale. Account ACOS 16.0%.",
    "✅ SaluSpa improved to 44.5% (from 59.5%), 3 orders. Oct 17 restated upward to 1 sale ($8.36 for $17.98, 46%). Oct 22: 1 order on $1.98 (11%).",
    "⚠️ SaluSpa still ~20 points above its ~24.5% break-even; Oct 19 overspent the $8 budget ($10.33). Avg CPC $1.72, bids still above the Aug 21 caps.",
    "⚠️ Zero-sale spend $2.69 (9.1%), all B0D9YVZFPT Auto SI — third window with no sale, now a pause candidate.",
    "🍂 Off-season: step SaluSpa to ~$4/day with bids at the caps for low-cost sell-through. Ad-attributed only; TACOS needs SP-API (awaiting Amazon's approval)."
  ]
};
