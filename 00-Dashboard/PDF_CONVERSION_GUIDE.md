# Automatic MD to PDF Conversion Guide

## Quick Start

Whenever you create a new Markdown (.md) file in the project, run this command to automatically convert it to PDF:

```bash
cd "/Users/MacBook1/Library/CloudStorage/GoogleDrive-info@geartopdesign.com/Shared drives/Greg/1. Consulting/5. Todd McDaniel/Project/00-Dashboard"
./auto_convert_md_to_pdf.sh
```

This will:
- ✅ Find all MD files in the Project folder
- ✅ Convert them to PDF format
- ✅ Skip files that already have up-to-date PDFs
- ✅ Show you a summary of what was converted

---

## Convert Specific Folder Only

To convert MD files in a specific folder:

```bash
./auto_convert_md_to_pdf.sh "/path/to/specific/folder"
```

Example:
```bash
./auto_convert_md_to_pdf.sh "../08-Meeting-Notes"
```

---

## Manual Conversion (Single File)

If you need to manually convert just one file:

```bash
# Step 1: Convert MD to HTML
cd "/path/to/file"
pandoc "filename.md" -o "filename.html" -s --metadata title="filename"

# Step 2: Convert HTML to PDF
"/Users/MacBook1/Library/CloudStorage/GoogleDrive-info@geartopdesign.com/Shared drives/Greg/1. Consulting/5. Todd McDaniel/Project/00-Dashboard/html_to_pdf_chrome.sh" "filename.html" "filename.pdf"

# Step 3: Clean up
rm "filename.html"
```

---

## Adding Files to Dashboard

### For Meeting Files

Edit `index.html` and add to the `meetingRecords` array:

```javascript
{
    id: '02-wednesday',
    name: '02 - Wednesday Follow-up',
    date: 'January 8, 2026',
    icon: '📊',
    files: [
        {
            name: 'Meeting Notes',
            file: '../08-Meeting-Notes/02-Wednesday/notes.md',
            pdfFile: '../08-Meeting-Notes/02-Wednesday/notes.pdf',  // Required!
            status: 'completed'
        }
    ]
}
```

### For Other Project Files

Edit `index.html` and add to the appropriate section in `projectFiles`:

```javascript
'summary-docs': [
    {
        name: 'Your Document Name',
        file: '../path/to/file.md',
        pdfFile: '../path/to/file.pdf',  // Required!
        status: 'completed'
    }
]
```

---

## Important Notes

### Why PDF is Required

- ❌ **MD files cannot be viewed** in the browser due to security restrictions
- ✅ **PDF files work perfectly** and can be viewed inline
- ✅ Users can download PDFs for offline viewing

### Always Include Both

When adding a file to the dashboard, **always include both paths**:
- `file`: Path to the .md file
- `pdfFile`: Path to the .pdf file (same name, different extension)

### File Status Options

- `'completed'` - Finished and ready (Green badge)
- `'in-progress'` - Currently working on (Yellow badge)
- `'pending'` - Not started yet (Gray badge)

---

## Workflow for New Documents

1. **Create** your markdown file (.md)
2. **Run** the auto-conversion script: `./auto_convert_md_to_pdf.sh`
3. **Verify** the PDF was created in the same folder
4. **Add** both file paths to `index.html` in the appropriate section
5. **Test** by opening the dashboard and clicking the file

---

## Troubleshooting

### "Permission denied" error
```bash
chmod +x auto_convert_md_to_pdf.sh
```

### "Chrome not found"
Make sure Chrome is installed at:
```
/Applications/Google Chrome.app/Contents/MacOS/Google Chrome
```

### "Pandoc not found"
Install pandoc with Homebrew:
```bash
brew install pandoc
```

### PDF not updating
Delete the existing PDF and run the script again:
```bash
rm "path/to/file.pdf"
./auto_convert_md_to_pdf.sh
```

---

## Summary

**Every time you create a new .md file:**
1. Save your markdown file
2. Run `./auto_convert_md_to_pdf.sh`
3. Add both MD and PDF paths to the dashboard
4. Refresh the dashboard to see your changes

**The dashboard will automatically use PDF for viewing**, so users never see the "Failed to fetch" error!

---

**Last Updated:** January 5, 2026
