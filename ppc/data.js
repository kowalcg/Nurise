// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Oct 4 - Oct 8, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Friday, Oct 9, 2026",
  account: {
    spend: 25.63, sales: 71.92, orders: 4, clicks: 18,
    acos: "35.6%", acosClass: "warn", acosSub: "up from 30.6% last review - spend -33%, ad sales -43% (end of season; Oct 7-8 still restating)",
    spendSub: "~ $5.13/day · SaluSpa is the only campaign converting (97% of spend)", clicksSub: "5 of 33 campaigns enabled (SaluSpa + 4 zero-sale pause candidates)"
  },
  bestPerformer: "SaluSpa Filter (B08R11D8NJ) — $71.92 in sales from $24.78 spend (4 orders, 34.5% ACOS, was 29.9%) vs ~24.5% break-even. Oct 4 settled at 39% (did not restate upward). Oct 5-7 had zero orders - the first 3-day gap of the season - then Oct 8 brought 2 orders for $2.12. Avg CPC $1.55 (was $1.64), still above the Aug 21 caps.",
  biggestLeak: "B0D9YSNYBG Manual Exact — $0.47 spent, 1 click, zero sales, still ENABLED. B0D9YVZFPT Auto SI added $0.38 (1 click, 0 sales). Zero-sale spend $0.85 = 3.3% of the account (was $0.90 = 2.3%). Discovery SI and Sales SI spent $0 but remain ENABLED.",
  campaigns: [
    {name: "SaluSpa Filter (B08R11D8NJ) — enabled, $8/day", spend: 24.78, sales: 71.92, orders: 4}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · Down Only · window ACOS 34.5% (29.9% last review) · break-even ~24.5% · avg CPC $1.55 vs approved caps ~$0.90 Exact / ~$0.80 Broad",
    daily: [
      {date: "Oct 4", spend: 13.99, sales: 35.96, orders: 2, clicks: 8},
      {date: "Oct 5", spend: 2.75, sales: 0, orders: 0, clicks: 2},
      {date: "Oct 6", spend: 2.17, sales: 0, orders: 0, clicks: 2},
      {date: "Oct 7", spend: 3.75, sales: 0, orders: 0, clicks: 2},
      {date: "Oct 8", spend: 2.12, sales: 35.96, orders: 2, clicks: 2}
    ]
  },
  history: [
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
    {done: false, text: "<strong>Pause the four still-enabled zero-sale campaigns</strong> — B0D9YSNYBG Manual Exact ($0.47 this window, 1 click, 0 sales), B0D9YVZFPT Auto SI ($0.38, 1 click, 0 sales), B0D9YVZFPT Discovery SI ($0, 77 impressions) and Sales SI (no activity). Open for a fourth review in a row."},
    {done: false, text: "<strong>Off-season step-down — now</strong> — SaluSpa orders slowed to 4 in 5 days with a 3-day zero run (Oct 5-7). Recommended: drop the budget from $8 to ~$4/day and keep it running at low cost for remaining sell-through, rather than switching it off."},
    {done: false, text: "<strong>SaluSpa bids still above the Aug 21 caps</strong> (Exact ~$0.90 / Broad ~$0.80): 'saluspa filter' Broad $2.06, 'saluspa inflatable spa filter' Exact $1.59, 'saluspa filters' $1.07, 'saluspa coronado filters' $0.99, 'spa filter vi' $0.92. Avg CPC $1.55. At 34.5% ACOS each ad-driven filter sale loses ~$1.80; resetting bids is the main lever back under break-even."},
    {done: false, text: "<strong>Negative Exact 'saluspa hot tub filter' conflict</strong> — the ENABLED Negative Exact still blocks the same term's Exact ($0.86) and Broad ($0.50) keywords. Unchanged since first flagged."},
    {done: true, text: "<strong>B0D9YW9DC1 Manual Exact paused</strong> — confirmed still PAUSED Oct 9, no spend this window."},
    {done: true, text: "<strong>B0D9YSNYBG Auto-Discovery paused</strong> (requested Aug 21) — confirmed still PAUSED Oct 9."},
    {done: true, text: "<strong>B0D9YW9DC1 Auto-Discovery paused</strong> — confirmed still PAUSED Oct 9."},
    {done: true, text: "<strong>B0DBVZFBFV Product Targeting + Auto-Discovery paused</strong> — both confirmed PAUSED Oct 9."},
    {done: true, text: "<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — confirmed Oct 9: all seven ENABLED, no drift."},
    {done: true, text: "<strong>Generic 'hot tub filter' Broad paused</strong> — confirmed Oct 9, no drift."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; all three campaigns confirmed PAUSED. Reactivation needs a real reorder decision from Todd on buying more units - not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "✅ Win of the week: Oct 8 brought 2 SaluSpa orders ($35.96) for just $2.12 of spend, and avg CPC eased to $1.55 from $1.64. Zero-sale spend stayed under $1 ($0.85).",
    "⚠️ SaluSpa window ACOS 34.5%, above the ~24.5% break-even. Oct 4 settled at 39% (no upward restatement); settled Oct 4-6 combined ran at 52.6%. Oct 5-7 had no orders at all.",
    "⚠️ Clicks have dried up: ~1,000-1,700 impressions/day but only 2 clicks/day (CTR ~0.15%). Bids are still above the Aug 21 caps and four zero-sale campaigns remain enabled (4th review).",
    "📊 Account: $25.63 spend / $71.92 ad sales / 4 orders, 35.6% ACOS. Ad-attributed only; total sales and TACOS still need SP-API (awaiting Amazon's approval).",
    "🍂 Season has ended: volume down ~40% week on week. Step SaluSpa down to ~$4/day with bids at the caps for low-cost off-season sell-through."
  ]
};
