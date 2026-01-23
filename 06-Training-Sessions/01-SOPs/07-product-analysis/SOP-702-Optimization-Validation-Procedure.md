# SOP-702: Optimization Validation Procedure

**Nurise Listing Optimization**

---

## Purpose
Validate that all listing optimization steps have been properly executed, verify the implementation matches DataDive learnings, and confirm measurable results are tracking as expected.

## When to Use
- After completing listing optimization cycle (SOP-301 through SOP-303)
- Before and after major listing changes
- Weekly as part of quality assurance
- When results don't match expectations
- Before presenting results to stakeholders

## Prerequisites
- [ ] All optimization SOPs (301-303) completed
- [ ] Rank Radar set up and tracking (SOP-401/402)
- [ ] Access to DataDive, Seller Central, and analytics
- [ ] At least 7 days of post-optimization data

---

## Procedure

### Phase 1: Pre-Optimization Validation Checklist

Before making any listing changes, verify these foundations are in place:

```
┌─────────────────────────────────────────────────────────────────┐
│                PRE-OPTIMIZATION VALIDATION                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ☐ MKL QUALITY CHECK                                           │
│   ├── Brand names removed ("B" button clicked)                  │
│   ├── Irrelevant keywords filtered out                          │
│   ├── Relevancy threshold set (450+)                            │
│   └── All buckets checked (Cloud, Outlier, Residue)             │
│                                                                  │
│   ☐ COMPETITOR VALIDATION                                        │
│   ├── All 10-15 competitors are same product type               │
│   ├── Same format (6-pack vs 2-pack consistency)                │
│   ├── No unrelated categories mixed in                          │
│   └── Browse nodes verified as matching                         │
│                                                                  │
│   ☐ BASELINE DOCUMENTED                                          │
│   ├── Current organic ranks recorded                            │
│   ├── SEO Leaderboard position noted                            │
│   ├── Current CTR and CVR captured                              │
│   └── Rank Radar highlight set for "Pre-optimization"           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Phase 2: Listing Builder Validation

Verify the listing optimization meets DataDive standards:

**Step 1: Keyword Coverage Audit**

| Check | Target | Your Status |
|-------|--------|-------------|
| Root keywords in title (exact match) | All high-volume roots | ☐ |
| "hot tub filter" exact match | In title | ☐ |
| "type vi" or "type 6" exact match | In title or bullets | ☐ |
| "spa filter" exact match | In title or bullets | ☐ |
| Broad matches converted to exact | Priority keywords | ☐ |

**Step 2: Match Type Verification**

For each priority keyword, verify in Listing Builder:

```
┌───────────────────────────────────────────────────────────────┐
│               MATCH TYPE VERIFICATION                          │
├────────────────────┬───────────┬───────────┬─────────────────┤
│ Keyword            │ Expected  │ Actual    │ Pass/Fail       │
├────────────────────┼───────────┼───────────┼─────────────────┤
│ type vi filter     │ Exact     │           │                 │
│ hot tub filter     │ Exact     │           │                 │
│ spa filter         │ Exact     │           │                 │
│ bestway filter     │ Exact     │           │                 │
│ coleman saluspa    │ Exact     │           │                 │
│ lay-z-spa filter   │ Exact     │           │                 │
│ inflatable hot tub │ Exact     │           │                 │
└────────────────────┴───────────┴───────────┴─────────────────┘
```

**Step 3: SEO Leaderboard Position**

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Leaderboard position | Top 5 | | ☐ |
| Gap to #1 (ranking juice) | <10,000 | | ☐ |
| Indexed keywords (%) | 95%+ | | ☐ |

### Phase 3: Implementation Validation

Verify changes were implemented correctly in Seller Central:

**Step 1: Live Listing Check**

```
LIVE LISTING VERIFICATION
─────────────────────────
☐ Title matches optimized version exactly
☐ Bullets match optimized version exactly
☐ Description matches (if applicable)
☐ Backend search terms populated
☐ No Amazon auto-corrections occurred
☐ Browse node is correct (Hot Tub Accessories > Filters)
```

**Step 2: Amazon Override Detection**

Amazon sometimes auto-corrects listings. Check for:

| Field | Optimized Version | Live Version | Match? |
|-------|-------------------|--------------|--------|
| Title | | | ☐ |
| Bullet 1 | | | ☐ |
| Bullet 2 | | | ☐ |
| Bullet 3 | | | ☐ |
| Bullet 4 | | | ☐ |
| Bullet 5 | | | ☐ |

**If mismatch found:** Submit flat file update to restore optimized copy.

### Phase 4: Tracking Validation

Verify monitoring is properly configured:

**Step 1: Rank Radar Setup Verification**

```
RANK RADAR VALIDATION
─────────────────────
☐ Product ASIN added to tracking
☐ Auto-dive scheduled (frequency: _______)
☐ Keywords highlighting configured
☐ Date highlights set for optimization events
☐ Weekly monitoring cadence established
```

**Step 2: Key Metrics Tracking**

| Metric | Tracking Location | Frequency | Status |
|--------|-------------------|-----------|--------|
| Organic rank (hero keywords) | Rank Radar | Daily | ☐ |
| Sessions | Seller Central | Weekly | ☐ |
| Unit session % (CVR) | Seller Central | Weekly | ☐ |
| Click-through rate | Brand Analytics | Weekly | ☐ |
| Search query performance | Brand Analytics | Weekly | ☐ |

### Phase 5: Results Validation

Measure actual results against expected outcomes:

**Step 1: Indexing Verification (24-48 hours post-change)**

```
INDEXING CHECK
──────────────
☐ Run new Dive on product
☐ Check MKL for updated positions
☐ Verify gaps from Phase 2 now show positions
☐ Document any keywords still not indexed
```

**Step 2: Rank Movement Verification (7-14 days post-change)**

| Keyword | Pre-Opt Rank | Current Rank | Movement | Target Met? |
|---------|--------------|--------------|----------|-------------|
| type vi filter | | | | ☐ |
| hot tub filter | | | | ☐ |
| spa filter | | | | ☐ |
| bestway filter | | | | ☐ |
| inflatable spa filter | | | | ☐ |

**Expected Outcomes:**

```
┌─────────────────────────────────────────────────────────────────┐
│                 EXPECTED RESULTS TIMELINE                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   24-48 Hours Post-Change:                                       │
│   ├── New keywords begin indexing                               │
│   ├── Exact match keywords show improvement                     │
│   └── SEO Leaderboard position may shift                        │
│                                                                  │
│   7-14 Days Post-Change:                                         │
│   ├── Organic ranks stabilize at new positions                  │
│   ├── Gaps should be closed (green → red in MKL)                │
│   └── CTR may begin improving (if images unchanged)             │
│                                                                  │
│   30 Days Post-Change:                                           │
│   ├── Full rank impact visible                                  │
│   ├── Sessions should increase if SEO improved                  │
│   └── Ready for next optimization cycle                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Phase 6: Performance Validation

Compare before/after metrics:

**Step 1: SEO Performance Metrics**

| Metric | 30-Day Before | 30-Day After | Change | Target |
|--------|---------------|--------------|--------|--------|
| Avg. organic rank (hero keywords) | | | | Improved by 5+ positions |
| Keywords in top 10 | | | | +2 or more |
| Keywords indexed | | | | 95%+ of MKL |
| SEO Leaderboard position | | | | Top 5 |

**Step 2: Business Performance Metrics**

| Metric | 30-Day Before | 30-Day After | Change | Notes |
|--------|---------------|--------------|--------|-------|
| Sessions | | | | |
| Unit session % | | | | |
| Total orders | | | | |
| Total revenue | | | | |

### Phase 7: Issue Detection & Escalation

If results don't match expectations, investigate:

```
┌─────────────────────────────────────────────────────────────────┐
│                  TROUBLESHOOTING DECISION TREE                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Keywords not indexing after 48 hours?                          │
│   ├── Check: Is listing active and in stock?                    │
│   ├── Check: Browse node correct?                               │
│   ├── Check: Listing suppressed?                                │
│   └── Action: See SOP-501 (Diagnose Performance Issues)         │
│                                                                  │
│   Ranks not improving after 14 days?                             │
│   ├── Check: Was change actually implemented?                   │
│   ├── Check: Did Amazon override your copy?                     │
│   ├── Check: Is PPC supporting the keywords?                    │
│   └── Action: See SOP-502 (Fix Common Problems)                 │
│                                                                  │
│   Sessions/revenue declining despite rank improvement?           │
│   ├── Check: Seasonality impact?                                │
│   ├── Check: Competitor pricing changes?                        │
│   ├── Check: Review rating changes?                             │
│   └── Action: Focus on CTR/CVR optimization next                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Hot Tub Filter Validation Specifics

### Category-Specific Checks

| Check | Requirement | Status |
|-------|-------------|--------|
| Browse node | "Patio, Lawn & Garden > Pools, Hot Tubs & Supplies > Hot Tub Accessories > Filters" | ☐ |
| Compatibility keywords | SaluSpa, Bestway, Coleman, Lay-Z-Spa, Miami, Helsinki, Paris | ☐ |
| Format keywords | Type VI, Type 6, cartridge, replacement | ☐ |
| Seasonality awareness | Inventory aligned with May-August peak | ☐ |

### Competitor Benchmark Validation

For Type VI hot tub filter niche, verify:

| Metric | Niche Leader | Our Target | Current |
|--------|--------------|------------|---------|
| Ranking juice position | #1 | Top 3 | |
| Reviews | 1,000+ | Comparable | |
| Rating | 4.5+ | 4.5+ | |
| Main image quality | Professional | Match or exceed | |

---

## Validation Report Template

After completing all phases, generate a summary:

```
OPTIMIZATION VALIDATION REPORT
══════════════════════════════════════════════════════════════════

Product: Type VI Hot Tub Filter 6-Pack
ASIN: _________________
Validation Date: _______________
Optimization Completed: _______________

PRE-OPTIMIZATION BASELINE
─────────────────────────
SEO Leaderboard Position: ___
Keywords Indexed: ___/___
Avg. Hero Keyword Rank: ___
Monthly Sessions: ___
Unit Session %: ___%

POST-OPTIMIZATION RESULTS (30 Days)
───────────────────────────────────
SEO Leaderboard Position: ___ (Change: ___)
Keywords Indexed: ___/___ (Change: ___)
Avg. Hero Keyword Rank: ___ (Change: ___)
Monthly Sessions: ___ (Change: __%)
Unit Session %: ___% (Change: ___)

VALIDATION STATUS
─────────────────
☐ PASS - All targets met
☐ PARTIAL - Some targets met, issues identified
☐ FAIL - Significant issues requiring investigation

ISSUES IDENTIFIED
─────────────────
1. _______________________________________________
2. _______________________________________________

RECOMMENDED NEXT STEPS
──────────────────────
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

══════════════════════════════════════════════════════════════════
```

---

## Success Criteria

- [ ] All Phase 1-7 checks completed
- [ ] No critical issues identified
- [ ] Keywords indexing as expected
- [ ] Ranks moving in expected direction
- [ ] Monitoring systems confirmed operational
- [ ] Report generated and documented

## Common Issues

| Problem | Likely Cause | Solution |
|---------|--------------|----------|
| Keywords not indexing | Browse node mismatch | Submit Seller Central case |
| Amazon overriding copy | Catalog data conflict | Upload flat file |
| Ranks declining | Too many simultaneous changes | Revert to previous version |
| No session increase | SEO improved but CTR/CVR issues | Focus on image optimization |
| Wrong keywords appearing | Competitor selection error | Regenerate competitor list |

## Related SOPs

- Previous: [SOP-701: Amazon Product Competitive Analyzer](SOP-701-Amazon-Product-Competitive-Analyzer.md)
- Related: [SOP-301: Listing Analysis](../03-listing-optimization/SOP-301-Listing-Analysis.md)
- Related: [SOP-501: Diagnose Performance Issues](../05-troubleshooting/SOP-501-Diagnose-Performance-Issues.md)
- Related: [SOP-402: Weekly Monitoring Routine](../04-keyword-tracking/SOP-402-Weekly-Monitoring-Routine.md)

---

**Time Estimate:** 30-45 minutes (initial), 15 minutes (subsequent)
**Difficulty:** Intermediate
**Frequency:** After each optimization cycle + weekly spot checks

---

*Nurise Listing Optimization SOP v1.0*
