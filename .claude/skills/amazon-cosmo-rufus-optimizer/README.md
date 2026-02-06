# Amazon COSMO & Rufus Optimizer

## Purpose

Specialized skill for optimizing Amazon listings for **COSMO's intent-based search algorithm** and **Rufus's conversational AI shopping assistant** using semantic understanding and behavioral analysis.

## When to Use This Skill

✅ **Use COSMO/Rufus Optimizer when:**
- Optimizing listings for AI-driven discovery (vs keyword matching)
- Product already validated as GO/STRONG GO
- Want to capture Rufus-driven traffic (60% higher conversion rate)
- Targeting niche customer segments with specific use cases
- Improving conversion rate for existing products
- Addressing "intent gaps" discovered through customer feedback

❌ **Don't use for:**
- New product keyword research (use DataDive first)
- Initial listing creation (DataDive provides keyword foundation)
- Measuring ranking juice or search volume (DataDive excels here)
- Products without sufficient review data for intent analysis

## How This Complements DataDive Classic

| Task | DataDive Classic | COSMO/Rufus Optimizer |
|------|------------------|----------------------|
| **Initial Research** | ✅ Primary (keyword volume, competition) | ❌ Not applicable |
| **Keyword Foundation** | ✅ Primary (MKL, ranking juice) | ❌ Not applicable |
| **New Product Launch** | ✅ Primary (keyword visibility) | ⚠️ Secondary (add intent layer) |
| **Established Products** | ⚠️ Secondary (maintain keywords) | ✅ Primary (optimize for AI) |
| **Conversion Optimization** | ❌ Limited (keywords ≠ conversion) | ✅ Primary (intent = conversion) |
| **Niche Targeting** | ⚠️ Limited (broad keywords) | ✅ Excellent (specific intents) |

## Recommended Workflow

**For New Products:**
1. **Start with DataDive** → Run amazon-product-competitive-analyzer skill (Mode 2)
   - Generates keyword-optimized listing with proven ranking juice
   - Establishes solid MKL coverage (90%+ target)
   - Provides measurable baseline for indexing

2. **Layer COSMO/Rufus** → Run amazon-cosmo-rufus-optimizer skill
   - Use Rufus feedback loop to identify intent gaps
   - Rewrite title/bullets with natural language while preserving keywords
   - Add use case scenarios and intent-specific content
   - Optimize visuals for computer vision

3. **Deploy Hybrid Listing** → Combine best of both
   - DataDive provides keyword foundation (ranking juice)
   - COSMO/Rufus provides intent alignment (conversion)
   - Result: Visibility + relevance = sales

**For Established Products:**
1. **DataDive Audit** → Verify keyword coverage is still competitive
   - Check MKL coverage hasn't degraded
   - Update backend keywords if needed
   - Maintain ranking juice baseline

2. **COSMO/Rufus Optimization** → Primary focus
   - Run 5 Rufus diagnostic questions
   - Identify intent gaps and unexpected customer segments
   - Restructure content for AI-driven discovery
   - Monitor conversion rate improvements

## Key Differences

### DataDive Classic Approach
```
Focus: What keywords do customers search for?
Method: Maximize ranking juice (volume × match type × position)
Output: Keyword-dense listing optimized for A9 algorithm
Metrics: MKL coverage %, search volume coverage %, SEO leaderboard
Update: 24-48 hours for indexing changes
Best for: New products, keyword visibility, measurable SEO
```

### COSMO/Rufus Approach
```
Focus: What problems do customers need solved?
Method: Intent alignment through semantic understanding
Output: Natural language listing optimized for AI recommendation
Metrics: Rufus recommendation frequency, conversion rate, intent match
Update: 7-14 days for knowledge graph propagation
Best for: Conversion optimization, niche targeting, AI-driven traffic
```

## Integration Strategy

**Scenario 1: New Product Launch**
```
Week 1-2: DataDive optimization + launch
Week 3-4: Wait for review accumulation (need 10+ reviews)
Week 5: Run Rufus diagnostics
Week 6: Layer COSMO/Rufus optimization on top of DataDive foundation
Week 7-8: Monitor results, iterate based on feedback
```

**Scenario 2: Existing Product Underperforming**
```
Step 1: DataDive audit (is keyword coverage adequate?)
  - If NO → Fix DataDive fundamentals first
  - If YES → Proceed to Step 2

Step 2: COSMO/Rufus optimization (is intent match strong?)
  - Run Rufus diagnostics
  - Identify intent gaps
  - Optimize for discovered customer segments
  - Monitor conversion improvements
```

**Scenario 3: High Traffic, Low Conversion**
```
Problem: Good visibility, poor conversion = intent mismatch
Solution: COSMO/Rufus optimization (primary)
  - DataDive brought traffic (keywords working)
  - COSMO/Rufus improves conversion (intent alignment)
  - Focus on RAG-ready bullets, use case scenarios, visual optimization
```

## Success Metrics by Approach

**DataDive Classic Success:**
- ✅ 90%+ MKL exact match coverage
- ✅ 94%+ search volume coverage
- ✅ Top 3 SEO Leaderboard position
- ✅ Indexing for primary keywords within 48 hours
- ✅ Measurable ranking juice competitive with top sellers

**COSMO/Rufus Success:**
- ✅ 15-25% conversion rate improvement
- ✅ Rufus recommends product for target intents
- ✅ New customer segments discovered via AI
- ✅ Lower bounce rate (better intent match)
- ✅ Positive Rufus diagnostic feedback

## File Structure

```
/01-Project/.claude/skills/
├── amazon-product-competitive-analyzer/
│   ├── skill.md (DataDive Classic + Listing Optimization)
│   └── knowledge-base/
│       ├── listing-optimization-patterns.json
│       └── listing-templates/
│           ├── title-template.md
│           ├── bullet-template.md
│           ├── description-template.md
│           └── category-specific/
│               ├── pool-equipment.md
│               └── README.md
│
└── amazon-cosmo-rufus-optimizer/
    ├── skill.md (COSMO/Rufus Intent-Based Optimization)
    ├── README.md (This file)
    └── knowledge-base/
        └── cosmo-rufus-patterns.json
```

## Quick Start

**Run DataDive Classic Optimization (Mode 2):**
```
"Analyze these products and create optimized listings based on SOP-304"
→ Uses: amazon-product-competitive-analyzer skill
→ Output: Product Brief with keyword-optimized listings
```

**Run COSMO/Rufus Optimization:**
```
"Optimize this listing for COSMO and Rufus using intent-based strategies"
→ Uses: amazon-cosmo-rufus-optimizer skill
→ Output: Intent-optimized listing with Rufus diagnostic insights
```

## Version History

- v1.0 (Jan 29, 2026): Initial release
  - Rufus 5-question diagnostic framework
  - RAG-ready content structure
  - Noun Phrase Optimization (NPO)
  - Multi-modal optimization (text, images, video)
  - Backend attribute guidance
  - Q&A seeding methodology
  - Review analysis integration

---

**Maintained by**: Greg (Consulting Project for Todd McDaniel)
**Documentation**: See skill.md for complete methodology
**Support**: Reference SOP-304 for DataDive methodology integration
