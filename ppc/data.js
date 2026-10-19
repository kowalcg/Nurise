// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Oct 14 - Oct 18, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Monday, Oct 19, 2026",
  account: {
    spend: 24.77, sales: 35.96, orders: 2, clicks: 21,
    acos: "68.9%", acosClass: "bad", acosSub: "up from 49.8% last review. Both orders this window came from SaluSpa; Oct 17-18 may still restate upward",
    spendSub: "~ $4.95/day · SaluSpa is 86% of spend", clicksSub: "5 of 33 campaigns enabled (SaluSpa + 4 zero-sale B0D9Y campaigns)"
  },
  bestPerformer: "SaluSpa Filter (B08R11D8NJ) — the only converting campaign: $35.96 from $21.40 (2 orders, 59.5% ACOS vs ~24.5% break-even, loss-making). Oct 14 ($3.19 for $17.98, 18%) was the best day; Oct 17 spent $8.36 (over the $8 budget) for 0 sales.",
  biggestLeak: "B0D9YSNYBG Manual Exact — $1.65, 3 clicks, zero sales, still ENABLED (7th review asking for the pause). B0D9YVZFPT Auto SI $1.34 / 0 (2nd window in a row with no sale) and Discovery SI $0.38 / 0. Zero-sale spend $3.37 = 13.6% of the account (was 16.4%).",
  campaigns: [
    {name: "SaluSpa Filter (B08R11D8NJ) — enabled, $8/day", spend: 21.40, sales: 35.96, orders: 2},
    {name: "B0D9YSNYBG - Manual Exact — enabled, zero sales (pause)", spend: 1.65, sales: 0, orders: 0},
    {name: "B0D9YVZFPT - Auto SI — enabled, $8/day (2nd window with no sale; $129.99 on Oct 10)", spend: 1.34, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · Down Only · window ACOS 59.5% (41.6% last review) · break-even ~24.5% · avg CPC $1.53 vs approved caps ~$0.90 Exact / ~$0.80 Broad · bids unchanged",
    daily: [
      {date: "Oct 14", spend: 3.19, sales: 17.98, orders: 1, clicks: 2},
      {date: "Oct 15", spend: 2.15, sales: 0, orders: 0, clicks: 2},
      {date: "Oct 16", spend: 2.06, sales: 0, orders: 0, clicks: 1},
      {date: "Oct 17", spend: 8.36, sales: 0, orders: 0, clicks: 5},
      {date: "Oct 18", spend: 5.64, sales: 17.98, orders: 1, clicks: 4}
    ]
  },
  history: [
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
    {done: false, text: "<strong>Pause B0D9YSNYBG Manual Exact now</strong> — $1.65 this window, 3 clicks, 0 sales. Open for a seventh review in a row."},
    {done: false, text: "<strong>Pause B0D9YVZFPT Discovery SI + Sales SI</strong> — zero sales; Discovery SI $0.38 on 63 impressions, Sales SI no activity."},
    {done: false, text: "<strong>B0D9YVZFPT Auto SI: cut $8/day to ~$3/day</strong> — $1.34 with no sale this window and $1.26 / 0 the window before (two in a row). Still net positive from the $129.99 order on Oct 10, so trim rather than pause."},
    {done: false, text: "<strong>Off-season step-down</strong> — SaluSpa still at $8/day and hit it on Oct 17 ($8.36, 0 sales). Window ACOS 59.5% vs ~24.5% break-even. Recommended: drop to ~$4/day and keep it running for low-cost sell-through."},
    {done: false, text: "<strong>SaluSpa bids still above the Aug 21 caps</strong> (Exact ~$0.90 / Broad ~$0.80), unchanged: 'saluspa filter' Broad $2.06, 'saluspa inflatable spa filter' Exact $1.59, 'saluspa filters' $1.07, 'saluspa coronado filters' $0.99, 'spa filter vi' $0.92. Avg CPC $1.53."},
    {done: false, text: "<strong>Negative Exact 'saluspa hot tub filter' conflict</strong> — the ENABLED Negative Exact still blocks the same term's Exact ($0.86) and Broad ($0.50) keywords. Unchanged since first flagged."},
    {done: true, text: "<strong>B0D9YSNYBG Auto-Discovery paused</strong> (requested Aug 21) — confirmed still PAUSED Oct 19."},
    {done: true, text: "<strong>B0D9YW9DC1 Manual Exact + Auto-Discovery paused</strong> — confirmed PAUSED Oct 19."},
    {done: true, text: "<strong>B0DBVZFBFV Product Targeting + Auto-Discovery paused</strong> — both confirmed PAUSED Oct 19."},
    {done: true, text: "<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — confirmed Oct 19: all seven ENABLED, no drift."},
    {done: true, text: "<strong>Generic 'hot tub filter' Broad paused</strong> — confirmed Oct 19, no drift."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; all three campaigns confirmed PAUSED. Reactivation needs a real reorder decision from Todd on buying more units - not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "✅ Win of the week: SaluSpa Oct 14 — 1 order ($17.98) on $3.19 (18% ACOS), and Oct 18 added another order at 31%.",
    "⚠️ SaluSpa window ACOS 59.5% (up from 41.6%) vs ~24.5% break-even. Oct 17 hit the $8 budget ($8.36, 5 clicks, 0 sales). Oct 14-15 did not restate upward.",
    "⚠️ Zero-sale spend $3.37 (13.6% of the account): Manual Exact $1.65 (7th review asking for the pause), Auto SI $1.34 (2nd window with no sale), Discovery SI $0.38.",
    "🍂 Off-season: step SaluSpa to ~$4/day with bids at the caps for low-cost sell-through. Ad-attributed only; TACOS needs SP-API (awaiting Amazon's approval)."
  ]
};
