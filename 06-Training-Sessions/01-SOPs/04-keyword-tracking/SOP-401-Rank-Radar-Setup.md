# SOP-401: Rank Radar Setup

**Nurise Listing Optimization**

---

## Purpose
Set up keyword position tracking for your products using DataDive Rank Radar, enabling ongoing monitoring of organic rankings and PPC performance.

## When to Use
- After optimizing a listing (SOP-302)
- When launching a new product
- When starting competitor tracking
- Setting up monitoring for existing products

## Prerequisites
- [ ] DataDive account access
- [ ] Amazon Seller Central account logged in
- [ ] Product has an active Dive in Niche Pipeline
- [ ] Master Keyword List cleaned and filtered

---

## Procedure

### Step 1: Connect Amazon Account (First Time Only)
If not already connected:

1. Go to **Account** → **Amazon**
2. Ensure you're logged into Seller Central in another tab
3. Follow the pop-up prompts to grant permissions
4. For multi-brand accounts: Select the brand from dropdown

**Data Now Available:**
- Search Impression Share (SIS)
- Search Query Performance (SQP)
- PPC Campaign Data
- Conversion Reports

### Step 2: Navigate to Rank Radar Creation
1. Go to **Niche Pipeline**
2. Open the Dive for your product
3. Click **Create Rank Radar**

### Step 3: Clean Keywords Before Tracking
Before finalizing, ensure your keyword list is relevant:

**3a. Remove Branded Terms**
- Click the **"B"** button to exclude brand names
- Unless specifically tracking brand performance

**3b. Set Search Volume Threshold**
- Minimum: **450** search volume
- Lower volume keywords go to Residue

**3c. Filter for Relevance**
- Remove keywords for wrong product types
- Ensure good market fit keywords remain

### Step 4: Set Up Tracking
1. Confirm ASIN selection
2. Review keywords to be tracked
3. Click to create Rank Radar
4. Note: Position data may take **up to 24 hours** to populate

### Step 5: Configure Competitor Tracking (Optional)
You can track competitor ASINs without account access:

1. Add competitor ASINs to the same Rank Radar
2. Their positions will be tracked alongside yours
3. Useful for benchmarking and opportunity identification

### Step 6: Verify Initial Setup
After 24 hours, check:

1. Heat map is displaying data
2. Keywords are populating with positions
3. PPC data is flowing (if applicable)
4. SQP data is available

### Step 7: Document Baseline
Record your starting positions:

```
RANK RADAR BASELINE
-------------------
Date: [Date]
ASIN: [ASIN]
Keywords Tracked: [Number]

Key Positions:
- [Top keyword 1]: Position [X]
- [Top keyword 2]: Position [X]
- [Top keyword 3]: Position [X]

Notes: [Any observations]
```

---

## Position Reference Guide

| Position | Page | Status |
|----------|------|--------|
| 1-10 | Page 1 Top | Excellent |
| 11-20 | Page 1 Bottom | Good |
| 21-45 | Page 2 | Acceptable |
| 46-75 | Page 3 | Needs Work |
| 76-100 | Page 4+ | Poor |
| 101+ | Deep | Critical |

---

## Success Criteria
- [ ] Amazon account connected (if first time)
- [ ] Rank Radar created for product
- [ ] Keywords cleaned before tracking
- [ ] Initial positions populating
- [ ] Baseline documented
- [ ] Ready for ongoing monitoring (SOP-402)

## Common Issues

| Problem | Solution |
|---------|----------|
| No data after 24 hours | Verify ASIN is active, check dive setup |
| Hit keyword limits | Archive low-volume keywords (<450 SV) |
| PPC data not showing | Ensure Amazon connection is complete |
| Competitor not tracking | Add their ASIN separately to Rank Radar |

## Managing Keyword Limits

If you exceed your subscription limits:

1. Filter: `Search Volume < 450`
2. Select filtered keywords
3. Choose **Archive** action
4. This frees up tracking capacity

## What's Tracked

| Data Type | Source |
|-----------|--------|
| Organic Position | DataDive crawling |
| Impression Rank | Amazon PPC data |
| Campaign Type | Your Seller Central |
| Sales/Spend | PPC integration |
| CTR/CVR | SQP data |

## Related SOPs
- Previous: [SOP-303: Listing Update Process](../03-listing-optimization/SOP-303-Listing-Update-Process.md)
- Next: [SOP-402: Weekly Monitoring Routine](SOP-402-Weekly-Monitoring-Routine.md)
- Related: [SOP-501: Diagnose Performance Issues](../05-troubleshooting/SOP-501-Diagnose-Performance-Issues.md)

---

**Time Estimate:** 15-20 minutes (plus 24 hours for data)
**Difficulty:** Beginner

---

*Nurise Listing Optimization SOP v1.0*
