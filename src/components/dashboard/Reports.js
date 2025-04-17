// src/components/dashboard/Reports.js
import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import BarChart from './charts/BarChart';
import PieChart from './charts/PieChart';
import LineChart from './charts/LineChart';
import { useData } from '../../contexts/DataContext';
import { exportToExcel } from '../../utils/exportData';
import { generatePDF } from '../../utils/pdfGenerator';
import '../../assets/css/styles.css';

const Reports = () => {
  const data = useData(); // Changed from destructuring

  const handleExcelExport = () => {
    if (!data || !data.financial) {
      console.error('Financial data not available');
      return;
    }

    const reportData = {
      fundUtilization: data.financial.summary || {},
      budgetAllocation: data.financial.summary?.components || {},
      expensesOverTime: data.financial.transactions || []
    };
    exportToExcel(reportData, 'financial-reports');
  };

  const handlePDFExport = () => {
    const chartRefs = {
      barChart: document.getElementById('fund-utilization-chart'),
      pieChart: document.getElementById('budget-allocation-chart'),
      lineChart: document.getElementById('expenses-timeline-chart')
    };
    generatePDF(chartRefs, 'financial-reports');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight="500">
          Reports
        </Typography>
        <Box>
          <Button
            variant="contained"
            startIcon={<FileDownloadIcon />}
            onClick={handleExcelExport}
            sx={{ mr: 2 }}
          >
            Export as Excel
          </Button>
          <Button
            variant="contained"
            startIcon={<PictureAsPdfIcon />}
            onClick={handlePDFExport}
            color="secondary"
          >
            Export as PDF
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Fund Utilization
            </Typography>
            <Box id="fund-utilization-chart">
              <BarChart />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Budget Allocation
            </Typography>
            <Box id="budget-allocation-chart">
              <PieChart />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Expenses Over Time
            </Typography>
            <Box id="expenses-timeline-chart">
              <LineChart />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reports;