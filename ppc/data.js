// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Aug 30 - Sep 3, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Friday, Sep 4, 2026",
  account: {
    spend: 157.66, sales: 1147.83, orders: 12, clicks: 193,
    acos: "13.7%", acosClass: "good", acosSub: "improving; down 7.3 pts from 21.0% last review, sales +71% on spend +12%",
    spendSub: "≈ $31/day · 7 campaigns with spend · avg CPC $0.82", clicksSub: "33 campaigns in account"
  },
  bestPerformer: "B0DBVZFBFV — Auto-Discovery spent $29.74 for $699.95 in sales (5 orders, 4% ACOS) — the account's best performer this window by a wide margin. B0DBVZFBFV Manual Exact also fully recovered: $235.97 on $7.86 (2 orders, 3% ACOS), dropping off last review's pause-candidate list entirely.",
  biggestLeak: "B0D9YW9DC1 - Auto - Discovery spent $31.41 with ZERO sales — RELAPSED. This is the same campaign that was last review's best performer (13% ACOS, $239.98 sales) with its Aug 24 pause request WITHDRAWN on Aug 31. It has now flipped back to a full zero-sale window. Flip-flopping between best performer and biggest leak — needs a real decision from Douae, not a hands-off approach. Also still leaking pennies: B0D9YSNYBG Manual Exact ($0.65, zero sales) and the B0D9YVZFPT SI trio ($0.90, zero sales since 03-Jul launch).",
  campaigns: [
    {name: "B0DBVZFBFV - Product Targeting", spend: 49.25, sales: 139.99, orders: 1},
    {name: "SaluSpa Filter (B08R11D8NJ)", spend: 37.85, sales: 71.92, orders: 4},
    {name: "B0D9YW9DC1 - Auto - Discovery (RELAPSED to zero sales — new pause candidate)", spend: 31.41, sales: 0, orders: 0},
    {name: "B0DBVZFBFV - Auto - Discovery (best ACOS in account)", spend: 29.74, sales: 699.95, orders: 5},
    {name: "B0DBVZFBFV - Manual Exact (recovered — off pause list)", spend: 7.86, sales: 235.97, orders: 2},
    {name: "B0D9YVZFPT - Auto SI (enabled, barely serving, no sales)", spend: 0.90, sales: 0, orders: 0},
    {name: "B0D9YSNYBG - Manual Exact (enabled, zero sales, sibling campaigns paused)", spend: 0.65, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · window ACOS 53% (up from 37% last review; last 2 days restate upward) · break-even ~24.5% · Aug 21 decision hold has EXPIRED — re-tune now due",
    daily: [
      {date: "Aug 30", spend: 13.70, sales: 17.98, orders: 1, clicks: 8},
      {date: "Aug 31", spend: 5.40, sales: 0, orders: 0, clicks: 3},
      {date: "Sep 1", spend: 2.53, sales: 0, orders: 0, clicks: 3},
      {date: "Sep 2", spend: 12.62, sales: 17.98, orders: 1, clicks: 8},
      {date: "Sep 3", spend: 3.60, sales: 35.96, orders: 2, clicks: 2}
    ]
  },
  history: [
    {week: "Aug 30 - Sep 3, 2026", spend: 157.66, sales: 1147.83, orders: 12, acos: "13.7%"},
    {week: "Aug 26–30, 2026", spend: 140.46, sales: 669.85, orders: 8, acos: "21.0%"},
    {week: "Aug 23–27, 2026", spend: 143.85, sales: 621.88, orders: 9, acos: "23.1%"},
    {week: "Aug 19–23, 2026", spend: 154.57, sales: 1055.79, orders: 15, acos: "14.6%"},
    {week: "Aug 16–20, 2026", spend: 163.83, sales: 1309.80, orders: 16, acos: "12.5%"},
    {week: "Aug 12–16, 2026", spend: 195.71, sales: 881.84, orders: 12, acos: "22.2%"},
    {week: "Aug 9–13, 2026", spend: 322.27, sales: 1089.80, orders: 15, acos: "30%"}
  ],
  actions: [
    {done: false, text: "<strong>B0D9YW9DC1 Auto-Discovery — RELAPSED to zero sales</strong> — NEW this week: $31.41 spend, 0 sales, 0 orders. This is the same campaign whose Aug 24 pause request was WITHDRAWN Aug 31 after it converted $239.98 at 13% ACOS. Now back to zero. Flip-flopping between best performer and biggest leak — flagged to Douae for a real decision, not another wait-and-see."},
    {done: true, text: "<strong>B0DBVZFBFV Manual Exact recovered</strong> — last review's new pause candidate ($4.60, zero sales) is now fully converting: $235.97 on $7.86 (2 orders, 3% ACOS). Off the pause list."},
    {done: false, text: "<strong>SaluSpa filter re-tune now due</strong> — the Aug 21 decision hold (\"no changes before early September\") has expired. ACOS worsened 37% → 53%, still ~$1.58–1.71 realised CPC vs the approved $0.80–0.90 bids, and the $8 daily budget was breached twice again (Aug 30 $13.70, Sep 2 $12.62). Concrete bid/budget changes proposed to Douae in this week's message."},
    {done: true, text: "<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — re-confirmed Sep 4: all seven still ENABLED, no drift."},
    {done: true, text: "<strong>Generic “hot tub filter” Broad still paused</strong> — re-confirmed Sep 4, no drift."},
    {done: true, text: "<strong>B0D9YSNYBG Auto-Discovery paused</strong> — re-confirmed Sep 4: still PAUSED, no spend. B0DZ31B3RP's three campaigns also re-confirmed still PAUSED."},
    {done: false, text: "<strong>Pause B0D9YSNYBG Manual Exact</strong> — flagged Aug 28, still ENABLED: $0.65 this window, zero sales, while its sibling Auto-Discovery and Product Targeting campaigns are already paused."},
    {done: false, text: "<strong>Pause or fix B0D9YVZFPT SI trio</strong> — all three still ENABLED at $8/day; $0.90 spend this window and no sales since the 03-Jul launch."},
    {done: false, text: "<strong>Negative-exact vs exact conflict on \"saluspa hot tub filter\"</strong> — the ENABLED Negative Exact on this term still conflicts with the ENABLED Exact keyword bidding $0.86 on the same term, likely self-blocking best-intent traffic. Part of the now-due re-tune."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; the three paused campaigns were the account's best performers. Reactivation needs a real reorder decision from Todd on buying more units — not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "📈 Win of the week: whole-account ACOS improved 21.0% → 13.7% with ad sales up 71% on only +12% spend. B0DBVZFBFV Auto-Discovery is the standout, $699.95 in sales at 4% ACOS, and its Manual Exact sibling fully recovered too.",
    "⚠️ Watch: B0D9YW9DC1 Auto-Discovery relapsed to a full zero-sale window right after its pause request was withdrawn for converting well two weeks ago. This campaign is unstable — treat any single good or bad window with caution and revisit with Douae regularly rather than settling on a permanent verdict.",
    "📉 SaluSpa filter: ACOS worsened to 53% this window (was 37%) — well above the ~24.5% break-even, i.e. loss-making on ad-attributed units. Realised CPC ~$1.58–1.71 vs the approved ~$0.80–0.90 bids, and the $8 budget was breached again on both Aug 30 ($13.70) and Sep 2 ($12.62). The Aug 21 decision hold has now expired — this week's message to Douae proposes concrete numbers.",
    "🧹 Housekeeping: two tiny zero-sale campaigns remain ENABLED (B0D9YSNYBG Manual Exact, B0D9YVZFPT SI trio) — pennies each, still nothing converted from either; pause list is in the actions.",
    "⏳ Season note: products sell through late September/early October — sell-through beats ACOS perfection from here. Ads are ~7% of filter volume and stock is ~700 units (8–9 weeks cover), so no sell-through emergency."
  ]
};
