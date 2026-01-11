#!/usr/bin/env python3
"""
Update Product Validation Database with scores and recommendations
"""

import csv
from pathlib import Path
from scoring_calculator import score_product, calculate_total_score

def update_database_with_scores(database_path, output_path=None):
    """Update database with calculated scores"""
    
    if output_path is None:
        output_path = database_path
    
    products = []
    
    # Read existing database
    with open(database_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        products = list(reader)
    
    # Update each product with scores
    for product in products:
        # Skip if already scored
        if product.get('Total_Score') and product.get('Total_Score').strip():
            continue
        
        # Prepare product data for scoring
        try:
            net_margin = float(product.get('SmartScout_NetMargin', 0) or 0)
            num_sellers = int(product.get('SmartScout_Sellers', 0) or 0)
            bsr = product.get('SmartScout_Rank', '').strip()
            bsr_int = int(bsr) if bsr and bsr.isdigit() else None
            
            product_data = {
                'net_margin_percent': net_margin,
                'num_sellers': num_sellers,
                'amazon_retail_owns_buybox': False,  # Update from SmartScout data
                'amazon_retail_active': False,  # Update from SmartScout data
                'seasonality_type': 'moderate',  # Update based on product type
                'size_tier': 'Large Standard',  # Update from product specs
                'cube_cbm': float(product.get('CUBE', 0) or 0) if product.get('CUBE') else None,
                'insurance_risk_level': 'moderate',  # Update based on product type
                'bsr': bsr_int,
                'has_sales_rank': bsr is not None and bsr.strip() != ''
            }
            
            # Score product
            result = score_product(product_data)
            
            # Update product record
            product['Score_Margin'] = str(result['scores']['margin'])
            product['Score_Competition'] = str(result['scores']['competition'])
            product['Score_Seasonality'] = str(result['scores']['seasonality'])
            product['Score_Cube'] = str(result['scores']['cube'])
            product['Score_Insurance'] = str(result['scores']['insurance'])
            product['Score_Velocity'] = str(result['scores']['velocity'])
            product['Total_Score'] = str(result['total'])
            product['Recommendation'] = result['recommendation']
            
        except Exception as e:
            print(f"Error scoring product {product.get('ITEM#')}: {e}")
            continue
    
    # Write updated database
    with open(output_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(products)
    
    print(f"Updated {len(products)} products in database")
    print(f"Saved to: {output_path}")

def generate_summary(database_path):
    """Generate summary statistics from database"""
    
    products = []
    with open(database_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        products = list(reader)
    
    total = len(products)
    go = sum(1 for p in products if p.get('Recommendation', '').strip() == 'GO')
    hold = sum(1 for p in products if p.get('Recommendation', '').strip() == 'HOLD')
    caution = sum(1 for p in products if p.get('Recommendation', '').strip() == 'CAUTION')
    kill = sum(1 for p in products if p.get('Recommendation', '').strip() == 'KILL')
    pending = sum(1 for p in products if not p.get('Recommendation', '').strip() or p.get('Recommendation', '').strip() == 'Pending')
    
    print("\n=== Product Validation Summary ===")
    print(f"Total Products: {total}")
    print(f"GO: {go} ({go/total*100:.1f}%)")
    print(f"HOLD: {hold} ({hold/total*100:.1f}%)")
    print(f"CAUTION: {caution} ({caution/total*100:.1f}%)")
    print(f"KILL: {kill} ({kill/total*100:.1f}%)")
    print(f"Pending: {pending} ({pending/total*100:.1f}%)")

if __name__ == '__main__':
    database_path = Path('Project/03-Analysis/Product-Validation-Database.csv')
    
    if not database_path.exists():
        print(f"Database not found: {database_path}")
        exit(1)
    
    update_database_with_scores(database_path)
    generate_summary(database_path)


