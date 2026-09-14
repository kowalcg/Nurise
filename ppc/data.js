// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Sep 9 - Sep 13, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Monday, Sep 14, 2026",
  account: {
    spend: 27.42, sales: 35.96, orders: 2, clicks: 25,
    acos: "76.3%", acosClass: "warn", acosSub: "up from 33.7% last review; $7.46 of the spend is a leak that is now paused",
    spendSub: "≈ $5.50/day · SaluSpa is the only campaign converting", clicksSub: "6 of 33 campaigns enabled"
  },
  bestPerformer: "SaluSpa Filter (B08R11D8NJ) — $35.96 in sales from $18.37 spend (2 orders, 51% ACOS). The only campaign with sales this window, and still above the ~24.5% break-even.",
  biggestLeak: "B0D9YW9DC1 Auto-Discovery — $7.46 spent, zero sales (last spend Sep 10, now PAUSED). Still live: B0D9YVZFPT Auto SI $1.28 + Discovery SI $0.31, zero sales, both ENABLED.",
  campaigns: [
    {name: "SaluSpa Filter (B08R11D8NJ) — enabled, $8/day", spend: 18.37, sales: 35.96, orders: 2},
    {name: "B0D9YW9DC1 - Auto - Discovery (paused — last spend Sep 10)", spend: 7.46, sales: 0, orders: 0},
    {name: "B0D9YVZFPT - Auto SI (enabled, zero sales, pause candidate)", spend: 1.28, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · Down Only · window ACOS 51.1% (49.3% last review) · break-even ~24.5% · avg CPC $1.67 vs approved caps ~$0.90 Exact / ~$0.80 Broad",
    daily: [
      {date: "Sep 9", spend: 0, sales: 0, orders: 0, clicks: 0},
      {date: "Sep 10", spend: 5.44, sales: 0, orders: 0, clicks: 3},
      {date: "Sep 11", spend: 5.25, sales: 0, orders: 0, clicks: 3},
      {date: "Sep 12", spend: 2.81, sales: 17.98, orders: 1, clicks: 2},
      {date: "Sep 13", spend: 4.87, sales: 17.98, orders: 1, clicks: 3}
    ]
  },
  history: [
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
    {done: false, text: "<strong>Pause B0D9YVZFPT Auto SI + Discovery SI</strong> — still ENABLED with zero sales: Auto SI $1.28 and Discovery SI $0.31 this window (Auto SI was $2.18 last window). Sales SI is enabled but has no spend. Recommend pausing all three."},
    {done: false, text: "<strong>True SaluSpa bids back to the Aug 21 caps</strong> (Exact ~$0.90 / Broad ~$0.80). This enforces the approved plan and is not a re-tune. Still above cap: 'saluspa inflatable spa filter' Exact $1.59, 'saluspa filter' Broad $2.06, 'saluspa filters' $1.07, 'saluspa coronado filters' $0.99, 'spa filter vi' $0.92, 'saluspa coleman spa filter cartridge' $0.87, 'bestway saluspa filter' / 'vi filter' $0.82. Average CPC this window was $1.67."},
    {done: false, text: "<strong>Negative Exact 'saluspa hot tub filter' conflict</strong> — the ENABLED Negative Exact still blocks the same term's Exact ($0.86) and Broad ($0.50) keywords, likely self-blocking best-intent traffic. Unchanged since flagged."},
    {done: true, text: "<strong>B0D9YW9DC1 Auto-Discovery paused</strong> — confirmed PAUSED Sep 14. Last spend was Sep 10 ($7.46 zero-sale spend in this window before the pause took effect)."},
    {done: true, text: "<strong>B0DBVZFBFV Product Targeting paused</strong> — confirmed PAUSED Sep 14 (was the $35.76 zero-sale candidate). B0DBVZFBFV Auto-Discovery is also paused."},
    {done: true, text: "<strong>B0D9YSNYBG Auto-Discovery paused</strong> (requested Aug 21) — confirmed still PAUSED Sep 14. B0D9YSNYBG Manual Exact is ENABLED but spent $0."},
    {done: true, text: "<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — confirmed Sep 14: all seven ENABLED."},
    {done: true, text: "<strong>Generic 'hot tub filter' Broad paused</strong> — confirmed Sep 14, no drift."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; its three campaigns stay PAUSED. Reactivation needs a real reorder decision from Todd on buying more units — not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "📉 Ad sales down to $35.96 (was $135.95 last review and ~$1,130 in early September). Several strong campaigns are now paused or sold out, and only SaluSpa is converting.",
    "✅ Win: SaluSpa got orders on Sep 12 (16% ACOS) and Sep 13 (27% ACOS). Those days usually restate upward.",
    "⚠️ SaluSpa ACOS was 51.1% for the window, about double the ~24.5% break-even. The main cause is CPC: $1.67 average vs the ~$0.90 approved cap. At the caps, the same conversion rate would put ACOS near break-even.",
    "🔍 Watch: B0DBVZFBFV Auto-Discovery (last review's $99.99 win at 1% ACOS) is now paused. Confirm with Douae whether that was deliberate, e.g. for stock.",
    "🍂 Season ends late Sept / early Oct. Selling through stock matters more than a perfect ACOS, so keep the $8/day budget and fix CPC rather than cutting spend."
  ]
};
