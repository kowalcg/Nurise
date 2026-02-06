#!/bin/bash

# Auto-convert all MD files to PDF with clean emoji sizing
# Usage: ./auto_convert_md_to_pdf.sh [directory]
# If no directory specified, searches entire Project folder

PROJECT_ROOT="/Users/MacBook1/Library/CloudStorage/GoogleDrive-info@geartopdesign.com/Shared drives/Greg/1. Consulting/5. Todd McDaniel/01-Project"
DASHBOARD_DIR="$PROJECT_ROOT/00-Dashboard"
CSS_FILE="$DASHBOARD_DIR/pdf-clean-style.css"

# Use provided directory or default to project root
SEARCH_DIR="${1:-$PROJECT_ROOT}"

echo "🔍 Searching for MD files in: $SEARCH_DIR"
echo "================================================"

# Find all .md files (excluding dashboard directory to avoid recursion)
find "$SEARCH_DIR" -type f -name "*.md" ! -path "*/00-Dashboard/*" | while read -r md_file; do
    # Get the directory and filename
    dir=$(dirname "$md_file")
    filename=$(basename "$md_file" .md)
    pdf_file="$dir/$filename.pdf"

    # Check if PDF already exists and is newer than MD
    if [ -f "$pdf_file" ] && [ "$pdf_file" -nt "$md_file" ]; then
        echo "⏭  Skipping (PDF up to date): $filename.md"
        continue
    fi

    echo "📄 Converting: $filename.md"

    # Convert MD directly to PDF using WeasyPrint with CSS
    pandoc "$md_file" -o "$pdf_file" \
        --pdf-engine=weasyprint \
        --css="$CSS_FILE" \
        2>&1 | grep -v "^WARNING:" >/dev/null

    if [ -f "$pdf_file" ]; then
        echo "✅ Created: $filename.pdf"
    else
        echo "❌ Failed to convert: $filename.md"
    fi

    echo ""
done

echo "================================================"
echo "✨ Conversion complete!"
echo ""
echo "📊 Summary:"
pdf_count=$(find "$SEARCH_DIR" -type f -name "*.pdf" ! -path "*/00-Dashboard/*" | wc -l)
md_count=$(find "$SEARCH_DIR" -type f -name "*.md" ! -path "*/00-Dashboard/*" | wc -l)
echo "   MD files: $md_count"
echo "   PDF files: $pdf_count"
echo ""
echo "💡 Note: PDFs generated with optimized formatting (reduced margins, controlled emoji sizes)"
