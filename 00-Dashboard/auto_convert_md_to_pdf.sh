#!/bin/bash

# Auto-convert all MD files to PDF
# Usage: ./auto_convert_md_to_pdf.sh [directory]
# If no directory specified, searches entire Project folder

PROJECT_ROOT="/Users/MacBook1/Library/CloudStorage/GoogleDrive-info@geartopdesign.com/Shared drives/Greg/1. Consulting/5. Todd McDaniel/Project"
DASHBOARD_DIR="$PROJECT_ROOT/00-Dashboard"

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

    # Convert MD to HTML first
    html_file="$dir/$filename.html"
    echo "📄 Converting: $filename.md"

    pandoc "$md_file" -o "$html_file" -s --metadata title="$filename" 2>/dev/null

    if [ $? -ne 0 ]; then
        echo "❌ Failed to convert MD to HTML: $filename.md"
        continue
    fi

    # Convert HTML to PDF using Chrome
    "$DASHBOARD_DIR/html_to_pdf_chrome.sh" "$html_file" "$pdf_file"

    if [ $? -eq 0 ]; then
        echo "✅ Created: $filename.pdf"
        # Clean up temporary HTML file
        rm -f "$html_file"
    else
        echo "❌ Failed to convert HTML to PDF: $filename.html"
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
