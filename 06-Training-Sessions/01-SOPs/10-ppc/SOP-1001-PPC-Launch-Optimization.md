# SOP-1001: PPC Launch and Optimization

**Nurise Listing Optimization**

---

## Purpose
Provide a comprehensive guide for launching and optimizing Amazon PPC (Pay-Per-Click) campaigns. This SOP covers campaign structure, bid management, keyword optimization, and ongoing performance improvement to maximize ranking and profitability.

## When to Use
- Launching PPC for a new product
- Optimizing existing underperforming campaigns
- Restructuring campaign strategy
- Conducting regular PPC audits

## Prerequisites
- [ ] Listing live and Buy Box active
- [ ] Keyword research complete (SOP-201/202)
- [ ] Competitor ASINs identified
- [ ] PPC budget established
- [ ] Understanding of target ACOS

---

## Part 1: PPC Fundamentals

### Key Metrics

| Metric | Definition | Target |
|--------|------------|--------|
| **ACOS** | Ad Cost of Sales (Spend/Sales) | 15-30% (mature) |
| **TACOS** | Total ACOS (Ad Spend/Total Sales) | 8-15% |
| **CTR** | Click-Through Rate | >0.3% |
| **CVR** | Conversion Rate | >10% |
| **CPC** | Cost Per Click | Varies by niche |

### Campaign Types

| Type | Best Use Case |
|------|---------------|
| **Sponsored Products** | Direct keyword/product targeting, ranking |
| **Sponsored Brands** | Brand awareness, storefront traffic |
| **Sponsored Display** | Retargeting, off-Amazon reach |

> **Priority Focus:** 80% of budget should go to Sponsored Products for ranking.

---

## Part 2: Campaign Structure

### Objective-Based Structure

Organize campaigns by goal:

```
PPC CAMPAIGN STRUCTURE
======================
1. RANKING CAMPAIGNS (60% of budget)
   └── Goal: Gain and defend keyword rankings

2. PROFITABILITY CAMPAIGNS (30% of budget)
   └── Goal: Incremental sales at target ACOS

3. DISCOVERY CAMPAIGNS (10% of budget)
   └── Goal: Find new converting keywords
```

### Campaign Naming Convention

```
[Product] - [Type] - [Match/Target] - [Objective]

Examples:
- HotTubFilter - SP - Exact - Ranking
- HotTubFilter - SP - Auto - Discovery
- HotTubFilter - SP - ASIN - Competitor
```

---

## Part 3: Launch Campaign Setup

### Campaign 1: Product Targeting (Day Zero)

**Purpose:** Index new product to competitor keywords

**Settings:**
| Setting | Value |
|---------|-------|
| Campaign Name | [Product] - SP - ASIN - Indexing |
| Campaign Type | Sponsored Products |
| Targeting | Manual - Product Targeting |
| Daily Budget | $20-30 |
| Bidding Strategy | Dynamic bids - down only |

**Selecting Targets:**
1. Identify top 25+ competitors
2. Focus on competitors with:
   - High review count (1,000+)
   - Good BSR (top 10-20 in category)
   - Similar product type
   - Active Buy Box

**Creating Ad Groups:**
```
Ad Group: Top Competitors
├── ASIN 1: B08XXXXXX (Top seller)
├── ASIN 2: B07XXXXXX (2nd best)
├── ASIN 3: B09XXXXXX (3rd best)
└── ... (up to 25 ASINs)

Bid: $0.50 - $1.00 per click
```

**Optimization Rules:**
| Condition | Action |
|-----------|--------|
| 12+ clicks, 0 orders | Pause target |
| 1+ order | Keep target, evaluate CPC |
| High ACOS (>50%) | Lower bid by 25% |
| Low impressions | Increase bid by 25% |

---

### Campaign 2: Exact Match Keywords

**Purpose:** Target high-intent, researched keywords

**Settings:**
| Setting | Value |
|---------|-------|
| Campaign Name | [Product] - SP - Exact - Ranking |
| Campaign Type | Sponsored Products |
| Targeting | Manual - Keyword Targeting |
| Match Type | Exact |
| Daily Budget | $30-50 |
| Bidding Strategy | Dynamic bids - up and down |

**Keyword Selection Criteria:**
- Search volume: 25+ monthly searches
- Relevance: Directly matches product
- From keyword research (SOP-201/202)
- Grouped by root word

**Ad Group Structure:**
```
Campaign: HotTubFilter - SP - Exact - Ranking

Ad Group: type vi filter
├── type vi hot tub filter [exact]
├── type vi filter cartridge [exact]
└── type vi replacement filter [exact]

Ad Group: bestway filter
├── bestway hot tub filter [exact]
├── bestway saluspa filter [exact]
└── bestway spa filter cartridge [exact]

Ad Group: saluspa filter
├── saluspa filter type vi [exact]
├── saluspa replacement filter [exact]
└── saluspa hot tub filter pack [exact]
```

**Bid Strategy:**
| Suggested Bid | Your Starting Bid |
|---------------|-------------------|
| $0.50 | $0.75 - $1.00 |
| $1.00 | $1.50 - $2.00 |
| $1.50 | $2.25 - $3.00 |

> Start 1.5x-2x suggested bid to ensure impressions during launch.

---

### Campaign 3: Auto Campaign (Discovery)

**Purpose:** Find new converting search terms

**Settings:**
| Setting | Value |
|---------|-------|
| Campaign Name | [Product] - SP - Auto - Discovery |
| Campaign Type | Sponsored Products |
| Targeting | Automatic |
| Daily Budget | $15-20 |
| Bidding Strategy | Dynamic bids - down only |

**Auto Campaign Match Types:**

| Match Type | What It Targets | Priority |
|------------|-----------------|----------|
| Close Match | Similar keywords | HIGH |
| Loose Match | Related keywords | MEDIUM |
| Substitutes | Alternative products | LOW |
| Complements | Paired products | LOW |

**Recommended Settings:**
- Enable: Close Match (primary discovery)
- Consider disabling: Complements (often irrelevant)

---

### Campaign 4: Phrase Match (Optional)

**Purpose:** Capture keyword variations

**Settings:**
| Setting | Value |
|---------|-------|
| Campaign Name | [Product] - SP - Phrase - Expansion |
| Campaign Type | Sponsored Products |
| Targeting | Manual - Keyword Targeting |
| Match Type | Phrase |
| Daily Budget | $15-25 |

**When to Use:**
- After exact campaigns are running well
- To capture long-tail variations
- Testing keyword expansion

**Negative Keyword Setup:**
Add exact match keywords as negatives in phrase campaigns:
```
Phrase Campaign Negatives:
- "type vi hot tub filter" [exact negative]
- "bestway saluspa filter" [exact negative]
```
This prevents phrase from competing with exact campaigns.

---

## Part 4: Bid Management

### Waterfall Bidding Strategy

Prioritize spending on highest-value match types:

```
BID WATERFALL
=============
Exact Match:    $2.00 (highest priority)
    ↓
Phrase Match:   $1.50 (medium priority)
    ↓
Broad Match:    $1.00 (lower priority)
    ↓
Auto Campaign:  $0.75 (discovery only)
```

### Placement Modifiers

Increase bids for better placements:

| Placement | Modifier | When to Use |
|-----------|----------|-------------|
| Top of Search | +25% to +100% | High-converting keywords |
| Product Pages | +0% to +25% | Competitor targeting |
| Rest of Search | Base bid | Default |

**How to Set:**
1. Go to Campaign Settings
2. Find "Adjust bids by placement"
3. Set percentage increase

---

## Part 5: Optimization Schedule

### Daily Tasks (5 minutes)

- [ ] Check spend vs. budget
- [ ] Review any keywords with high spend, low sales
- [ ] Ensure campaigns are active

### Days 4-6: First Optimization

**Product Targeting:**
| Condition | Action |
|-----------|--------|
| 12+ clicks, 0 orders | Pause target |
| Converting at >50% ACOS | Lower bid 25% |
| Converting at <30% ACOS | Increase bid 15% |

**Exact Match:**
| Condition | Action |
|-----------|--------|
| Keyword at target ACOS | Maintain bid |
| 20+ clicks, 0 orders | Lower bid 30% or pause |
| Converting below target ACOS | Increase bid 10% |

### Weekly Optimization (Days 7+)

**Search Term Analysis:**
1. Go to **Advertising** → **Campaign Manager**
2. Select date range (last 7 days)
3. Download **Search Term Report**
4. Analyze:

| Search Term Status | Action |
|--------------------|--------|
| Converting, not in exact | Add to exact campaign |
| High spend, no conversions | Add as negative keyword |
| Irrelevant | Add as negative |

**Search Term Isolation Process:**
```
Found in Auto Campaign: "type vi filter for lay z spa" (converting)

Step 1: Add to Exact Campaign
Step 2: Add as exact negative in Auto Campaign
Step 3: Monitor performance in Exact Campaign
```

### Monthly Audit

**Full Campaign Review:**
- [ ] Overall ACOS trending toward target?
- [ ] Budget allocation correct across campaigns?
- [ ] Keyword coverage complete?
- [ ] Competitor ASINs still relevant?
- [ ] Any new opportunities from search terms?

---

## Part 6: Advanced Strategies

### Single Keyword Campaigns (SKC)

For top-performing keywords, create dedicated campaigns:

**When to Use SKC:**
- Keyword has >$100/month spend
- ACOS below target
- Want granular control

**SKC Structure:**
```
Campaign: HotTubFilter - SKC - type vi hot tub filter
├── Ad Group: Main
│   └── Keyword: type vi hot tub filter [exact]
├── Daily Budget: $20-30
├── Bidding: Fixed or Dynamic - Up and Down
└── Placement Modifier: Top of Search +50%
```

### Dayparting (Advanced)

Schedule ads during peak conversion hours:

**Amazon Peak Hours (generally):**
- Morning: 8 AM - 10 AM
- Lunch: 12 PM - 2 PM
- Evening: 7 PM - 10 PM

**Implementation:**
- Use third-party tools (Helium 10, Perpetua)
- Or manually adjust budgets by time

### Sponsored Brand Videos

**Best For:**
- Brand awareness
- Demonstrating product use
- Standing out in search results

**Video Requirements:**
- 6-45 seconds
- 1920x1080 resolution minimum
- No contact information
- Auto-play without sound

---

## Part 7: Troubleshooting

### Low Impressions

| Cause | Solution |
|-------|----------|
| Bids too low | Increase bids by 50-100% |
| Budget depleted | Increase daily budget |
| Suppressed listing | Check listing health |
| Low relevance | Improve keyword targeting |

### High ACOS

| Cause | Solution |
|-------|----------|
| Broad targeting | Focus on exact match |
| Poor conversion rate | Improve listing (SOP-301) |
| Wrong audience | Review search terms, add negatives |
| Competitive niche | Accept higher ACOS or reduce spend |

### No Conversions

| Cause | Solution |
|-------|----------|
| Pricing issue | Check competitive pricing |
| Poor reviews | Focus on review generation |
| Bad images | Update main image |
| Irrelevant traffic | Add negative keywords |

---

## Part 8: Key Performance Benchmarks

### Launch Phase (Days 1-30)

| Metric | Acceptable | Target |
|--------|------------|--------|
| ACOS | 50-80% | 40-50% |
| CVR | 5-10% | 10%+ |
| Impressions | Growing weekly | Consistent |

### Growth Phase (Days 31-90)

| Metric | Acceptable | Target |
|--------|------------|--------|
| ACOS | 30-50% | 25-35% |
| CVR | 10-15% | 15%+ |
| Organic % | 30-50% | 40%+ |

### Mature Phase (90+ Days)

| Metric | Acceptable | Target |
|--------|------------|--------|
| ACOS | 20-35% | 15-25% |
| TACOS | 10-15% | 8-12% |
| Organic % | 50%+ | 60%+ |

---

## Success Criteria

**Week 1:**
- [ ] All launch campaigns active
- [ ] Impressions increasing daily
- [ ] Initial sales velocity established
- [ ] No budget caps hit prematurely

**Week 2:**
- [ ] First optimization complete
- [ ] Poor performers paused
- [ ] ACOS trending downward
- [ ] Search term report analyzed

**Month 1:**
- [ ] Campaign structure refined
- [ ] Target ACOS achievable
- [ ] Organic sales increasing
- [ ] Negative keyword list built

---

## Related SOPs
- Previous: [SOP-901: Launch Day Procedures](../09-launch/SOP-901-Launch-Day-Procedures.md)
- Listing: [SOP-302: Keyword Optimization](../03-listing-optimization/SOP-302-Keyword-Optimization.md)
- Tracking: [SOP-401: Rank Radar Setup](../04-keyword-tracking/SOP-401-Rank-Radar-Setup.md)
- Next: [SOP-1101: Ensuring Amazon Indexes Keywords](../11-post-launch/SOP-1101-Keyword-Indexing.md)

---

**Time Estimate:** 2-3 hours initial setup, 30 min/week ongoing
**Difficulty:** Advanced
**Last Updated:** 2026-01-23

---

*Nurise Listing Optimization SOP v1.0*
