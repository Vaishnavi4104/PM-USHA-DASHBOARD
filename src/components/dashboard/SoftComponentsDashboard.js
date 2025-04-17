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

const SoftComponentsDashboard = () => {
  const data = useData();

  if (data.loading) {
    return <LoadingSpinner />;
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>Soft Components Dashboard</Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Programs
              </Typography>
              <Typography variant="h4">
                {data.softComponents.summary.totalPrograms}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Active Programs
              </Typography>
              <Typography variant="h4">
                {data.softComponents.summary.activePrograms}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Completed Programs
              </Typography>
              <Typography variant="h4">
                {data.softComponents.summary.completedPrograms}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Participants
              </Typography>
              <Typography variant="h4">
                {data.softComponents.summary.totalParticipants}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Program Name</TableCell>
                  <TableCell align="right">Participants</TableCell>
                  <TableCell align="right">Duration (Weeks)</TableCell>
                  <TableCell align="right">Progress</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.softComponents.programs.map((program) => (
                  <TableRow key={program.id}>
                    <TableCell component="th" scope="row">
                      {program.name}
                    </TableCell>
                    <TableCell align="right">{program.participants}</TableCell>
                    <TableCell align="right">{program.duration}</TableCell>
                    <TableCell align="right" sx={{ width: '30%' }}>
                      <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                          <LinearProgress 
                            variant="determinate" 
                            value={program.progress} 
                            sx={{ height: 10, borderRadius: 5 }}
                          />
                        </Box>
                        <Box minWidth={35}>
                          <Typography variant="body2" color="textSecondary">
                            {program.progress}%
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

export default SoftComponentsDashboard;