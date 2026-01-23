# SOP-303: Listing Update Process

**Nurise Listing Optimization**

---

## Purpose
Safely implement keyword changes in Amazon Seller Central, following best practices to avoid listing suppression or ranking drops.

## When to Use
- After completing keyword optimization (SOP-302)
- Ready to update live listing
- Making incremental changes to existing listing

## Prerequisites
- [ ] Keyword optimization complete (SOP-302)
- [ ] Changes documented
- [ ] Seller Central access
- [ ] Rank Radar set up for monitoring (recommended)

---

## Procedure

### Step 1: Review the Golden Rule
> **Make only 1-2 changes at a time, then wait 3-5 days before making more changes.**

**Why This Matters:**

| Risk | Consequence |
|------|-------------|
| Too many changes at once | Listing suppression |
| Algorithm confusion | Temporary rank drops |
| Indexing issues | Visibility loss |

### Step 2: Prioritize Your Changes
From your optimization document, select:
- **One title change** OR
- **One bullet change** OR
- **Two minor changes** (e.g., two bullet edits)

**Do NOT:**
- Change title, bullets, and description simultaneously
- Add many new keywords at once
- Remove large amounts of copy

### Step 3: Log Into Seller Central
1. Go to Amazon Seller Central
2. Navigate to **Inventory** → **Manage Inventory**
3. Find your product
4. Click **Edit**

### Step 4: Make Your Change
**For Title Changes:**
1. Go to **Product Identity** section
2. Locate the Title field
3. Make your exact change (copy from optimization doc)
4. Double-check spelling and formatting

**For Bullet Changes:**
1. Go to **Description** section
2. Find the specific bullet point
3. Make your exact change
4. Verify character count is within limits

**For Backend Keywords:**
1. Go to **Keywords** tab
2. Update Search Terms field
3. Separate keywords with spaces (not commas)
4. Stay within 250 byte limit

### Step 5: Review Before Saving
Before clicking Save:

- [ ] Change matches your documented optimization
- [ ] No typos or formatting errors
- [ ] Character limits not exceeded
- [ ] Copy still reads naturally
- [ ] No compliance issues

### Step 6: Save and Document
1. Click **Save and finish**
2. Note the date and time of change
3. Update your tracking document:

```
UPDATE LOG
-----------
Date: [Date/Time]
ASIN: [ASIN]
Change Made: [Specific change]
Section: [Title/Bullet/Description/Backend]
Previous: "[Old text]"
New: "[New text]"
Next Review: [Date + 5 days]
```

### Step 7: Verify Change Went Live
After 15-30 minutes:
1. Go to your Amazon product page
2. Hard refresh the page (Ctrl+Shift+R)
3. Verify your change appears
4. If not visible, wait a few hours

**Note:** Some changes may take up to 24 hours to propagate.

### Step 8: Set Up Monitoring
If not already done:
1. Ensure Rank Radar is tracking the product (SOP-401)
2. Note current positions for target keywords
3. Set calendar reminder to review in 3-5 days

### Step 9: Wait Period
During the 3-5 day wait:
- **DO NOT** make additional listing changes
- **DO** monitor positions in Rank Radar
- **DO** check for any suppression notices
- **DO** note any ranking changes

### Step 10: Evaluate Results
After 3-5 days:

**Check Rank Radar:**
| Result | Interpretation | Next Step |
|--------|----------------|-----------|
| Position improved | Change worked | Consider next optimization |
| Position unchanged | Neutral effect | May need more time or different approach |
| Position dropped | May need reverting | Investigate cause |

**Check Listing Builder:**
- Re-import listing
- Verify match types updated
- Check SEO Leaderboard position

---

## Success Criteria
- [ ] Change made in Seller Central
- [ ] Change verified on live listing
- [ ] Update logged in tracking document
- [ ] Monitoring set up
- [ ] 3-5 day wait period observed
- [ ] Results evaluated

## Common Issues

| Problem | Solution |
|---------|----------|
| Change not showing | Wait 24 hours, then contact support |
| Listing suppressed | Review for compliance issues, submit case |
| Rankings dropped | May be temporary; wait full 5 days |
| Can't edit field | May be locked by brand registry; check permissions |

## What NOT to Do

- Copy/paste entire new listing over existing
- Change title, bullets, AND description at once
- Make dramatic keyword additions
- Remove large amounts of existing copy
- Ignore the waiting period

## Safe Change Schedule Example

```
Week 1, Monday: Title change → Wait
Week 1, Friday: Review results
Week 2, Monday: Bullet 1 change → Wait
Week 2, Friday: Review results
Week 3, Monday: Bullet 2 change → Wait
...continue pattern...
```

## Related SOPs
- Previous: [SOP-302: Keyword Optimization](SOP-302-Keyword-Optimization.md)
- Next: [SOP-402: Weekly Monitoring Routine](../04-keyword-tracking/SOP-402-Weekly-Monitoring-Routine.md)
- Related: [SOP-501: Diagnose Performance Issues](../05-troubleshooting/SOP-501-Diagnose-Performance-Issues.md) (if problems occur)

---

**Time Estimate:** 15 minutes (plus 3-5 day wait)
**Difficulty:** Beginner

---

*Nurise Listing Optimization SOP v1.0*
