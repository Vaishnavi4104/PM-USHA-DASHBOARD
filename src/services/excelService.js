import * as XLSX from 'xlsx';

export const readExcelFile = async (filePath) => {
  try {
    const response = await fetch(filePath);
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    return workbook;
  } catch (error) {
    console.error('Error reading Excel file:', error);
    throw error;
  }
};

export const processInfrastructureData = async () => {
  const workbook = await readExcelFile('/data/Infrastructure - Activities.xlsx');
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet);
};

export const processEquipmentData = async () => {
  const workbook = await readExcelFile('/data/Equipment - Activities.xlsx');
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet);
};

export const processSoftActivitiesData = async () => {
  const workbook = await readExcelFile('/data/Soft - Activities.xlsx');
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet);
};

export const processSummaryData = async () => {
  const workbook = await readExcelFile('/data/Summary.xlsx');
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet);
};

export const processDetailedExpenditure = async () => {
  const workbook = await readExcelFile('/data/DETAILED EXPENDITURE ABSTRACT SHEET.xlsx');
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet);
};