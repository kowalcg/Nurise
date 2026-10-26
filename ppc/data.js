// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Oct 21 - Oct 25, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Monday, Oct 26, 2026",
  account: {
    spend: 20.27, sales: 71.92, orders: 3, clicks: 16,
    acos: "28.2%", acosClass: "warn", acosSub: "up from 16.0% last review, which included one $129.99 order. All sales this window are SaluSpa, which itself improved to 23.8%",
    spendSub: "~ $4.05/day · SaluSpa is 85% of spend", clicksSub: "5 of 33 campaigns enabled (SaluSpa + 4 B0D9Y campaigns)"
  },
  bestPerformer: "SaluSpa Filter (B08R11D8NJ) — $71.92 ad sales (3 orders, 4 units) on $17.15 spend, 23.8% ACOS. Down from 44.5% last review and under the ~24.5% break-even for the first time since early October.",
  biggestLeak: "B0D9YSNYBG Manual Exact — $1.94, 3 clicks, zero sales this window (but sold $129.99 on Oct 20, so it stays on watch). The chronic leak is B0D9YVZFPT Auto SI: $1.18, zero sales, 4th window in a row. Zero-sale spend $3.12 = 15.4% of the account (was 9.1%).",
  campaigns: [
    {name: "SaluSpa Filter (B08R11D8NJ) — enabled, $8/day", spend: 17.15, sales: 71.92, orders: 3},
    {name: "B0D9YSNYBG - Manual Exact — enabled, $5/day (watch: $129.99 sale Oct 20)", spend: 1.94, sales: 0, orders: 0},
    {name: "B0D9YVZFPT - Auto SI — enabled, $8/day (4th window with no sale: pause)", spend: 1.18, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · Down Only · window ACOS 23.8% (44.5% last review) · break-even ~24.5% · avg CPC $1.72 vs approved caps ~$0.90 Exact / ~$0.80 Broad · bids unchanged",
    daily: [
      {date: "Oct 21", spend: 4.12, sales: 0, orders: 0, clicks: 2},
      {date: "Oct 22", spend: 1.98, sales: 17.98, orders: 1, clicks: 1},
      {date: "Oct 23", spend: 0, sales: 0, orders: 0, clicks: 0},
      {date: "Oct 24", spend: 3.98, sales: 17.98, orders: 1, clicks: 2},
      {date: "Oct 25", spend: 7.07, sales: 35.96, orders: 1, clicks: 5}
    ]
  },
  history: [
    {week: "Oct 21 - Oct 25, 2026", spend: 20.27, sales: 71.92, orders: 3, acos: "28.2%"},
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
    {done: false, text: "<strong>Pause B0D9YVZFPT Auto SI</strong> — $1.18, 3 clicks, 0 sales this window; 4th window in a row with no sale since the $129.99 order on Oct 10."},
    {done: false, text: "<strong>Pause B0D9YVZFPT Discovery SI + Sales SI</strong> — zero sales; Discovery SI $0 on 26 impressions, Sales SI no activity. Both still ENABLED at $8/day."},
    {done: false, text: "<strong>B0D9YSNYBG Manual Exact: watch</strong> — $1.94, 3 clicks, 0 sales Oct 21-25, after the $129.99 order on Oct 20. Not a pause candidate yet; re-check next review."},
    {done: true, text: "<strong>Off-season step-down withdrawn</strong> — SaluSpa came in at 23.8% ACOS (under ~24.5% break-even). Keep $8/day for end-of-season sell-through; trim the outlier bid instead."},
    {done: false, text: "<strong>SaluSpa bids still above the Aug 21 caps</strong> (Exact ~$0.90 / Broad ~$0.80), unchanged: 'saluspa filter' Broad $2.06, 'saluspa inflatable spa filter' Exact $1.59, 'saluspa filters' $1.07, 'saluspa coronado filters' $0.99, 'spa filter vi' $0.92. Avg CPC $1.72."},
    {done: false, text: "<strong>Negative Exact 'saluspa hot tub filter' conflict</strong> — the ENABLED Negative Exact still blocks the same term's Exact ($0.86) and Broad ($0.50) keywords. Unchanged since first flagged."},
    {done: true, text: "<strong>B0D9YSNYBG Auto-Discovery paused</strong> (requested Aug 21) — confirmed still PAUSED Oct 26."},
    {done: true, text: "<strong>B0D9YW9DC1 Manual Exact + Auto-Discovery paused</strong> — confirmed PAUSED Oct 26."},
    {done: true, text: "<strong>B0DBVZFBFV Product Targeting + Auto-Discovery paused</strong> — both confirmed PAUSED Oct 26."},
    {done: true, text: "<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — confirmed Oct 26: all seven ENABLED, no drift."},
    {done: true, text: "<strong>Generic 'hot tub filter' Broad paused</strong> — confirmed Oct 26, no drift."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; all three campaigns confirmed PAUSED. Reactivation needs a real reorder decision from Todd on buying more units - not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "✅ Win of the week: SaluSpa at 23.8% ACOS ($17.15 spend → $71.92, 3 orders / 4 units), down from 44.5% and under break-even for the first time since early October.",
    "⚠️ Oct 24-25 are still restating (Amazon ~2-day lag). Settled days Oct 21-23 ran 33.9%, so the 23.8% leans on the most recent two days.",
    "⚠️ Avg CPC unchanged at $1.72 — the gain is conversion, not cheaper clicks. 'saluspa filter' Broad at $2.06 is the outlier to trim.",
    "⚠️ Zero-sale spend $3.12 (15.4%): B0D9YVZFPT Auto SI (4th window no sale) plus B0D9YSNYBG Manual Exact (on watch after Oct 20's $129.99 order).",
    "🍂 Off-season: sell-through beats ACOS perfection — keep SaluSpa at $8/day while it holds break-even. Ad-attributed only; TACOS needs SP-API (awaiting Amazon's approval)."
  ]
};
