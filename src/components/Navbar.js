import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Box, Stack } from '@mui/material';
import { AccountCircle, ExitToApp } from '@mui/icons-material';
import { useAuth } from '../hooks/useAuth';
import pmUshaLogo from '../assets/images/pm-usha-logo.png';

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <Avatar
            src={pmUshaLogo}
            alt="PM-USHA"
            sx={{ width: 40, height: 40, marginRight: 2 }}
          />
          <Typography variant="h6" color="primary" fontWeight="600">
            PM-USHA Dashboard
          </Typography>
        </Box>
        
        <Stack direction="row" spacing={2} alignItems="center" sx={{ marginLeft: 'auto' }}>
          <Box display="flex" alignItems="center" sx={{ 
            bgcolor: 'grey.100', 
            borderRadius: 2,
            padding: '6px 12px'
          }}>
            <AccountCircle sx={{ color: 'grey.600', marginRight: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {currentUser?.email}
            </Typography>
          </Box>
          
          <Button
            variant="outlined"
            color="primary"
            startIcon={<ExitToApp />}
            onClick={logout}
            size="small"
          >
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

