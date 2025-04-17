import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
  Grid
} from '@mui/material';

const LifecycleProgress = () => {
  const steps = ['Planning', 'Design', 'Development', 'Testing', 'Deployment'];
  const activeStep = 2;

  const components = [
    { name: 'DPR Documentation', progress: 75 },
    { name: 'Technical Specifications', progress: 90 },
    { name: 'Cost Estimation', progress: 60 },
    { name: 'Risk Assessment', progress: 45 }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Lifecycle Progress
      </Typography>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>

      <Grid container spacing={3}>
        {components.map((component) => (
          <Grid item xs={12} key={component.name}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                {component.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={component.progress}
                    sx={{ height: 10, borderRadius: 5 }}
                  />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.secondary">
                    {`${component.progress}%`}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LifecycleProgress;