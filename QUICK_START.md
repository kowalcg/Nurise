# Quick Start Guide - Project Dashboard

## For Viewing the Dashboard

### Option 1: Open Locally (Easiest)
1. Navigate to `/Project/00-Dashboard/`
2. Double-click `index.html`
3. It will open in your default browser

### Option 2: Open in Specific Browser
1. Right-click `index.html`
2. Choose "Open With" → Select your preferred browser
3. Recommended: Chrome or Firefox for best compatibility

## For Updating the Dashboard

### Automatic Update (Recommended)

**Using Python Script:**
```bash
cd "/path/to/Project/00-Dashboard"
python3 update-dashboard.py
```

The script will:
- ✅ Scan all Project folders for files
- ✅ Auto-detect file statuses
- ✅ Update the dashboard automatically
- ✅ Create a backup of the old version
- ✅ Show statistics

### Manual Update

Edit `index.html` and find the `projectFiles` object (around line 591):

```javascript
const projectFiles = {
    'meeting-notes': [
        {
            name: 'Your Document Name',
            file: '../08-Meeting-Notes/your-file.md',
            status: 'completed'  // or 'in-progress' or 'pending'
        }
    ]
};
```

## File Status Guide

Update the `status` field as work progresses:

- **`pending`** - Not started (Gray badge)
- **`in-progress`** - Currently working on it (Yellow badge)
- **`completed`** - Finished (Green badge)

## For Client Presentation

### Before Sharing:
1. Run `update-dashboard.py` to ensure all files are listed
2. Verify all file statuses are correct
3. Test opening the dashboard in a browser
4. Check that all links work

### GitHub Pages Deployment:
```bash
# 1. Create a new GitHub repository
# 2. Upload the Project folder
# 3. Enable GitHub Pages:
#    Settings → Pages → Source: main branch, /00-Dashboard folder
# 4. GitHub will provide a URL like:
#    https://your-username.github.io/repo-name/
```

### Share with Client:
1. Send them the GitHub Pages URL, or
2. Share the entire `/Project` folder via Google Drive/Dropbox
3. Instruct them to open `00-Dashboard/index.html`

## Dashboard Features

### Navigation
- Click tabs at the top to switch between sections
- Click any file card to view the document
- Press ESC or click outside to close the viewer

### Viewing Documents
- **Markdown (.md)**: Rendered with formatting in the browser
- **PDF files**: Displayed in embedded viewer
- **Videos (.mp4)**: Can be downloaded and played
- Download button: Available for all file types

### Progress Tracking
- Automatically updates based on file statuses
- Shows: Completed, In Progress, Pending, Total
- Visual progress bar at the top

## Troubleshooting

**Dashboard won't open:**
- Ensure you're opening `index.html` (not another file)
- Try a different browser (Chrome recommended)

**Files won't load:**
- Check that files exist at the paths specified
- Paths are relative (e.g., `../08-Meeting-Notes/file.md`)
- Ensure the Project folder structure is intact

**Can't see a document:**
- For PDFs: Some browsers block PDF iframes - use Download button
- For MD files: Check that the file is valid Markdown
- Check browser console (F12) for errors

**Update script won't run:**
- Ensure Python 3 is installed: `python3 --version`
- Navigate to correct directory first
- Check file permissions

## Tips

1. **Keep files organized**: The script auto-detects files based on folder structure
2. **Use clear filenames**: Display names are generated from filenames
3. **Provide both formats**: Include both .md and .pdf for important documents
4. **Update regularly**: Run the update script after adding new files
5. **Test before sharing**: Always test the dashboard before sending to client

## Support Files

- `index.html` - The main dashboard file
- `README.md` - Detailed documentation
- `update-dashboard.py` - Automatic update script
- `QUICK_START.md` - This guide

## Next Steps

1. ✅ Open `index.html` to view the dashboard
2. ✅ As you complete deliverables, update their status
3. ✅ Run `update-dashboard.py` to refresh the file list
4. ✅ Deploy to GitHub Pages when ready for client access

---

**Questions?** Check README.md for detailed documentation.

**Last Updated:** January 5, 2026
