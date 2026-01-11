#!/usr/bin/env python3
"""
Parse Nurise product data from CSV and create Product Validation Database
Phase 1: Data Preparation & Initial Screening
"""

import csv
import os
from pathlib import Path

def parse_nurise_csv(csv_path):
    """Parse the Nurise DDP Draft Order CSV file"""
    products = []
    
    with open(csv_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
        # Find the header row (row with ITEM#)
        header_row_idx = None
        for i, line in enumerate(lines):
            if 'ITEM#' in line and 'DESCRIPTION' in line:
                header_row_idx = i
                break
        
        if header_row_idx is None:
            print("Error: Could not find header row")
            return products
        
        # Read CSV starting from header row
        f.seek(0)
        # Skip to header row
        for _ in range(header_row_idx):
            next(f)
        
        reader = csv.DictReader(f)
        
        for row in reader:
            # Skip empty rows or rows without ITEM#
            item_num = row.get('ITEM#', '').strip()
            description = row.get('DESCRIPTION', '').strip()
            
            if not item_num or not description or item_num.startswith(','):
                continue
            
            product = {
                'ITEM#': item_num,
                'FORECAST_ITEM#': row.get('FORECAST ITEM#', '').strip(),
                'FACTORY_ITEM#': row.get('FACTORY ITEM#', '').strip(),
                'DESCRIPTION': description,
                'SUB_BRAND': row.get('SUB-BRAND', '').strip(),
                'UPC_CODE': row.get('UPC CODE', '').strip(),
                'EAN_CODE': row.get('EAN CODE', '').strip(),
                'MEGA_CATEGORY': row.get('Mega Category ', '').strip(),
                'PRODUCT_TYPE': row.get('Product Type', '').strip(),
                'PRODUCT_BRAND_NAME': row.get('Product/Brand Name', '').strip(),
                'EXTRA_NOTE': row.get('EXTRA NOTE', '').strip(),
                'QTY': row.get('QTY', '').strip(),
                'DUTY_PERCENT': row.get('Duty %', '').strip(),
                'FOB_PRICE': row.get('26ss FOB', '').strip(),
                'PACKAGE_TYPE': row.get('PACKAGE TYPE', '').strip(),
                'CARTON_SIZE': f"{row.get('CARTON SIZE', '').strip()}",
                'CUBE': row.get('CUBE', '').strip(),
                'CTN_NW': row.get('CTN_N.W', '').strip(),
                'CTN_GW': row.get('CTN_G.W', '').strip(),
                'SPECIFICATION': row.get('SPECIFICATION', '').strip().replace('\n', ' '),
                'MATERIAL': row.get('MATERIAL', '').strip(),
            }
            
            products.append(product)
    
    return products

def create_validation_database(products, output_path):
    """Create Product Validation Database CSV"""
    fieldnames = [
        'ITEM#',
        'DESCRIPTION',
        'UPC_CODE',
        'EAN_CODE',
        'PRODUCT_TYPE',
        'MEGA_CATEGORY',
        'QTY',
        'FOB_PRICE',
        'DUTY_PERCENT',
        'EXTRA_NOTE',
        # SmartScout columns (to be filled)
        'SmartScout_ASIN',
        'SmartScout_NetMargin',
        'SmartScout_Rank',
        'SmartScout_Sellers',
        'SmartScout_BuyBoxPrice',
        'SmartScout_FBAFees',
        'SmartScout_NetProfit',
        'SmartScout_ROI',
        'SmartScout_AmazonInStock',
        # DataDive columns (to be filled)
        'DataDive_Score',
        'DataDive_KeywordCount',
        'DataDive_TotalSearchVolume',
        'DataDive_RootsCount',
        'DataDive_CompetitorCount',
        'DataDive_CompetitorStrength',
        'DataDive_ProductScorecard',
        # Scoring columns
        'Score_Margin',
        'Score_Competition',
        'Score_Seasonality',
        'Score_Cube',
        'Score_Insurance',
        'Score_Velocity',
        'Total_Score',
        'Recommendation',
        # Additional validation
        'MCP_Validation',
        'Notes',
        'Status'
    ]
    
    with open(output_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        
        for product in products:
            row = {
                'ITEM#': product.get('ITEM#', ''),
                'DESCRIPTION': product.get('DESCRIPTION', ''),
                'UPC_CODE': product.get('UPC_CODE', ''),
                'EAN_CODE': product.get('EAN_CODE', ''),
                'PRODUCT_TYPE': product.get('PRODUCT_TYPE', ''),
                'MEGA_CATEGORY': product.get('MEGA_CATEGORY', ''),
                'QTY': product.get('QTY', ''),
                'FOB_PRICE': product.get('FOB_PRICE', ''),
                'DUTY_PERCENT': product.get('DUTY_PERCENT', ''),
                'EXTRA_NOTE': product.get('EXTRA_NOTE', ''),
                'Status': 'Pending'
            }
            writer.writerow(row)

def main():
    # Paths
    csv_path = Path('data/2026 Nurise DDP Draft Order_Greg 12132025.csv')
    output_dir = Path('Project/03-Analysis')
    output_dir.mkdir(parents=True, exist_ok=True)
    output_path = output_dir / 'Product-Validation-Database.csv'
    
    print(f"Parsing CSV: {csv_path}")
    products = parse_nurise_csv(csv_path)
    print(f"Found {len(products)} products")
    
    print(f"Creating validation database: {output_path}")
    create_validation_database(products, output_path)
    print(f"Database created with {len(products)} products")
    
    # Print summary
    print("\n=== Product Summary ===")
    categories = {}
    for p in products:
        cat = p.get('MEGA_CATEGORY', 'Unknown')
        categories[cat] = categories.get(cat, 0) + 1
    
    for cat, count in sorted(categories.items()):
        print(f"{cat}: {count} products")
    
    print(f"\nTotal products to validate: {len(products)}")

if __name__ == '__main__':
    main()

