// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Sep 13 - Sep 17, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Friday, Sep 18, 2026",
  account: {
    spend: 28.52, sales: 89.90, orders: 5, clicks: 23,
    acos: "31.7%", acosClass: "ok", acosSub: "down from 76.3% last review - a 44-point improvement on flat spend",
    spendSub: "~ $5.70/day · SaluSpa is still the only campaign converting", clicksSub: "6 of 33 campaigns enabled"
  },
  bestPerformer: "SaluSpa Filter (B08R11D8NJ) — $89.90 in sales from $25.33 spend (5 orders, 28.2% ACOS, was 51.1%). Orders more than doubled and ACOS nearly halved. Still a shade above the ~24.5% break-even, but the last two days restate upward and may close the gap.",
  biggestLeak: "B0D9YVZFPT Auto SI — $1.33 spent, zero sales, still ENABLED. Total zero-sale spend fell to $3.19 (from $9.05), but that is still 11% of all account spend going nowhere across five enabled campaigns.",
  campaigns: [
    {name: "SaluSpa Filter (B08R11D8NJ) — enabled, $8/day", spend: 25.33, sales: 89.90, orders: 5},
    {name: "B0D9YVZFPT - Auto SI (enabled, zero sales, pause candidate)", spend: 1.33, sales: 0, orders: 0},
    {name: "B0D9YW9DC1 - Manual Exact (enabled, zero sales, NEW pause candidate)", spend: 0.82, sales: 0, orders: 0},
    {name: "B0D9YSNYBG - Manual Exact (enabled, zero sales, NEW pause candidate)", spend: 0.73, sales: 0, orders: 0},
    {name: "B0D9YVZFPT - Discovery SI (enabled, zero sales, pause candidate)", spend: 0.31, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · Down Only · window ACOS 28.2% (51.1% last review) · break-even ~24.5% · avg CPC $1.69 vs approved caps ~$0.90 Exact / ~$0.80 Broad",
    daily: [
      {date: "Sep 13", spend: 4.87, sales: 17.98, orders: 1, clicks: 3},
      {date: "Sep 14", spend: 6.15, sales: 17.98, orders: 1, clicks: 4},
      {date: "Sep 15", spend: 8.13, sales: 17.98, orders: 1, clicks: 5},
      {date: "Sep 16", spend: 2.06, sales: 0, orders: 0, clicks: 1},
      {date: "Sep 17", spend: 4.12, sales: 35.96, orders: 2, clicks: 2}
    ]
  },
  history: [
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
    {done: false, text: "<strong>Pause the five enabled zero-sale campaigns</strong> — $3.19 spent, no sales, 11% of account spend. B0D9YVZFPT Auto SI ($1.33), Discovery SI ($0.31) and Sales SI ($0, no impressions); plus two new ones that woke up this week: B0D9YW9DC1 Manual Exact ($0.82, 3 clicks Sep 17) and B0D9YSNYBG Manual Exact ($0.73, Sep 14). The Auto-Discovery versions of both are already paused - it is the Manual Exact siblings still running."},
    {done: false, text: "<strong>True SaluSpa bids back to the Aug 21 caps</strong> (Exact ~$0.90 / Broad ~$0.80). This enforces the approved plan and is not a re-tune. Unchanged and still above cap: 'saluspa filter' Broad $2.06, 'saluspa inflatable spa filter' Exact $1.59, 'saluspa filters' $1.07, 'saluspa coronado filters' $0.99, 'spa filter vi' $0.92, 'saluspa coleman spa filter cartridge' $0.87, 'bestway saluspa filter' / 'vi filter' $0.82. Average CPC this window was $1.69 - this week's ACOS gain came from conversion, not cheaper clicks."},
    {done: false, text: "<strong>Negative Exact 'saluspa hot tub filter' conflict</strong> — the ENABLED Negative Exact still blocks the same term's Exact ($0.86) and Broad ($0.50) keywords, likely self-blocking the highest-intent traffic. Unchanged since first flagged."},
    {done: true, text: "<strong>B0D9YSNYBG Auto-Discovery paused</strong> (requested Aug 21) — confirmed still PAUSED Sep 18."},
    {done: true, text: "<strong>B0D9YW9DC1 Auto-Discovery paused</strong> — confirmed still PAUSED Sep 18, no zero-sale spend this window."},
    {done: true, text: "<strong>B0DBVZFBFV Product Targeting + Auto-Discovery paused</strong> — both confirmed PAUSED Sep 18."},
    {done: true, text: "<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — confirmed Sep 18: all seven ENABLED, no drift."},
    {done: true, text: "<strong>Generic 'hot tub filter' Broad paused</strong> — confirmed Sep 18, no drift."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; all three campaigns confirmed PAUSED. Reactivation needs a real reorder decision from Todd on buying more units - not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "✅ Win of the week: SaluSpa ACOS fell from 51.1% to 28.2% while orders went 2 to 5. Sep 17 alone did 2 orders at 11% ACOS. Blended account ACOS 76.3% to 31.7% on essentially flat spend.",
    "📊 Ad sales recovered to $89.90 from $35.96. Still far off early September (~$1,130/week), but the direction finally reversed.",
    "⚠️ Watch CPC: average $1.69 against the ~$0.90 approved cap. The ACOS improvement came from better conversion, not cheaper clicks - so it is not locked in. Truing bids to the caps is the durable fix.",
    "🔍 Watch impressions: SaluSpa ran 1,302 / 518 / 477 across Sep 15-17, with spend falling alongside. Looks like seasonal demand decay rather than a settings problem, but if it continues the $8/day budget stops being the binding constraint.",
    "🍂 Season ends late Sept / early Oct. Stock is ~700 units, 8-9 weeks cover, no sell-through emergency. Keep the $8/day budget - selling through beats a perfect ACOS at this point in the season."
  ]
};
