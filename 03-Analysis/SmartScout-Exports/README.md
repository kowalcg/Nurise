# SmartScout Exports

This directory will contain SmartScout UPC scraper exports for initial product screening.

## Expected Files

- `SmartScout-Export-All-Products.xlsx` - Full export of all 116 products
- `SmartScout-Filtered-Products.xlsx` - Products passing initial screening

## Initial Filtering Criteria

### Quick KILL Criteria (eliminate immediately):
- Net Margin <10% (after all fees)
- Amazon Retail owns buy box (check "Dominant Seller" column)
- Number of Sellers >100 (highly competitive)
- Rank >1,000,000 with 0 estimated monthly units

### Flag for Deeper Analysis:
- Products with Net Margin 10-25% (need DataDive validation)
- Products with 20-100 sellers (competitive but manageable)
- Seasonal products (need seasonality validation)

## Data Points to Extract

For each product:
- ASIN
- Buy Box Price
- FBA Fees
- Net Profit
- Net Margin
- ROI
- Rank
- Number of Sellers
- Amazon In-Stock Rate
- Title
- UPC/EAN


