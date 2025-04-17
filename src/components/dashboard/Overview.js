import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  useTheme,
  CircularProgress
} from '@mui/material';
import {
  TrendingUp,
  Business,
  Build,
  School,
  MoreVert
} from '@mui/icons-material';
import { useData } from '../../contexts/DataContext';
import { useAuth } from '../../hooks/useAuth';

const Overview = () => {
  const data = useData();
  const theme = useTheme();
  const { userRole } = useAuth();
  const navigate = useNavigate();

  if (!data || data.loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!data.financial || !data.infrastructure || !data.equipment || !data.softComponents) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography color="error">Error loading dashboard data</Typography>
      </Box>
    );
  }

  const handleCardClick = (path) => {
    navigate(`/dashboard/${path}`);
  };

  const formatCurrency = (amount) => {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  };

  const cardStyle = {
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 2,
    boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
    }
  };

  const iconStyle = {
    backgroundColor: theme.palette.primary.light,
    borderRadius: '12px',
    padding: '12px',
    color: theme.palette.primary.main,
    marginBottom: 2
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight="500">
          {userRole ? `${userRole.charAt(0).toUpperCase()}${userRole.slice(1)} Dashboard` : 'Dashboard'}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card 
            sx={cardStyle} 
            onClick={() => handleCardClick('financial')}
          >
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                <Box sx={iconStyle}>
                  <TrendingUp />
                </Box>
              </Box>
              <Typography variant="h5" sx={{ mt: 2 }}>
                {formatCurrency(data.financial.summary.totalBudget)}
              </Typography>
              <Typography color="textSecondary" variant="subtitle2">
                Total Budget
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                <Box sx={{ ...iconStyle, backgroundColor: theme.palette.success.light, color: theme.palette.success.main }}>
                  <Business />
                </Box>
                <IconButton size="small">
                  <MoreVert />
                </IconButton>
              </Box>
              <Typography variant="h5" sx={{ mt: 2 }}>
                {data.infrastructure.summary.totalProjects}
              </Typography>
              <Typography color="textSecondary" variant="subtitle2">
                Infrastructure Projects
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                <Box sx={{ ...iconStyle, backgroundColor: theme.palette.warning.light, color: theme.palette.warning.main }}>
                  <Build />
                </Box>
                <IconButton size="small">
                  <MoreVert />
                </IconButton>
              </Box>
              <Typography variant="h5" sx={{ mt: 2 }}>
                {data.equipment.summary.totalItems}
              </Typography>
              <Typography color="textSecondary" variant="subtitle2">
                Equipment Items
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                <Box sx={{ ...iconStyle, backgroundColor: theme.palette.info.light, color: theme.palette.info.main }}>
                  <School />
                </Box>
                <IconButton size="small">
                  <MoreVert />
                </IconButton>
              </Box>
              <Typography variant="h5" sx={{ mt: 2 }}>
                {data.softComponents.summary.totalPrograms}
              </Typography>
              <Typography color="textSecondary" variant="subtitle2">
                Training Programs
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;