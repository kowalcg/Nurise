# Product Validation Workflow Guide

## Overview

This guide outlines the step-by-step workflow for validating Nurise Group products using DataDive as the primary tool, with SmartScout for initial screening and MCP tools for supplementary validation.

---

## Phase 1: Data Preparation & Initial Screening

### Step 1.1: Export SmartScout Data

1. **Access SmartScout UPC Scraper**
   - Log into SmartScout
   - Navigate to UPC Scraper tool
   - Input all 116 product UPCs/EANs
   - Export to Excel: `SmartScout-Export-All-Products.xlsx`

2. **Save Export**
   - Save to: `Project/03-Analysis/SmartScout-Exports/`
   - File name: `SmartScout-Export-All-Products-[Date].xlsx`

### Step 1.2: Initial SmartScout Filtering

1. **Open Export in Excel**
2. **Apply Quick KILL Criteria** (eliminate immediately):
   - Filter: Net Margin <10% → KILL
   - Filter: "Dominant Seller" = "Amazon Retail" → KILL
   - Filter: Number of Sellers >100 → Flag for review
   - Filter: Rank >1,000,000 AND Estimated Monthly Units = 0 → KILL

3. **Flag Products for Deeper Analysis:**
   - Net Margin 10-25% → Flag for DataDive validation
   - 20-100 sellers → Flag as competitive but manageable
   - Seasonal products → Flag for seasonality validation

4. **Update Product Validation Database**
   - Open: `Project/03-Analysis/Product-Validation-Database.csv`
   - Fill in SmartScout columns for all products
   - Mark Status: "KILL" for eliminated products
   - Mark Status: "Flagged" for products needing deeper analysis
   - Mark Status: "Ready for DataDive" for products passing initial screening

### Step 1.3: Create Filtered Product List

1. **Export Filtered List**
   - Products with Status = "Ready for DataDive"
   - Save as: `SmartScout-Filtered-Products-[Date].xlsx`

---

## Phase 2: DataDive Deep Analysis

### Step 2.1: DataDive Setup

For each product passing initial screening:

1. **Create Niche in DataDive**
   - Log into DataDive
   - Create new niche: `[ITEM#] - [DESCRIPTION]`
   - Set marketplace: **Amazon Canada**
   - Add ASINs (if available from SmartScout)
   - Run initial dive

2. **Document Niche Details**
   - Note niche name and ID
   - Record date of analysis

### Step 2.2: Master Keyword List (MKL) Analysis

1. **Export MKL**
   - Navigate to Master Keyword List in DataDive
   - Export to Excel
   - Save as: `DataDive-Analysis/Master-Keyword-Lists/MKL-[ITEM#]-[DESCRIPTION].xlsx`

2. **Analyze MKL Data**
   - Count relevant keywords (exclude brand names, low-relevance)
   - Calculate total search volume
   - Identify top 10 keywords by search volume
   - Document in Product Analysis Template

3. **Assessment:**
   - **Good:** >30 relevant keywords with significant volume
   - **Bad:** <30 keywords → Score = 2

### Step 2.3: Roots Analysis

1. **Navigate to Roots Page**
   - Open Roots analysis in DataDive
   - Identify main keyword roots

2. **Document Roots**
   - Count main roots (need >3)
   - Record search volume distribution
   - Screenshot: `DataDive-Analysis/Roots-Analysis/Roots-[ITEM#]-[DESCRIPTION].png`

3. **Assessment:**
   - **Good:** >3 main roots with high search volume → Score = 4-5
   - **Bad:** <3 main roots → Score = 2

### Step 2.4: Competitor Analysis

1. **Review Master Keyword List Competitor Data**
   - Identify top 10 competitors
   - Document for each competitor:
     - Strength rating (Weak/Strong/Very Strong)
     - Rating and review counts
     - Listing age
     - Price positioning
     - Sales estimates (monthly units)
     - Revenue estimates
     - Number of variations
     - Brand presence
     - Seller country

2. **Check for Amazon Retail**
   - Search for "Amazon Retail" or "Amazon.com" in competitor list
   - Document if Amazon Retail is active

3. **Document Analysis**
   - Create: `DataDive-Analysis/Competitor-Analysis/Competitors-[ITEM#]-[DESCRIPTION].md`
   - Use competitor analysis template

4. **Assessment:**
   - **Good:** ≥2 strong competitors → Score = 4-5
   - **Bad:** <2 strong competitors → Score = 2

### Step 2.5: Product Scorecard

1. **Run Product Scorecard**
   - Navigate to Product Scorecard in DataDive
   - Complete all sections:
     - Traffic Distribution
     - Competitiveness
     - Profitability Potential
     - Keywords & Search Volume
     - Product Lifecycle
     - Market Comparison (if applicable)

2. **Document Results**
   - Screenshot: `DataDive-Analysis/Product-Scorecards/Scorecard-[ITEM#]-[DESCRIPTION].png`
   - Record risk scores
   - Document findings in Product Analysis Template

### Step 2.6: Deep Dive (Priority Products Only)

For high-priority products (Tier 1 GO candidates):

1. **Run Deep Dive**
   - Navigate to Deep Dive in DataDive
   - Review comprehensive competitor landscape
   - Assess market opportunity

2. **Document Findings**
   - Create: `DataDive-Analysis/Deep-Dive-Reports/DeepDive-[ITEM#]-[DESCRIPTION].md`

---

## Phase 3: Supplementary MCP Validation (AS NEEDED)

### Step 3.1: Perplexity Market Intelligence

Use when:
- Seasonality unclear from DataDive
- Need regulatory/compliance information
- Market trends not clear

**Queries to Run:**
1. "Amazon.ca market trends for [product category] 2025-2026"
2. "Seasonality patterns for [product] in Canada"
3. "Product safety requirements for [product category] in Canada"
4. "Insurance requirements for [product type] e-commerce Canada"

**Save Results:**
- `MCP-Research/Perplexity/Perplexity-[ITEM#]-[Topic].md`

### Step 3.2: Firecrawl Competitor Analysis

Use when:
- Need deeper competitor listing analysis
- DataDive competitor data insufficient

**Process:**
1. Identify top 5-10 competitor ASINs
2. Scrape each listing using Firecrawl
3. Extract: Pricing, reviews, content quality, A+ content
4. Analyze: Review sentiment, common complaints

**Save Results:**
- `MCP-Research/Firecrawl/Firecrawl-[ITEM#]-[Competitor-ASIN].md`

### Step 3.3: Data for SEO Analysis

Use when:
- Need additional keyword validation
- DataDive keyword data seems incomplete

**Process:**
1. Use `serp_organic_live_advanced` for primary keywords
2. Use `on_page_instant_pages` for top competitor listings
3. Validate DataDive findings

**Save Results:**
- `MCP-Research/DataForSEO/DataForSEO-[ITEM#]-[Keyword].md`

---

## Phase 4: Data Synthesis & Scoring

### Step 4.1: Compile All Data

For each product:

1. **Gather Data Sources:**
   - SmartScout metrics
   - DataDive MKL data
   - DataDive Roots analysis
   - DataDive Competitor analysis
   - DataDive Product Scorecard
   - MCP research (if used)

2. **Update Product Analysis Template**
   - Fill in all sections
   - Document all findings

### Step 4.2: Apply Scoring Framework

1. **Use Scoring Calculator**
   - Run: `python3 Project/03-Analysis/scoring_calculator.py`
   - Or use manual scoring based on framework

2. **Score Each Factor:**
   - Margin After All Fees (from SmartScout + DataDive)
   - Competition & Amazon Retail Risk (from DataDive)
   - Seasonality (from DataDive + Perplexity if needed)
   - Cube / Logistics Complexity (from product specs)
   - Insurance & Compliance Risk (from Perplexity + product knowledge)
   - Velocity vs Inventory Risk (from DataDive + SmartScout)

3. **Calculate Total Score**
   - Sum all 6 factor scores
   - Determine recommendation (GO/HOLD/CAUTION/KILL)

4. **Update Product Validation Database**
   - Fill in all score columns
   - Update Recommendation column
   - Update Status column

### Step 4.3: Generate Recommendations

1. **Categorize Products:**
   - GO (24-30 points): Prioritize for first launch
   - HOLD (18-23 points): Needs tweaks or more data
   - CAUTION (12-17 points): Strategic only
   - KILL (<12 points): Do not order

2. **Prioritize GO Products:**
   - Rank by total score (highest first)
   - Consider launch sequence
   - Recommend quantities

---

## Phase 5: Deliverable Creation

### Step 5.1: Create Product Validation Report

1. **Use Report Template**
   - Open: `Project/03-Analysis/Reports/Product-Validation-Report-Template.md`
   - Fill in Executive Summary
   - Add detailed analysis for each product
   - Create prioritized launch sequence
   - List KILL products with reasoning
   - Document HOLD products action plan

2. **Save Report**
   - `Project/03-Analysis/Reports/Product-Validation-Report-[Date].md`

### Step 5.2: Create Supporting Documents

1. **Product Validation Database**
   - Ensure all columns filled
   - Sort by recommendation
   - Export final version

2. **Quick Reference Guide**
   - Use template: `Project/03-Analysis/Reports/Quick-Reference-Guide.md`
   - Customize as needed

3. **Package All Deliverables**
   - Organize all files in proper directories
   - Create deliverable package structure

---

## Quality Checklist

Before finalizing:

- [ ] All products analyzed
- [ ] All DataDive exports saved
- [ ] All scores calculated
- [ ] All recommendations documented
- [ ] Report complete
- [ ] Database updated
- [ ] Supporting documents organized
- [ ] Client-ready package assembled

---

## Time Estimates

- **Phase 1:** 2-3 days (SmartScout export and filtering)
- **Phase 2:** 15-18 hours (DataDive analysis for all products)
- **Phase 3:** 3-5 hours (MCP validation as needed)
- **Phase 4:** 2-3 days (Scoring and recommendations)
- **Phase 5:** 1-2 days (Report creation)

**Total Estimated Time:** 20-25 hours for full validation

---

**Last Updated:** [Date]  
**Version:** 1.0


