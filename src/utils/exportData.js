import * as XLSX from 'xlsx';

export const exportToExcel = (data, filename) => {
  try {
    const wb = XLSX.utils.book_new();
    
    // If data is an object with multiple sheets
    if (data && typeof data === 'object' && !Array.isArray(data)) {
      Object.entries(data).forEach(([sheetName, sheetData]) => {
        if (Array.isArray(sheetData) && sheetData.length > 0) {
          const ws = XLSX.utils.json_to_sheet(sheetData);
          XLSX.utils.book_append_sheet(wb, ws, sheetName);
        }
      });
    } else if (Array.isArray(data)) {
      // If data is a single array
      const ws = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    }

    XLSX.writeFile(wb, `${filename}.xlsx`);
  } catch (error) {
    console.error('Export failed:', error);
  }
};

export const prepareReportData = (data) => {
  if (!data) return null;

  try {
    return {
      'Fund Utilization': [
        {
          'Total Budget': data?.financial?.summary?.totalBudget || 0,
          'Allocated': data?.financial?.summary?.allocated || 0,
          'Spent': data?.financial?.summary?.spent || 0,
          'Remaining': data?.financial?.summary?.remaining || 0
        }
      ],
      'Budget Allocation': Object.entries(data?.financial?.summary?.components || {}).map(([name, amount]) => ({
        'Component': name,
        'Amount': amount
      })),
      'Expenses': (data?.financial?.transactions || []).map(t => ({
        'Date': t.date,
        'Description': t.description,
        'Amount': t.amount,
        'Type': t.type
      }))
    };
  } catch (error) {
    console.error('Data preparation failed:', error);
    return null;
  }
};

export const prepareFinancialData = (financialData) => {
  return {
    summary: [
      {
        'Total Budget': financialData.summary.totalBudget,
        'Allocated': financialData.summary.allocated,
        'Spent': financialData.summary.spent,
        'Remaining': financialData.summary.remaining
      }
    ],
    transactions: financialData.transactions,
    components: Object.entries(financialData.summary.components).map(([name, amount]) => ({
      Component: name,
      Amount: amount
    }))
  };
};

export const prepareInfrastructureData = (infrastructureData) => {
  return {
    summary: [
      {
        'Total Projects': infrastructureData.summary.totalProjects,
        'Ongoing Projects': infrastructureData.summary.ongoingProjects,
        'Completed Projects': infrastructureData.summary.completedProjects,
        'Project Types': Object.keys(infrastructureData.summary.projectsByType).length
      }
    ],
    projects: infrastructureData.projects.map(project => ({
      'Project Name': project.name,
      'Progress': project.progress,
      'Start Date': project.startDate,
      'End Date': project.endDate
    })),
    projectTypes: Object.entries(infrastructureData.summary.projectsByType).map(([type, count]) => ({
      'Type': type,
      'Count': count
    }))
  };
};

export const prepareEquipmentData = (equipmentData) => {
  return {
    summary: [
      {
        'Total Items': equipmentData.summary.totalItems,
        'Available Items': equipmentData.summary.availableItems,
        'Under Maintenance': equipmentData.summary.underMaintenance,
        'Categories': Object.keys(equipmentData.summary.itemsByCategory).length
      }
    ],
    items: equipmentData.items,
    categories: Object.entries(equipmentData.summary.itemsByCategory).map(([category, count]) => ({
      'Category': category,
      'Count': count
    }))
  };
};