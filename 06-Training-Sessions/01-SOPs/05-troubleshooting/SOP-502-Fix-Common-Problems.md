# SOP-502: Fix Common Problems

**Nurise Listing Optimization**

---

## Purpose
Apply the appropriate fix based on diagnosed issues from SOP-501, including browse node corrections, indexing gap resolution, and competitor selection cleanup.

## When to Use
- After completing diagnosis (SOP-501)
- Root cause has been identified
- Ready to implement fix

## Prerequisites
- [ ] Diagnosis complete (SOP-501)
- [ ] Root cause documented
- [ ] DataDive and Seller Central access
- [ ] Listing Builder access

---

## Procedure

### Problem 1: Browse Node Mismatch

**Diagnosis Confirmed:** Your product is in different browse node than competitors

**Fix Steps:**

**Step 1: Identify Correct Node**
1. Document majority node from competitors
2. Note the full path (e.g., "Patio, Lawn & Garden > Pools, Hot Tubs & Supplies > Hot Tub Accessories > Filters")
3. Identify most specific appropriate node

**Step 2: Submit Seller Central Case**
1. Go to **Seller Central** → **Help**
2. Open case for "Product Page" issue
3. Include:
   - Your ASIN
   - Current browse node
   - Requested browse node
   - Competitor ASINs as examples
   - Reason for request

**Step 3: Monitor After Change**
- Wait 24-72 hours for update
- Re-run Dive to verify
- Check if positions start appearing
- Monitor Rank Radar for improvements

**Expected Outcome:** Keywords that showed green should start showing positions within 1-3 days.

---

### Problem 2: Indexing Gaps (Missing Keywords)

**Diagnosis Confirmed:** High-value keywords not in your listing copy

**Fix Steps:**

**Step 1: Open Listing Builder**
1. Navigate to your Dive
2. Open **Listing Builder**
3. Import current listing (if not already)

**Step 2: Identify Missing Keywords**
From your diagnosis, list the gaps:
```
Missing Keywords:
- [Keyword 1] - [Search Volume]
- [Keyword 2] - [Search Volume]
```

**Step 3: Add Keywords to Copy**

| Keyword Priority | Placement |
|-----------------|-----------|
| Highest volume | Title (if space) |
| High volume | Bullets 1-2 |
| Medium volume | Bullets 3-5 |
| Lower volume | Description or backend |

**Step 4: Verify Match Type**
After adding, check Listing Builder shows:
- Exact match (best)
- Exact plural (good)
- Broad match (acceptable)

**Step 5: Follow Safe Update Process**
- See SOP-303 for implementation
- Make 1-2 changes at a time
- Wait 3-5 days between changes

**Expected Outcome:** Keywords should start indexing within 24-48 hours of listing update.

---

### Problem 3: Wrong Competitor Selection

**Diagnosis Confirmed:** Competitors include unrelated products

**Fix Steps:**

**Option A: Manual Cleanup**
1. Go to your Dive
2. Access competitor list
3. Remove unrelated ASINs
4. Add appropriate competitors
5. Regenerate keyword data

**Option B: Auto-Generate New List**
1. In Dive, click **Find Competitors**
2. DataDive selects 15 relevant competitors
3. Review selection before proceeding
4. Confirm all match your product type

**Option C: Filter Existing Data**
If regenerating isn't practical:
1. Open Master Keyword List
2. Use filters:
   - `Contains: "[your product type]"`
   - `Not Contains: "[wrong product type]"`
3. Focus analysis on filtered results

**Expected Outcome:** MKL should show consistent, relevant keywords after cleanup.

---

### Problem 4: Out of Stock / Visibility Issues

**Diagnosis Confirmed:** Product was out of stock or has visibility problems

**Fix Steps:**

**Step 1: Verify Stock Status**
1. Check Seller Central inventory
2. Ensure units are available
3. Confirm listing is active (not suppressed)

**Step 2: Check for Suppression**
1. Go to **Manage Inventory**
2. Look for suppression warnings
3. Address any compliance issues

**Step 3: Re-Index After Restock**
After restocking:
- Positions may take 24-72 hours to return
- Consider PPC support during recovery
- Monitor Rank Radar for position restoration

**Step 4: Prevent Future Stock-Outs**
- Set inventory alerts
- Monitor sales velocity
- Plan for lead times

**Expected Outcome:** Positions should begin recovering within 48-72 hours of restock.

---

### Problem 5: Ranking Decline (Gradual Slip)

**Diagnosis Confirmed:** Keywords slowly dropping positions

**Fix Steps:**

**Step 1: Add Campaign Support**
1. Identify slipping keywords
2. Create or update PPC campaign:
   - Exact match for top keywords
   - Phrase match for variations
3. Increase budget if already running

**Step 2: Check Listing Copy**
Amazon sometimes changes your copy:
1. Compare current live listing to your optimized version
2. If different, submit flat file update
3. Monitor for changes

**Step 3: Review Competition**
1. Check competitor positions in Rank Radar
2. Are they improving?
3. Review their listings for changes
4. Consider differentiation strategy

**Step 4: Optimize Further**
If copy is unchanged:
- Convert broad matches to exact (SOP-302)
- Add supporting keywords
- Improve backend keywords

**Expected Outcome:** Decline should stabilize within 1-2 weeks with campaign support.

---

### Problem 6: Branded Search Skewing Data

**Diagnosis Confirmed:** Brand name keywords distorting analysis

**Fix Steps:**

**Step 1: Filter Brand Terms**
1. In MKL, click **"B"** button
2. Removes branded search terms
3. Re-analyze without distortion

**Step 2: Track Separately (If Needed)**
For your own brand:
1. Create separate tracking
2. Monitor brand keyword positions
3. Don't include in competitive analysis

**Step 3: PPC Strategy for Competitor Brands**
If targeting competitor brand keywords:
- Don't add to copy
- Target in PPC campaigns only
- Test market response before scaling

**Expected Outcome:** Analysis should show accurate competitive positioning after filtering.

---

## Quick Fix Reference Table

| Problem | Primary Fix | Time to Results |
|---------|------------|-----------------|
| Wrong browse node | Seller Central case | 1-3 days |
| Indexing gaps | Add to listing copy | 24-48 hours |
| Wrong competitors | Regenerate dive | Immediate |
| Out of stock | Restock | 48-72 hours |
| Ranking decline | Campaign support | 1-2 weeks |
| Branded skewing | Filter keywords | Immediate |

---

## Prevention Checklist

**Prevent Browse Node Issues:**
- [ ] Check competitor nodes before launch
- [ ] Document your node choice
- [ ] Monitor for Amazon changes

**Prevent Indexing Gaps:**
- [ ] Complete optimization before launch
- [ ] Regular listing audits
- [ ] Monitor Listing Builder coverage

**Prevent Bad Competitor Data:**
- [ ] Verify competitors before diving
- [ ] Use consistent product types
- [ ] Clean brand names from MKL

**Prevent Stock Issues:**
- [ ] Set inventory alerts
- [ ] Plan for lead times
- [ ] Monitor sales velocity

**Prevent Ranking Decline:**
- [ ] Regular Rank Radar monitoring
- [ ] Maintain campaign support
- [ ] Watch for listing changes

---

## Success Criteria
- [ ] Fix implemented for identified problem
- [ ] Change documented
- [ ] Monitoring set up for results
- [ ] Prevention measures in place

## Escalation
If fixes don't work after reasonable time:
- Browse node: Submit follow-up case
- Indexing: Check for listing suppression
- Rankings: Consider product relaunch

## Related SOPs
- Previous: [SOP-501: Diagnose Performance Issues](SOP-501-Diagnose-Performance-Issues.md)
- Related: [SOP-302: Keyword Optimization](../03-listing-optimization/SOP-302-Keyword-Optimization.md)
- Related: [SOP-303: Listing Update Process](../03-listing-optimization/SOP-303-Listing-Update-Process.md)
- Related: [SOP-401: Rank Radar Setup](../04-keyword-tracking/SOP-401-Rank-Radar-Setup.md)

---

**Time Estimate:** Varies by fix (15 minutes - 1 hour)
**Difficulty:** Intermediate to Advanced

---

*Nurise Listing Optimization SOP v1.0*
