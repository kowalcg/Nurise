# Amazon Product Competitive Analyzer

**Version:** 3.0 (Listing Optimization Edition)
**Created:** January 13, 2026
**Updated:** January 29, 2026

A self-learning system that analyzes Amazon products, validates purchase decisions, generates production-ready listings, and continuously improves from accumulated knowledge across projects.

---

## 🚀 Quick Start: Which Mode Do I Need?

### Choose Mode 1 (Validation) if:
✅ You have **15-50 products** to screen
✅ You want to **identify which products are viable** to launch
✅ You need a **comparison table** ranking all products
✅ You'll **decide later** which to optimize

**Example:** "I have 18 products from DataDive, help me pick the best ones"

**What you'll get:**
- Comparison table with GO/MAYBE/NO-GO ratings
- 8-factor scoring for each product
- Competitive analysis summary
- Launch recommendations

---

### Choose Mode 2 (Optimization) if:
✅ You have **ONE product** (new or existing)
✅ You need **complete listing optimization**
✅ You want **competitive positioning strategy**
✅ You need **Product Brief** with implementation plan

**Example:** "Optimize my Saluspa filter listing (ASIN B08R11D8NJ)"

**What you'll get:**
- Complete Product Brief (title, bullets, description)
- Competitive keyword analysis
- Multi-pack pricing strategy (if applicable)
- 90-day implementation roadmap
- PPC campaign structure

---

## 📖 Reference Examples

### Mode 1 Example: Batch Validation
See previous 15-product analysis for comparison table format and GO/MAYBE/NO-GO decision framework.

### Mode 2 Example: Deep Optimization
**[Saluspa Hot Tub Filter Complete Analysis](/01-Project/09-Listing-Optimization/Saluspa-Hot-Tub-Filter/)**

This real-world example demonstrates:
- Competitive per-filter pricing analysis
- Multi-pack variation strategy (2, 4, 8, 12-pack)
- Complete listing optimization
- 90-day implementation roadmap
- Expected results: +128% revenue, +211% profit

---

## 🎯 How to Use This Skill

### Mode 1: Product Validation Workflow

**1. Prepare Your Data**
- Product spreadsheet (15+ products minimum)
- (Optional) DataDive competitor export

**2. Invoke the Skill**
Use natural language like:
- "Analyze these 18 products for validation"
- "Which products should we launch?"
- "Screen this product list from DataDive"

**3. Review Output**
- Comparison table with all products ranked
- Individual product reports
- GO/MAYBE/NO-GO recommendations

**4. Next Steps**
- Select GO products for launch
- (Optional) Run Mode 2 on specific products for listing optimization

---

### Mode 2: Listing Optimization Workflow

**1. Prepare Your Data**
- Single product ASIN or product details
- Competitor keyword research (from Helium 10/DataDive)
- (If existing) Current listing data

**2. Invoke the Skill**
Use natural language like:
- "Optimize listing for [PRODUCT NAME]"
- "Create Product Brief for [ASIN]"
- "Deep competitive analysis for [PRODUCT]"

**3. Review Output**
- Complete Product Brief document
- Optimized title, bullets, description
- Competitive positioning strategy
- Implementation roadmap

**4. Next Steps**
- Review and refine copy
- Upload to Amazon Seller Central
- Launch PPC campaigns
- Track performance metrics

---

## 🤖 Mode Auto-Detection

The skill automatically detects which mode you need:

| Your Input | Detected Mode |
|------------|---------------|
| **1 product** + ASIN or details | → Mode 2 (Optimization) |
| **15+ products** in spreadsheet | → Mode 1 (Validation) |
| Keywords: "optimize listing", "Product Brief" | → Mode 2 (Optimization) |
| **2-14 products** (ambiguous) | → Asks for clarification |

**Example Clarification:**
```
"I detected 5 products in your input. I can help with either:

A) Product Validation - Screen these 5 to identify winners
B) Listing Optimization - Deep dive + listing copy for each

Which workflow do you need?"
```

---

## 📊 Key Features

### Mode 1 (Validation) Features:
- ✅ Auto-detects any product spreadsheet format
- ✅ 8-factor scoring model (margins, competition, search volume, etc.)
- ✅ Self-learning system that improves with each analysis
- ✅ Comparison table output for easy decision-making
- ✅ Learns from meeting notes and team feedback

### Mode 2 (Optimization) Features:
- ✅ Complete Amazon listing optimization (SOP-304 methodology)
- ✅ SEO ranking juice calculations
- ✅ Competitive keyword analysis
- ✅ Multi-pack pricing strategies
- ✅ PPC campaign recommendations
- ✅ 90-day implementation roadmap

---

## 📁 Required File Structure

### For Mode 1 (Validation):
```
01-Project/
├── 02-Research/
│   └── [supplier]-products.csv (product spreadsheet)
└── 08-Meeting-Notes/ (optional - improves learning)
```

### For Mode 2 (Optimization):
```
01-Project/
├── 02-Research/
│   ├── niche-{PRODUCT_ID}-competitors.csv (DataDive export)
│   └── niche-{PRODUCT_ID}-keywords.csv (DataDive export)
└── 09-Listing-Optimization/
    └── {Product-Name}/ (output directory)
```

---

## 🎓 Learning Resources

### Documentation:
- **[skill.md](skill.md)** - Complete skill documentation (2,180 lines)
- **[SKILL-FLOW-DIAGRAM.md](SKILL-FLOW-DIAGRAM.md)** - Visual workflow diagrams (v3.0 Dual-Mode Edition)
- **[knowledge-base/validation-mode-guide.md](knowledge-base/validation-mode-guide.md)** - Mode 1 deep dive
- **[knowledge-base/optimization-mode-guide.md](knowledge-base/optimization-mode-guide.md)** - Mode 2 with Saluspa example
- **[knowledge-base/mode-selection-faq.md](knowledge-base/mode-selection-faq.md)** - Common questions

### Knowledge Base Files:
- `success-factors.json` - 8-factor scoring model + weights
- `historical-patterns.json` - Learned patterns from analyses
- `market-intelligence.json` - Category benchmarks
- `todd-preferences.json` - Client decision criteria

---

## 💡 Common Use Cases

### Scenario 1: New Supplier Evaluation
**Goal:** Screen 30 products from new supplier to pick top 10
**Mode:** Mode 1 (Validation)
**Output:** Comparison table ranking all 30 products

### Scenario 2: Existing Product Optimization
**Goal:** Improve listing for underperforming product
**Mode:** Mode 2 (Optimization)
**Output:** Optimized listing copy + competitive strategy

### Scenario 3: Launch New Product Line
**Goal:** Validate 20 products, then create listings for winners
**Mode:** Combined (Mode 1 → Mode 2)
**Invocation:** "Analyze these 20 products and create listings for GO products"
**Output:** Comparison table + Product Briefs for GO products

### Scenario 4: Competitive Deep Dive
**Goal:** Understand why competitors are winning on specific product
**Mode:** Mode 2 (Optimization)
**Output:** Complete competitive analysis + repositioning strategy

---

## 🔧 Troubleshooting

### "Skill didn't detect the right mode"
**Solution:** Be explicit in your request:
- For validation: "Run product validation on these products"
- For optimization: "Create Product Brief for [PRODUCT]"

### "I have 10 products - which mode?"
**Answer:** Skill will ask for clarification. Choose based on intent:
- **Validation:** Screen 10 to pick best 2-3 (get comparison table)
- **Optimization:** Deep dive on all 10 (get 10 Product Briefs, takes longer)

### "Can I run Mode 1, then Mode 2 later?"
**Answer:** Yes! Run validation first, review results, then request:
"Now create Product Brief for [specific winning product]"

### "Output format different than expected?"
**Check:**
- Did you provide DataDive export for Mode 2?
- Did skill detect the right mode? (Check beginning of output)
- Are you running Mode 1 but expecting Product Brief? (Mode 2 only)

---

## 📞 Support

**Questions about this skill?**
- Check [mode-selection-faq.md](knowledge-base/mode-selection-faq.md)
- Review [Saluspa example](/01-Project/09-Listing-Optimization/Saluspa-Hot-Tub-Filter/)
- See full documentation in [skill.md](skill.md)

**Version History:**
- v3.0 (Jan 29, 2026): Added Mode 2 (Listing Optimization) + dual-mode documentation + flow diagram v3.0
- v2.0 (Jan 21, 2026): Added self-learning system + knowledge base
- v1.0 (Jan 13, 2026): Initial batch product validation

---

**Next Steps:**
1. Decide which mode you need (use decision tree above)
2. Prepare your input data
3. Invoke the skill with clear natural language
4. Review output and take action!
