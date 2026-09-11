// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Sep 6 - Sep 10, 2026 (Amazon data lags ~2 days; last 2 days restate upward)",
  updated: "Thursday, Sep 11, 2026",
  account: {
    spend: 45.84, sales: 135.95, orders: 3, clicks: 52,
    acos: "33.7%", acosClass: "needs_attention", acosSub: "sharp pullback from exceptional 12% last review; sample tiny (3 orders), data current through Sep 10",
    spendSub: "≈ $9/day · 2 campaigns with meaningful spend", clicksSub: "33 campaigns in account"
  },
  bestPerformer: "B0DBVZFBFV — Auto-Discovery spent $1.18 for $99.99 in sales (1 order, 1.0% ACOS) — exceptional one-time windfall, now PAUSED.",
  biggestLeak: "B0D9YW9DC1 Auto-Discovery spent $24.41 with ZERO sales — **NOW PAUSED** (issue resolved from last review). Still leaking: B0D9YVZFPT Auto SI ($2.18 spend, zero sales, escalation candidate flagged last review as 'pause or fix').",
  campaigns: [
    {name: "B0D9YW9DC1 - Auto - Discovery (paused — was $24.41 zero-sale leak)", spend: 24.41, sales: 0, orders: 0},
    {name: "SaluSpa Filter (B08R11D8NJ)", spend: 17.76, sales: 35.96, orders: 2},
    {name: "B0D9YVZFPT Auto SI (enabled, zero sales, pause candidate)", spend: 2.18, sales: 0, orders: 0},
    {name: "B0DBVZFBFV - Auto - Discovery (best performer, paused)", spend: 1.18, sales: 99.99, orders: 1}
  ],
  saluspa: {
    meta: "ENABLED · $8/day budget · window ACOS 49.3% (up 23.6 pts from 25.7% last review) · break-even ~24.5% · URGENT: Sep 6 43%, Sep 10 anomaly $5.44 zero · bids still above Aug 21 approved caps",
    daily: [
      {date: "Sep 6", spend: 7.68, sales: 17.98, orders: 1, clicks: 4},
      {date: "Sep 7", spend: 2.31, sales: 17.98, orders: 1, clicks: 2},
      {date: "Sep 8", spend: 2.33, sales: 0, orders: 0, clicks: 2},
      {date: "Sep 9", spend: 0, sales: 0, orders: 0, clicks: 0},
      {date: "Sep 10", spend: 5.44, sales: 0, orders: 0, clicks: 3}
    ]
  },
  history: [
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
    {done: true, text: “<strong>B0D9YW9DC1 Auto-Discovery — paused</strong> — was $24.41 zero-sale leak, now PAUSED this week (issue resolved from last review).”},
    {done: false, text: “<strong>B0D9YVZFPT Auto SI — escalating pause candidate</strong> — $2.18 spend this window, zero sales, still ENABLED. Last review recommended 'pause or fix'; still ENABLED with escalating spend ($0.37 last window → $2.18 this window, 490% increase). Recommend pause.”},
    {done: false, text: “<strong>SaluSpa ACOS deteriorated to 49.3%</strong> — double break-even ~24.5%, up 23.6 pts from 25.7% last review. Orders -71%, sales -71%. Sep 6 hit 43%, Sep 10 anomaly: $5.44 spent, zero sales. Only 2 orders this window; Sep 7 order solid at 13%.”},
    {done: false, text: “<strong>SaluSpa bids still above Aug 21 approved caps</strong> (Exact ~$0.90 / Broad ~$0.80) — No change since flagged last review. Current drift: 'saluspa inflatable spa filter' exact at $1.59, 'saluspa filter' broad at $2.06, plus 5 others ($0.99–$1.07). Audit and true back to caps.”},
    {done: false, text: “<strong>SaluSpa negative-exact 'saluspa hot tub filter' conflict unresolved</strong> — ENABLED Negative Exact blocks same-term Exact ($0.86) and Broad ($0.50). Likely self-blocking best-intent traffic.”},
    {done: true, text: “<strong>Negative keywords live as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — re-confirmed Sep 11: all seven still ENABLED, no drift.”},
    {done: true, text: “<strong>Generic 'hot tub filter' Broad still paused</strong> — re-confirmed Sep 11, no drift.”},
    {done: true, text: “<strong>B0D9YSNYBG Auto-Discovery paused</strong> — re-confirmed Sep 11: still PAUSED, no spend. B0DZ31B3RP's three campaigns also re-confirmed still PAUSED.”},
    {done: true, text: “<strong>Pause B0D9YSNYBG Manual Exact</strong> — flagged Aug 28, still showing ENABLED in last review but now appears resolved (no spend this window). Confirm state.”},
    {done: false, text: “<strong>Pause B0D9YVZFPT SI trio — continued recommendation</strong> — Auto SI shows $2.18 spend this window (escalating), zero sales. Discovery SI and Sales SI no spend. All three still ENABLED at $8/day budget. Recommend pause all three.”},
    {done: false, text: "<strong>Negative-exact vs exact/broad conflict on \"saluspa hot tub filter\"</strong> — the ENABLED Negative Exact on this term still conflicts with the ENABLED Exact ($0.86) and Broad ($0.50) keywords bidding on the same term, likely self-blocking best-intent traffic."},
    {done: false, text: "<strong>B0DZ31B3RP (SupportRest Plus Twin)</strong> — 14-unit test buy SOLD OUT; the three paused campaigns were the account's best performers. Reactivation needs a real reorder decision from Todd on buying more units — not a restock ETA."},
    {done: false, text: "<strong>Second-container packing list + SKU Economics export</strong> — requested from Douae Aug 21, still outstanding. These set next season's ad plan and the real break-even per SKU."},
    {done: false, text: "<strong>Direct sales-data connection</strong> — the Selling Partner API application is awaiting <em>Amazon's</em> developer approval for external clients. Nothing for Todd to action. Until it clears, total sales, TACOS and margin come from a periodic Seller Central export."}
  ],
  notes: [
    "📉 Sharp decline this window: orders -80% (15→3), spend -66%, ACOS +21.7 pts to 33.7% (was 12%). Sample tiny; only 3 orders total limits trend visibility.",
    "✅ Win: B0DBVZFBFV Auto-Discovery scored $99.99 at 1% ACOS (one-time, likely high-value multi-pack order).",
    "⚠️ SaluSpa at 49.3% ACOS — double the ~24.5% break-even, sharply worse than 25.7% last review. Sep 7 order solid at 13%, but Sep 6 hit 43% and Sep 10 anomaly burned $5.44 with zero sales.",
    "✅ B0D9YW9DC1 Auto-Discovery finally paused (was $24.41 zero-sale leak flagged last review, now resolved).",
    "🧹 B0D9YVZFPT Auto SI escalating ($0.37 → $2.18 spend, still zero sales, ENABLED) — recommend pause this week per 'pause or fix' directive from last review."
  ]
};
