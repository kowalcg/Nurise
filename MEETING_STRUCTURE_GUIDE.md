# Meeting Records - Hierarchical Structure Guide

## Overview

The dashboard now supports **hierarchical meeting records** where meetings are organized as expandable groups containing their associated files.

## How It Works

### 1. Meeting Cards
- Each meeting is displayed as a clickable card in the "Meeting Records" section
- Cards show:
  - Meeting icon and name (e.g., "01 - Kickoff Meeting")
  - Date of the meeting
  - Number of files associated with the meeting

### 2. Viewing Meeting Files
- **Click on a meeting card** to expand/collapse the files for that meeting
- Files are displayed in a grid below the meeting information
- Each file shows:
  - Status badge (Completed, In Progress, Pending)
  - Action buttons to view MD or PDF versions

### 3. File Actions
For meeting files, you have two viewing options:
- **📄 View MD** - Opens the Markdown version in the slide-out viewer
- **📕 View PDF** - Opens the PDF version in the slide-out viewer

## Current Meetings

### 01 - Kickoff Meeting (January 5, 2026)
Contains 3 files:
1. **Meeting Agenda** - Prepared agenda with topics to cover
2. **Meeting Summary** - Comprehensive notes from the discussion
3. **Cover Email** - Brief email for sending the summary to participants

All files are available in both:
- **Markdown (.md)** format - Easy to read and edit
- **PDF (.pdf)** format - Professional presentation format

## Adding New Meetings

To add a new meeting to the dashboard, edit `index.html` and add a new meeting object to the `meetingRecords` array:

```javascript
{
    id: '02-wednesday-followup',
    name: '02 - Wednesday Follow-up',
    date: 'January 8, 2026',
    icon: '📊',
    files: [
        {
            name: 'Analysis Review Notes',
            file: '../08-Meeting-Notes/02-Wednesday-Followup/notes.md',
            pdfFile: '../08-Meeting-Notes/02-Wednesday-Followup/notes.pdf',
            status: 'completed'
        }
    ]
}
```

### Meeting Object Fields:
- **id**: Unique identifier (e.g., `'02-wednesday-followup'`)
- **name**: Display name (e.g., `'02 - Wednesday Follow-up'`)
- **date**: Meeting date (e.g., `'January 8, 2026'`)
- **icon**: Emoji icon (e.g., `'📊'`, `'🎯'`, `'📅'`)
- **files**: Array of file objects

### File Object Fields:
- **name**: Display name for the file
- **file**: Path to the Markdown file (relative to index.html)
- **pdfFile**: Path to the PDF file (optional but recommended)
- **status**: One of: `'completed'`, `'in-progress'`, or `'pending'`

## Converting MD to PDF

When you create a new meeting with MD files, convert them to PDF:

```bash
cd "Project/00-Dashboard"
./html_to_pdf_chrome.sh "../path/to/file.html" "../path/to/file.pdf"
```

Or use the Python script if you have a Markdown file:
1. Convert MD to HTML: `pandoc file.md -o file.html -s`
2. Convert HTML to PDF: `./html_to_pdf_chrome.sh file.html file.pdf`

## File Organization

Meeting files should be organized in the Project folder structure:

```
Project/
└── 08-Meeting-Notes/
    ├── 01-Kickoff-Meeting/
    │   ├── KICKOFF_MEETING_AGENDA.md
    │   ├── KICKOFF_MEETING_AGENDA.pdf
    │   ├── Kickoff_Meeting_Summary_Jan5_2026.md
    │   ├── Kickoff_Meeting_Summary_Jan5_2026.pdf
    │   ├── EMAIL_Kickoff_Meeting_Summary.md
    │   └── EMAIL_Kickoff_Meeting_Summary.pdf
    │
    ├── 02-Wednesday-Followup/
    │   └── (future meeting files)
    │
    └── 03-Final-Handoff/
        └── (future meeting files)
```

## Progress Tracking

Meeting files are automatically included in the dashboard statistics:
- Total file count includes all meeting files
- Progress bar updates based on file statuses
- Completed/In Progress/Pending counts are accurate

## Benefits of Hierarchical Structure

1. **Better Organization**: Related meeting files are grouped together
2. **Cleaner Interface**: Meetings can be collapsed when not needed
3. **Easy Navigation**: Click to expand only the meetings you want to see
4. **Dual Format Support**: Quick access to both MD and PDF versions
5. **Scalability**: Can easily add many meetings without cluttering the interface

## Usage Tips

- **During a Meeting**: Mark files as `'in-progress'`
- **After Completion**: Update files to `'completed'`
- **Share with Client**: Both MD and PDF are available for different preferences
- **Archive**: Collapsed meetings keep the dashboard clean while maintaining access

---

**Last Updated:** January 5, 2026
**Created By:** Greg Kowalczyk
