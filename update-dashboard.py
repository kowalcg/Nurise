#!/usr/bin/env python3
"""
Dashboard File List Generator
Scans the Project folder and generates the JavaScript file list for the dashboard
"""

import os
import json
from pathlib import Path
from datetime import datetime

# Define the mapping between folders and dashboard sections
FOLDER_TO_SECTION = {
    '03-Analysis/Priority-15-SKUs': 'priority-skus',
    '03-Analysis/18-Team-SKUs-Review': 'team-skus',
    '03-Analysis': 'final-report',
    '04-Deliverables/Listing-Optimization': 'listing-optimization',
    '06-Training-Sessions': 'training-recordings',
    '05-Client-Materials': ['process-guidelines', 'templates-examples', 'training-materials'],
    '08-Meeting-Notes': ['meeting-notes', 'email-archive'],
    '04-Deliverables': 'summary-docs'
}

# File extensions to include
ALLOWED_EXTENSIONS = {'.md', '.pdf', '.mp4', '.mov', '.docx', '.xlsx'}

# Status keywords to detect from filenames
STATUS_KEYWORDS = {
    'DRAFT': 'pending',
    'WIP': 'in-progress',
    'FINAL': 'completed',
    'REVIEW': 'in-progress'
}

def get_project_root():
    """Get the project root directory"""
    script_dir = Path(__file__).parent
    return script_dir.parent

def scan_folder(folder_path, section_id=None):
    """Scan a folder and return file information"""
    files = []

    if not folder_path.exists():
        return files

    for file_path in folder_path.rglob('*'):
        if file_path.is_file() and file_path.suffix.lower() in ALLOWED_EXTENSIONS:
            # Skip hidden files and system files
            if file_path.name.startswith('.') or file_path.name.startswith('~'):
                continue

            # Get relative path from project root
            rel_path = file_path.relative_to(get_project_root())

            # Determine status from filename
            status = 'pending'
            filename_upper = file_path.name.upper()
            for keyword, keyword_status in STATUS_KEYWORDS.items():
                if keyword in filename_upper:
                    status = keyword_status
                    break

            # Check if file was recently modified (last 7 days) - might be in progress
            if status == 'pending':
                mtime = datetime.fromtimestamp(file_path.stat().st_mtime)
                if (datetime.now() - mtime).days < 7:
                    status = 'in-progress'

            # Clean up the display name
            display_name = file_path.stem.replace('_', ' ').replace('-', ' ')
            if file_path.suffix.lower() == '.pdf':
                display_name += ' (PDF)'

            files.append({
                'name': display_name,
                'file': f'../{rel_path.as_posix()}',
                'status': status,
                'ext': file_path.suffix.lower()
            })

    return files

def generate_file_list():
    """Generate the complete file list for all sections"""
    project_root = get_project_root()
    file_list = {
        'priority-skus': [],
        'team-skus': [],
        'final-report': [],
        'listing-optimization': [],
        'listing-training': [],
        'training-recordings': [],
        'training-materials': [],
        'process-guidelines': [],
        'templates-examples': [],
        'datadive-setup': [],
        'datadive-training': [],
        'meeting-notes': [],
        'email-archive': [],
        'summary-docs': []
    }

    # Scan each mapped folder
    for folder, section in FOLDER_TO_SECTION.items():
        folder_path = project_root / folder

        if isinstance(section, list):
            # Multiple sections map to this folder
            files = scan_folder(folder_path)
            # Distribute files based on keywords in filename
            for file in files:
                filename_lower = file['name'].lower()
                if 'meeting' in filename_lower or 'agenda' in filename_lower:
                    file_list['meeting-notes'].append(file)
                elif 'email' in filename_lower:
                    file_list['email-archive'].append(file)
                elif 'analysis' in filename_lower:
                    file_list['process-guidelines'].append(file)
                elif 'listing' in filename_lower:
                    file_list['process-guidelines'].append(file)
                elif 'example' in filename_lower or 'template' in filename_lower:
                    file_list['templates-examples'].append(file)
                else:
                    file_list[section[0]].append(file)
        else:
            files = scan_folder(folder_path, section)
            file_list[section].extend(files)

    # Special handling for specific sections

    # Separate Data Dive materials
    datadive_files = [f for f in file_list['training-recordings'] if 'data' in f['name'].lower() and 'dive' in f['name'].lower()]
    file_list['datadive-training'] = datadive_files
    file_list['training-recordings'] = [f for f in file_list['training-recordings'] if f not in datadive_files]

    # Listing training
    listing_training_files = [f for f in file_list['training-recordings'] if 'listing' in f['name'].lower()]
    file_list['listing-training'] = listing_training_files
    file_list['training-recordings'] = [f for f in file_list['training-recordings'] if f not in listing_training_files]

    return file_list

def generate_javascript_object(file_list):
    """Generate the JavaScript object code"""
    js_lines = ["const projectFiles = {"]

    for section, files in file_list.items():
        js_lines.append(f"    '{section}': [")
        for file in files:
            js_lines.append(f"        {{ name: '{file['name']}', file: '{file['file']}', status: '{file['status']}' }},")
        js_lines.append("    ],")

    js_lines.append("};")

    return '\n'.join(js_lines)

def update_dashboard_html(js_code):
    """Update the index.html file with the new file list"""
    dashboard_path = Path(__file__).parent / 'index.html'

    if not dashboard_path.exists():
        print("❌ index.html not found!")
        return False

    # Read the current HTML
    with open(dashboard_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Find and replace the projectFiles object
    start_marker = "const projectFiles = {"
    end_marker = "};"

    start_idx = html_content.find(start_marker)
    if start_idx == -1:
        print("❌ Could not find projectFiles object in HTML!")
        return False

    # Find the end of the object (need to count braces)
    brace_count = 0
    end_idx = start_idx
    for i in range(start_idx, len(html_content)):
        if html_content[i] == '{':
            brace_count += 1
        elif html_content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                end_idx = i + 1
                break

    # Replace the old object with the new one
    new_html = html_content[:start_idx] + js_code + html_content[end_idx:]

    # Backup the original
    backup_path = dashboard_path.with_suffix('.html.backup')
    with open(backup_path, 'w', encoding='utf-8') as f:
        f.write(html_content)

    # Write the updated HTML
    with open(dashboard_path, 'w', encoding='utf-8') as f:
        f.write(new_html)

    print(f"✅ Dashboard updated successfully!")
    print(f"📄 Backup saved to: {backup_path.name}")

    return True

def print_statistics(file_list):
    """Print statistics about the scanned files"""
    total_files = sum(len(files) for files in file_list.values())
    completed = sum(1 for files in file_list.values() for f in files if f['status'] == 'completed')
    in_progress = sum(1 for files in file_list.values() for f in files if f['status'] == 'in-progress')
    pending = sum(1 for files in file_list.values() for f in files if f['status'] == 'pending')

    print(f"\n📊 Statistics:")
    print(f"   Total Files: {total_files}")
    print(f"   ✅ Completed: {completed}")
    print(f"   🔄 In Progress: {in_progress}")
    print(f"   ⏳ Pending: {pending}")

    print(f"\n📁 Files by Section:")
    for section, files in file_list.items():
        if files:
            print(f"   {section}: {len(files)} files")

def main():
    """Main execution"""
    print("🔍 Scanning Project folder for files...")

    file_list = generate_file_list()

    print_statistics(file_list)

    print(f"\n🔨 Generating JavaScript code...")
    js_code = generate_javascript_object(file_list)

    print(f"\n💾 Updating dashboard...")
    success = update_dashboard_html(js_code)

    if success:
        print(f"\n✨ Dashboard is ready to use!")
        print(f"   Open index.html in your browser to view")
    else:
        print(f"\n❌ Update failed. Check the error messages above.")
        print(f"   You can manually copy this JavaScript code into index.html:")
        print(f"\n{js_code[:500]}...")

if __name__ == '__main__':
    main()
