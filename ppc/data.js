// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Sep 2 - Sep 6, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Monday, Sep 7, 2026",
  account: {
    spend: 135.66, sales: 1129.77, orders: 15, clicks: 167,
    acos: "12.0%", acosClass: "good", acosSub: "improving; down 1.7 pts from 13.7% last review, orders +25% on spend -14%",
    spendSub: "≈ $27/day · 6 campaigns with meaningful spend", clicksSub: "33 campaigns in account"
  },
  bestPerformer: "B0DBVZFBFV — Auto-Discovery spent $26.08 for $867.93 in sales (7 orders, 3.0% ACOS) — the account's best performer this window by a wide margin.",
  biggestLeak: "B0DBVZFBFV - Product Targeting spent $35.76 with ZERO sales — NEW pause candidate this window. Also still leaking: B0D9YW9DC1 Auto-Discovery ($34.38, zero sales, unresolved since it relapsed last review) and B0D9YSNYBG Manual Exact ($1.03, zero sales, open pause candidate since Aug 28).",
  campaigns: [
    {name: "B0DBVZFBFV - Product Targeting (NEW — zero sales, pause candidate)", spend: 35.76, sales: 0, orders: 0},
    {name: "B0D9YW9DC1 - Auto - Discovery (still zero sales, unresolved)", spend: 34.38, sales: 0, orders: 0},
    {name: "SaluSpa Filter (B08R11D8NJ)", spend: 32.38, sales: 125.86, orders: 7},
    {name: "B0DBVZFBFV - Auto - Discovery (best performer)", spend: 26.08, sales: 867.93, orders: 7},
    {name: "B0DBVZFBFV - Manual Exact", spend: 5.66, sales: 135.98, orders: 1},
    {name: "B0D9YSNYBG - Manual Exact (enabled, zero sales, sibling campaigns paused)", spend: 1.03, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · window ACOS 25.7% (down sharply from 53% last review; last 2 days restate upward) · break-even ~24.5% · Aug 21 decision hold has EXPIRED — bids now drifted above approved caps",
    daily: [
      {date: "Sep 2", spend: 12.62, sales: 17.98, orders: 1, clicks: 8},
      {date: "Sep 3", spend: 3.60, sales: 35.96, orders: 2, clicks: 2},
      {date: "Sep 4", spend: 5.42, sales: 35.96, orders: 2, clicks: 3},
      {date: "Sep 5", spend: 3.06, sales: 17.98, orders: 1, clicks: 2},
      {date: "Sep 6", spend: 7.68, sales: 17.98, orders: 1, clicks: 4}
    ]
  },
  history: [
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
    {done: false, text: "<strong>B0DBVZFBFV Product Targeting — NEW zero-sale pause candidate</strong> — $35.76 spent this window, 0 sales, 0 orders, ENABLED. Flagged fresh this review; not previously on the pause list."},
    {done: false, text: "<strong>B0D9YW9DC1 Auto-Discovery — still zero sales</strong> — $34.38 spend, 0 sales again this window. Same unstable campaign flagged last review; still needs a real decision from Douae rather than autopilot."},
    {done: true, text: "<strong>SaluSpa ACOS recovering</strong> — down to 25.7% this window from 53% last review (sales +75%, spend -14%). Still a touch above the ~24.5% break-even, but a real improvement."},
    {done: false, text: "<strong>SaluSpa bids drifted above Aug 21 approved caps</strong> (Exact ~$0.90 / Broad ~$0.80) — \"saluspa inflatable spa filter\" exact is at $1.59, \"saluspa filter\" broad is at $2.06, plus saluspa coronado filters ($0.99), saluspa filters ($1.07), saluspa coleman spa filter cartridge ($0.87), vi filter ($0.82), bestway saluspa filter ($0.82) all over the broad cap. True these back up."},
    {done: false, text: "<strong>SaluSpa $8 daily budget breached again</strong> — Sep 2 spent $12.62 vs the $8 budget, same pattern flagged last review."},
    {done: true, text: "<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — re-confirmed Sep 7: all seven still ENABLED, no drift."},
    {done: true, text: "<strong>Generic “hot tub filter” Broad still paused</strong> — re-confirmed Sep 7, no drift."},
    {done: true, text: "<strong>B0D9YSNYBG Auto-Discovery paused</strong> — re-confirmed Sep 7: still PAUSED, no spend. B0DZ31B3RP's three campaigns also re-confirmed still PAUSED."},
    {done: false, text: "<strong>Pause B0D9YSNYBG Manual Exact</strong> — flagged Aug 28, still ENABLED: $1.03 this window, zero sales, while its sibling Auto-Discovery and Product Targeting campaigns are already paused."},
    {done: false, text: "<strong>Pause or fix B0D9YVZFPT SI trio</strong> — all three still ENABLED at $8/day; ~$0.37 spend this window and no sales since the 03-Jul launch."},
    {done: false, text: "<strong>Negative-exact vs exact/broad conflict on \"saluspa hot tub filter\"</strong> — the ENABLED Negative Exact on this term still conflicts with the ENABLED Exact ($0.86) and Broad ($0.50) keywords bidding on the same term, likely self-blocking best-intent traffic."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; the three paused campaigns were the account's best performers. Reactivation needs a real reorder decision from Todd on buying more units — not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "📈 Win of the week: whole-account ACOS improved to 12.0% (from 13.7%) with orders up 25% on 14% less spend. B0DBVZFBFV Auto-Discovery is the standout — $867.93 in sales at 3.0% ACOS.",
    "⚠️ Watch: two ENABLED campaigns burned nearly $70 combined with zero sales this window — B0DBVZFBFV Product Targeting (NEW, $35.76) and B0D9YW9DC1 Auto-Discovery ($34.38, still unresolved). Both are pause candidates for Douae.",
    "📉 SaluSpa filter: ACOS improved sharply to 25.7% (was 53%) — real recovery, though still just above the ~24.5% break-even. Bids have drifted well above the Aug 21 approved caps and the $8 daily budget was breached again on Sep 2 ($12.62).",
    "🧹 Housekeeping: B0D9YSNYBG Manual Exact and the B0D9YVZFPT SI trio remain tiny, ENABLED, zero-sale leftovers — pause list is in the actions.",
    "⏳ Season note: products sell through late September/early October — sell-through beats ACOS perfection from here. Ads are ~7% of filter volume and stock is ~700 units (8–9 weeks cover), so no sell-through emergency."
  ]
};
