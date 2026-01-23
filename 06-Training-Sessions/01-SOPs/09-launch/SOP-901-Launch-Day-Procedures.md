# SOP-901: Launch Day Procedures

**Nurise Listing Optimization**

---

## Purpose
Execute a coordinated product launch on Amazon by activating the suppressed listing, verifying content, initiating PPC campaigns, and driving traffic from multiple sources to maximize the honeymoon period impact.

## When to Use
- Launch day for a new product
- Re-launching a product after significant updates
- Activating a previously suppressed listing

## Prerequisites
- [ ] Suppressed listing complete (SOP-802)
- [ ] Packaging and inventory received at FBA (SOP-803)
- [ ] Listing fully optimized (SOP-304)
- [ ] PPC campaigns drafted (ready to activate)
- [ ] Marketing materials prepared
- [ ] Launch date confirmed

---

## Launch Day Overview

```
LAUNCH DAY TIMELINE
==================
Morning (9 AM):
├── Step 1: Activate listing (change dates)
├── Step 2: Verify listing content
└── Step 3: Confirm inventory status

Mid-Morning (10 AM):
├── Step 4: Activate PPC campaigns
└── Step 5: Monitor initial impressions

Afternoon (2 PM):
├── Step 6: Drive external traffic
└── Step 7: Activate promotions/coupons

Evening (6 PM):
├── Step 8: Day 1 review
└── Step 9: Enroll in Vine (if eligible)
```

---

## Procedure

### Step 1: Activate the Suppressed Listing

**Time:** 9:00 AM (local time for your marketplace)

#### Manual Method:
1. Log in to **Amazon Seller Central**
2. Go to **Inventory** → **Manage All Inventory**
3. Find your suppressed listing
4. Click **Edit**
5. Update dates:

| Field | Change To |
|-------|-----------|
| Launch Date | **Today's date** |
| Release Date | **Today's date** |
| Sale Date | **Today's date** |

6. Update **Quantity** to your actual FBA inventory count
7. Click **Save**

#### Flat File Method:
1. Update your flat file:
   ```
   quantity = [actual inventory count]
   launch-date = [today's date YYYY-MM-DD]
   release-date = [today's date]
   sale-date = [today's date]
   ```
2. Upload to Seller Central
3. Wait 15-30 minutes for processing

**Verification:**
- Click your product page link
- Confirm listing is LIVE (no "dog page")
- Verify Buy Box is active

---

### Step 2: Verify Listing Content

**Time:** 9:15 AM

Before driving any traffic, confirm everything is correct:

**Content Checklist:**
- [ ] Title displays correctly
- [ ] All 5 bullet points visible
- [ ] Description complete
- [ ] A+ Content displaying (if applicable)
- [ ] All images loaded
- [ ] Price is correct
- [ ] Fulfillment shows "Ships from Amazon"
- [ ] No suppression warnings

**Critical Elements:**
| Element | Check For |
|---------|-----------|
| **Title** | Keywords present, no truncation |
| **Images** | All 7+ images loaded, zoom works |
| **Price** | Correct amount, currency |
| **Buy Box** | "Add to Cart" active |
| **Shipping** | FBA badge showing |

---

### Step 3: Confirm Inventory Status

**Time:** 9:30 AM

In Seller Central:
1. Go to **Inventory** → **FBA Inventory**
2. Find your product
3. Verify:

| Status | What It Means |
|--------|---------------|
| **Available** | Ready to sell |
| **Reserved** | In transit to customer or processing |
| **Inbound** | Still being received |
| **Unfulfillable** | Problem - needs attention |

**Required Status:** Must show "Available" inventory before proceeding.

---

### Step 4: Activate PPC Campaigns

**Time:** 10:00 AM

Activate campaigns in this order:

#### Campaign 1: Product Targeting (Indexing)

**Purpose:** Index your product to competitor keywords

**Setup:**
| Setting | Value |
|---------|-------|
| Campaign Type | Sponsored Products |
| Targeting | Product Targeting |
| Targets | Top 25+ competitor ASINs |
| Daily Budget | $20-30 |
| Bid | $0.50-1.00 |

**How to Select Targets:**
1. Identify top 25 competitors in your niche
2. Copy their ASINs
3. Add as product targets
4. Focus on competitors with:
   - High reviews
   - Good BSR
   - Similar products

**Optimization (Days 4-6):**
- Turn OFF any target with 12+ clicks and 0 conversions
- Increase bid on converting targets

#### Campaign 2: Exact Match Keywords

**Purpose:** Target high-intent search terms

**Setup:**
| Setting | Value |
|---------|-------|
| Campaign Type | Sponsored Products |
| Targeting | Keyword Targeting |
| Match Type | Exact |
| Daily Budget | $30-50 |
| Bid | 1.5x - 2x suggested bid |

**Keyword Selection:**
1. Use your keyword research (SOP-201/202)
2. Group keywords by root word
3. Target keywords with:
   - 25+ monthly searches
   - High relevance to your product
   - Reasonable competition

**Campaign Structure:**
```
Campaign: [Product Name] - Exact
├── Ad Group: Root Word 1
│   └── Keywords: "root word 1 exact phrase"
├── Ad Group: Root Word 2
│   └── Keywords: "root word 2 exact phrase"
└── Ad Group: Root Word 3
    └── Keywords: "root word 3 exact phrase"
```

**Bid Strategy:**
| Suggested Bid | Your Starting Bid |
|---------------|-------------------|
| $1.00 | $1.50 - $2.00 |
| $0.75 | $1.13 - $1.50 |
| $0.50 | $0.75 - $1.00 |

> **Why Higher Bids?** New products need visibility. Higher bids ensure impressions during the critical honeymoon period.

---

### Step 5: Monitor Initial Impressions

**Time:** 12:00 PM (2 hours after PPC activation)

Check campaign performance:
1. Go to **Advertising** → **Campaign Manager**
2. Review:

| Metric | What to Look For |
|--------|------------------|
| Impressions | Should be increasing |
| Clicks | Some clicks appearing |
| Spend | Within daily budget |
| ACOS | Will be high initially (expected) |

**Early Warning Signs:**
| Issue | Possible Cause | Action |
|-------|----------------|--------|
| 0 impressions | Bid too low | Increase bids |
| Impressions, no clicks | Poor main image | Review image quality |
| Clicks, no orders | Price too high | Check competitive pricing |

---

### Step 6: Drive External Traffic

**Time:** 2:00 PM

Activate external traffic sources:

#### Social Media Launch

**Platforms to Post:**
- [ ] Facebook (business page)
- [ ] Instagram (with shopping tags if enabled)
- [ ] Pinterest (if visual product)
- [ ] TikTok (if relevant audience)

**Post Template:**
```
[PRODUCT ANNOUNCEMENT]

Introducing [Product Name]!

[Key benefit 1]
[Key benefit 2]
[Key benefit 3]

Now available on Amazon!
[Link]

Launch special: [Discount/Coupon code]
```

#### Email List Notification

**Subject Lines:**
- "It's HERE! [Product Name] Now Available"
- "Special Launch Offer for Our Subscribers"
- "You Asked, We Delivered: [Product] Is Live"

**Email Content:**
```
Hi [Name],

I'm excited to announce that [Product Name] is now available on Amazon!

As a valued subscriber, you get first access plus [X]% off with code [CODE].

[What makes this product special]

Grab yours before launch pricing ends:
[Amazon Link]

Best,
[Your Name]
```

#### Influencer Activations

If you've arranged influencer partnerships:
- Send confirmation message
- Provide tracking links
- Confirm posting schedule
- Share discount codes

---

### Step 7: Activate Promotions and Coupons

**Time:** 3:00 PM

#### Setting Up Coupons

1. Go to **Advertising** → **Coupons**
2. Click **Create a new coupon**
3. Configure:

| Setting | Recommended |
|---------|-------------|
| Discount Type | Percentage off |
| Discount Amount | 10-20% |
| Duration | 2-4 weeks |
| Budget | $500-1,000 |
| Redemption limit | None initially |

**Why Coupons Work:**
- Green badge attracts attention in search results
- Creates urgency
- Improves click-through rate
- Helps gather initial reviews

#### Lightning Deals (If Eligible)

For established sellers:
1. Go to **Advertising** → **Deals**
2. Check if product is eligible
3. Schedule deal during peak hours

---

### Step 8: Day 1 Review

**Time:** 6:00 PM

End-of-day performance check:

**Metrics to Record:**
| Metric | Day 1 Result | Notes |
|--------|--------------|-------|
| Sessions | | Page views |
| Page Views | | Total views |
| Buy Box % | | Should be ~100% |
| Units Ordered | | First day sales |
| Conversion Rate | | Orders/Sessions |
| PPC Impressions | | Ad visibility |
| PPC Clicks | | Ad engagement |
| PPC Spend | | Budget usage |

**Day 1 Expectations:**

| Product Type | Reasonable Day 1 Sales |
|--------------|------------------------|
| Low competition | 3-10 units |
| Medium competition | 1-5 units |
| High competition | 0-3 units |

> **Important:** Day 1 is about visibility, not profitability. High ACOS is expected.

---

### Step 9: Enroll in Amazon Vine (If Eligible)

**Time:** End of Day 1 or Day 2

Amazon Vine provides reviews from trusted reviewers.

**Eligibility:**
- Brand Registered
- Less than 30 reviews
- FBA product
- Product in stock

**How to Enroll:**
1. Go to **Advertising** → **Vine**
2. Search for your product
3. Click **Enroll**
4. Select units to provide (5-30 typical)
5. Confirm enrollment

**Cost:** $200 flat fee (as of 2026)

**Benefits:**
- Trusted, verified reviews
- Typically balanced/honest feedback
- Reviews marked as "Vine Voice"

---

## Post-Launch Daily Routine (Days 2-14)

### Daily Tasks:

| Time | Task | Purpose |
|------|------|---------|
| Morning | Check inventory levels | Prevent stockouts |
| Morning | Review PPC metrics | Optimize bids |
| Midday | Monitor reviews | Address issues |
| Evening | Check BSR trend | Track ranking progress |

### Weekly Tasks:

| Day | Task |
|-----|------|
| Day 3 | First PPC optimization (pause poor performers) |
| Day 7 | Review pricing strategy |
| Day 14 | Full PPC audit, adjust budgets |

---

## Success Criteria

**Day 1:**
- [ ] Listing successfully activated
- [ ] All content verified
- [ ] PPC campaigns running
- [ ] External traffic initiated
- [ ] Coupons active

**Week 1:**
- [ ] Consistent sales velocity
- [ ] First reviews appearing
- [ ] PPC optimized (poor targets removed)
- [ ] No suppression issues

**Week 2:**
- [ ] 5-10 reviews gathered
- [ ] Keywords indexing verified
- [ ] Stable ACOS trend
- [ ] Pricing optimized

---

## Common Launch Day Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Listing still suppressed | Dates not updated | Re-edit, change all dates to today |
| No Buy Box | Inventory issue | Check FBA inventory status |
| 0 PPC impressions | Bids too low | Increase bids by 50% |
| High ACOS | Expected on Day 1 | Monitor, optimize Day 3+ |
| Coupon not showing | Processing time | Wait 4 hours, recheck |

---

## Related SOPs
- Previous: [SOP-803: Packaging Requirements](../08-pre-launch/SOP-803-Packaging-Requirements.md)
- Next: [SOP-1001: PPC Launch and Optimization](../10-ppc/SOP-1001-PPC-Launch-Optimization.md)
- Tracking: [SOP-401: Rank Radar Setup](../04-keyword-tracking/SOP-401-Rank-Radar-Setup.md)

---

**Time Estimate:** Full launch day (8+ hours)
**Difficulty:** Advanced
**Last Updated:** 2026-01-23

---

*Nurise Listing Optimization SOP v1.0*
