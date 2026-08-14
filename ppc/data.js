// PPC Hub data — rewritten by the Monday/Friday automated review (do not hand-edit during the week).
// Money in CAD. history[] grows one row per review week (newest first).
window.PPC_DATA = {
  window: "Aug 9–13, 2026 (Amazon data lags ~2 days)",
  updated: "Friday, Aug 14, 2026",
  account: {
    spend: 322.27, sales: 1089.80, orders: 15, clicks: 346,
    acos: "30%", acosClass: "good", acosSub: "healthy vs 40–45% ceiling",
    spendSub: "≈ $64/day · 14 campaigns with spend", clicksSub: "33 campaigns in account"
  },
  bestPerformer: "B0DBVZFBFV — 3 campaigns spent $80.42 for $869.91 in sales (9 orders, ~9% ACOS). 80% of the account's ad sales this week.",
  biggestLeak: "B0D9YW9DC1 Auto‑Discovery — $25.38 spent, zero sales, still enabled. Pause requested Aug 14 (missed from the original 6-campaign pause list).",
  campaigns: [
    {name: "SaluSpa Filter (B08R11D8NJ)", spend: 42.60, sales: 89.90, orders: 5},
    {name: "B0DBVZFBFV - Product Targeting", spend: 40.58, sales: 389.96, orders: 4},
    {name: "B0CDXN72C4 - Product Targeting (paused Aug 13)", spend: 32.13, sales: 0, orders: 0},
    {name: "B0D9YW9DC1 - Product Targeting (paused Aug 13)", spend: 31.87, sales: 0, orders: 0},
    {name: "B0DBVZFBFV - Auto - Discovery", spend: 29.83, sales: 379.96, orders: 4},
    {name: "B0D9YSNYBG - Product Targeting (paused Aug 13)", spend: 29.13, sales: 0, orders: 0},
    {name: "B0CDXN72C4 - Auto - Discovery (paused Aug 13)", spend: 25.83, sales: 0, orders: 0},
    {name: "B0D9YW9DC1 - Auto - Discovery (still enabled)", spend: 25.38, sales: 0, orders: 0},
    {name: "B0D9YW2776 - Product Targeting (paused Aug 13)", spend: 25.04, sales: 0, orders: 0},
    {name: "B0D9YW2776 - Auto - Discovery (paused Aug 13)", spend: 23.97, sales: 0, orders: 0},
    {name: "B0DBVZFBFV - Manual Exact", spend: 10.01, sales: 99.99, orders: 1},
    {name: "B0D9YSNYBG - Auto - Discovery", spend: 4.38, sales: 129.99, orders: 1},
    {name: "B0D9YVZFPT - Auto SI", spend: 0.95, sales: 0, orders: 0},
    {name: "B0D9YW2776 - Manual Exact", spend: 0.57, sales: 0, orders: 0}
  ],
  saluspa: {
    meta: "ENABLED · $15/day budget · down-only bidding (all per plan, live since Aug 13)",
    daily: [
      {date: "Aug 9", spend: 7.33, sales: 0, orders: 0, clicks: 3},
      {date: "Aug 10", spend: 10.30, sales: 35.96, orders: 2, clicks: 3},
      {date: "Aug 11", spend: 7.61, sales: 0, orders: 0, clicks: 2},
      {date: "Aug 12", spend: 7.68, sales: 17.98, orders: 1, clicks: 3},
      {date: "Aug 13", spend: 9.68, sales: 35.96, orders: 2, clicks: 4}
    ]
  },
  history: [
    {week: "Aug 9–13, 2026", spend: 322.27, sales: 1089.80, orders: 15, acos: "30%"}
  ],
  actions: [
    {done: true, text: "<strong>Bidding strategy → down-only</strong> on SaluSpa — done Aug 13."},
    {done: true, text: "<strong>Negative keywords added as Negative Phrase</strong> (mspa, m spa, intex, avenli, wave spa, hose filter, filtre) — done Aug 13."},
    {done: true, text: "<strong>Exact-match winners at $1.40</strong> (“saluspa hot tub filter”, “saluspa inflatable spa filter”) — done Aug 13."},
    {done: true, text: "<strong>Broad bids to $1.30</strong> + generic “hot tub filter” Broad paused — done Aug 13."},
    {done: true, text: "<strong>Budget $8 → $15/day</strong> on SaluSpa — done Aug 13."},
    {done: true, text: "<strong>6 zero-sale campaigns paused</strong> — they were burning ~$41/day (≈$1,200/month now saved) — done Aug 13."},
    {done: false, text: "<strong>Pause B0D9YW9DC1 Auto-Discovery</strong> — 7th zero-sale campaign, found in the Aug 14 whole-account sweep ($25.38 this week, zero sales)."},
    {done: false, text: "<strong>Reactivate the three B0DZ31B3RP campaigns when restocked</strong> — best performers in the account (11% ACOS), paused only for stockout. Restock date needed."},
    {done: false, text: "<strong>Todd authorizes SP-API access</strong> (one click, 5 min) — unlocks total sales, TACOS, margin and inventory on this page."}
  ],
  notes: [
    "🏆 Win of the week: the 6 zero-sale campaigns were burning $163.87 over Aug 9–12 (~$41/day, ≈$1,200/month). The Aug 13 pause cut that same day to $4.10 — waste stopped immediately.",
    "🔍 Watch item: SaluSpa average CPC came out to ~$2.84 vs bids capped at $1.40 — checking placement multipliers next review.",
    "📅 All optimization changes went live Aug 13, so next Friday is the first clean before/after read.",
    "⏳ Season note: these products sell through late September — sell-through beats ACOS perfection from here on."
  ]
};
