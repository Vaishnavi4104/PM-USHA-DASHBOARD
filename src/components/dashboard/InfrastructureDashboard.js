import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useData } from '../../contexts/DataContext';
import LoadingSpinner from '../common/LoadingSpinner';
import { exportToExcel, prepareInfrastructureData } from '../../utils/exportData';

const InfrastructureDashboard = () => {
  const data = useData();

  if (data.loading) {
    return <LoadingSpinner />;
  }

  const handleExport = () => {
    const exportData = prepareInfrastructureData(data.infrastructure);
    exportToExcel(exportData.summary, 'infrastructure-summary');
    exportToExcel(exportData.projects, 'infrastructure-projects');
    exportToExcel(exportData.projectTypes, 'infrastructure-types');
  };

  const { infrastructure } = data;

  const cardStyle = {
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 2,
    boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight="500">
          Infrastructure Dashboard
        </Typography>
        <Button
          variant="contained"
          startIcon={<FileDownloadIcon />}
          onClick={handleExport}
        >
          Export Data
        </Button>
      </Box>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography color="textSecondary" variant="subtitle2" gutterBottom>
                Total Projects
              </Typography>
              <Typography variant="h4" color="primary.main">
                {infrastructure.summary.totalProjects}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography color="textSecondary" variant="subtitle2" gutterBottom>
                Ongoing Projects
              </Typography>
              <Typography variant="h4" color="warning.main">
                {infrastructure.summary.ongoingProjects}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography color="textSecondary" variant="subtitle2" gutterBottom>
                Completed Projects
              </Typography>
              <Typography variant="h4" color="success.main">
                {infrastructure.summary.completedProjects}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography color="textSecondary" variant="subtitle2" gutterBottom>
                Project Types
              </Typography>
              <Typography variant="h4" color="info.main">
                {Object.keys(infrastructure.summary.projectsByType).length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Project Progress
              </Typography>
              <Box sx={{ mt: 3 }}>
                {infrastructure.projects.slice(0, 5).map(project => (
                  <Box key={project.id} sx={{ mb: 4 }}>
                    <Box display="flex" justifyContent="space-between" mb={1}>
                      <Typography variant="body1" fontWeight="500">
                        {project.name}
                      </Typography>
                      <Typography variant="body2" color="primary">
                        {project.progress}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={project.progress}
                      sx={{ 
                        height: 8, 
                        borderRadius: 4,
                        mb: 1
                      }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {project.startDate} - {project.endDate}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Project Types Distribution
              </Typography>
              <List sx={{ mt: 2 }}>
                {Object.entries(infrastructure.summary.projectsByType).map(([type, count], index, arr) => (
                  <React.Fragment key={type}>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary={type}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                      <Typography variant="body2" color="primary" fontWeight="500">
                        {count} Projects
                      </Typography>
                    </ListItem>
                    {index < arr.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InfrastructureDashboard;