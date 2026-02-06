# Mode 2: Listing Optimization Guide

**Purpose:** Deep competitive analysis + complete Product Brief for ONE product

**Last Updated:** January 29, 2026

---

## When to Use Mode 2

Use Listing Optimization (Mode 2) when you need to:

✅ **Optimize an existing product listing** that's underperforming
✅ **Create production-ready listing copy** for a new product launch
✅ **Deep competitive analysis** to understand market positioning
✅ **Multi-pack pricing strategy** (e.g., 2-pack, 4-pack, 8-pack variations)
✅ **Complete implementation roadmap** (90-day plan with PPC, inventory, etc.)

**Don't use Mode 2 if:**
❌ You need to screen 15+ products first (use Mode 1 for batch validation)
❌ You just need GO/NO-GO decision (use Mode 1 for quick screening)
❌ You don't have competitor keyword data (Mode 2 requires research depth)

---

## Mode 2 Workflow

### Step 1: Prepare Input Data

**Required:**
- **Single product** ASIN or product details
- **Competitor keyword research** (Helium 10 DataDive or MKL export)
  - `niche-{PRODUCT_ID}-keywords.csv`
  - `niche-{PRODUCT_ID}-competitors.csv`

**Optional but Highly Recommended:**
- Current listing data (if existing product)
- Screenshots of current listing
- Cost data (COGS + FBA fees) for pricing strategy
- Competitive intelligence (who's winning and why)

**Example Data Structure:**
```
/02-Research/
├── niche-E0nPEhheUZ-keywords.csv       (44 keywords tracked)
├── niche-E0nPEhheUZ-competitors.csv    (10 competitor ASINs)
└── current-listing-screenshots/         (optional)
    ├── title-bullets.png
    └── main-image.png
```

### Step 2: Invoke Mode 2

**Natural Language Invocations:**
- "Optimize listing for Saluspa Hot Tub Filter"
- "Create Product Brief for ASIN B08R11D8NJ"
- "Deep competitive analysis for [PRODUCT NAME]"
- "Analyze this existing product and provide optimization strategy"

**The skill will auto-detect Mode 2 based on:**
- Single product input (count = 1)
- Optimization keywords ("optimize", "Product Brief", "deep dive")
- Presence of ASIN or specific product focus

### Step 3: Skill Execution (Behind the Scenes)

**Phase 1-2: Pre-Analysis & Data Loading**
- Load knowledge base patterns
- Detect Mode 2 (single product optimization)
- Ingest competitor keyword CSV
- Parse DataDive exports

**Phases 3-8: Deep Competitive Analysis**
- **Per-unit economics:** Calculate landed cost, FBA fees, net margin
- **Per-filter pricing:** If multi-pack, analyze price-per-unit vs competitors
- **Keyword gap analysis:** Your rankings vs. top 3 performers
- **Competitive positioning:** What makes winners win?
- **Pricing opportunities:** Multi-pack strategies, value perception fixes

**Phase 9: Complete Listing Optimization (Mode 2 Only)**
- **9.1:** DataDive MKL Analysis (Master Keyword List)
- **9.2:** Keyword Bucketing (TRASH/MKL/OUTLIERS/RESIDUE)
- **9.3:** Optimize Title (lead with high-volume keywords)
- **9.4:** Optimize Bullets (5 bullets with benefit-driven copy)
- **9.5:** Backend Keywords (250 bytes optimized)
- **9.6:** A+ Content Recommendations (module layouts)
- **9.7:** PPC Campaign Structure (keywords, bids, budgets)
- **9.8:** Implementation Roadmap (90-day plan)

**Output:** Complete Product Brief (production-ready)

### Step 4: Review Output

**Primary Output: Product Brief**

Complete markdown document (~50-100 KB) containing:
1. Executive Summary
2. Product Economics & Validation
3. Competitive Landscape Analysis
4. Keyword Performance Analysis
5. Multi-Pack Pricing Strategy (if applicable)
6. Optimized Listing Copy (title + bullets + backend)
7. Variation Architecture (if multi-pack)
8. A+ Content Strategy
9. PPC Campaign Structure
10. 90-Day Implementation Roadmap
11. Success Metrics & KPIs

**File Location:**
```
/01-Project/09-Listing-Optimization/{Product-Name}/
├── {product}-competitive-analysis-final.md    (Complete Product Brief)
├── README.md                                  (Project overview)
├── DATA-SOURCES.md                           (Research provenance)
└── (future) image-specs/, ppc-campaigns/, etc.
```

### Step 5: Next Steps

**Implementation Path:**
1. **Review Product Brief** - Validate recommendations
2. **Refine Copy** - Adjust title/bullets to brand voice
3. **Create Variations** - Set up multi-pack child ASINs if recommended
4. **Update Listing** - Upload optimized copy to Seller Central
5. **Launch PPC** - Implement recommended campaign structure
6. **Track Metrics** - Monitor success KPIs from roadmap

---

## Case Study: Saluspa Hot Tub Filter

**This is the official Mode 2 reference example.**

### Background

**Product:** Saluspa/Bestway Type VI Hot Tub Filter Replacement Cartridge
**ASIN:** B08R11D8NJ (existing product)
**Current Performance:** CA$4,207/month revenue, CA$750 net profit
**Client Goal:** Optimize underperforming listing

### Input Data Provided

1. **Competitor Analysis CSV:** 10 ASINs with pack sizes, pricing, sales estimates
2. **Keyword Research CSV:** 44 tracked keywords with search volumes and rankings
3. **Listing Builder Screenshots:** Current title, bullets, keyword optimization matrix
4. **Cost Data:** CA$4.14 landed cost, CA$9.43 FBA fees (2-pack)

### Mode 2 Invocation

```
"Let's analyze the SaluSpa hot tub filter using the updated version of the project skill.
Analyze all the product validation based on the cost of CA$4.14. Use the attached
spreadsheet from the MKL and analyze with all keywords, analyze with all competitors,
and use both versions for listing optimization."
```

### Execution Process

**Phase 1-2: Data Ingestion**
- Detected 10 competitors, 44 keywords
- Auto-detected Mode 2 (single product deep dive)
- Loaded Helium 10 Listing Builder data

**Critical Discovery (Phase 3-4):**

**Original Assumption:** Product was underpriced at CA$17.98 for 2-pack

**Reality After Per-Filter Analysis:**
| ASIN | Brand | Pack Size | Total Price | Price PER FILTER |
|------|-------|-----------|-------------|------------------|
| B09Q68WP61 | Vickmons | 16-pack | CA$56.99 | CA$3.56 (60% cheaper!) |
| B0B6ZVMD7P | Macaberry | 12-pack | CA$49.99 | CA$4.17 (54% cheaper) |
| B089FPMMHT | POOLPURE | 6-pack | CA$33.99 | CA$5.67 (37% cheaper) |
| **B08R11D8NJ** | **Bestway (client)** | **2-pack** | **CA$17.98** | **CA$8.99 (WORST VALUE!)** |

**The Problem:** Not a pricing issue - a VALUE PERCEPTION problem!

### Solution: Multi-Pack Strategy

**Recommended Variations:**
| Pack Size | Price | Price/Filter | Margin | Target Sales % |
|-----------|-------|--------------|--------|----------------|
| 2-pack (keep) | CA$17.98 | CA$8.99 | 24.5% | 5% (entry) |
| 4-pack (NEW) | CA$29.99 | CA$7.50 | 37.4% | 50% ⭐ |
| 8-pack (NEW) | CA$49.99 | CA$6.25 | 41.9% | 30% 💰 |
| 12-pack (NEW) | CA$67.99 | CA$5.67 | 42.1% | 15% |

**Projected Impact:**
- Revenue: CA$4,207 → CA$9,604 (+128%)
- Net Profit: CA$750 → CA$2,332 (+211%)
- Average Order Value: CA$17.98 → CA$41.04 (+128%)
- **Same traffic, better pack options = +211% profit**

### Optimized Listing Copy

**Optimized Title (Section 7):**
```
Hot Tub Filter Replacement for Saluspa, Bestway, Coleman (2, 4, 8, 12 Pack) |
Type VI Spa Filter Cartridge 4.25"x3" | Compatible Saluspa Coronado Miami
Palm Springs Vancouver Cancun | Premium Inflatable Hot Tub Filters
```

**Why it wins:**
- Leads with "Hot Tub Filter" (2,972 SV keyword)
- Includes all major brands (Saluspa, Bestway, Coleman)
- Specifies pack options upfront
- Lists Type VI + exact dimensions
- Names specific hot tub models

**Optimized Bullet #1:**
```
✓ PERFECT FIT FOR YOUR HOT TUB: Universal Type VI replacement filter cartridge
compatible with Saluspa hot tubs (Miami, Palm Springs, Coronado, Vancouver,
Cancun, Hawaii, Hollywood, Budapest), Bestway pool filter pump, Coleman hot
tub, and Avenli spa filters; exact 4.25" height x 3" diameter fits like
original equipment - simply remove old filter and replace with ours
```

**(4 more bullets provided in full Product Brief)**

### 90-Day Implementation Roadmap

**Week 1-2:** Listing optimization + variation setup
**Week 3-4:** Soft launch with PPC testing (CA$50/day)
**Week 5-8:** A+ Content + scale PPC to CA$75/day
**Week 9-12:** Full scale to CA$100/day + review generation

**Expected Results (Week 12):**
- 200+ units/month
- CA$9,600 monthly revenue
- CA$2,332 monthly profit
- 4.65+ star rating

### Actual Output Files

See complete analysis here:
**[/01-Project/09-Listing-Optimization/Saluspa-Hot-Tub-Filter/](../../09-Listing-Optimization/Saluspa-Hot-Tub-Filter/)**

Files generated:
1. `saluspa-filter-competitive-analysis-final.md` (53 KB - complete brief)
2. `README.md` (project overview)
3. `DATA-SOURCES.md` (research provenance)

---

## Mode 2 Output Components

### Section 1: Executive Summary
- Current state metrics
- Core problem identified
- Recommended solution
- Expected results (revenue, profit projections)

### Section 2: Product Economics
- Landed cost breakdown
- FBA fee analysis
- Current vs. optimized pricing
- Margin calculations by variation

### Section 3: Competitive Analysis
- Top 5 competitors by revenue
- Per-unit pricing comparison
- Why competitors are winning
- Gaps and opportunities

### Section 4: Keyword Performance
- Your rankings vs. top performers
- High-volume keyword gaps
- Long-tail opportunities
- French Canadian market (if applicable)

### Section 5: Multi-Pack Strategy
- Variation architecture (2, 4, 8, 12-pack recommendations)
- Pricing rationale for each tier
- FBA fee leverage analysis
- Expected sales mix

### Section 6: Optimized Listing
- Title (optimized, 250 chars)
- Bullets (5 bullets, benefit-driven)
- Backend keywords (250 bytes)
- Image specifications

### Section 7: Variation Design
- Main image requirements (badges, callouts)
- Alt image recommendations
- Variation-specific copy

### Section 8: A+ Content
- Module 1: Value comparison chart
- Module 2: Compatibility guide
- Module 3: Installation guide
- Module 4: Why choose us
- Module 5: FAQ + savings calculator

### Section 9: PPC Campaign
- Campaign structure (Branded, Generic, Product Targeting)
- Keyword list with bids
- Budget allocation by campaign
- Expected ACOS targets

### Section 10: 90-Day Roadmap
- Week-by-week action plan
- Inventory planning
- Review generation strategy
- Success metrics to track

---

## Key Differences: Mode 2 vs Mode 1

| Aspect | Mode 2 (Optimization) | Mode 1 (Validation) |
|--------|----------------------|---------------------|
| **Product Count** | 1 product (deep) | 15-50 products (batch) |
| **Time Required** | ~1-2 hours | ~2.5 min per product |
| **Output Size** | 50-100 KB Product Brief | Comparison table + reports |
| **Listing Copy** | YES (title, bullets, description) | NO (decisions only) |
| **Competitive Analysis** | Deep (keyword strategy, pricing) | High-level (GO/NO-GO) |
| **Multi-Pack Strategy** | YES (if applicable) | NO |
| **PPC Campaigns** | YES (complete structure) | NO |
| **Implementation Roadmap** | YES (90-day plan) | NO |
| **A+ Content** | YES (5 module layouts) | NO |

---

## Tips for Best Results

### Provide Complete Competitor Data
✅ **Good:** Full DataDive export with 44 keywords + 10 competitors
❌ **Poor:** Just the ASIN (skill can't do deep optimization without data)

### Include Cost Data
✅ **Good:** Exact landed cost (CA$4.14) + FBA fees (CA$9.43)
❌ **Poor:** No costs (can't calculate margins or pricing strategy)

### Specify Current Performance (if existing product)
✅ **Good:** "Currently doing CA$4,207/month, 234 units, 3,518 reviews"
❌ **Acceptable:** New product (no current data available)

### Mention Goals
✅ **Good:** "Optimize for profit, not just revenue" or "Need to beat ASIN B089FPMMHT"
❌ **Acceptable:** Skill will optimize for balanced approach

---

## Common Questions

### Q: Can I run Mode 2 on multiple products?
**A:** Yes, but run sequentially (not batch). Each product needs 1-2 hours for quality analysis.
Example: "Create Product Brief for Product A" → complete → "Now do Product B"

### Q: What if I don't have DataDive exports?
**A:** Mode 2 quality drops significantly without competitor keyword data. Minimum needed:
- Competitor ASINs
- Basic keyword research (even manual Helium 10 search)
Consider running Mode 1 first to validate, then invest in DataDive for winners.

### Q: How accurate are revenue/profit projections?
**A:** Projections are based on:
- Conservative assumptions (10% sales drop per 20% price increase)
- Industry benchmarks for conversion rates
- Actual competitor performance data
Typical accuracy: ±20% on revenue, ±30% on profit (due to ACOS variance)

### Q: Can I modify the recommended copy?
**A:** Absolutely! The Product Brief provides:
- **Optimized copy** (keyword-rich, benefit-driven)
- **Rationale** (why each element was chosen)
- **Flexibility** to adjust to brand voice

Maintain keyword coverage while adapting tone.

### Q: What happens after I get the Product Brief?
**A:** Implementation path:
1. Review and refine copy (adapt to brand voice)
2. Create variations in Seller Central (if multi-pack recommended)
3. Upload optimized listing
4. Launch PPC campaigns (use recommended structure)
5. Track metrics (success KPIs in Section 10)
6. Iterate based on performance

---

## Related Resources

- **[Saluspa Hot Tub Filter Complete Analysis](../../09-Listing-Optimization/Saluspa-Hot-Tub-Filter/)** - Full example
- **[skill.md](../skill.md)** - Complete skill documentation
- **[validation-mode-guide.md](validation-mode-guide.md)** - Mode 1 batch screening
- **[mode-selection-faq.md](mode-selection-faq.md)** - Choosing between modes
- **[README.md](../README.md)** - Quick start guide

---

**Last Updated:** January 29, 2026
**Version:** 3.0
