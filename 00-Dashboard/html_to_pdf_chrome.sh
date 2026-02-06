#!/bin/bash
# Convert HTML to PDF using Chrome headless

HTML_FILE="$1"
PDF_FILE="$2"

if [ -z "$HTML_FILE" ] || [ -z "$PDF_FILE" ]; then
    echo "Usage: $0 <input.html> <output.pdf>"
    exit 1
fi

# Check if Chrome is installed
if [ -f "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]; then
    CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
else
    echo "❌ Google Chrome not found"
    exit 1
fi

# Convert HTML to PDF
"$CHROME" --headless --disable-gpu --print-to-pdf="$PDF_FILE" "$HTML_FILE" 2>/dev/null

if [ -f "$PDF_FILE" ]; then
    echo "✅ Converted $(basename "$HTML_FILE") to $(basename "$PDF_FILE")"
else
    echo "❌ Conversion failed"
    exit 1
fi
