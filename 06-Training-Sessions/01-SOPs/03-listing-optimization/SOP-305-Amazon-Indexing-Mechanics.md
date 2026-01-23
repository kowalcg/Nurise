# SOP-305: Amazon Indexing Mechanics - Complete Guide

**Nurise Listing Optimization**

---

## Purpose
Master the mechanics of Amazon keyword indexing, including character limits, indexing hierarchy, forbidden keywords, and A+ Content considerations. This SOP covers the technical aspects of how Amazon indexes your listing content to ensure maximum keyword visibility.

## When to Use
- When writing new listing copy
- When optimizing existing listings for better indexing
- Before publishing any listing content
- When testing if keywords are properly indexed
- When troubleshooting why keywords aren't appearing in search

## Prerequisites
- [ ] Understanding of basic Amazon listing structure
- [ ] Access to Seller Central
- [ ] Keyword research completed (SOP-201/202)
- [ ] Familiarity with SOP-1101 (Keyword Indexing Troubleshooting)

---

## Part 1: What is Amazon Indexing?

### Definition

**Indexing** = Having your keywords stored in Amazon's algorithm database so your product appears when customers search for those terms.

### Key Concept

```
INDEXED     = Keyword is in Amazon's database → Product CAN appear in search
NOT INDEXED = Keyword is NOT in database → Product CANNOT appear in search
```

> **Critical Understanding:** If a keyword is NOT indexed, your product will NEVER appear for that search term - regardless of how much you spend on PPC or how well optimized your listing is.

### The "Discovery vs. Search" Model

Amazon operates on two principles:
1. **Discovery** - Product appears through browsing, recommendations
2. **Search** - Product appears when customer searches specific keywords

**Indexing only matters for Search.** Your product must be indexed for keywords to appear in search results.

---

## Part 2: Indexing Hierarchy

### Priority Order (Most to Least Important)

| Priority | Location | Indexing Weight | Notes |
|----------|----------|-----------------|-------|
| **1st** | Title | Highest | Most powerful for ranking |
| **2nd** | Bullet Points | High | Subject to character limits |
| **3rd** | Backend Search Terms | Medium | Hidden from customers |
| **4th** | Description | Lower | Still valuable |

### What This Means for Strategy

1. **Title First** - Put your most important keywords in the title
2. **Bullets Second** - Use bullets for secondary keywords
3. **Backend Third** - Use for overflow keywords not fitting elsewhere
4. **Description Fourth** - Use for long-tail and natural language variations

---

## Part 3: Character Limits and Indexing Rules

### Critical Character Limits

| Field | Display Limit | Indexing Limit | TOS Recommendation |
|-------|---------------|----------------|-------------------|
| **Title** | 200 characters | 200 characters | Varies by category (80-200) |
| **Bullet Points** | 500 chars/bullet | **1000 chars TOTAL*** | 500 chars/bullet |
| **Backend Search Terms** | 249 bytes | 249 bytes | Use all 249 bytes |
| **Description** | 2000 characters | 2000 characters | 2000 chars (including HTML) |

### CRITICAL: The Bullet Point 1000-Character Rule

> **WARNING:** This is the most important indexing rule most sellers don't know.

**The Rule:** Amazon only indexes approximately **1000 characters total** across ALL bullet points combined - NOT 500 characters per bullet.

**What This Means:**

```
SCENARIO A: 5 bullets × 500 characters each = 2,500 characters written
REALITY: Amazon only indexes ~1000 of those characters

SCENARIO B: 5 bullets × 200 characters each = 1,000 characters written
REALITY: All 1,000 characters likely indexed
```

**How Amazon Selects Characters:**
- Amazon does NOT simply index the first 1000 characters
- The selection algorithm appears somewhat random
- This means keywords in bullet #4 or #5 may OR may not be indexed

### Best Practice for Bullet Points

| Approach | Recommendation |
|----------|----------------|
| **Option A** | Keep total bullet content under 1000 characters |
| **Option B** | Front-load critical keywords in bullets 1-2 |
| **Option C** | Use backend search terms for overflow keywords |

### Title Character Limits by Category

| Category | Recommended Limit |
|----------|------------------|
| Most categories | 200 characters |
| Clothing/Apparel | 80 characters |
| Books | 200 characters |
| Electronics | 200 characters |

> **Note:** Always check your specific category's style guide in Seller Central.

---

## Part 4: How to Test if Keywords are Indexed

### The ASIN + Keyword Method

**Step-by-Step Process:**

1. Go to Amazon.com (or your marketplace)
2. In the search bar, type: `[ASIN] [space] [keyword]`
3. Press Enter
4. Observe the result

**Example:**
```
Search: B09EXAMPLE123 organic vitamin
```

### Interpreting Results

| Result | Visual Indicator | Meaning |
|--------|------------------|---------|
| Product appears in search | "Orange response" - your product shows | **INDEXED** |
| No results / Product doesn't appear | Empty results or "No results" | **NOT INDEXED** |

### The "Orange Response"

When a keyword IS indexed, Amazon shows your product with an orange-ish highlight or your product appears in the search results. This visual confirmation is your proof of indexing.

### Testing Best Practices

1. **Test one keyword at a time** - Don't combine multiple keywords
2. **Use exact match** - Test the exact phrase you want to rank for
3. **Test after changes** - Wait 24-48 hours after listing updates
4. **Document results** - Keep a record of indexed vs. non-indexed keywords

### Indexing Test Template

| Keyword | Search Volume | Indexed? | Date Tested | Location in Listing | Action Needed |
|---------|---------------|----------|-------------|---------------------|---------------|
| organic vitamins | 5,000 | Yes | YYYY-MM-DD | Title | None |
| natural supplements | 3,200 | No | YYYY-MM-DD | Bullet 4 | Move to title |
| daily multivitamin | 2,800 | Yes | YYYY-MM-DD | Bullet 1 | None |

---

## Part 5: Forbidden and Trigger Keywords

### Keywords That Can Cause Problems

Certain keywords trigger Amazon's automated systems and can result in:
- Listing suppression
- Keyword removal
- Account warnings
- ASIN suspension

### High-Risk Keyword Categories

| Category | Example Keywords | Risk Level |
|----------|------------------|------------|
| **Medical Claims** | antibacterial, antimicrobial, antifungal | HIGH |
| **Pesticide-Related** | kills bugs, pest control, insecticide | HIGH |
| **CBD/Cannabis** | CBD, hemp oil (context dependent) | HIGH |
| **Mold-Related** | mold killer, mold remover, anti-mold | HIGH |
| **Unverified Claims** | FDA approved, clinically proven, cures | HIGH |

### Specific Forbidden/Risky Terms

**Pesticide Trigger Words:**
- Kills/destroys [any pest]
- Repels [insects/rodents]
- Pesticide
- Insecticide
- Bug killer
- Pest control

**Medical Claim Triggers:**
- Antibacterial
- Antimicrobial
- Antifungal
- Antiviral
- Disinfectant (without EPA registration)
- Sanitizer (without FDA registration)

**Other Risky Terms:**
- Mold (in cleaning products context)
- Organic (without USDA certification)
- FDA approved (without actual approval)

### How to Handle Risky Keywords

| If You Need To... | Do This Instead |
|-------------------|-----------------|
| Describe antibacterial properties | Use "helps maintain cleanliness" |
| Mention mold prevention | Use "moisture control" or "ventilation" |
| Describe pest benefits | Focus on other product benefits |
| Make health claims | Use "supports wellness" language |

### Checking for Forbidden Keywords

**Before Publishing:**
1. Review Amazon's Restricted Products policies
2. Search for your keywords in Seller Central policy pages
3. Check category-specific style guides
4. When in doubt, don't include the keyword

> **Reference:** See SOP-801 (Prohibited Keywords List) for comprehensive list

---

## Part 6: A+ Content and Indexing

### The A+ Content Indexing Rule

> **Critical Fact:** A+ Content visible text is **NOT indexed** for search on the front-end.

### What IS and ISN'T Indexed

| A+ Component | Indexed? | Notes |
|--------------|----------|-------|
| Module headlines | NO | Not searchable |
| Module body text | NO | Not searchable |
| Comparison charts | NO | Not searchable |
| Image text overlays | NO | Not searchable |
| **Image ALT tags** | **YES** | Adds to indexing! |
| **Backend description** | **YES** | Still indexed even with A+ |

### The ALT Tag Opportunity

Even though A+ Content text isn't indexed, the **image ALT tags** (alternative text) ARE indexed by Amazon.

**How to Use ALT Tags:**

1. When uploading A+ Content images, fill in the ALT text field
2. Include relevant keywords in ALT descriptions
3. Make ALT text descriptive AND keyword-rich

**Example ALT Tags:**
```
Image: Product lifestyle shot
Poor ALT: "product image 1"
Good ALT: "organic vitamin supplements bottle with natural ingredients on kitchen counter"
```

### Backend Description Still Matters

**Even with A+ Content enabled:**
- Your backend description field remains indexed
- Always fill out the description field
- Use it for keywords that don't fit elsewhere
- Don't leave it blank just because A+ is live

### A+ Content Strategy for Indexing

```
A+ Content Focus: Conversion (images, comparison charts, brand story)
Backend Description Focus: Indexing (keywords, search terms)
```

---

## Part 7: Exact Match vs. Phrase Indexing

### Understanding Exact Match

**Exact Match** = The complete keyword phrase appears together in your listing

**Example:**
- Keyword target: "organic vitamin c supplements"
- Exact match: "...our organic vitamin c supplements provide..."
- NOT exact match: "...organic supplements with vitamin c..."

### Why Exact Match Matters

| Match Type | Indexing | Ranking Potential |
|------------|----------|-------------------|
| Exact match in title | Strong indexing | Highest ranking potential |
| Exact match in bullets | Good indexing | Good ranking potential |
| Partial/scattered match | May index | Lower ranking potential |
| No match | No indexing | Cannot rank |

### Exact Match Placement Priority

1. **Title** - Put exact match of top 1-2 keywords
2. **Bullet 1-2** - Put exact match of keywords 3-5
3. **Backend** - Put exact match of overflow keywords

### Strategy for Long-Tail Keywords

For longer keyword phrases:
- Keep the exact phrase together when possible
- If breaking apart, keep core words adjacent
- Test indexing after publishing

---

## Part 8: TOS Compliance for Listing Content

### Amazon's Official Style Guide Requirements

**Title Requirements:**
- No promotional phrases ("best seller," "top rated")
- No pricing information
- No excessive capitalization
- No special characters (except where needed)
- Category-specific length limits

**Bullet Point Requirements:**
- Start with capital letter
- No promotional language
- No pricing or shipping info
- No time-sensitive information
- Feature-benefit format recommended

**Description Requirements:**
- No HTML formatting (except basic tags)
- No external URLs
- No contact information
- No promotional content

### TOS Reference Links

When in doubt, check these Seller Central resources:
- Product title requirements
- Product detail page rules
- Category style guides
- Restricted products policies

---

## Part 9: Indexing Optimization Workflow

### For New Listings

```
STEP 1: Keyword Research
        ↓
STEP 2: Prioritize Keywords (by search volume and relevance)
        ↓
STEP 3: Map Keywords to Listing Locations
        - Top 2-3 → Title (exact match)
        - Next 5-10 → Bullets 1-2 (exact match)
        - Overflow → Backend search terms
        ↓
STEP 4: Write Copy (within character limits)
        - Title: Under 200 chars
        - Bullets: Under 1000 chars TOTAL
        ↓
STEP 5: Check for Forbidden Keywords
        ↓
STEP 6: Publish
        ↓
STEP 7: Wait 24-48 hours
        ↓
STEP 8: Test Indexing (ASIN + keyword)
        ↓
STEP 9: Adjust if needed
```

### For Existing Listings

```
STEP 1: Test Current Indexing Status
        - Test top 20 keywords
        - Document which are/aren't indexed
        ↓
STEP 2: Identify Problems
        - Non-indexed important keywords
        - Keywords in low-priority locations
        ↓
STEP 3: Optimize
        - Move critical keywords to title
        - Consolidate bullets under 1000 chars
        - Add missing keywords to backend
        ↓
STEP 4: Publish Changes
        ↓
STEP 5: Re-test in 24-48 hours
```

---

## Part 10: Indexing Checklist

### Pre-Publication Checklist

- [ ] Top 3 keywords appear as exact match in title
- [ ] Title is under 200 characters (or category limit)
- [ ] Total bullet point characters under 1000
- [ ] Secondary keywords in bullets 1-2
- [ ] Backend search terms filled (249 bytes)
- [ ] No forbidden/trigger keywords
- [ ] No TOS violations
- [ ] A+ Content ALT tags include keywords
- [ ] Backend description completed (even with A+ Content)

### Post-Publication Checklist (24-48 hours later)

- [ ] Test top 10 keywords using ASIN + keyword method
- [ ] Document indexed vs. non-indexed
- [ ] Identify keywords needing relocation
- [ ] Plan adjustments if needed

### Monthly Indexing Audit

- [ ] Re-test top 20 keywords
- [ ] Check for any de-indexing
- [ ] Review for new keyword opportunities
- [ ] Update tracking spreadsheet

---

## Quick Reference Card

### Character Limits

| Field | Indexing Limit |
|-------|----------------|
| Title | 200 chars |
| Bullets (TOTAL) | 1000 chars |
| Backend | 249 bytes |
| Description | 2000 chars |

### Indexing Test

```
Search: [ASIN] [space] [keyword]
Result: Product appears = INDEXED
Result: No product = NOT INDEXED
```

### Hierarchy

```
Title (1st) > Bullets (2nd) > Backend (3rd) > Description (4th)
```

### Forbidden Keywords

Avoid: antibacterial, mold, pesticide-related, unverified claims

### A+ Content

- Front-end text: NOT indexed
- ALT tags: INDEXED
- Backend description: INDEXED

---

## Success Criteria

- [ ] Top 10 keywords confirmed indexed
- [ ] All character limits respected
- [ ] No forbidden keywords in listing
- [ ] A+ Content ALT tags optimized
- [ ] Backend fields fully utilized
- [ ] Regular indexing monitoring scheduled

---

## Related SOPs

- Previous: [SOP-304: Listing Builder Complete Guide](SOP-304-Listing-Builder-Complete-Guide.md)
- Keyword Research: [SOP-302: Keyword Optimization](SOP-302-Keyword-Optimization.md)
- Troubleshooting: [SOP-1101: Keyword Indexing Troubleshooting](../11-post-launch/SOP-1101-Keyword-Indexing.md)
- Forbidden Keywords: [SOP-801: Prohibited Keywords List](../08-pre-launch/SOP-801-Prohibited-Keywords-List.md)

---

## Source Material

This SOP is based on the webinar "Indexing on Amazon - How To Do It Right" by Tomer Levin (Blaze Copywriting), which provided detailed insights into Amazon's indexing mechanics, character limits, and best practices.

---

**Time Estimate:** 1-2 hours for full indexing optimization
**Difficulty:** Intermediate
**Last Updated:** 2026-01-23

---

*Nurise Listing Optimization SOP v1.0*
