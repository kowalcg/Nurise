# MCP Research Archive

This directory contains supplementary validation research using MCP tools (Perplexity, Firecrawl, Data for SEO).

## When to Use MCP Tools

MCP tools are used **AS NEEDED** to fill gaps in DataDive data or provide additional context:

- **Perplexity**: Market trends, seasonality research, regulatory requirements
- **Firecrawl**: Competitor listing deep-dive (if DataDive data insufficient)
- **Data for SEO**: Additional keyword validation (if needed)

## Directory Structure

```
MCP-Research/
├── Perplexity/ (Market intelligence queries)
│   ├── Market-Trends/
│   ├── Seasonality/
│   ├── Competitor-Intelligence/
│   └── Regulatory-Compliance/
├── Firecrawl/ (Competitor listing analysis)
│   └── Competitor-Listings/
└── DataForSEO/ (Keyword validation)
    └── Keyword-Research/
```

## Research Templates

### Perplexity Queries

**Market Trends:**
- "Amazon.ca market trends for [product category] 2025-2026"
- "Seasonality patterns for [product] in Canada"
- "Bestway [product name] competition on Amazon Canada"

**Competitor Intelligence:**
- "Top competitors for [product category] on Amazon.ca"
- "Amazon Retail presence in [product category] Canada"

**Regulatory & Compliance:**
- "Product safety requirements for [product category] in Canada"
- "Insurance requirements for [product type] e-commerce Canada"

### Firecrawl Usage

For high-priority products:
- Scrape top 5-10 competitor Amazon.ca listings
- Extract: Pricing, reviews, content quality, A+ content presence
- Analyze: Review sentiment, common complaints, differentiation opportunities

### Data for SEO Usage

For keyword-rich products:
- Use `serp_organic_live_advanced` for primary keywords
- Use `on_page_instant_pages` for top competitor listings
- Validate DataDive keyword findings

## File Naming Convention

- Perplexity: `Perplexity-{ITEM#}-{Topic}.md`
- Firecrawl: `Firecrawl-{ITEM#}-{Competitor-ASIN}.md`
- DataForSEO: `DataForSEO-{ITEM#}-{Keyword}.md`


