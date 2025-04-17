import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Grid,
  Alert
} from '@mui/material';

const SecurityRiskInfo = () => {
  const securityLogs = [
    { id: 1, event: 'Login Attempt', user: 'john.doe', status: 'success', timestamp: '2023-08-01 10:30:00' },
    { id: 2, event: 'File Access', user: 'jane.smith', status: 'denied', timestamp: '2023-08-01 11:15:00' },
    { id: 3, event: 'Permission Change', user: 'admin', status: 'success', timestamp: '2023-08-01 12:00:00' }
  ];

  const riskPolicies = [
    { id: 1, title: 'Data Backup Policy', severity: 'high', lastUpdated: '2023-07-15' },
    { id: 2, title: 'Access Control Policy', severity: 'medium', lastUpdated: '2023-07-20' },
    { id: 3, title: 'Incident Response Plan', severity: 'high', lastUpdated: '2023-07-25' }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Security & Risk Information
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Alert severity="info" sx={{ mb: 3 }}>
            Last security audit completed on August 1, 2023
          </Alert>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Security Logs
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Event</TableCell>
                    <TableCell>User</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Timestamp</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {securityLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell>{log.event}</TableCell>
                      <TableCell>{log.user}</TableCell>
                      <TableCell>
                        <Chip
                          label={log.status}
                          color={log.status === 'success' ? 'success' : 'error'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{log.timestamp}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Risk Policies
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Policy Title</TableCell>
                    <TableCell>Severity</TableCell>
                    <TableCell>Last Updated</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {riskPolicies.map((policy) => (
                    <TableRow key={policy.id}>
                      <TableCell>{policy.title}</TableCell>
                      <TableCell>
                        <Chip
                          label={policy.severity}
                          color={policy.severity === 'high' ? 'error' : 'warning'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{policy.lastUpdated}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SecurityRiskInfo;