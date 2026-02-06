# Mode 1: Product Validation Guide

**Purpose:** Screen multiple products (15-50) to determine which are viable to launch

**Last Updated:** January 29, 2026

---

## When to Use Mode 1

Use Product Validation (Mode 1) when you need to:

✅ **Screen a batch of products** from a supplier or category
✅ **Identify winners** from a large product list
✅ **Make launch decisions** based on competitive viability
✅ **Compare products side-by-side** with standardized scoring
✅ **Get GO/MAYBE/NO-GO recommendations** quickly

**Don't use Mode 1 if:**
❌ You only have 1 product to analyze (use Mode 2 instead)
❌ You need complete listing optimization (use Mode 2 instead)
❌ You already know which products to launch and just need copy (use Mode 2 instead)

---

## Mode 1 Workflow

### Step 1: Prepare Input Data

**Required:**
- Product spreadsheet with 15+ products
- Columns: Product ID, Description, Cost (minimum)

**Optional but Recommended:**
- DataDive competitor export (enhances competitive analysis)
- Meeting notes in `/08-Meeting-Notes/` (improves learning)
- Historical analysis data (skill auto-loads if available)

**Supported Spreadsheet Formats:**

The skill auto-detects column names, so any format works:

```csv
Example Format 1 (Bestway):
ITEM#, DESCRIPTION, FOB, Amazon.ca Price, SmartScout_ASIN

Example Format 2 (Coleman):
SKU, ProductName, WholesaleCost, SuggestedRetail, Category

Example Format 3 (Generic):
ProductID, Name, Cost, TargetPrice, Type
```

### Step 2: Invoke Mode 1

**Natural Language Invocations:**
- "Analyze these 18 products for validation"
- "Which of these products should we launch?"
- "Screen this product list from DataDive"
- "Run product validation on attached spreadsheet"

**The skill will auto-detect Mode 1 based on:**
- Product count ≥ 15
- No optimization keywords in request
- Spreadsheet format (batch analysis)

### Step 3: Skill Execution (Behind the Scenes)

**Phase 1: Pre-Analysis Learning**
- Load historical patterns from knowledge base
- Review meeting notes for new insights
- Apply learned scoring adjustments

**Phase 1.5: Mode Detection**
- Confirm Mode 1 (Validation)
- Count products: [X] products detected
- Set workflow to batch analysis

**Phase 2: Data Ingestion**
- Auto-detect spreadsheet columns
- Map to standard fields
- Load DataDive competitor data (if provided)

**Phases 3-8: Analysis & Scoring**
- For each product, calculate 8-factor score:
  1. **Margin Potential** (weight: 25%)
  2. **Competition Level** (weight: 20%)
  3. **Search Volume** (weight: 15%)
  4. **Seasonal Risk** (weight: 10%)
  5. **Complexity** (weight: 10%)
  6. **Review Velocity** (weight: 10%)
  7. **Barrier to Entry** (weight: 5%)
  8. **Strategic Fit** (weight: 5%)

**Phase 9: NOT EXECUTED** (Mode 2 only)

**Output Generation:**
- Comparison table with all products
- Individual product reports
- GO/MAYBE/NO-GO recommendations

### Step 4: Review Output

**Primary Output: Comparison Table**

| Rank | Product | Score | Decision | Margin | Competition | Search Vol | Key Insight |
|------|---------|-------|----------|--------|-------------|------------|-------------|
| 1 | Product A | 8.4 | GO | 55% | Low | 15K | Strong margin, low comp |
| 2 | Product B | 7.8 | GO | 48% | Medium | 22K | High demand, manageable |
| 3 | Product C | 6.5 | MAYBE | 42% | High | 8K | Margin OK but crowded |
| ... | ... | ... | ... | ... | ... | ... | ... |

**Secondary Output: Individual Reports**

For each product, you'll get:
- Detailed scoring breakdown
- Competitive landscape summary
- Risk factors identified
- Launch recommendation rationale

### Step 5: Next Steps

**For GO Products:**
- **Option A:** Launch directly based on validation
- **Option B:** Run Mode 2 (Listing Optimization) for selected products
  - "Now create Product Brief for [Product A]"
  - "Optimize listing for [Product B]"

**For MAYBE Products:**
- Review edge cases manually
- Consider testing with small inventory
- May require additional research

**For NO-GO Products:**
- Archive for future consideration
- Document why they didn't meet threshold
- Learn from patterns for future screening

---

## Mode 1 Output Format

### Format 1: Comparison Table (Primary)

**File:** `{PROJECT}-product-analysis-comparison.md`

**Contains:**
- All products ranked by score
- GO/MAYBE/NO-GO decisions
- Key metrics summary
- Category breakdowns
- Portfolio recommendations

### Format 2: Individual Reports (Secondary)

**Files:** `{PRODUCT_ID}-analysis-report.md` (one per product)

**Contains:**
- 8-factor scoring detail
- Competitive analysis
- Margin calculations
- Risk assessment
- Launch recommendation

### Format 3: Learning Summary

**File:** `analysis-learning-summary.md`

**Contains:**
- New patterns discovered
- Prediction accuracy vs. actuals
- Knowledge base updates
- Recommendations for improvement

---

## Example: 18-Product Validation

**Input:**
- 18 products from supplier spreadsheet
- DataDive exports for top 5 products
- Meeting notes indicating focus on high-margin

**Invocation:**
```
"I have 18 products from DataDive, help me pick the best ones for Todd McDaniel.
Focus on high margins (50%+) and manageable competition."
```

**Execution:**
- Mode 1 auto-detected (18 products)
- Knowledge base loaded Todd's margin preferences
- Applied high-margin weight adjustments
- Processed all 18 products in ~2.5 minutes each

**Output:**
- Comparison table: 6 GO, 7 MAYBE, 5 NO-GO
- Individual reports for all 18
- Top recommendation: Product #58498 (8.7 score, 62% margin, low competition)

**Next Steps:**
- Client reviews comparison table
- Selects 6 GO products for launch
- Optionally requests Mode 2 for listing optimization on top 3

---

## Key Differences: Mode 1 vs Mode 2

| Aspect | Mode 1 (Validation) | Mode 2 (Optimization) |
|--------|---------------------|----------------------|
| **Product Count** | 15-50 products | 1 product (deep dive) |
| **Time per Product** | ~2.5 minutes | ~1-2 hours |
| **Output** | Comparison table + reports | Complete Product Brief |
| **Listing Copy** | NO (decisions only) | YES (title, bullets, description) |
| **Competitive Analysis** | High-level (GO/NO-GO) | Deep (keyword strategy, pricing) |
| **PPC Recommendations** | NO | YES |
| **Implementation Roadmap** | NO | YES (90-day plan) |

**When to combine:**
- Run Mode 1 first (screen 18 products → 6 GO)
- Then Mode 2 on winners (create Product Briefs for top 3)

---

## Tips for Best Results

### Data Quality Matters
✅ **Good:** Complete supplier data with costs, prices, ASINs
❌ **Poor:** Missing costs, no competitor data, vague descriptions

### Provide Context
✅ **Good:** "Screen these 18 products, Todd prefers high margins (50%+), avoid seasonal"
❌ **Poor:** "Analyze these" (skill can't apply client preferences)

### Use DataDive Exports
✅ **Good:** Include DataDive competitor CSV for top candidates
❌ **Acceptable:** Skip DataDive (skill uses SmartScout data from spreadsheet)

### Review Meeting Notes
The skill learns from `/08-Meeting-Notes/`. Include notes like:
- Client feedback on previous launches
- Performance data from live products
- New market insights or strategy changes

---

## Common Questions

### Q: Can I run Mode 1 on fewer than 15 products?
**A:** Yes, but the skill will ask for clarification. With 5-14 products, you could either:
- Screen to pick winners (Mode 1)
- Deep dive on each (Mode 2)
Clarify your intent when prompted.

### Q: What if I don't have DataDive exports?
**A:** Mode 1 works without DataDive. Competitive analysis will be lighter, relying on:
- SmartScout ASIN data (if provided in spreadsheet)
- Historical patterns from knowledge base
- Category-level benchmarks

### Q: How accurate are GO/NO-GO decisions?
**A:** The skill improves with each analysis:
- **First run:** ~70% accuracy (based on industry benchmarks)
- **After 5+ analyses:** ~85% accuracy (learns client preferences)
- **After 20+ analyses:** ~90% accuracy (deep institutional knowledge)

Track actuals in meeting notes to improve predictions.

### Q: Can I adjust scoring weights?
**A:** Yes, the skill learns your preferences:
- **Implicit:** Mention priorities in your request
- **Explicit:** Update `todd-preferences.json` in knowledge base
- **Learning:** Provide feedback in meeting notes on past decisions

### Q: What happens to MAYBE products?
**A:** MAYBE products fall in the 6.0-7.0 score range:
- **High MAYBE (6.8-7.0):** Consider testing with small order
- **Mid MAYBE (6.4-6.7):** Review manually, may need more research
- **Low MAYBE (6.0-6.3):** Borderline NO-GO, typically skip unless strategic

---

## Related Resources

- **[skill.md](../skill.md)** - Full skill documentation
- **[optimization-mode-guide.md](optimization-mode-guide.md)** - Mode 2 deep dive
- **[mode-selection-faq.md](mode-selection-faq.md)** - Choosing between modes
- **[README.md](../README.md)** - Quick start guide

---

**Last Updated:** January 29, 2026
**Version:** 3.0
