#!/usr/bin/env python3
"""
Product Validation Scoring Calculator
Applies the 6-factor scoring framework from NURISE_Consulting_Framework.md
"""

def score_margin(net_margin_percent):
    """
    Score Margin After All Fees (1-5 scale)
    5 = >35%, 4 = 25-35%, 3 = 15-25%, 2 = 10-15%, 1 = <10%
    """
    if net_margin_percent >= 35:
        return 5
    elif net_margin_percent >= 25:
        return 4
    elif net_margin_percent >= 15:
        return 3
    elif net_margin_percent >= 10:
        return 2
    else:
        return 1

def score_competition(num_sellers, amazon_retail_owns_buybox=False, amazon_retail_active=False):
    """
    Score Competition & Amazon Retail Risk (1-5 scale)
    5 = <20 sellers, no Amazon Retail, weak listings
    4 = 20-50 sellers, no Amazon Retail
    3 = 50-100 sellers, Amazon Retail NOT active but purchased in past
    2 = 100+ sellers OR Amazon Retail active in US
    1 = Amazon Retail owns buy box in Canada
    """
    if amazon_retail_owns_buybox:
        return 1
    elif amazon_retail_active:
        return 2
    elif num_sellers >= 100:
        return 2
    elif num_sellers >= 50:
        return 3
    elif num_sellers >= 20:
        return 4
    else:
        return 5

def score_seasonality(seasonality_type):
    """
    Score Seasonality (1-5 scale)
    5 = Year-round, 4 = Light seasonal, 3 = Moderate, 2 = High, 1 = Single-season
    """
    seasonality_map = {
        'year-round': 5,
        'light': 4,
        'moderate': 3,
        'high': 2,
        'single-season': 1
    }
    return seasonality_map.get(seasonality_type.lower(), 3)

def score_cube(size_tier, cube_cbm=None):
    """
    Score Cube / Logistics Complexity (1-5 scale)
    5 = Small/lightweight, 4 = Medium, 3 = Bulky, 2 = High cube, 1 = Oversized
    """
    if size_tier == 'Small Standard':
        return 5
    elif size_tier == 'Large Standard':
        return 4
    elif size_tier == 'Oversize':
        if cube_cbm and cube_cbm > 0.5:
            return 1  # Very high cube
        else:
            return 2  # High cube but manageable
    else:
        return 3  # Bulky

def score_insurance(risk_level):
    """
    Score Insurance & Compliance Risk (1-5 scale)
    5 = Low risk, 4 = Minimal PLI, 3 = Moderate, 2 = High PLI, 1 = Prohibitive
    """
    risk_map = {
        'low': 5,
        'minimal': 4,
        'moderate': 3,
        'high': 2,
        'prohibitive': 1
    }
    return risk_map.get(risk_level.lower(), 3)

def score_velocity(bsr, has_sales_rank=True):
    """
    Score Velocity vs Inventory Risk (1-5 scale)
    5 = High BSR <5K, 4 = Moderate 5K-20K, 3 = Slower 20K-50K, 2 = Low >50K, 1 = No data
    """
    if not has_sales_rank or bsr is None:
        return 1
    elif bsr < 5000:
        return 5
    elif bsr < 20000:
        return 4
    elif bsr < 50000:
        return 3
    else:
        return 2

def calculate_total_score(scores):
    """
    Calculate total score from individual factor scores
    Returns total score and recommendation
    """
    total = sum(scores.values())
    
    if total >= 24:
        recommendation = 'GO'
    elif total >= 18:
        recommendation = 'HOLD'
    elif total >= 12:
        recommendation = 'CAUTION'
    else:
        recommendation = 'KILL'
    
    return total, recommendation

def score_product(product_data):
    """
    Score a product using all 6 factors
    product_data should contain:
    - net_margin_percent
    - num_sellers
    - amazon_retail_owns_buybox (bool)
    - amazon_retail_active (bool)
    - seasonality_type
    - size_tier
    - cube_cbm (optional)
    - insurance_risk_level
    - bsr
    - has_sales_rank (bool)
    """
    scores = {
        'margin': score_margin(product_data.get('net_margin_percent', 0)),
        'competition': score_competition(
            product_data.get('num_sellers', 0),
            product_data.get('amazon_retail_owns_buybox', False),
            product_data.get('amazon_retail_active', False)
        ),
        'seasonality': score_seasonality(product_data.get('seasonality_type', 'moderate')),
        'cube': score_cube(
            product_data.get('size_tier', 'Large Standard'),
            product_data.get('cube_cbm')
        ),
        'insurance': score_insurance(product_data.get('insurance_risk_level', 'moderate')),
        'velocity': score_velocity(
            product_data.get('bsr'),
            product_data.get('has_sales_rank', False)
        )
    }
    
    total, recommendation = calculate_total_score(scores)
    
    return {
        'scores': scores,
        'total': total,
        'recommendation': recommendation
    }

if __name__ == '__main__':
    # Example usage
    example_product = {
        'net_margin_percent': 28,
        'num_sellers': 15,
        'amazon_retail_owns_buybox': False,
        'amazon_retail_active': False,
        'seasonality_type': 'high',
        'size_tier': 'Large Standard',
        'cube_cbm': 0.1,
        'insurance_risk_level': 'moderate',
        'bsr': 12000,
        'has_sales_rank': True
    }
    
    result = score_product(example_product)
    print(f"Scores: {result['scores']}")
    print(f"Total: {result['total']}")
    print(f"Recommendation: {result['recommendation']}")


