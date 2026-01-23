# SOP-501: Diagnose Performance Issues

**Nurise Listing Optimization**

---

## Purpose
Systematically identify the root cause when a listing isn't performing as expected, including browse node mismatches, indexing gaps, and visibility problems.

## When to Use
- Listing not ranking for expected keywords
- All keywords showing green (not indexed)
- Positions stuck at 101+
- Rankings declining unexpectedly
- Competitor data looks inconsistent

## Prerequisites
- [ ] DataDive account access
- [ ] Product ASIN and active Dive
- [ ] Rank Radar set up (for position data)
- [ ] Understanding of expected keywords

---

## Procedure

### Step 1: Identify the Symptom
What are you observing?

| Symptom | Likely Cause | Go To |
|---------|--------------|-------|
| All keywords green (not indexed) | Browse node or stock | Step 2 |
| Inconsistent keyword positions | Wrong competitor selection | Step 3 |
| Missing positions for relevant keywords | Indexing gaps | Step 4 |
| Keywords don't match product type | Filter/cleanup needed | Step 5 |
| Gradual ranking decline | Campaign or listing issue | Step 6 |

### Step 2: Browse Node Diagnostic

**2a. Check Your Browse Node**
1. Navigate to **Deep Dive** for your product
2. Find your browse node listing
3. Note the full category path

**2b. Compare to Competitors**
1. In Master Keyword List, hover over competitor ASINs
2. Browse node displays in tooltip
3. Compare patterns:

| Pattern | Interpretation |
|---------|----------------|
| All same node | Standard for niche |
| Mixed specific/broad | Some are major brands |
| Your product different | **Potential mismatch** |
| Very broad node | Big brand privilege |

**2c. Document Findings**
```
BROWSE NODE CHECK
-----------------
Your Node: [Path]
Competitor 1: [Path]
Competitor 2: [Path]
Competitor 3: [Path]
Match: Yes / No
Issue: [Description]
```

### Step 3: Competitor Selection Diagnostic

**Symptoms of Bad Selection:**
- Random product types in MKL
- Keywords for unrelated products
- Positions only for wrong terms

**3a. Review Competitor List**
1. Go to your Dive
2. Check competitor ASINs selected
3. Verify they are:
   - Same product type
   - Same format (single pack, multi-pack, etc.)
   - Not unrelated items

**3b. Look for These Problems**
- [ ] Different product categories mixed
- [ ] Brand variations included incorrectly
- [ ] Items from parent listing not relevant

**3c. If Problems Found**
Option A: Remove and reselect competitors
Option B: Use "Find Competitors" to auto-generate 15
Option C: Filter keywords to focus on relevant terms

### Step 4: Indexing Gap Diagnostic

**4a. Set Up Clean View**
1. Open Master Keyword List
2. Remove brand names (click "B")
3. Set search volume threshold (450+)

**4b. Invert the List**
1. Click "Invert"
2. Green (not indexed) keywords rise to top
3. These are your gaps

**4c. Identify Priority Gaps**

| Search Volume | Competitors Rank? | Priority |
|---------------|-------------------|----------|
| High (5,000+) | Yes | CRITICAL |
| High (5,000+) | Some | HIGH |
| Medium (1,000-5,000) | Yes | MEDIUM |
| Low (<1,000) | Yes | LOW |

**4d. Document Gaps**
```
INDEXING GAPS
-------------
Critical:
- [Keyword] - [Search Vol] - Not in copy
- [Keyword] - [Search Vol] - Not in copy

High:
- [Keyword] - [Search Vol] - Broad match only

Actions Needed:
- [Description]
```

### Step 5: Stock/Visibility Diagnostic

**5a. Quick Stock Check**
When all keywords show green, verify:

1. **Listing Active?** - Check Amazon product page
2. **In Stock?** - Check inventory level
3. **Suppressed?** - Check for listing warnings
4. **Correct ASIN?** - Verify child vs parent

**5b. Variation Check**
If product has variations:
- DataDive tracks from parent level
- Check if correct child is being analyzed
- Pool pump keywords in hot tub filter analysis = variation issue

### Step 6: Ranking Decline Diagnostic

**6a. Review Rank Radar**
1. Open heat map
2. Look for pattern:
   - When did decline start?
   - Gradual or sudden?
   - Specific keywords or all?

**6b. Check Potential Causes**

| Cause | Evidence |
|-------|----------|
| Stock out | Gap in data, then recovery |
| Copy changed | Amazon auto-changes sometimes |
| Browse node shift | New node appearing |
| Competition | Competitors improving |
| Campaign pause | IR gaps appearing |

**6c. Cross-Reference**
- Check Seller Central for any changes
- Review campaign performance
- Check for listing updates you didn't make

### Step 7: Document Your Diagnosis

```
DIAGNOSTIC REPORT
-----------------
Date: [Date]
ASIN: [ASIN]

Symptom: [What was observed]
Root Cause: [What was found]
Evidence: [Supporting data]

Recommended Fix:
- [Action 1]
- [Action 2]

Next Steps: See SOP-502 for fixes
```

---

## Diagnostic Checklists

### Quick Browse Node Check
- [ ] Compare your node to top 5 competitors
- [ ] Are you in most specific relevant node?
- [ ] Do top sellers share similar nodes?

### Quick Indexing Check
- [ ] Run MKL with clean competitors
- [ ] Invert list to see gaps
- [ ] Note high-volume missing keywords
- [ ] Verify in Listing Builder

### Quick Competitor Check
- [ ] All competitors same product type?
- [ ] No unrelated items?
- [ ] Keyword positions make sense?

### Quick Visibility Check
- [ ] Listing active on Amazon?
- [ ] Inventory available?
- [ ] No suppression warnings?
- [ ] Correct child ASIN tracked?

---

## Common Diagnostic Patterns

| Pattern | Meaning |
|---------|---------|
| All green, competitors ranking | Browse node mismatch |
| Random keywords appearing | Bad competitor selection |
| High volume gaps | Indexing/copy issue |
| Gradual slip, no stock issue | Needs campaign support |
| Sudden drop all keywords | Check for listing changes |

## Success Criteria
- [ ] Root cause identified
- [ ] Evidence documented
- [ ] Fix path determined
- [ ] Ready for SOP-502 (Fix Common Problems)

## Related SOPs
- Previous: [SOP-402: Weekly Monitoring Routine](../04-keyword-tracking/SOP-402-Weekly-Monitoring-Routine.md)
- Next: [SOP-502: Fix Common Problems](SOP-502-Fix-Common-Problems.md)
- Related: [SOP-301: Listing Analysis](../03-listing-optimization/SOP-301-Listing-Analysis.md)

---

**Time Estimate:** 20-30 minutes
**Difficulty:** Intermediate

---

*Nurise Listing Optimization SOP v1.0*
