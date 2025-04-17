import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box
} from '@mui/material';
import {
  Dashboard,
  AttachMoney,
  Business,
  Build,
  School,
  Assessment,
  AccountTree,
  Timeline,
  Feedback,
  Description,
  Security
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = ({ userRole }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: 'overview', label: 'Overview', icon: <Dashboard /> },
    { path: 'financial', label: 'Financial', icon: <AttachMoney /> },
    { path: 'infrastructure', label: 'Infrastructure', icon: <Business /> },
    { path: 'equipment', label: 'Equipment', icon: <Build /> },
    { path: 'soft-components', label: 'Soft Components', icon: <School /> },
    { path: 'activity-mapping', label: 'Activity Mapping', icon: <AccountTree /> },
    { path: 'lifecycle-progress', label: 'Lifecycle Progress', icon: <Timeline /> },
    { path: 'feedback', label: 'Feedback', icon: <Feedback /> },
    { path: 'documents', label: 'Documents', icon: <Description /> },
    { path: 'security', label: 'Security & Risk', icon: <Security /> },
    { path: 'reports', label: 'Reports', icon: <Assessment /> }
  ];

  const roleAccess = {
    admin: menuItems.map(item => item.path),
    finance: ['overview', 'financial', 'activity-mapping', 'documents', 'reports'],
    construction: ['overview', 'infrastructure', 'activity-mapping', 'lifecycle-progress', 'documents', 'reports'],
    equipment: ['overview', 'equipment', 'activity-mapping', 'lifecycle-progress', 'documents', 'reports'],
    soft: ['overview', 'soft-components', 'activity-mapping', 'documents', 'reports'],
    guest: ['overview', 'feedback']
  };

  const allowedPaths = roleAccess[userRole || 'guest'];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          mt: '64px',
          bgcolor: 'background.paper'
        }
      }}
    >
      <Box sx={{ overflow: 'auto', mt: 1 }}>
        <List>
          {menuItems
            .filter(item => allowedPaths.includes(item.path))
            .map(item => (
              <ListItem
                button
                key={item.path}
                selected={location.pathname.includes(item.path)}
                onClick={() => navigate(item.path)}
                sx={{
                  mb: 0.5,
                  mx: 1,
                  borderRadius: 1,
                  '&.Mui-selected': {
                    bgcolor: 'primary.light',
                    '&:hover': {
                      bgcolor: 'primary.light',
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ 
                  color: location.pathname.includes(item.path) ? 'primary.main' : 'inherit'
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
