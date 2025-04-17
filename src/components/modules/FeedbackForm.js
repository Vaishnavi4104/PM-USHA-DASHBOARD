import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Rating,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Snackbar,
  Alert
} from '@mui/material';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    activity: '',
    rating: 0,
    satisfaction: '',
    comments: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    setOpenSnackbar(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Feedback Form
      </Typography>
      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Activity Name"
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            margin="normal"
            required
          />

          <Box sx={{ my: 2 }}>
            <Typography component="legend">Rating</Typography>
            <Rating
              name="rating"
              value={formData.rating}
              onChange={(event, newValue) => {
                setFormData({ ...formData, rating: newValue });
              }}
            />
          </Box>

          <FormControl component="fieldset" sx={{ my: 2 }}>
            <FormLabel>Satisfaction Level</FormLabel>
            <RadioGroup
              name="satisfaction"
              value={formData.satisfaction}
              onChange={handleChange}
            >
              <FormControlLabel value="high" control={<Radio />} label="High" />
              <FormControlLabel value="medium" control={<Radio />} label="Medium" />
              <FormControlLabel value="low" control={<Radio />} label="Low" />
            </RadioGroup>
          </FormControl>

          <TextField
            fullWidth
            label="Comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            multiline
            rows={4}
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Submit Feedback
          </Button>
        </form>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert severity="success" onClose={() => setOpenSnackbar(false)}>
          Feedback submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FeedbackForm;