// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Aug 26–30, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Monday, Aug 31, 2026",
  account: {
    spend: 140.46, sales: 669.85, orders: 8, clicks: 169,
    acos: "21.0%", acosClass: "warn", acosSub: "improving; down 2.1 pts from 23.1% last review, sales +8% on flat spend",
    spendSub: "≈ $28/day · 7 campaigns with spend · avg CPC $0.83", clicksSub: "33 campaigns in account"
  },
  bestPerformer: "B0D9YW9DC1 — Auto-Discovery spent $30.24 for $239.98 in sales (2 orders, 13% ACOS) — the same campaign flagged as the account's biggest leak last review, with a pause requested Aug 24. It converted on Aug 28 before the pause was actioned. The pause request is WITHDRAWN — leave it running. B0DBVZFBFV Auto-Discovery also stayed solid: $199.98 on $29.58 (2 orders, 15% ACOS).",
  biggestLeak: "B0DBVZFBFV - Manual Exact spent $4.60 on 10 clicks with ZERO sales — and this campaign has now strung together repeated zero-sale windows while flickering in and out of the auction (~500 impressions/day, spend on only 3 of 5 days). Small dollars, but it converts nothing: new pause candidate for Douae. Also still leaking pennies: B0D9YVZFPT Auto SI ($1.34, no sales since 03-Jul launch) and B0D9YSNYBG Manual Exact ($0.25).",
  campaigns: [
    {name: "B0DBVZFBFV - Product Targeting", spend: 40.85, sales: 139.99, orders: 1},
    {name: "SaluSpa Filter (B08R11D8NJ)", spend: 33.60, sales: 89.90, orders: 3},
    {name: "B0D9YW9DC1 - Auto - Discovery (pause request withdrawn — best ACOS in account)", spend: 30.24, sales: 239.98, orders: 2},
    {name: "B0DBVZFBFV - Auto - Discovery", spend: 29.58, sales: 199.98, orders: 2},
    {name: "B0DBVZFBFV - Manual Exact (zero-sale, pause candidate)", spend: 4.60, sales: 0, orders: 0},
    {name: "B0D9YVZFPT - Auto SI (enabled, barely serving, no sales)", spend: 1.34, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · window ACOS 37% (last 2 days restate upward) · break-even ~24.5% · untouched per the Aug 21 decision hold — re-tune due early September",
    daily: [
      {date: "Aug 26", spend: 2.59, sales: 0, orders: 0, clicks: 2},
      {date: "Aug 27", spend: 4.09, sales: 0, orders: 0, clicks: 2},
      {date: "Aug 28", spend: 0, sales: 0, orders: 0, clicks: 0},
      {date: "Aug 29", spend: 13.22, sales: 71.92, orders: 2, clicks: 7},
      {date: "Aug 30", spend: 13.70, sales: 17.98, orders: 1, clicks: 8}
    ]
  },
  history: [
    {week: "Aug 26–30, 2026", spend: 140.46, sales: 669.85, orders: 8, acos: "21.0%"},
    {week: "Aug 23–27, 2026", spend: 143.85, sales: 621.88, orders: 9, acos: "23.1%"},
    {week: "Aug 19–23, 2026", spend: 154.57, sales: 1055.79, orders: 15, acos: "14.6%"},
    {week: "Aug 16–20, 2026", spend: 163.83, sales: 1309.80, orders: 16, acos: "12.5%"},
    {week: "Aug 12–16, 2026", spend: 195.71, sales: 881.84, orders: 12, acos: "22.2%"},
    {week: "Aug 9–13, 2026", spend: 322.27, sales: 1089.80, orders: 15, acos: "30%"}
  ],
  actions: [
    {done: true, text: "<strong>B0D9YW9DC1 Auto-Discovery pause request WITHDRAWN</strong> — requested Aug 24 after ~$61 of zero-sale spend, never actioned, and the campaign then converted 2 orders / $239.98 at 13% ACOS on Aug 28 — the best ACOS in the account. Lucky miss: leave it running."},
    {done: true, text: "<strong>B0D9YSNYBG Auto-Discovery paused</strong> — requested Aug 21, confirmed done Aug 24, re-confirmed Aug 31: still PAUSED, no spend."},
    {done: true, text: "<strong>SaluSpa filter re-tuned for the rest of the season</strong> — Douae's plan approved Aug 21: $8/day, Down Only, Exact keywords ~$0.90, Broad ~$0.80, phrase negatives + generic “hot tub filter” Broad stay paused. Campaign stays ON; the early-September re-tune window is now open."},
    {done: true, text: "<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — done Aug 13, re-confirmed Aug 31: all seven still ENABLED."},
    {done: true, text: "<strong>Generic “hot tub filter” Broad still paused</strong> — re-confirmed Aug 31, no drift."},
    {done: true, text: "<strong>6 zero-sale campaigns + B0CDXN72C4 + B0D9YW2776 paused</strong> — all re-confirmed still PAUSED Aug 31, no drift anywhere in the account."},
    {done: false, text: "<strong>Pause B0DBVZFBFV Manual Exact</strong> — NEW this week: $4.60 on 10 clicks with zero sales, repeated zero-sale windows, flickering in and out of the auction. Clean pause candidate."},
    {done: false, text: "<strong>Pause B0D9YSNYBG Manual Exact</strong> — flagged Aug 28, still ENABLED: $0.25 this window, zero sales, while its sibling Auto-Discovery and Product Targeting campaigns are already paused."},
    {done: false, text: "<strong>Pause or fix B0D9YVZFPT SI trio</strong> — all three still ENABLED at $8/day; $1.34 spend this window and no sales since the 03-Jul launch."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; the three paused campaigns were the account's best performers. Reactivation needs a real reorder decision from Todd on buying more units — not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "🏆 Win of the week: last review's biggest leak became this review's best performer — B0D9YW9DC1 Auto-Discovery did $239.98 on $30.24 (13% ACOS), so the Aug 24 pause request is withdrawn. Blended account ACOS improved 23.1% → 21.0% with sales up 8% on flat spend.",
    "⚠️ Watch: B0DBVZFBFV Product Targeting spent $23.40 over Aug 26–28 for nothing, went dark on Aug 29 ($0 spend, 92 impressions), then exploded Aug 30 ($17.45, 1,800 impressions) and took a $139.99 order. That on/off pattern looks like budget or bid throttling — check placement/bid settings if it repeats.",
    "📉 SaluSpa filter: $89.90 on $33.60 (3 orders, 37% ACOS) — better than last window's 45% but still above the ~24.5% break-even, i.e. still loss-making on ad-attributed units. The Aug 30 day printed 76% ACOS but the last 2 days always restate upward. Realised CPC ~$1.71–1.89 vs the approved ~$0.80–0.90 bids, and the $8 budget was breached on BOTH Aug 29 ($13.22) and Aug 30 ($13.70) — both queued for the re-tune, whose decision-hold window is now expiring. The ENABLED Negative Exact on “saluspa hot tub filter” still conflicts with the ENABLED Exact keyword on the same term.",
    "🧹 Housekeeping: three tiny zero-sale campaigns remain ENABLED (B0DBVZFBFV Manual Exact, B0D9YSNYBG Manual Exact, B0D9YVZFPT SI trio) — pennies each, but nothing has converted from any of them; pause list is in the actions.",
    "⏳ Season note: products sell through late September/early October — sell-through beats ACOS perfection from here. Ads are ~7% of filter volume and stock is ~700 units (8–9 weeks cover), so no sell-through emergency."
  ]
};
