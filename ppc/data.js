// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Aug 19–23, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Monday, Aug 24, 2026",
  account: {
    spend: 154.57, sales: 1055.79, orders: 15, clicks: 190,
    acos: "14.6%", acosClass: "good", acosSub: "healthy; drifted up from 12.5% last review",
    spendSub: "≈ $31/day · 9 campaigns with spend · avg CPC $0.81", clicksSub: "33 campaigns in account"
  },
  bestPerformer: "B0DBVZFBFV — Auto-Discovery spent $29.78 for $519.95 in sales (5 orders, 6% ACOS) — again the single best campaign in the account. The B0DBVZFBFV trio (Auto-Discovery + Product Targeting + Manual Exact) spent $87.65 for $947.91 — 90% of all account ad sales.",
  biggestLeak: "B0D9YW9DC1 - Auto - Discovery spent $29.65 with ZERO sales, still ENABLED — a reversal from last window's $119.99 on $31.09 (26% ACOS), which is why the pause request was withdrawn Aug 17. It is the account's 4th-largest spender and its only meaningful waste. Pause requested again this week.",
  campaigns: [
    {name: "B0DBVZFBFV - Product Targeting", spend: 40.84, sales: 99.99, orders: 1},
    {name: "SaluSpa Filter (B08R11D8NJ)", spend: 33.45, sales: 107.88, orders: 6},
    {name: "B0DBVZFBFV - Auto - Discovery", spend: 29.78, sales: 519.95, orders: 5},
    {name: "B0D9YW9DC1 - Auto - Discovery (zero-sale, enabled)", spend: 29.65, sales: 0, orders: 0},
    {name: "B0DBVZFBFV - Manual Exact", spend: 17.03, sales: 327.97, orders: 3},
    {name: "B0D9YSNYBG - Auto - Discovery (now PAUSED — spend stopped Aug 21)", spend: 2.24, sales: 0, orders: 0},
    {name: "B0D9YVZFPT - Auto SI (enabled, barely serving)", spend: 0.90, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · window ACOS 31% (Aug 22–23 will restate upward) · break-even ~24.5%",
    daily: [
      {date: "Aug 19", spend: 3.57, sales: 0, orders: 0, clicks: 3},
      {date: "Aug 20", spend: 3.87, sales: 35.96, orders: 2, clicks: 3},
      {date: "Aug 21", spend: 8.88, sales: 0, orders: 0, clicks: 5},
      {date: "Aug 22", spend: 6.83, sales: 35.96, orders: 2, clicks: 4},
      {date: "Aug 23", spend: 10.30, sales: 35.96, orders: 2, clicks: 5}
    ]
  },
  history: [
    {week: "Aug 19–23, 2026", spend: 154.57, sales: 1055.79, orders: 15, acos: "14.6%"},
    {week: "Aug 16–20, 2026", spend: 163.83, sales: 1309.80, orders: 16, acos: "12.5%"},
    {week: "Aug 12–16, 2026", spend: 195.71, sales: 881.84, orders: 12, acos: "22.2%"},
    {week: "Aug 9–13, 2026", spend: 322.27, sales: 1089.80, orders: 15, acos: "30%"}
  ],
  actions: [
    {done: true, text: "<strong>B0D9YSNYBG Auto-Discovery paused</strong> — requested Aug 21, confirmed done Aug 24: campaign now shows PAUSED and spend stops dead after Aug 21."},
    {done: true, text: "<strong>SaluSpa filter re-tuned for the rest of the season</strong> — Douae's plan approved Aug 21: $8/day, Down Only, Exact keywords ~$0.90, Broad ~$0.80, phrase negatives + generic “hot tub filter” Broad stay paused. Campaign stays ON near break-even; no further changes until early September."},
    {done: true, text: "<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — done Aug 13, re-confirmed Aug 24."},
    {done: true, text: "<strong>Generic “hot tub filter” Broad still paused</strong> — re-confirmed Aug 24, no drift."},
    {done: true, text: "<strong>6 zero-sale campaigns + B0CDXN72C4 + B0D9YW2776 paused</strong> — all re-confirmed still PAUSED Aug 24, no drift anywhere in the account."},
    {done: false, text: "<strong>Pause B0D9YW9DC1 Auto-Discovery</strong> — NEW this week: $29.65 spend, 38 clicks, ~9,350 impressions, zero sales. It converted last window (pause withdrawn Aug 17) but has now run a full window with nothing. Requested Aug 24."},
    {done: false, text: "<strong>Pause or fix B0D9YVZFPT SI trio</strong> — all three still ENABLED at $8/day; only $0.90 spend this window and no sales since the 03-Jul launch."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; the three paused campaigns were the account's best performers. Reactivation needs a real reorder decision from Todd on buying more units — not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "🏆 Win of the week: B0DBVZFBFV keeps carrying the account — the trio spent $87.65 for $947.91 (90% of all ad sales), with Auto-Discovery alone at 6% ACOS. Blended account ACOS 14.6% on $154.57 spend.",
    "⚠️ Watch: B0D9YW9DC1 Auto-Discovery burned $29.65 with zero sales — buying reach, not buyers (0.41% CTR on ~9,350 impressions). Pause requested. B0DBVZFBFV Product Targeting is also worth a look: now the top spender at $40.84 for 1 order (41% ACOS) while its sibling campaigns convert on half the money.",
    "✅ SaluSpa filter improved: 36% → 31% ACOS, sales +50% ($71.92 → $107.88), 6 orders, and 3 of the last 4 days converted — the zero-sale-day worry from Friday has largely resolved. Still above the ~24.5% break-even, so still slightly loss-making, but moving the right way and Aug 22–23 restate upward. Untouched until early September per the Aug 21 decision.",
    "📌 For the early-September re-tune (not before): SaluSpa realised CPC is running ~$1.67 against the approved ~$0.80–0.90 bids, and it exceeded its $8 budget on Aug 21 ($8.88) and Aug 23 ($10.30).",
    "⏳ Season note: products sell through late September/early October — sell-through beats ACOS perfection from here on. Ads are ~7% of filter volume and stock is ~700 units (8–9 weeks cover), so there is no sell-through emergency."
  ]
};
