import '../styles/Dashboard.css';
import React, { useEffect, useState } from 'react';
import { Box, Alert, Snackbar } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const { userRole, currentUser } = useAuth();
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check user authentication
    if (!currentUser) {
      navigate('/login');
      return;
    }

    // Welcome message based on role
    setAlertMessage(`Welcome ${userRole} user!`);
    setOpenAlert(true);
  }, [currentUser, userRole, navigate]);

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  if (!currentUser) {
    return null; // Don't render anything while redirecting
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar userRole={userRole} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          ml: '240px',
          bgcolor: '#f5f5f5',
          minHeight: '100vh',
          position: 'relative'
        }}
      >
        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert 
            onClose={handleCloseAlert} 
            severity="success" 
            sx={{ width: '100%' }}
          >
            {alertMessage}
          </Alert>
        </Snackbar>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;