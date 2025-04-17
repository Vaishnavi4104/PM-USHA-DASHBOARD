import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid
} from '@mui/material';
import {
  CloudUpload,
  Description,
  Download,
  Delete,
  Search
} from '@mui/icons-material';

const DocumentCenter = () => {
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Handle file upload logic
    console.log('Uploading file:', file);
  };

  const documents = [
    { id: 1, name: 'DPR_2023.pdf', category: 'DPR', date: '2023-08-01' },
    { id: 2, name: 'Technical_Specs.docx', category: 'Technical', date: '2023-08-02' },
    { id: 3, name: 'Budget_Report.xlsx', category: 'Financial', date: '2023-08-03' }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Document Center
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <input
              type="file"
              id="file-upload"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />
            <label htmlFor="file-upload">
              <Button
                variant="contained"
                component="span"
                startIcon={<CloudUpload />}
              >
                Upload Document
              </Button>
            </label>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <TextField
                fullWidth
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: <Search color="action" sx={{ mr: 1 }} />
                }}
              />
              <FormControl sx={{ minWidth: 200 }}>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  label="Category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="DPR">DPR</MenuItem>
                  <MenuItem value="Technical">Technical</MenuItem>
                  <MenuItem value="Financial">Financial</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <List>
              {documents.map((doc) => (
                <ListItem key={doc.id}>
                  <ListItemIcon>
                    <Description />
                  </ListItemIcon>
                  <ListItemText
                    primary={doc.name}
                    secondary={`${doc.category} • ${doc.date}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton>
                      <Download />
                    </IconButton>
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DocumentCenter;