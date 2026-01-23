# SOP-1101: Ensuring Amazon Indexes All Keywords

**Nurise Listing Optimization**

---

## Purpose
Verify that Amazon properly indexes your product for all important keywords. This SOP explains browse nodes, backend data, and troubleshooting steps when keywords aren't indexing correctly.

## When to Use
- After launching a new listing
- Keywords from PPC not converting (might not be indexed)
- Rankings not improving despite optimization
- Troubleshooting visibility issues
- After category or browse node changes

## Prerequisites
- [ ] Listing is live on Amazon
- [ ] Keyword research complete (SOP-201/202)
- [ ] Basic understanding of Amazon's catalog structure
- [ ] Access to Seller Central

---

## Part 1: Understanding Indexing

### What is Keyword Indexing?

**Indexed:** Your product appears in search results for a keyword
**Not Indexed:** Your product does NOT appear, regardless of PPC spend

### Why Indexing Matters

| Scenario | Indexed | Not Indexed |
|----------|---------|-------------|
| Search visibility | Product appears | Product invisible |
| PPC effectiveness | Ads can run | Ads won't show |
| Organic ranking | Can improve | Cannot improve |
| Sales potential | Full access | Blocked |

### Three Requirements for Indexing

1. **Keyword in listing** - Title, bullets, description, or backend
2. **Correct browse node** - Product categorized appropriately
3. **Amazon catalog alignment** - Product type matches keywords

---

## Part 2: Browse Nodes Explained

### What are Browse Nodes?

Browse nodes are Amazon's category system - a hierarchical tree:

```
Browse Node Hierarchy Example:
==============================
Home & Garden (Root)
└── Patio, Lawn & Garden
    └── Pools, Hot Tubs & Supplies
        └── Hot Tub & Pool Filters
            └── Cartridge Filters (Leaf Node)
```

### Types of Nodes

| Node Type | Description | Best For |
|-----------|-------------|----------|
| **Root Node** | Top-level category | Never use for listings |
| **Branch Node** | Mid-level category | Broad visibility |
| **Leaf Node** | Most specific | Best for ranking |

> **Critical:** Always target the most specific leaf node for your product.

### Finding Your Browse Node

**Method 1: Amazon URL**
1. Search for competitor product
2. Look at URL: `amazon.ca/s?node=XXXXXXXXX`
3. The number is the browse node ID

**Method 2: Browse Tree Guide**
1. Download Amazon's Browse Tree Guide (BTG)
2. Available in Seller Central → Help → Browse Tree Guide
3. Search for your category

**Method 3: Product Page**
1. Scroll down on any product page
2. Find "Best Sellers Rank"
3. Category shown = Browse node path

---

## Part 3: Checking If Keywords Are Indexed

### Method 1: ASIN + Keyword Search

**Step-by-step:**
1. Go to Amazon.ca
2. Search: `B0XXXXXXXXX keyword`
3. Replace with your ASIN and keyword

**Results:**
| Outcome | Meaning |
|---------|---------|
| Your product appears | **INDEXED** |
| "No results" or product doesn't appear | **NOT INDEXED** |

### Method 2: Brand Analytics (Brand Registered)

1. Go to Seller Central → **Brands** → **Brand Analytics**
2. Select **Search Query Performance**
3. Enter your keywords
4. Check if your ASIN appears

### Method 3: Search Term Report (PPC)

1. Download **Search Term Report** from Advertising
2. Look for search terms with impressions
3. Missing impressions = potential indexing issue

### Method 4: DataDive Indexing Check

1. Open your product in DataDive
2. Go to **Listing Builder** or **Analysis**
3. Check keyword indexing status
4. Look for "Indexed" vs "Not Indexed" indicators

---

## Part 4: Why Keywords Don't Index

### Common Causes

| Cause | Why It Happens | Solution |
|-------|----------------|----------|
| **Wrong browse node** | Category doesn't match keyword relevance | Change browse node |
| **Keyword not in listing** | Not in title, bullets, description, or backend | Add keyword to copy |
| **Listing suppressed** | Policy violation or data issue | Fix suppression cause |
| **New listing** | Takes 24-48 hours to fully index | Wait and recheck |
| **Catalog data mismatch** | Product type vs. keywords conflict | Update product type |

### Browse Node Mismatch Example

```
PROBLEM:
Product: Hot Tub Filter
Keyword: "pool filter cartridge"
Browse Node: Kitchen > Water Filtration > Pitcher Filters

WHY NOT INDEXING:
Amazon doesn't associate "pool filter" with kitchen products.

SOLUTION:
Change browse node to: Patio > Pools & Hot Tubs > Filters
```

---

## Part 5: Fixing Indexing Issues

### Step 1: Verify Browse Node

1. Check your current browse node in Seller Central:
   - Go to **Inventory** → **Manage All Inventory**
   - Click **Edit** on your product
   - Find category/browse node field

2. Compare to competitors:
   - Search for your main keyword
   - Check top 3 competitors' categories
   - Note their browse node path

3. Determine correct node:
   - Is your node aligned with competitors?
   - Is it specific enough (leaf node)?

### Step 2: Request Browse Node Change

**Method A: Edit Listing**
1. Edit product in Seller Central
2. Change category/browse node
3. Save changes
4. Wait 24-48 hours

**Method B: Support Case**
If listing won't allow change:

```
CASE TEMPLATE FOR BROWSE NODE CHANGE
====================================
Subject: Request Browse Node Change for ASIN [B0XXXXXXXXX]

Hello,

I need to change the browse node for my product as it's
currently incorrectly categorized.

ASIN: B0XXXXXXXXX
Product Name: [Your Product Name]

Current Browse Node: [Current category path]
Requested Browse Node: [Desired category path]
Browse Node ID: [XXXXXXXXX]

Reason: The current browse node prevents my product from
appearing in relevant searches. My product is a [product type]
and should be listed under [correct category].

Supporting Evidence:
- Competitor ASIN [B0XXXXXXXX] is correctly listed in [category]
- My product matches the browse node requirements

Please update my browse node accordingly.

Thank you,
[Your Name]
```

### Step 3: Optimize Listing for Indexing

Ensure keywords appear in priority order:

| Location | SEO Weight | Action |
|----------|------------|--------|
| **Title** | Highest | Include top 2-3 keywords |
| **Bullet Points** | High | Include supporting keywords |
| **Backend Search Terms** | Medium | Add overflow keywords |
| **Description** | Low | Include long-tail variations |

### Step 4: Verify Backend Data

Check these backend fields in Seller Central:

| Field | What to Check |
|-------|---------------|
| **Product Type** | Matches your category |
| **Item Type** | Specific to product |
| **Subject Matter** | Related keywords (5 fields) |
| **Search Terms** | Keywords filled (249 chars total) |
| **Target Audience** | If applicable |

---

## Part 6: Advanced Troubleshooting

### Using Amazon's Backend Data

**Key Backend Fields:**

| Field | Code | Purpose |
|-------|------|---------|
| GL | general_ledger | Main category |
| Product Type | product_type | Specific product classification |
| Item Type | item_type_name | Item category |
| DoW | display_on_website | Where product shows |

### AJAX URL Method (Advanced)

You can verify backend data using Amazon's AJAX calls:

**Format:**
```
https://www.amazon.ca/gp/product/features/dp-detail-ajax/B0XXXXXXXXX
```

**What to Look For:**
- Product type classification
- Category assignments
- Attribute matches

### "Winning Contributor" Issue

Sometimes multiple sellers contribute data to a listing, causing conflicts.

**Symptoms:**
- Your changes don't stick
- Listing reverts to old data
- Unable to update certain fields

**Solution:**
1. Open Seller Central case
2. Ask: "Who is the winning contributor for ASIN [B0XXXXXXXXX]?"
3. Request to become the winning contributor
4. Provide product documentation (invoices, brand authorization)

### Case Template for Winning Contributor

```
Subject: Request Winning Contributor Status for ASIN [B0XXXXXXXXX]

Hello,

I am the brand owner/authorized seller for [Product Name].
My listing changes are not being accepted because another
contributor has priority.

ASIN: B0XXXXXXXXX
Brand: [Your Brand]

I need to:
1. Confirm who is the current winning contributor
2. Request winning contributor status be transferred to my account
3. Update the product data accordingly

I have attached:
- Brand Registry confirmation
- Authorized seller documentation
- Product invoices

Please assist with this request.

Thank you,
[Your Name]
```

---

## Part 7: Monitoring Indexing

### Weekly Indexing Check

**Process:**
1. Identify your top 10 keywords
2. Test each using ASIN + keyword search
3. Document results
4. Address any not-indexed keywords

**Tracking Template:**

| Keyword | Search Volume | Indexed? | Date Checked | Notes |
|---------|---------------|----------|--------------|-------|
| type vi hot tub filter | 2,400 | Yes | 2026-01-23 | In title |
| bestway filter | 1,800 | Yes | 2026-01-23 | In bullets |
| saluspa replacement | 900 | No | 2026-01-23 | Adding to backend |

### Using Rank Radar (DataDive)

1. Set up Rank Radar tracking (SOP-401)
2. Monitor keyword positions
3. "Not Found" results may indicate indexing issues
4. Cross-reference with manual indexing checks

---

## Part 8: Prevention Best Practices

### At Listing Creation

- [ ] Research competitor browse nodes FIRST
- [ ] Choose most specific leaf node
- [ ] Include top keywords in title
- [ ] Fill all backend search term fields
- [ ] Set correct product type

### Ongoing Maintenance

- [ ] Weekly indexing spot-checks
- [ ] Monitor ranking changes (may indicate node changes)
- [ ] Review after any listing updates
- [ ] Check after Amazon catalog updates

### Red Flags to Watch

| Warning Sign | Possible Issue |
|--------------|----------------|
| Sudden ranking drop | Browse node changed |
| PPC impressions dropped | Keyword de-indexed |
| Category changed automatically | Amazon recategorization |
| Can't rank for obvious keywords | Indexing problem |

---

## Success Criteria

- [ ] Top 10 keywords verified as indexed
- [ ] Browse node confirmed as correct
- [ ] Backend search terms fully utilized
- [ ] Regular indexing monitoring scheduled
- [ ] Process for addressing issues established

---

## Related SOPs
- Previous: [SOP-1001: PPC Launch and Optimization](../10-ppc/SOP-1001-PPC-Launch-Optimization.md)
- Keyword Optimization: [SOP-302: Keyword Optimization](../03-listing-optimization/SOP-302-Keyword-Optimization.md)
- Troubleshooting: [SOP-501: Diagnose Performance Issues](../05-troubleshooting/SOP-501-Diagnose-Performance-Issues.md)
- Next: [SOP-1102: Post-Launch A/B Testing](SOP-1102-Post-Launch-Testing.md)

---

**Time Estimate:** 30-60 minutes for verification, varies for fixes
**Difficulty:** Intermediate-Advanced
**Last Updated:** 2026-01-23

---

*Nurise Listing Optimization SOP v1.0*
