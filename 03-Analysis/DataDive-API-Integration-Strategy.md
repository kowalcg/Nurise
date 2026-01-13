# DataDive API Integration Strategy
## Product Availability & Quick Review System

**Date**: January 10, 2026
**Purpose**: Automate product validation using DataDive API for real-time availability and competitive analysis

---

## Executive Summary

This document outlines a strategy to integrate DataDive API with your product analysis workflow to:
1. **Check Product Availability** - Determine if products are currently selling on Amazon
2. **Quick Product Review** - Rapidly analyze market viability of the 15 priority products
3. **Automate Data Collection** - Reduce manual research time from hours to minutes

---

## DataDive API Overview

### Key Capabilities

Based on research, DataDive API provides:

| Capability | Description | Use Case for Your Products |
|------------|-------------|---------------------------|
| **Niche Analysis** | Comprehensive competitive landscape for product categories | Analyze entire pool/spa/recreation equipment niches |
| **Product Performance Metrics** | Sales estimates, BSR trends, pricing history, review data | Check if your 15 products have active competition |
| **Keyword Intelligence** | Master Keyword List (MKL), search volumes, relevancy scores | Optimize product listings and understand demand |
| **Profitability Calculator** | ROI projections, margin analysis, break-even calculations | Validate financial viability of each product |
| **Competitive Analysis** | Competitor products, pricing strategies, review metrics | Understand who you're competing against |

### Authentication

- **Method**: API Key or OAuth 2.0 (most likely API Key)
- **Access**: Must request from support@datadive.tools
- **Status**: Currently in Beta
- **Rate Limits**: TBD (typically 100-1000 requests per minute for beta APIs)

### Data Sources

DataDive aggregates data from:
- **Keepa**: Historical BSR, pricing trends
- **Jungle Scout**: Sales estimates, keyword data
- **Amazon Seller Central**: Real-time data (for authenticated users)
- **Google Trends**: Search interest patterns
- **Amazon Brand Analytics**: Enhanced market data

---

## Current Product Data Structure

### What You Have Now

From `Product-Validation-Database.csv` and `Selected-15-Items.csv`:

```csv
Columns:
- ITEM# (e.g., 58498, 58951)
- DESCRIPTION (Product name)
- EAN_CODE, UPC_CODE
- PRODUCT_TYPE, MEGA_CATEGORY
- SmartScout_ASIN (Amazon product identifier)
- SmartScout data (NetMargin, Rank, Sellers, etc.)
- DataDive columns (Score, KeywordCount, etc.) - mostly empty
- Amazon.ca Price/URL
- Competitor data
```

### The 15 Priority Products

1. **58498** - 6056L/1600gal Sand Filter
2. **58951** - 15'/4.57m Round Premium Pool Cover
3. **60310** - All in One Tool Set (SaluSpa)
4. **60321** - Hot Tub Seat
5. **60334** - 77"x77" Floor Protector
6. **59100** - 36" x 37.5" WonderJump Trampoline
7. **59124** - 40" x 53" Aerobounce Exercise Trampoline
8. **62322** - PowerTouch Pocket Rechargeable Electric Air Pump
9. **75123** - 44" x 44" x 26" Mighty Mushroom Air Chair
10. **90716** - Coleman QuickPump 120V Pump
11. **90708** - Coleman SupportRest Plus Twin Air Mattress
12. **90711** - Coleman GuestRest Queen Air Mattress
13. **90703** - Coleman Quickbed Twin
14. **90712** - Coleman Quickbed 4-N-1 Twin/King

---

## Integration Architecture

### Workflow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│ Step 1: Extract Product Data                                │
│ • Read Selected-15-Items.csv                                 │
│ • Extract ASIN, Description, Category, UPC/EAN              │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│ Step 2: API Request to DataDive                             │
│ • For each product, query:                                   │
│   - Niche Analysis (by category)                            │
│   - Product Performance (by ASIN if available)              │
│   - Keyword Research (by product description)               │
│   - Profitability Calculator (using your FOB costs)         │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│ Step 3: Process API Response                                │
│ • Parse JSON responses                                       │
│ • Extract key metrics:                                       │
│   - Sales velocity (units/month)                            │
│   - Competition level (# of sellers)                         │
│   - Average price points                                     │
│   - BSR trends (improving/declining)                         │
│   - Keyword search volumes                                   │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│ Step 4: Availability Determination                          │
│ • Active Market: >10 sellers, regular sales                 │
│ • Declining Market: BSR trending down, few sellers          │
│ • New Opportunity: Low competition, high search volume      │
│ • Saturated: High competition, low margins                  │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│ Step 5: Update Database                                     │
│ • Write results back to CSV                                  │
│ • Update DataDive_* columns                                  │
│ • Generate recommendation scores                             │
│ • Flag products for further review                          │
└─────────────────────────────────────────────────────────────┘
```

---

## API Endpoint Strategy

### Recommended API Calls (Per Product)

#### 1. **Niche Analysis Endpoint** (Conceptual)
```
GET /api/v1/niches/{niche_id}
or
POST /api/v1/niches
Body: {
  "category": "Pool Accessories",
  "marketplace": "CA",
  "analysis_type": "competitive_landscape"
}
```

**Returns**:
- Total competitors in niche
- Average sales volumes
- Price range distribution
- Seasonality patterns
- Competition strength score

**Use for**: Understanding overall market health

---

#### 2. **Product Performance Endpoint** (Conceptual)
```
GET /api/v1/products/{asin}/performance
or
POST /api/v1/products/analyze
Body: {
  "asin": "B0D9YXVSHK",
  "marketplace": "CA",
  "metrics": ["sales", "bsr", "reviews", "pricing"]
}
```

**Returns**:
- Estimated monthly sales (units)
- Current and historical BSR
- Review count and rating trends
- Price history (30/90/365 days)
- Availability status
- Number of active sellers

**Use for**: Checking if specific competing products are active

---

#### 3. **Keyword Research Endpoint** (Conceptual)
```
POST /api/v1/keywords/research
Body: {
  "seed_keywords": ["sand filter pump", "pool filter"],
  "marketplace": "CA",
  "include_search_volume": true
}
```

**Returns**:
- Master Keyword List (MKL)
- Search volumes per keyword
- Relevancy scores
- Keyword difficulty
- Related search terms

**Use for**: Validating demand exists for your products

---

#### 4. **Profitability Calculator Endpoint** (Conceptual)
```
POST /api/v1/profitability/calculate
Body: {
  "product_cost": 67.35,
  "target_price": 249.99,
  "category": "Pool Accessories",
  "marketplace": "CA",
  "fba_fees": true
}
```

**Returns**:
- Estimated gross margin
- Net profit per unit
- ROI percentage
- Break-even price
- Recommended pricing

**Use for**: Financial validation of each product

---

## Python Implementation Script

### File Structure
```
Project/03-Analysis/
├── datadive_api_integration.py    # Main integration script
├── config.py                       # API credentials
├── Product-Validation-Database.csv # Input data
└── API-Results/                    # Output folder
    ├── product_58498_analysis.json
    ├── product_58951_analysis.json
    └── summary_report.json
```

### Core Script: `datadive_api_integration.py`

```python
import requests
import pandas as pd
import json
import time
from datetime import datetime
from typing import Dict, List, Optional

class DataDiveAPIClient:
    """
    Client for interacting with DataDive API
    """

    def __init__(self, api_key: str, base_url: str = "https://api.datadive.tools/v1"):
        self.api_key = api_key
        self.base_url = base_url
        self.headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
        self.rate_limit_delay = 1.0  # seconds between requests

    def check_product_availability(self, asin: str, marketplace: str = "CA") -> Dict:
        """
        Check if a product is actively selling on Amazon

        Args:
            asin: Amazon Standard Identification Number
            marketplace: Amazon marketplace code (CA for Canada)

        Returns:
            Dict with availability status and key metrics
        """
        endpoint = f"{self.base_url}/products/{asin}/performance"
        params = {"marketplace": marketplace}

        try:
            response = requests.get(endpoint, headers=self.headers, params=params)
            response.raise_for_status()
            data = response.json()

            # Determine availability based on multiple factors
            availability_status = self._determine_availability(data)

            return {
                "asin": asin,
                "available": availability_status["is_available"],
                "status": availability_status["status"],
                "monthly_sales": data.get("estimated_monthly_sales", 0),
                "bsr": data.get("best_seller_rank", None),
                "seller_count": data.get("active_sellers", 0),
                "avg_price": data.get("average_price", 0),
                "review_count": data.get("review_count", 0),
                "rating": data.get("average_rating", 0),
                "timestamp": datetime.now().isoformat()
            }

        except requests.exceptions.HTTPError as e:
            if e.response.status_code == 404:
                return {
                    "asin": asin,
                    "available": False,
                    "status": "NOT_FOUND",
                    "error": "Product not found in DataDive database"
                }
            else:
                raise

        finally:
            time.sleep(self.rate_limit_delay)  # Respect rate limits

    def _determine_availability(self, product_data: Dict) -> Dict:
        """
        Determine product availability based on multiple signals
        """
        monthly_sales = product_data.get("estimated_monthly_sales", 0)
        seller_count = product_data.get("active_sellers", 0)
        bsr = product_data.get("best_seller_rank", None)

        # Availability logic
        if monthly_sales > 50 and seller_count > 3:
            status = "ACTIVE_MARKET"
            is_available = True
        elif monthly_sales > 10 and seller_count > 0:
            status = "LOW_VOLUME"
            is_available = True
        elif seller_count > 0 and bsr:
            status = "AVAILABLE_LOW_DATA"
            is_available = True
        else:
            status = "INACTIVE_OR_NEW"
            is_available = False

        return {
            "is_available": is_available,
            "status": status
        }

    def analyze_niche(self, category: str, marketplace: str = "CA") -> Dict:
        """
        Get comprehensive niche analysis
        """
        endpoint = f"{self.base_url}/niches/analyze"
        payload = {
            "category": category,
            "marketplace": marketplace,
            "include_competitors": True
        }

        try:
            response = requests.post(endpoint, headers=self.headers, json=payload)
            response.raise_for_status()
            return response.json()

        finally:
            time.sleep(self.rate_limit_delay)

    def get_keyword_data(self, keywords: List[str], marketplace: str = "CA") -> Dict:
        """
        Get keyword search volume and competitiveness
        """
        endpoint = f"{self.base_url}/keywords/research"
        payload = {
            "keywords": keywords,
            "marketplace": marketplace,
            "include_search_volume": True,
            "include_competitors": True
        }

        try:
            response = requests.post(endpoint, headers=self.headers, json=payload)
            response.raise_for_status()
            return response.json()

        finally:
            time.sleep(self.rate_limit_delay)

    def calculate_profitability(self, product_cost: float, target_price: float,
                               category: str, marketplace: str = "CA") -> Dict:
        """
        Calculate product profitability
        """
        endpoint = f"{self.base_url}/profitability/calculate"
        payload = {
            "product_cost": product_cost,
            "target_price": target_price,
            "category": category,
            "marketplace": marketplace,
            "include_fba_fees": True
        }

        try:
            response = requests.post(endpoint, headers=self.headers, json=payload)
            response.raise_for_status()
            return response.json()

        finally:
            time.sleep(self.rate_limit_delay)


class ProductValidator:
    """
    Validates products using DataDive API
    """

    def __init__(self, api_client: DataDiveAPIClient):
        self.api_client = api_client

    def validate_product_list(self, csv_file: str, output_dir: str = "API-Results"):
        """
        Validate all products from CSV file
        """
        # Read product data
        df = pd.read_csv(csv_file)

        # Filter to priority products (Status != 'Pending' if you want)
        # Or just process all

        results = []

        for idx, row in df.iterrows():
            product_id = row['ITEM#']
            description = row['DESCRIPTION']
            asin = row.get('SmartScout_ASIN', None)
            category = row['PRODUCT_TYPE']
            fob_price = row.get('26ss FOB', 0)
            amazon_price = row.get('Amazon.ca Price (CAD)', 0)

            print(f"\nAnalyzing {product_id}: {description}")

            product_result = {
                "product_id": product_id,
                "description": description,
                "category": category
            }

            # 1. Check availability if ASIN exists
            if pd.notna(asin) and asin:
                print(f"  Checking availability for ASIN: {asin}")
                availability = self.api_client.check_product_availability(asin)
                product_result["availability"] = availability

            # 2. Analyze niche
            print(f"  Analyzing niche: {category}")
            niche_data = self.api_client.analyze_niche(category)
            product_result["niche_analysis"] = niche_data

            # 3. Get keyword data
            keywords = self._extract_keywords(description)
            print(f"  Researching keywords: {keywords}")
            keyword_data = self.api_client.get_keyword_data(keywords)
            product_result["keyword_research"] = keyword_data

            # 4. Calculate profitability
            if fob_price > 0 and amazon_price > 0:
                print(f"  Calculating profitability (FOB: ${fob_price}, Target: ${amazon_price})")
                profit_data = self.api_client.calculate_profitability(
                    fob_price, amazon_price, category
                )
                product_result["profitability"] = profit_data

            # Generate quick recommendation
            recommendation = self._generate_recommendation(product_result)
            product_result["recommendation"] = recommendation

            results.append(product_result)

            # Save individual result
            output_file = f"{output_dir}/product_{product_id}_analysis.json"
            with open(output_file, 'w') as f:
                json.dump(product_result, f, indent=2)

            print(f"  ✓ Recommendation: {recommendation['action']} - {recommendation['reason']}")

        # Generate summary report
        self._generate_summary_report(results, output_dir)

        return results

    def _extract_keywords(self, description: str) -> List[str]:
        """
        Extract relevant keywords from product description
        """
        # Simple keyword extraction (can be enhanced with NLP)
        words = description.lower().split()
        # Remove common words, measurements, etc.
        stop_words = {'the', 'a', 'an', 'and', 'or', 'for', 'with', 'in', 'on'}
        keywords = [w for w in words if w not in stop_words and len(w) > 2]
        return keywords[:5]  # Return top 5 keywords

    def _generate_recommendation(self, product_data: Dict) -> Dict:
        """
        Generate go/no-go recommendation based on all data
        """
        # Extract key metrics
        availability = product_data.get("availability", {})
        niche = product_data.get("niche_analysis", {})
        keywords = product_data.get("keyword_research", {})
        profit = product_data.get("profitability", {})

        score = 0
        reasons = []

        # Availability check (30 points)
        if availability.get("available"):
            if availability["status"] == "ACTIVE_MARKET":
                score += 30
                reasons.append("Active market with proven demand")
            elif availability["status"] == "LOW_VOLUME":
                score += 20
                reasons.append("Market exists but lower volume")
        else:
            score += 15  # New market opportunity
            reasons.append("New market - could be opportunity or risk")

        # Competition check (25 points)
        seller_count = availability.get("seller_count", 0)
        if 3 <= seller_count <= 10:
            score += 25
            reasons.append("Optimal competition level")
        elif seller_count < 3:
            score += 15
            reasons.append("Low competition - validate demand carefully")
        else:
            score += 10
            reasons.append("High competition - differentiation needed")

        # Keyword demand (25 points)
        total_search_volume = keywords.get("total_search_volume", 0)
        if total_search_volume > 10000:
            score += 25
            reasons.append("Strong search demand")
        elif total_search_volume > 3000:
            score += 15
            reasons.append("Moderate search demand")
        else:
            score += 5
            reasons.append("Limited search data - niche or new category")

        # Profitability (20 points)
        roi = profit.get("roi_percentage", 0)
        if roi > 50:
            score += 20
            reasons.append("Excellent profit margins")
        elif roi > 30:
            score += 15
            reasons.append("Good profit potential")
        else:
            score += 5
            reasons.append("Tight margins - optimize costs")

        # Generate action
        if score >= 70:
            action = "GO - Strong Opportunity"
        elif score >= 50:
            action = "PROCEED WITH CAUTION - Validate Further"
        else:
            action = "HOLD - Needs More Research"

        return {
            "score": score,
            "action": action,
            "reason": " | ".join(reasons),
            "priority": "HIGH" if score >= 70 else "MEDIUM" if score >= 50 else "LOW"
        }

    def _generate_summary_report(self, results: List[Dict], output_dir: str):
        """
        Generate executive summary of all products
        """
        summary = {
            "report_date": datetime.now().isoformat(),
            "total_products_analyzed": len(results),
            "recommendations": {
                "go": [],
                "caution": [],
                "hold": []
            },
            "statistics": {
                "avg_score": 0,
                "active_markets": 0,
                "new_opportunities": 0,
                "high_competition": 0
            }
        }

        total_score = 0

        for result in results:
            rec = result["recommendation"]
            total_score += rec["score"]

            product_summary = {
                "product_id": result["product_id"],
                "description": result["description"],
                "score": rec["score"],
                "priority": rec["priority"]
            }

            if "GO" in rec["action"]:
                summary["recommendations"]["go"].append(product_summary)
            elif "CAUTION" in rec["action"]:
                summary["recommendations"]["caution"].append(product_summary)
            else:
                summary["recommendations"]["hold"].append(product_summary)

            # Update statistics
            availability = result.get("availability", {})
            if availability.get("available"):
                summary["statistics"]["active_markets"] += 1
                if availability.get("seller_count", 0) > 10:
                    summary["statistics"]["high_competition"] += 1
            else:
                summary["statistics"]["new_opportunities"] += 1

        summary["statistics"]["avg_score"] = total_score / len(results) if results else 0

        # Save summary
        output_file = f"{output_dir}/summary_report.json"
        with open(output_file, 'w') as f:
            json.dump(summary, f, indent=2)

        print("\n" + "="*60)
        print("EXECUTIVE SUMMARY")
        print("="*60)
        print(f"Total Products Analyzed: {summary['total_products_analyzed']}")
        print(f"Average Score: {summary['statistics']['avg_score']:.1f}/100")
        print(f"\nRecommendations:")
        print(f"  GO (Strong): {len(summary['recommendations']['go'])} products")
        print(f"  CAUTION: {len(summary['recommendations']['caution'])} products")
        print(f"  HOLD: {len(summary['recommendations']['hold'])} products")
        print(f"\nMarket Analysis:")
        print(f"  Active Markets: {summary['statistics']['active_markets']}")
        print(f"  New Opportunities: {summary['statistics']['new_opportunities']}")
        print(f"  High Competition: {summary['statistics']['high_competition']}")
        print("="*60)


# Main execution
if __name__ == "__main__":
    import os

    # Configuration
    API_KEY = os.getenv("DATADIVE_API_KEY")  # Store in environment variable
    CSV_FILE = "Product-Validation-Database.csv"
    OUTPUT_DIR = "API-Results"

    # Create output directory
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Initialize client
    client = DataDiveAPIClient(api_key=API_KEY)
    validator = ProductValidator(client)

    # Run validation
    print("Starting DataDive API Product Validation...")
    print("="*60)
    results = validator.validate_product_list(CSV_FILE, OUTPUT_DIR)
    print("\nValidation complete! Check API-Results/ for detailed reports.")
```

---

## Quick Start Guide

### Step 1: Get API Access

1. Email support@datadive.tools
2. Request API access for product validation
3. Specify use case: "Bulk product availability checking for Amazon.ca marketplace"
4. Receive API key and documentation

### Step 2: Set Up Environment

```bash
# Install dependencies
pip install requests pandas python-dotenv

# Create .env file
echo "DATADIVE_API_KEY=your_api_key_here" > .env

# Create output directory
mkdir -p Project/03-Analysis/API-Results
```

### Step 3: Run Initial Test

```python
# test_api.py
from datadive_api_integration import DataDiveAPIClient

client = DataDiveAPIClient(api_key="your_key_here")

# Test single product
result = client.check_product_availability("B0D9YXVSHK", "CA")
print(result)
```

### Step 4: Run Full Analysis

```bash
cd Project/03-Analysis
python datadive_api_integration.py
```

### Step 5: Review Results

Results will be in `Project/03-Analysis/API-Results/`:
- `product_58498_analysis.json` - Individual product reports
- `summary_report.json` - Executive summary

---

## Expected Output Format

### Individual Product Report
```json
{
  "product_id": "58498",
  "description": "6056L/1600gal Sand Filter",
  "category": "Pool Accessories",
  "availability": {
    "asin": "B0D9YXVSHK",
    "available": true,
    "status": "ACTIVE_MARKET",
    "monthly_sales": 245,
    "bsr": 12543,
    "seller_count": 8,
    "avg_price": 249.99,
    "review_count": 127,
    "rating": 4.3
  },
  "niche_analysis": {
    "total_competitors": 42,
    "avg_monthly_sales": 180,
    "price_range": [149.99, 399.99],
    "seasonality": "HIGH (May-August)"
  },
  "keyword_research": {
    "total_keywords": 87,
    "total_search_volume": 45200,
    "top_keywords": [
      {"keyword": "sand filter pump", "volume": 12400},
      {"keyword": "pool filter", "volume": 8900}
    ]
  },
  "profitability": {
    "gross_margin": 182.64,
    "net_profit": 115.32,
    "roi_percentage": 171.2,
    "break_even_price": 95.50
  },
  "recommendation": {
    "score": 85,
    "action": "GO - Strong Opportunity",
    "reason": "Active market with proven demand | Optimal competition level | Strong search demand | Excellent profit margins",
    "priority": "HIGH"
  }
}
```

### Summary Report
```json
{
  "report_date": "2026-01-10T15:30:00",
  "total_products_analyzed": 14,
  "recommendations": {
    "go": [
      {"product_id": "58498", "description": "Sand Filter", "score": 85, "priority": "HIGH"},
      {"product_id": "62322", "description": "Electric Air Pump", "score": 78, "priority": "HIGH"}
    ],
    "caution": [
      {"product_id": "60321", "description": "Hot Tub Seat", "score": 62, "priority": "MEDIUM"}
    ],
    "hold": [
      {"product_id": "75123", "description": "Mushroom Air Chair", "score": 45, "priority": "LOW"}
    ]
  },
  "statistics": {
    "avg_score": 68.5,
    "active_markets": 11,
    "new_opportunities": 3,
    "high_competition": 2
  }
}
```

---

## Benefits of This Approach

### Time Savings
- **Manual Research**: 2-3 hours per product × 14 products = 28-42 hours
- **API Automation**: 15 minutes total runtime
- **Savings**: ~40 hours (1 full work week)

### Data Quality
- **Real-time data** from multiple sources (Keepa, Jungle Scout, Amazon)
- **Consistent methodology** across all products
- **Quantifiable scores** for objective decision-making

### Scalability
- Easily analyze 100+ products in future
- Rerun analysis monthly to track market changes
- Integrate with dashboard for real-time visibility

---

## Next Steps

1. **Immediate** (This Week)
   - Request DataDive API access
   - Set up development environment
   - Test API with 2-3 products

2. **Short-term** (Next 2 Weeks)
   - Run full analysis on all 15 products
   - Review results and validate recommendations
   - Update Product-Validation-Database.csv with API data

3. **Medium-term** (Next Month)
   - Integrate with dashboard for live updates
   - Set up automated monthly re-analysis
   - Expand to analyze full product catalog (100+ items)

4. **Long-term** (Next Quarter)
   - Build custom scoring algorithm based on results
   - Create alerts for market changes
   - Integrate with Amazon Seller Central for automated listing optimization

---

## Cost Considerations

### DataDive API Pricing (Estimated)
- Beta access: Likely free or low-cost
- Production: Typically $50-200/month for API access
- Per-request fees: Possible (check with DataDive)

### ROI Calculation
- Cost: ~$100/month (estimated)
- Time saved: 40 hours/month @ $50/hour = $2,000
- **Net benefit**: $1,900/month

---

## Alternative Approaches

If DataDive API is not available or cost-prohibitive:

### Option 1: Manual API using Keepa + Jungle Scout
- Subscribe to Keepa API ($19/month) + Jungle Scout API ($50/month)
- Build custom aggregation layer
- More complex but cheaper

### Option 2: Web Scraping (Not Recommended)
- Violates Amazon TOS
- Unreliable and fragile
- Legal risks

### Option 3: Hybrid Approach
- Use DataDive API for priority products
- Use SmartScout for bulk analysis
- Manual review for edge cases

---

## Support & Resources

- **DataDive Support**: support@datadive.tools
- **API Documentation**: https://developer.datadive.tools/docs
- **Your Internal Contact**: [Your Name]
- **Project Dashboard**: https://kowalcg.github.io/Nurise/00-Dashboard/

---

## Appendix: API Request Examples

### Example 1: Check Product Availability
```bash
curl -X GET "https://api.datadive.tools/v1/products/B0D9YXVSHK/performance?marketplace=CA" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

### Example 2: Analyze Niche
```bash
curl -X POST "https://api.datadive.tools/v1/niches/analyze" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "category": "Pool Accessories",
    "marketplace": "CA",
    "include_competitors": true
  }'
```

### Example 3: Keyword Research
```bash
curl -X POST "https://api.datadive.tools/v1/keywords/research" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "keywords": ["sand filter pump", "pool filter"],
    "marketplace": "CA",
    "include_search_volume": true
  }'
```

---

**Document Version**: 1.0
**Last Updated**: January 10, 2026
**Status**: Ready for Implementation
