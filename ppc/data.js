// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Sep 16 - Sep 20, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Monday, Sep 21, 2026",
  account: {
    spend: 22.99, sales: 71.92, orders: 4, clicks: 23,
    acos: "32.0%", acosClass: "ok", acosSub: "flat vs 31.7% last review - spend and sales both down ~20%",
    spendSub: "~ $4.60/day · SaluSpa is still the only campaign converting", clicksSub: "6 of 33 campaigns enabled"
  },
  bestPerformer: "SaluSpa Filter (B08R11D8NJ) — $71.92 in sales from $19.09 spend (4 orders, 26.5% ACOS, was 28.2%). Avg CPC eased to $1.47 from $1.69 and impressions bounced back (2,142 on Sep 19). Within 2 points of the ~24.5% break-even, and Sep 19-20 still restate upward.",
  biggestLeak: "B0D9YVZFPT Auto SI — $1.64 spent, zero sales, still ENABLED. Zero-sale spend rose to $3.90 (from $3.19), now 17% of all account spend, across five enabled campaigns. B0D9YSNYBG Manual Exact is spending every day ($1.44 over Sep 18-20).",
  campaigns: [
    {name: "SaluSpa Filter (B08R11D8NJ) — enabled, $8/day", spend: 19.09, sales: 71.92, orders: 4},
    {name: "B0D9YVZFPT - Auto SI (enabled, zero sales, pause candidate)", spend: 1.64, sales: 0, orders: 0},
    {name: "B0D9YSNYBG - Manual Exact (enabled, zero sales, pause candidate)", spend: 1.44, sales: 0, orders: 0},
    {name: "B0D9YW9DC1 - Manual Exact (enabled, zero sales, pause candidate)", spend: 0.82, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · Down Only · window ACOS 26.5% (28.2% last review) · break-even ~24.5% · avg CPC $1.47 vs approved caps ~$0.90 Exact / ~$0.80 Broad",
    daily: [
      {date: "Sep 16", spend: 2.06, sales: 0, orders: 0, clicks: 1},
      {date: "Sep 17", spend: 4.12, sales: 35.96, orders: 2, clicks: 2},
      {date: "Sep 18", spend: 2.20, sales: 0, orders: 0, clicks: 2},
      {date: "Sep 19", spend: 4.36, sales: 17.98, orders: 1, clicks: 4},
      {date: "Sep 20", spend: 6.35, sales: 17.98, orders: 1, clicks: 4}
    ]
  },
  history: [
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
    {done: false, text: "<strong>Pause the five enabled zero-sale campaigns</strong> — $3.90 spent, no sales, 17% of account spend (up from $3.19 / 11%). B0D9YVZFPT Auto SI ($1.64), Discovery SI ($0) and Sales SI ($0, no impressions); B0D9YSNYBG Manual Exact ($1.44, a click every day Sep 18-20) and B0D9YW9DC1 Manual Exact ($0.82). Their Auto-Discovery siblings are already paused."},
    {done: false, text: "<strong>True SaluSpa bids back to the Aug 21 caps</strong> (Exact ~$0.90 / Broad ~$0.80). This enforces the approved plan and is not a re-tune. Unchanged and still above cap: 'saluspa filter' Broad $2.06, 'saluspa inflatable spa filter' Exact $1.59, 'saluspa filters' $1.07, 'saluspa coronado filters' $0.99, 'spa filter vi' $0.92, 'saluspa coleman spa filter cartridge' $0.87, 'bestway saluspa filter' / 'vi filter' $0.82. Avg CPC eased to $1.47 but is still well above the caps."},
    {done: false, text: "<strong>Negative Exact 'saluspa hot tub filter' conflict</strong> — the ENABLED Negative Exact still blocks the same term's Exact ($0.86) and Broad ($0.50) keywords, likely self-blocking the highest-intent traffic. Unchanged since first flagged."},
    {done: true, text: "<strong>B0D9YSNYBG Auto-Discovery paused</strong> (requested Aug 21) — confirmed still PAUSED Sep 21."},
    {done: true, text: "<strong>B0D9YW9DC1 Auto-Discovery paused</strong> — confirmed still PAUSED Sep 21."},
    {done: true, text: "<strong>B0DBVZFBFV Product Targeting + Auto-Discovery paused</strong> — both confirmed PAUSED Sep 21."},
    {done: true, text: "<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — confirmed Sep 21: all seven ENABLED, no drift."},
    {done: true, text: "<strong>Generic 'hot tub filter' Broad paused</strong> — confirmed Sep 21, no drift."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; all three campaigns confirmed PAUSED. Reactivation needs a real reorder decision from Todd on buying more units - not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "✅ Win of the week: SaluSpa ACOS improved again, 28.2% to 26.5%, and avg CPC eased from $1.69 to $1.47. It converted 4 of 13 clicks.",
    "📈 Impressions recovered: after sliding to ~475/day on Sep 16-17, SaluSpa hit 986 (Sep 18), 2,142 (Sep 19) and 950 (Sep 20). The seasonal decay has not continued yet. No budget-capped days (max $6.35 vs $8).",
    "⚠️ Leak is growing: zero-sale spend is $3.90, 17% of the account, up from 11%. Small dollars, but it is now one-sixth of spend going nowhere.",
    "📊 Account spend $22.99 / ad sales $71.92 are both ~20% below last review, with blended ACOS flat at 32.0%. Ad-attributed only; total sales and TACOS still need SP-API.",
    "🍂 Season ends late Sept / early Oct, so 1-2 weeks remain. Stock is ~700 units, no sell-through emergency. Keep the $8/day budget - selling through beats a perfect ACOS at this point."
  ]
};
