# SOP-701: Amazon Product Competitive Analyzer

**Nurise Product Analysis**

---

## Purpose
Use the AI-powered Amazon Product Competitive Analyzer skill to evaluate product viability, calculate margins, score opportunities, and generate GO/NO-GO decisions for potential hot tub, spa, and pool equipment products.

## When to Use
- Evaluating new supplier product lines (Bestway, Coleman, etc.)
- Conducting competitive analysis for potential inventory
- Making data-driven GO/NO-GO decisions
- Building product portfolio recommendations
- Preparing investment decisions for product orders

## Prerequisites
- [ ] Claude Code access with the skill installed
- [ ] Product catalog CSV (from supplier)
- [ ] DataDive competitor exports (niche-{CODE}-competitors.csv)
- [ ] Access to project knowledge base files
- [ ] Meeting notes documented in 08-Meeting-Notes/

---

## System Overview

### What the Analyzer Does

The skill is a **self-learning analysis system** that:

1. Analyzes products from any supplier catalog
2. Processes DataDive competitive research automatically
3. Applies learned patterns from previous analyses
4. Calculates 8-factor scoring model
5. Generates GO/NO-GO decisions with confidence levels
6. Outputs comparison tables and detailed reports

### Decision Framework

```
┌─────────────────────────────────────────────────────────────────┐
│                    4-TIER MARGIN EVALUATION                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│    16%+ Margin    ─────────────────►  STRONG GO                 │
│    (Preferred)                        Priority Order             │
│                                                                  │
│    15%+ Margin    ─────────────────►  GO                        │
│    (Minimum)                          Proceed with Analysis      │
│                                                                  │
│    10-15% Margin  ─────────────────►  SPECIAL REVIEW            │
│    (Review Zone)                      Additional Validation      │
│                                                                  │
│    <10% Margin    ─────────────────►  NO GO                     │
│    (Below Target)                     Auto-Reject                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Procedure

### Step 1: Prepare Input Data

**1a. Product Catalog CSV**

Ensure your supplier catalog has minimum required columns:

| Required | Column Names Accepted |
|----------|----------------------|
| Product ID | ITEM#, SKU#, Product_ID, ItemNumber |
| Description | DESCRIPTION, Product_Name, Title |
| Cost | FOB, Cost, Unit_Cost, Wholesale_Price |

**Optional columns:** ASIN, Amazon_Price, UPC, PRODUCT_TYPE, ORDER_QTY

**Example for Hot Tub Filter Products:**
```csv
ITEM#, DESCRIPTION, FOB, Amazon.ca Price, SmartScout_ASIN, PRODUCT_TYPE
58476, Type VI Filter Cartridge 6-Pack, 12.50, 49.99, B0D9YXVSHK, Hot Tub Filters
58477, SaluSpa Type VI Replacement 2-Pack, 5.25, 22.99, B0C7XXXXX, Hot Tub Filters
```

**1b. DataDive Competitor Export**

Export from DataDive and place in Downloads folder:
- File pattern: `niche-{CODE}-competitors.csv`
- Required columns: ASIN, Brand, Rating, Reviews, Price, Sales

### Step 2: Run the Analysis

**Invoke the Skill:**

```
"Analyze these [X] products from [Supplier]-Catalog.csv using
the Amazon Product Competitive Analyzer skill"
```

**For hot tub filter products specifically:**
```
"Analyze the Type VI hot tub filter products from the Bestway catalog.
Focus on spa filter and pool equipment categories."
```

### Step 3: Review the 8-Phase Analysis Process

The analyzer automatically executes this workflow:

```
┌─────────────────────────────────────────────────────────────────┐
│                     ANALYSIS WORKFLOW DIAGRAM                    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
         ┌────────────────────────────────────────┐
         │  PHASE 0: Pre-Analysis Setup           │
         │  • Load knowledge base                  │
         │  • Check for new meeting notes          │
         │  • Update preferences                   │
         └────────────────────────────────────────┘
                              │
                              ▼
         ┌────────────────────────────────────────┐
         │  PHASE 1: Data Ingestion               │
         │  • Auto-detect CSV format              │
         │  • Map columns to standard schema      │
         │  • Cross-reference with DataDive       │
         └────────────────────────────────────────┘
                              │
                              ▼
         ┌────────────────────────────────────────┐
         │  PHASE 2: Competitive Analysis         │
         │  • Parse 10-20 competitors             │
         │  • Classify competition strength       │
         │  • Identify opportunities (FBA gaps)   │
         └────────────────────────────────────────┘
                              │
                              ▼
         ┌────────────────────────────────────────┐
         │  PHASE 3: Financial Modeling           │
         │  • Calculate landed costs              │
         │  • Model pricing scenarios             │
         │  • Apply 4-tier margin thresholds      │
         └────────────────────────────────────────┘
                              │
                              ▼
         ┌────────────────────────────────────────┐
         │  PHASE 4: Pattern Matching             │
         │  • Check against 8+ learned patterns   │
         │  • Apply scoring adjustments           │
         │  • Identify FBM→FBA opportunities      │
         └────────────────────────────────────────┘
                              │
                              ▼
         ┌────────────────────────────────────────┐
         │  PHASE 5: Scoring & Decision           │
         │  • Calculate 8-factor weighted score   │
         │  • Determine GO/NO-GO decision         │
         │  • Assign confidence level             │
         └────────────────────────────────────────┘
                              │
                              ▼
         ┌────────────────────────────────────────┐
         │  PHASE 6: Output Generation            │
         │  • Update comparison table             │
         │  • Generate individual reports         │
         │  • Document learning insights          │
         └────────────────────────────────────────┘
                              │
                              ▼
         ┌────────────────────────────────────────┐
         │  PHASE 7: Feedback Loop                │
         │  • Log predictions for validation      │
         │  • Track decisions for learning        │
         │  • Queue for weight adjustments        │
         └────────────────────────────────────────┘
                              │
                              ▼
         ┌────────────────────────────────────────┐
         │  PHASE 8: Continuous Improvement       │
         │  • Update knowledge base               │
         │  • Refine patterns                     │
         │  • Improve future accuracy             │
         └────────────────────────────────────────┘
```

### Step 4: Understand the 8-Factor Scoring Model

Each product is scored using weighted factors:

```
┌──────────────────────────────────────────────────────────────────┐
│                    8-FACTOR SCORING MODEL                         │
├───────────────────────────────┬──────────────────────────────────┤
│ Factor                        │ Weight │ What It Measures         │
├───────────────────────────────┼────────┼──────────────────────────┤
│ 1. Margin Viability           │  25%   │ Phase 1 margin vs 16%    │
│ 2. Competition Strength       │  20%   │ Competitor intensity     │
│ 3. FBA Capability             │  15%   │ FBM→FBA opportunity      │
│ 4. Rating & Reviews           │  10%   │ Review quality/quantity  │
│ 5. Seasonality Risk           │  10%   │ Peak season dependency   │
│ 6. Supply Gap Opportunity     │  10%   │ Market availability      │
│ 7. Freight Optimization       │   5%   │ Container efficiency     │
│ 8. Brand Approval             │   5%   │ Listing restrictions     │
└───────────────────────────────┴────────┴──────────────────────────┘

SCORE INTERPRETATION:
├── 85-100 points: STRONG GO (High confidence)
├── 70-84 points:  GO (Proceed with validation)
├── 55-69 points:  CONDITIONAL GO (Requires additional review)
├── 40-54 points:  WEAK GO / HOLD (Significant concerns)
└── <40 points:    NO GO (Do not pursue)
```

### Step 5: Interpret the Comparison Table Output

The analyzer generates a master comparison table:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                      PRODUCT COMPARISON TABLE EXAMPLE                            │
├──────┬─────────┬───────────────────┬───────┬───────────┬─────────┬─────────────┤
│ Rank │ ID      │ Product           │ Score │ Decision  │ Revenue │ Key Risk    │
├──────┼─────────┼───────────────────┼───────┼───────────┼─────────┼─────────────┤
│  1   │ 58476   │ Type VI 6-Pack    │  81   │ STRONG GO │ $62K    │ Seasonality │
│  2   │ 58477   │ SaluSpa 2-Pack    │  71   │ GO        │ $36K    │ Competition │
│  3   │ 58478   │ Coleman Filter    │  63   │ COND GO   │ TBD     │ FBA needed  │
│  4   │ 58479   │ Lay-Z-Spa Filter  │  45   │ WEAK GO   │ $8K     │ Low margin  │
│  5   │ 58480   │ Generic Filter    │  36   │ NO GO     │ N/A     │ 7% margin   │
└──────┴─────────┴───────────────────┴───────┴───────────┴─────────┴─────────────┘
```

### Step 6: Review Individual Product Reports

For each analyzed product, 3 reports are generated:

| Report | Content |
|--------|---------|
| EXECUTIVE-SUMMARY-Product-{ID}.md | Decision, revenue, investment, key actions, timeline |
| COMPETITIVE-LANDSCAPE-Product-{ID}.md | Competitor analysis, positioning, buy box strategy |
| FINANCIAL-MODEL-Product-{ID}.md | Cost structure, margin scenarios, ROI calculations |

### Step 7: Log Decisions for Learning

After reviewing analysis, provide feedback:

**When making a decision:**
```
"Todd decided GO on Product 58476 (Type VI 6-Pack filter)"
```

**When results come in:**
```
"Product 58476: $78K revenue after 6 months, 48% margin, ranked #3"
```

This feedback improves future prediction accuracy.

---

## Hot Tub Filter Product Considerations

### Category-Specific Patterns

For spa and pool equipment, the analyzer applies these learned patterns:

| Pattern | Condition | Score Impact |
|---------|-----------|--------------|
| Seasonal High-Margin | 70-80% May-Aug + 50%+ margin | +5 points |
| FBM→FBA Conversion | FBM listing + 100+ reviews + 4.5+ rating | +15 points |
| Supply Gap | Limited availability + existing demand | +10 points |
| Canadian Tire Anchor | CT price exists = Amazon can price higher | +8 points |

### Seasonality Considerations

```
Hot Tub/Spa Filter Demand Pattern:

      ▲ Sales
      │
100%  │                    ████
      │                ████████████
 80%  │            ████████████████████
      │        ████████████████████████████
 60%  │    ████████████████████████████████████
      │████████████████████████████████████████████
 40%  │████████████████████████████████████████████████
      │████████████████████████████████████████████████████
 20%  │████████████████████████████████████████████████████████
      │████████████████████████████████████████████████████████████
      └────────────────────────────────────────────────────────────►
       Jan  Feb  Mar  Apr  May  Jun  Jul  Aug  Sep  Oct  Nov  Dec
                         ▲                   ▲
                    Peak Season         Peak Season
                    Start (Apr)         End (Aug)

Key Planning Points:
• February order → April arrival for May-Aug peak
• 70-80% of annual revenue in May-August
• Maintain minimum inventory off-season
```

---

## Success Criteria

- [ ] Input data properly formatted
- [ ] All DataDive exports in Downloads folder
- [ ] 8-factor scores calculated for each product
- [ ] Comparison table generated
- [ ] GO/NO-GO decisions assigned
- [ ] Key risks identified for each product
- [ ] Learning feedback provided after decisions

## Common Issues

| Problem | Solution |
|---------|----------|
| DataDive file not found | Place niche-{CODE}-competitors.csv in Downloads |
| Columns not detected | Verify CSV has ITEM# or SKU# column |
| Score seems too low/high | Check if all 8 factors have data |
| Pattern not matching | Verify product category aligns with patterns |
| Margin calculation off | Verify FOB cost and freight estimates |

## Model Cost Considerations

| Model | Cost per 15 Products | Best For |
|-------|---------------------|----------|
| **Sonnet 4.5** (Recommended) | $1.28-$1.64 | Standard analysis with complete DataDive data |
| Opus 4.5 | $6.40-$8.20 | Complex strategy decisions, limited data |

---

## Quick Reference Commands

**Analyze product batch:**
```
"Analyze these 25 products from Bestway-2026-Catalog.csv"
```

**Update from meeting:**
```
"We had a meeting where Todd said to prioritize year-round
products over seasonal. Update the model."
```

**Check learning status:**
```
"Show me what the skill has learned since last month"
```

**Generate comparison table:**
```
"Create comparison table for all analyzed hot tub filter products"
```

---

## Related SOPs
- Related: [SOP-202: Product Validation Complete](../02-product-validation/SOP-202-Product-Validation-Complete.md)
- Related: [SOP-301: Listing Analysis](../03-listing-optimization/SOP-301-Listing-Analysis.md)
- Next: [SOP-702: Managing the Knowledge Base](SOP-702-Knowledge-Base-Management.md)

---

**Time Estimate:** 2-3 minutes per product with DataDive data
**Difficulty:** Intermediate
**Recommended Model:** Sonnet 4.5

---

*Nurise Product Analysis SOP v1.0*
