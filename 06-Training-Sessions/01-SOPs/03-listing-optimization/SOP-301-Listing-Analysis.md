# SOP-301: Listing Analysis

**Nurise Listing Optimization**

---

## Purpose
Import an existing listing into DataDive Listing Builder, analyze keyword coverage gaps, and compare your listing's SEO strength against competitors.

## When to Use
- Optimizing an existing Amazon listing
- Checking why a listing isn't ranking well
- Preparing for keyword optimization
- Competitor benchmarking

## Prerequisites
- [ ] DataDive account with Listing Builder access
- [ ] Product ASIN ready
- [ ] Dive completed on the product (or create new one)

---

## Procedure

### Step 1: Create or Open a Dive
1. Go to **Niche Pipeline**
2. If dive exists: Open it
3. If new: Create dive with your ASIN
4. Wait for research to complete

### Step 2: Clean the Master Keyword List
Before analyzing, ensure MKL is relevant:

**2a. Remove Brand Names**
- Click the **"B"** button
- Excludes branded search terms

**2b. Set Search Volume Threshold**
- Set minimum to **450**
- Moves low-volume to Residue

**2c. Filter for Product Type**
Use filters if needed:
```
Contains: "hot tub filter"
Not Contains: "pool pump"
```

### Step 3: Navigate to Listing Builder
1. From your dive, click **Listing Builder**
2. Select **Populate with ASIN**
3. Enter your product's ASIN
4. Click **Import**
5. Wait for current listing copy to load

### Step 4: Review SEO Leaderboard
The Leaderboard shows your ranking vs competitors:

| Position | Interpretation |
|----------|----------------|
| #1-3 | Strong keyword coverage |
| #4-7 | Average coverage, room to improve |
| #8+ | Significant gaps exist |

Note your current position for tracking improvement later.

### Step 5: Analyze Coverage by Section
Review each listing section:

| Column | What It Shows |
|--------|---------------|
| Title | Keywords found in title |
| Bullets | Keywords in bullet points |
| Description | Keywords in product description |
| Backend | Keywords in search terms |

**Color Coding:**
- **Green** = Exact match found
- **Gray** = Not in copy

### Step 6: Identify High-Priority Gaps
Look for keywords where:
1. High search volume (1,000+)
2. Competitors have coverage (green)
3. You don't have coverage (gray)

**Gap Priority Matrix:**

| Search Volume | Competitors Have | Your Priority |
|---------------|------------------|---------------|
| High (5,000+) | Yes | CRITICAL |
| High (5,000+) | Some | HIGH |
| Medium (1,000-5,000) | Yes | MEDIUM |
| Low (<1,000) | Yes | LOW |

### Step 7: Check Match Types
For keywords you DO have, verify match type:

| Match Type | Meaning | Value |
|------------|---------|-------|
| Exact Match | Perfect phrase in copy | Best |
| Exact Plural | Plural form found | Good |
| Broad Match | Words present, not exact | Weak |
| Broad Plural | Plural words, scattered | Weakest |

**Focus Areas:**
- Convert "Broad" to "Exact" for top keywords
- Broad match for high-volume = Quick win opportunity

### Step 8: Review Root Usage
Check the **Root Usage** section:
1. Shows which root words are in your copy
2. Indicates match type for each root
3. Reveals coverage gaps at the root level

**Example Analysis:**
```
Root: "type vi filter"
Expected: Exact match in title
Found: Broad plural in bullets
Action: Add exact phrase to title
```

### Step 9: Document Gap Findings
Create a list of gaps to address:

```
HIGH PRIORITY GAPS:
1. "hot tub filter type vi" - 8,500 SV - Missing from Title
2. "bestway saluspa filter" - 3,200 SV - Broad match, needs exact

MEDIUM PRIORITY:
3. "coleman hot tub filter" - 2,100 SV - Not in title
4. "lay-z-spa filter replacement" - 1,800 SV - Missing entirely
```

### Step 10: Compare Competitor Listings
Review top competitors' coverage:
1. Click on competitor ASINs
2. Note where they have exact matches
3. Identify patterns in their keyword placement
4. Learn from their title structures

---

## Success Criteria
- [ ] Listing imported successfully
- [ ] SEO Leaderboard position noted
- [ ] Coverage gaps identified and documented
- [ ] Match types reviewed for top keywords
- [ ] Priority list of gaps created
- [ ] Ready for optimization (SOP-302)

## Common Issues

| Problem | Solution |
|---------|----------|
| Listing shows all green (not indexed) | Check browse node, stock, suppression |
| Coverage looks good but not ranking | May be browse node issue (SOP-501) |
| Can't import listing | Verify ASIN is correct, listing is active |
| Competitors have wrong products | Clean competitor selection, regenerate |

## Red Flags During Analysis

| Sign | What It Means |
|------|---------------|
| All keywords "not indexed" | Browse node mismatch or stock issue |
| Zero positions for main keywords | Indexing problems |
| Competitors at 101+ for all | May be new/restricted niche |

## Related SOPs
- Previous: [SOP-203: Pipeline Management](../02-product-validation/SOP-203-Pipeline-Management.md)
- Next: [SOP-302: Keyword Optimization](SOP-302-Keyword-Optimization.md)
- Related: [SOP-501: Diagnose Performance Issues](../05-troubleshooting/SOP-501-Diagnose-Performance-Issues.md)

---

**Time Estimate:** 20 minutes
**Difficulty:** Intermediate

---

*Nurise Listing Optimization SOP v1.0*
