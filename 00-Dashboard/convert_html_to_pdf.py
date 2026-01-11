#!/usr/bin/env python3
"""
Convert HTML files to PDF using weasyprint
"""
import sys
import os
from pathlib import Path

try:
    from weasyprint import HTML
    WEASYPRINT_AVAILABLE = True
except ImportError:
    WEASYPRINT_AVAILABLE = False

def convert_html_to_pdf(html_file, pdf_file):
    """Convert HTML file to PDF"""
    if WEASYPRINT_AVAILABLE:
        HTML(filename=html_file).write_pdf(pdf_file)
        return True
    else:
        print("❌ WeasyPrint not installed. Install with: pip3 install weasyprint")
        return False

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python3 convert_html_to_pdf.py <input.html> <output.pdf>")
        sys.exit(1)

    html_file = sys.argv[1]
    pdf_file = sys.argv[2]

    if not os.path.exists(html_file):
        print(f"❌ File not found: {html_file}")
        sys.exit(1)

    if convert_html_to_pdf(html_file, pdf_file):
        print(f"✅ Converted {html_file} to {pdf_file}")
    else:
        sys.exit(1)
