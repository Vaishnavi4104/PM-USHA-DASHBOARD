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
  Divider
} from '@mui/material';
import { useData } from '../../contexts/DataContext';
import LoadingSpinner from '../common/LoadingSpinner';

const FinancialDashboard = () => {
  const data = useData();

  if (data.loading) {
    return <LoadingSpinner />;
  }

  const { financial } = data;

  const formatCurrency = (amount) => {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  };

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
      <Typography variant="h4" sx={{ mb: 4 }} fontWeight="500">
        Financial Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography color="textSecondary" variant="subtitle2" gutterBottom>
                Total Budget
              </Typography>
              <Typography variant="h4">
                {formatCurrency(financial.summary.totalBudget)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography color="textSecondary" variant="subtitle2" gutterBottom>
                Allocated
              </Typography>
              <Typography variant="h4" color="primary">
                {formatCurrency(financial.summary.allocated)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography color="textSecondary" variant="subtitle2" gutterBottom>
                Spent
              </Typography>
              <Typography variant="h4" color="error">
                {formatCurrency(financial.summary.spent)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography color="textSecondary" variant="subtitle2" gutterBottom>
                Remaining
              </Typography>
              <Typography variant="h4" color="success.main">
                {formatCurrency(financial.summary.remaining)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Component-wise Allocation
              </Typography>
              <Box sx={{ mt: 2 }}>
                {Object.entries(financial.summary.components).map(([component, amount]) => (
                  <Box key={component} sx={{ mb: 3 }}>
                    <Box display="flex" justifyContent="space-between" mb={1}>
                      <Typography variant="body2">{component}</Typography>
                      <Typography variant="body2" fontWeight="500">
                        {formatCurrency(amount)}
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={(amount / financial.summary.totalBudget) * 100}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
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
                Recent Transactions
              </Typography>
              <List sx={{ mt: 2 }}>
                {financial.transactions.slice(0, 5).map((transaction, index) => (
                  <React.Fragment key={transaction.id}>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary={transaction.description}
                        secondary={transaction.date}
                        primaryTypographyProps={{ variant: 'body2' }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                      <Typography
                        variant="body2"
                        color={transaction.type === 'Credit' ? 'success.main' : 'error.main'}
                        fontWeight="500"
                      >
                        {formatCurrency(transaction.amount)}
                      </Typography>
                    </ListItem>
                    {index < 4 && <Divider />}
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

export default FinancialDashboard;