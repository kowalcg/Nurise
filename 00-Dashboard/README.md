# Project Dashboard - Best Way Amazon Launch

## Overview

This dashboard provides a comprehensive view of all project deliverables, training materials, meeting records, and documentation for the Best Way Amazon Canada Launch project.

## Features

- **Progress Tracking**: Real-time visual progress tracking with statistics
- **Tabbed Navigation**: Organized by deliverable categories
- **Document Viewer**: In-browser viewing of both Markdown (.md) and PDF files
- **Slide-out Panel**: Modern slide-out interface for document viewing
- **Status Indicators**: Track which deliverables are completed, in-progress, or pending
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **GitHub Pages Ready**: Can be deployed to GitHub for client access

## How to Use

### Local Usage

1. Open `index.html` in any modern web browser
2. Click on tabs to navigate between deliverable categories
3. Click on any file card to view the document
4. Use the Download button to download the original file
5. Press ESC or click outside the panel to close the viewer

### Adding/Updating Files

Edit the `projectFiles` object in `index.html` (around line 591):

```javascript
const projectFiles = {
    'section-id': [
        {
            name: 'Document Name',
            file: '../relative/path/to/file.md',
            status: 'completed' // or 'in-progress' or 'pending'
        }
    ]
};
```

**Available Status Values:**
- `completed` - Green badge, file is finished
- `in-progress` - Yellow badge, currently working on it
- `pending` - Gray badge, not started

**Section IDs:**
- `priority-skus` - 15 Priority SKU Analyses
- `team-skus` - 18 Team-Analyzed SKU Reviews
- `final-report` - Consolidated Final Report
- `listing-optimization` - Listing Optimization (2 ASINs)
- `listing-training` - Listing Creation Training
- `training-recordings` - All Training Recordings
- `training-materials` - Training Reference Materials
- `process-guidelines` - Process Guidelines
- `templates-examples` - Templates & Examples
- `datadive-setup` - Data Dive Setup Materials
- `datadive-training` - Data Dive Training
- `meeting-notes` - Meeting Notes & Recordings
- `email-archive` - Email Communications
- `summary-docs` - Project Summary Documents

### File Path Examples

```javascript
// Markdown file in Analysis folder
{ name: 'SKU Analysis - Pool Filter', file: '../03-Analysis/Priority-15-SKUs/pool-filter.md', status: 'completed' }

// PDF version of the same file
{ name: 'SKU Analysis - Pool Filter (PDF)', file: '../03-Analysis/Priority-15-SKUs/pool-filter.pdf', status: 'completed' }

// Training video
{ name: 'Data Dive Training', file: '../06-Training-Sessions/data-dive-training.mp4', status: 'in-progress' }

// Meeting notes
{ name: 'Week 2 Check-In', file: '../08-Meeting-Notes/Week-02/notes.md', status: 'pending' }
```

## Deploying to GitHub Pages

### Option 1: GitHub Pages (Recommended for Client Access)

1. Create a new repository on GitHub (can be private)
2. Upload the entire `/Project` folder
3. Go to repository Settings → Pages
4. Select branch (usually `main`) and folder (`/00-Dashboard`)
5. Save and GitHub will provide a URL like: `https://username.github.io/repo-name/`

### Option 2: GitHub Gist (Simple Alternative)

1. Create a new Gist on GitHub
2. Upload `index.html` as a file
3. Make it public
4. Use a service like `https://htmlpreview.github.io/` to view

### Option 3: Local File Sharing

- Share the entire `/Project` folder via Google Drive, Dropbox, etc.
- Client opens `00-Dashboard/index.html` in their browser
- All relative paths will work correctly

## Folder Structure Requirements

For the dashboard to work correctly, maintain this structure:

```
Project/
├── 00-Dashboard/
│   ├── index.html (this file)
│   └── README.md
├── 01-References/
├── 02-Research/
├── 03-Analysis/
├── 04-Deliverables/
├── 05-Client-Materials/
├── 06-Training-Sessions/
├── 07-Invoices/
└── 08-Meeting-Notes/
```

## Updating Progress

As you complete deliverables:

1. Change the `status` field from `pending` → `in-progress` → `completed`
2. Add new files to the appropriate section
3. The progress bar and statistics update automatically

## Browser Compatibility

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ⚠️ Internet Explorer (Not supported)

## Troubleshooting

**Documents won't load:**
- Check that file paths are correct (relative to the dashboard folder)
- Ensure files exist at the specified paths
- Check browser console for errors (F12)

**PDF won't display:**
- Some browsers block PDFs in iframes
- User can click "Download" to view externally
- Consider providing both MD and PDF versions

**Markdown formatting looks wrong:**
- The dashboard uses marked.js for rendering
- Ensure markdown follows standard syntax
- Check that marked.js CDN is accessible

## Customization

### Colors

Edit CSS variables in the `<style>` section:

```css
:root {
    --primary-color: #2563eb;  /* Main blue color */
    --secondary-color: #1e40af; /* Darker blue */
    --success-color: #10b981;   /* Green for completed */
    --warning-color: #f59e0b;   /* Orange for in-progress */
}
```

### Header Information

Update in the HTML `<div class="header">` section.

### Statistics

Stats automatically calculate from file statuses.

## Tips for Client Presentation

1. **Before sharing:**
   - Update all file statuses
   - Verify all links work
   - Test in client's likely browser
   - Create PDF versions of key documents

2. **During presentation:**
   - Start on Overview tab
   - Show progress tracking
   - Demonstrate document viewer
   - Walk through each deliverable category

3. **For ongoing access:**
   - Deploy to GitHub Pages
   - Provide simple URL
   - No login required for public repos
   - Updates automatically when you push changes

## Support

For issues or questions:
- Check browser console (F12 → Console tab)
- Verify file paths are correct
- Ensure marked.js CDN is loading
- Test with a simple MD file first

## Version History

- **v1.0** (Jan 5, 2026) - Initial dashboard creation
  - Progress tracking
  - Tabbed navigation
  - MD and PDF viewing
  - Slide-out document panel
  - Status indicators

---

**Last Updated:** January 5, 2026
**Maintained By:** Greg Kowalczyk
