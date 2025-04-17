import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { useData } from '../../contexts/DataContext';
import LoadingSpinner from '../common/LoadingSpinner';

const EquipmentDashboard = () => {
  const data = useData();

  if (data.loading) {
    return <LoadingSpinner />;
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>Equipment Dashboard</Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Equipment
              </Typography>
              <Typography variant="h4">
                {data.equipment.summary.totalItems}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Procured
              </Typography>
              <Typography variant="h4">
                {data.equipment.summary.procured}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Pending
              </Typography>
              <Typography variant="h4">
                {data.equipment.summary.pending}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Categories
              </Typography>
              <Typography variant="h4">
                {Object.keys(data.equipment.summary.categories).length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell align="right">Total Items</TableCell>
                  <TableCell align="right">Procured</TableCell>
                  <TableCell align="right">Progress</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(data.equipment.summary.categories).map(([category, count]) => (
                  <TableRow key={category}>
                    <TableCell component="th" scope="row">
                      {category}
                    </TableCell>
                    <TableCell align="right">{count}</TableCell>
                    <TableCell align="right">{Math.floor(count * 0.7)}</TableCell>
                    <TableCell align="right" sx={{ width: '30%' }}>
                      <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                          <LinearProgress 
                            variant="determinate" 
                            value={70} 
                            sx={{ height: 10, borderRadius: 5 }}
                          />
                        </Box>
                        <Box minWidth={35}>
                          <Typography variant="body2" color="textSecondary">
                            70%
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EquipmentDashboard;