# SOP-802: Creating a Suppressed Product Listing

**Nurise Listing Optimization**

---

## Purpose
Create a suppressed product listing on Amazon Seller Central to preserve the "honeymoon period" - the critical first 30 days when Amazon gives new listings increased visibility. By suppressing the listing until you're fully prepared, you maximize your launch impact.

## When to Use
- Preparing a new product launch
- Want to optimize listing before going live
- Need time to prepare inventory, images, or marketing
- Building multiple listings for simultaneous launch

## Prerequisites
- [ ] Amazon Seller Central account access
- [ ] Product information ready (title, description, images)
- [ ] ASIN or UPC/EAN for the product
- [ ] Launch date planned (at least 30 days out)
- [ ] Keywords researched (SOP-202 complete)

---

## Why Preserve the Honeymoon Period?

Amazon's algorithm gives new listings a temporary boost:

| Period | Amazon's Behavior | Your Opportunity |
|--------|-------------------|------------------|
| Days 1-14 | High visibility testing | Maximum sales velocity potential |
| Days 15-30 | Evaluating performance | Build reviews and ranking |
| Days 31+ | Normal algorithmic ranking | Position established |

**Key Insight:** If your listing goes live before it's optimized, you waste this critical window.

---

## Procedure

### Method A: Manual Creation (Seller Central)

#### Step 1: Log in to Amazon Seller Central
1. Navigate to [sellercentral.amazon.ca](https://sellercentral.amazon.ca)
2. Sign in with your credentials
3. Verify you're in the correct marketplace (Canada)

#### Step 2: Navigate to Add a Product
1. From the main dashboard, click **Inventory** in the top menu
2. Select **Add a Product**
3. Click **"I'm adding a product not sold on Amazon"** if it's new

#### Step 3: Enter Product Information
Complete all required fields:

| Section | What to Enter |
|---------|---------------|
| **Product Name** | Full optimized title (follow SOP-801 for compliance) |
| **Brand** | Your registered brand name |
| **Category** | Most relevant browse node |
| **Product ID** | UPC, EAN, or request exemption |
| **Images** | Upload all 7+ images |
| **Description** | Full product description |
| **Bullet Points** | All 5 bullet points |

#### Step 4: Set Future Dates (Critical)
In the **Offer** section, set these dates to **at least 30 days in the future**:

| Field | Setting | Purpose |
|-------|---------|---------|
| **Launch Date** | Future date (e.g., 30 days out) | When product goes live |
| **Release Date** | Same as Launch Date | When customers can see it |
| **Sale Date** | Same as Launch Date | When purchases are allowed |

**Example:** If today is January 23, 2026, set all dates to February 23, 2026 or later.

#### Step 5: Suppress the Listing
In the **Offer** tab:
1. Set **Quantity** to **0** (zero)
2. This prevents the listing from going live
3. The listing remains in your inventory but isn't visible to customers

#### Step 6: Save and Verify
1. Click **Save and finish**
2. Go to **Inventory** → **Manage All Inventory**
3. Find your listing
4. Click the Amazon product page link

**Verification:** If properly suppressed, you'll see Amazon's "dog page" (error page with a dog illustration).

---

### Method B: Flat File Upload (Bulk Creation)

#### Step 1: Download Template
1. Go to **Inventory** → **Add Products via Upload**
2. Click **Download an Inventory File**
3. Select your product category
4. Download the template

#### Step 2: Complete the Flat File
Fill out all required columns:

| Column | Value |
|--------|-------|
| **item_sku** | Your unique SKU |
| **product-id** | UPC/EAN |
| **product-id-type** | UPC or EAN |
| **item_name** | Full product title |
| **quantity** | **0** (zero) |
| **launch-date** | Future date (YYYY-MM-DD) |
| **release-date** | Same future date |
| **sale-date** | Same future date |

**Critical Columns for Suppression:**
```
quantity = 0
launch-date = 2026-02-23 (example)
release-date = 2026-02-23
sale-date = 2026-02-23
```

#### Step 3: Upload the File
1. Go to **Inventory** → **Add Products via Upload**
2. Click **Upload Your Inventory File**
3. Select your completed flat file
4. Click **Upload**
5. Wait for processing (check **Monitor Upload Status**)

#### Step 4: Verify Suppression
1. Go to **Manage All Inventory**
2. Check each listing status
3. Click product links to confirm "dog page" appears

---

## Optimization During Suppression

Use the suppression period to perfect your listing:

### Checklist: What to Prepare

**Content Optimization:**
- [ ] Title follows keyword strategy (SOP-302)
- [ ] All 5 bullet points optimized
- [ ] Description complete and compelling
- [ ] Backend search terms filled (249 characters)
- [ ] A+ Content created (if Brand Registered)

**Visual Assets:**
- [ ] Main image (white background, high-res)
- [ ] 6+ additional images uploaded
- [ ] Infographics created
- [ ] Lifestyle images included
- [ ] Video uploaded (if available)

**Marketing Preparation:**
- [ ] PPC campaign structure planned
- [ ] Keyword targets identified
- [ ] Budget allocated
- [ ] Promotional strategy defined
- [ ] Vine enrollment ready (if applicable)

**Inventory:**
- [ ] FBA shipment created or planned
- [ ] Units in transit or received
- [ ] Stock levels confirmed

---

## Launch Preparation Checklist

**3 Days Before Launch:**
- [ ] All listing content finalized
- [ ] Images verified and displaying correctly
- [ ] Inventory received at FBA
- [ ] PPC campaigns drafted (not activated)

**1 Day Before Launch:**
- [ ] Review all listing details
- [ ] Confirm inventory is available
- [ ] Finalize PPC campaign settings
- [ ] Prepare promotional materials

**Launch Day:**
- [ ] Change listing dates to TODAY
- [ ] Verify listing is live
- [ ] Activate PPC campaigns
- [ ] Proceed to SOP-901 (Launch Day Procedures)

---

## Unsuppressing the Listing

When ready to launch:

### Manual Method:
1. Go to **Inventory** → **Manage All Inventory**
2. Find your listing
3. Click **Edit**
4. Change dates to today's date:
   - Launch Date: Today
   - Release Date: Today
   - Sale Date: Today
5. Update **Quantity** to your actual inventory
6. Click **Save**

### Flat File Method:
1. Update the flat file:
   ```
   quantity = [actual quantity]
   launch-date = [today's date]
   release-date = [today's date]
   sale-date = [today's date]
   ```
2. Upload the updated file
3. Verify listing is now live

---

## Success Criteria
- [ ] Listing created with all content complete
- [ ] Future dates set (30+ days out)
- [ ] Quantity set to 0
- [ ] "Dog page" displays when visiting product URL
- [ ] Listing appears in inventory as suppressed
- [ ] Optimization tasks scheduled during suppression period

---

## Common Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| Listing goes live immediately | Dates not set far enough | Set dates 30+ days in future |
| Can't see listing in inventory | Processing delay | Wait 15-30 minutes, refresh |
| "Dog page" not appearing | Listing not fully suppressed | Verify quantity is 0 AND dates are future |
| Images not uploading | File format issue | Use JPEG/PNG, minimum 1000x1000px |
| Category restrictions | Product requires approval | Apply for category ungating first |

---

## Tips for Success

**Do:**
- Set dates conservatively (45-60 days gives more buffer)
- Complete ALL listing fields before launch
- Test product page link regularly
- Document your launch date in a calendar

**Don't:**
- Rush the suppression period
- Launch with incomplete content
- Forget to update quantity on launch day
- Skip backend keyword optimization

---

## Related SOPs
- Previous: [SOP-801: Prohibited Keywords List](SOP-801-Prohibited-Keywords-List.md)
- Next: [SOP-803: Packaging Requirements and Compliance](SOP-803-Packaging-Requirements.md)
- Launch: [SOP-901: Launch Day Procedures](../09-launch/SOP-901-Launch-Day-Procedures.md)

---

**Time Estimate:** 30-45 minutes for creation, ongoing optimization during suppression
**Difficulty:** Intermediate
**Last Updated:** 2026-01-23

---

*Nurise Listing Optimization SOP v1.0*
