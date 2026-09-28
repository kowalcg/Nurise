// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Sep 23 - Sep 27, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Monday, Sep 28, 2026",
  account: {
    spend: 33.41, sales: 125.86, orders: 7, clicks: 28,
    acos: "26.5%", acosClass: "ok", acosSub: "down from 43.6% last review - spend +6%, ad sales +75%",
    spendSub: "~ $6.70/day · SaluSpa is still the only campaign converting", clicksSub: "5 of 33 campaigns enabled (SaluSpa + 4 zero-sale pause candidates)"
  },
  bestPerformer: "SaluSpa Filter (B08R11D8NJ) — $125.86 in sales from $29.31 spend (7 orders, 23.3% ACOS, was 39.1%). Back under the ~24.5% break-even. Same ~$1.47 avg CPC, but 7 orders from 20 clicks instead of 4 from 19. Sep 24 restated from 1 to 2 orders. Sep 26-27 may still restate upward.",
  biggestLeak: "B0D9YSNYBG Manual Exact — $2.17 spent, zero sales, still ENABLED (was $1.10 last window). Zero-sale spend $4.10 = 12% of the account ($1.09 of it is B0D9YW9DC1 on Sep 23, before its pause).",
  campaigns: [
    {name: "SaluSpa Filter (B08R11D8NJ) — enabled, $8/day", spend: 29.31, sales: 125.86, orders: 7},
    {name: "B0D9YSNYBG - Manual Exact (enabled, zero sales, pause candidate)", spend: 2.17, sales: 0, orders: 0},
    {name: "B0D9YW9DC1 - Manual Exact (PAUSED, spend Sep 23 before pause)", spend: 1.09, sales: 0, orders: 0},
    {name: "B0D9YVZFPT - Auto SI (enabled, zero sales, pause candidate)", spend: 0.84, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · Down Only · window ACOS 23.3% (39.1% last review) · break-even ~24.5% · avg CPC $1.47 vs approved caps ~$0.90 Exact / ~$0.80 Broad",
    daily: [
      {date: "Sep 23", spend: 0.88, sales: 17.98, orders: 1, clicks: 2},
      {date: "Sep 24", spend: 9.93, sales: 35.96, orders: 2, clicks: 6},
      {date: "Sep 25", spend: 5.41, sales: 17.98, orders: 1, clicks: 4},
      {date: "Sep 26", spend: 5.17, sales: 17.98, orders: 1, clicks: 3},
      {date: "Sep 27", spend: 7.92, sales: 35.96, orders: 2, clicks: 5}
    ]
  },
  history: [
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
    {done: false, text: "<strong>Pause the four still-enabled zero-sale campaigns</strong> — B0D9YSNYBG Manual Exact ($2.17 this window, 3 clicks, 0 sales), B0D9YVZFPT Auto SI ($0.84), Discovery SI ($0, 258 impressions, 0 clicks) and Sales SI (no activity). Their Auto-Discovery siblings are already paused."},
    {done: false, text: "<strong>End-of-season wind-down plan</strong> — the season ends late Sep / early Oct. Agree the date to step the SaluSpa $8/day budget down (suggested ~Oct 5), and whether any campaign keeps running over the off-season. Sep 27 impressions (821) show demand is still there this week."},
    {done: false, text: "<strong>SaluSpa bids still above the Aug 21 caps</strong> (Exact ~$0.90 / Broad ~$0.80): 'saluspa filter' Broad $2.06, 'saluspa inflatable spa filter' Exact $1.59, 'saluspa filters' $1.07, 'saluspa coronado filters' $0.99, 'spa filter vi' $0.92. Lower priority now: ACOS is back under break-even at 23.3%, and sell-through matters more than trimming bids in the last week of the season."},
    {done: false, text: "<strong>Negative Exact 'saluspa hot tub filter' conflict</strong> — the ENABLED Negative Exact still blocks the same term's Exact ($0.86) and Broad ($0.50) keywords. Unchanged since first flagged."},
    {done: true, text: "<strong>B0D9YW9DC1 Manual Exact paused</strong> — confirmed still PAUSED Sep 28 ($1.09 spent Sep 23 before the pause, nothing since)."},
    {done: true, text: "<strong>B0D9YSNYBG Auto-Discovery paused</strong> (requested Aug 21) — confirmed still PAUSED Sep 28."},
    {done: true, text: "<strong>B0D9YW9DC1 Auto-Discovery paused</strong> — confirmed still PAUSED Sep 28."},
    {done: true, text: "<strong>B0DBVZFBFV Product Targeting + Auto-Discovery paused</strong> — both confirmed PAUSED Sep 28."},
    {done: true, text: "<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — confirmed Sep 28: all seven ENABLED, no drift."},
    {done: true, text: "<strong>Generic 'hot tub filter' Broad paused</strong> — confirmed Sep 28, no drift."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; all three campaigns confirmed PAUSED. Reactivation needs a real reorder decision from Todd on buying more units - not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "✅ Win of the week: SaluSpa is back under break-even. 7 orders / $125.86 at 23.3% ACOS (was 4 orders / 39.1%). Blended account ACOS fell from 43.6% to 26.5%.",
    "📈 Demand hasn't died yet: SaluSpa impressions climbed back to 821 on Sep 27 (from 394-535 earlier in the window). Sep 27 spent $7.92 of the $8 budget, and Sep 24 ran over at $9.93.",
    "⚠️ B0D9YSNYBG Manual Exact doubled its zero-sale spend to $2.17. It and the three B0D9YVZFPT SI campaigns are still enabled with no sales.",
    "📊 Account: $33.41 spend / $125.86 ad sales / 7 orders. Ad-attributed only; total sales and TACOS still need SP-API.",
    "🍂 Last week of the season. Stock is ~700 units, so let SaluSpa run while it's under break-even and set the budget step-down date (~Oct 5)."
  ]
};
