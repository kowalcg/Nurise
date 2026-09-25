// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Sep 20 - Sep 24, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Friday, Sep 25, 2026",
  account: {
    spend: 31.39, sales: 71.92, orders: 4, clicks: 27,
    acos: "43.6%", acosClass: "bad", acosSub: "up from 32.0% last review - spend +37%, ad sales flat",
    spendSub: "~ $6.30/day · SaluSpa is still the only campaign converting", clicksSub: "5 of 33 campaigns enabled (B0D9YW9DC1 Manual Exact now paused)"
  },
  bestPerformer: "SaluSpa Filter (B08R11D8NJ) — $71.92 in sales from $28.14 spend (4 orders, 39.1% ACOS, was 26.5%). Well above the ~24.5% break-even. Avg CPC $1.48 is unchanged, but Sep 21 ($9.13) and Sep 24 ($9.93) ran over the $8 budget for one order each. Sep 23-24 may still restate upward.",
  biggestLeak: "B0D9YW9DC1 Manual Exact — $1.42 spent, zero sales, now PAUSED. Worst leak still running: B0D9YSNYBG Manual Exact ($1.10, still ENABLED). Zero-sale spend eased to $3.25 (10% of the account, from $3.90 / 17%).",
  campaigns: [
    {name: "SaluSpa Filter (B08R11D8NJ) — enabled, $8/day", spend: 28.14, sales: 71.92, orders: 4},
    {name: "B0D9YW9DC1 - Manual Exact (now PAUSED, zero sales)", spend: 1.42, sales: 0, orders: 0},
    {name: "B0D9YSNYBG - Manual Exact (enabled, zero sales, pause candidate)", spend: 1.10, sales: 0, orders: 0},
    {name: "B0D9YVZFPT - Auto SI (enabled, zero sales, pause candidate)", spend: 0.73, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · Down Only · window ACOS 39.1% (26.5% last review) · break-even ~24.5% · avg CPC $1.48 vs approved caps ~$0.90 Exact / ~$0.80 Broad",
    daily: [
      {date: "Sep 20", spend: 6.35, sales: 17.98, orders: 1, clicks: 4},
      {date: "Sep 21", spend: 9.13, sales: 17.98, orders: 1, clicks: 6},
      {date: "Sep 22", spend: 1.85, sales: 0, orders: 0, clicks: 1},
      {date: "Sep 23", spend: 0.88, sales: 17.98, orders: 1, clicks: 2},
      {date: "Sep 24", spend: 9.93, sales: 17.98, orders: 1, clicks: 6}
    ]
  },
  history: [
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
    {done: false, text: "<strong>Pause the four still-enabled zero-sale campaigns</strong> — B0D9YSNYBG Manual Exact ($1.10 this window), B0D9YVZFPT Auto SI ($0.73), Discovery SI ($0) and Sales SI ($0). Their Auto-Discovery siblings are already paused."},
    {done: true, text: "<strong>B0D9YW9DC1 Manual Exact paused</strong> — confirmed PAUSED Sep 25 ($1.42 spent Sep 20-24 before the pause)."},
    {done: false, text: "<strong>True SaluSpa bids back to the Aug 21 caps</strong> (Exact ~$0.90 / Broad ~$0.80). This enforces the approved plan and is not a re-tune. Still unchanged: 'saluspa filter' Broad $2.06, 'saluspa inflatable spa filter' Exact $1.59, 'saluspa filters' $1.07, 'saluspa coronado filters' $0.99, 'spa filter vi' $0.92, 'saluspa coleman spa filter cartridge' $0.87, 'bestway saluspa filter' / 'vi filter' $0.82. Avg CPC $1.48 is what pushed ACOS to 39%."},
    {done: false, text: "<strong>Negative Exact 'saluspa hot tub filter' conflict</strong> — the ENABLED Negative Exact still blocks the same term's Exact ($0.86) and Broad ($0.50) keywords. Unchanged since first flagged."},
    {done: false, text: "<strong>End-of-season wind-down plan</strong> — the season ends late Sep / early Oct. Agree the date to step the SaluSpa $8/day budget down, and whether any campaign keeps running over the off-season."},
    {done: true, text: "<strong>B0D9YSNYBG Auto-Discovery paused</strong> (requested Aug 21) — confirmed still PAUSED Sep 25."},
    {done: true, text: "<strong>B0D9YW9DC1 Auto-Discovery paused</strong> — confirmed still PAUSED Sep 25."},
    {done: true, text: "<strong>B0DBVZFBFV Product Targeting + Auto-Discovery paused</strong> — both confirmed PAUSED Sep 25."},
    {done: true, text: "<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — confirmed Sep 25: all seven ENABLED, no drift."},
    {done: true, text: "<strong>Generic 'hot tub filter' Broad paused</strong> — confirmed Sep 25, no drift."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; all three campaigns confirmed PAUSED. Reactivation needs a real reorder decision from Todd on buying more units - not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "✅ Win of the week: B0D9YW9DC1 Manual Exact is now paused, and zero-sale spend fell to 10% of the account (from 17%). SaluSpa held at 4 orders / $71.92.",
    "⚠️ SaluSpa ACOS climbed from 26.5% to 39.1% on the same 4 orders. Spend rose to $28.14 at an unchanged $1.48 avg CPC. Sep 21 and Sep 24 ran over the $8 budget ($9.13 / $9.93) for one sale each.",
    "📉 Impressions fell off late in the window: 2,103 (Sep 21), 1,920 (Sep 22), 502 (Sep 23), 408 (Sep 24). That fits end-of-season demand fading.",
    "📊 Account: $31.39 spend / $71.92 ad sales / 43.6% blended ACOS (was 32.0%). Ad-attributed only; total sales and TACOS still need SP-API.",
    "🍂 Season is ending (late Sep / early Oct). Stock is ~700 units. Sell-through still beats ACOS perfection, but plan the budget step-down date now."
  ]
};
