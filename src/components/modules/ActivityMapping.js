import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Chip,
  IconButton,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';

const ActivityMapping = () => {
  const [expanded, setExpanded] = useState(false);

  const activities = [
    {
      id: 'ACT-001',
      name: 'Infrastructure Development',
      subActivities: [
        { id: 'SUB-001', name: 'Site Planning' },
        { id: 'SUB-002', name: 'Foundation Work' },
        { id: 'SUB-003', name: 'Construction' }
      ]
    },
    {
      id: 'ACT-002',
      name: 'Equipment Installation',
      subActivities: [
        { id: 'SUB-004', name: 'Procurement' },
        { id: 'SUB-005', name: 'Testing' },
        { id: 'SUB-006', name: 'Deployment' }
      ]
    }
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Activity Mapping
      </Typography>
      <Paper sx={{ p: 2 }}>
        {activities.map((activity) => (
          <Accordion
            key={activity.id}
            expanded={expanded === activity.id}
            onChange={handleChange(activity.id)}
            sx={{ mb: 1 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ 
                '&.Mui-expanded': {
                  minHeight: 48,
                  bgcolor: 'primary.light'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Chip label={activity.id} size="small" sx={{ mr: 1 }} />
                <Typography variant="body1">{activity.name}</Typography>
                <Tooltip title="View Details">
                  <IconButton size="small" sx={{ ml: 'auto' }}>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                {activity.subActivities.map((subActivity) => (
                  <ListItem key={subActivity.id}>
                    <Chip 
                      label={subActivity.id} 
                      size="small" 
                      sx={{ mr: 1 }} 
                    />
                    <ListItemText primary={subActivity.name} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Box>
  );
};

export default ActivityMapping;