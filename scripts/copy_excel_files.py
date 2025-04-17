import os
import shutil

# Define source and destination directories
source_dir = '/Users/abs.singh34133/Documents/bst_boost_interprocess/Dashboard/excel_files'
dest_dir = '/Users/abs.singh34133/Documents/bst_boost_interprocess/Dashboard/dashboard/public/data'

# Create destination directory if it doesn't exist
os.makedirs(dest_dir, exist_ok=True)

# List of Excel files to copy
excel_files = [
    'Infrastructure - Activities.xlsx',
    'Equipment - Activities.xlsx',
    'Soft - Activities.xlsx',
    'Summary.xlsx',
    'Activities Coding Logic.xlsx',
    'COMPONENT WISE  PERFORMANCE MONITORING PROFORMA.xlsx',
    'COMPONENT WISE MAPPING OF 44 ACTIVITIES v1 24.08.2024.xlsx',
    'DETAILED EXPENDITURE ABSTRACT SHEET.xlsx',
    'F - COMPONENT WISE  PERFORMANCE MONITORING PROFORMA V4 06.01.2025.xlsx',
    'PMU PERFORMANCE MONITORING - NEW INFRA -EXTENSION WORKS COMPONENT .xlsx',
    'PMU PERFORMANCE MONITORING PROCUREMENT OF EQUIPMENTS.xlsx',
    'PMU SOFT COMPONENT PERFORMANCE MONITORING.xlsx',
    'Summay of Expenditure.xlsx'
]

# Copy each file
for file in excel_files:
    source_file = os.path.join(source_dir, file)
    dest_file = os.path.join(dest_dir, file)
    try:
        shutil.copy2(source_file, dest_file)
        print(f"Copied: {file}")
    except FileNotFoundError:
        print(f"File not found: {file}")
    except Exception as e:
        print(f"Error copying {file}: {str(e)}")

print("\nFile copying completed!")