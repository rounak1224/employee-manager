import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent
} from '@mui/material';
import EmployeeTable from './components/EmployeeTable';
import './App.css';

function App() {
  return (
    <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 3, md: 6 } }}>
      <Box sx={{ py: 4 }}>
        <Card
          variant="outlined"
          sx={{
            borderRadius: 3,
            background: 'linear-gradient(to right, #ffffff, #f0f4f8)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
            p: 2
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                color: '#0d47a1',
                mb: 3,
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}
            >
              Employee Management System
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                color: '#555',
                mb: 4
              }}
            >
              Manage your employees efficiently with a modern, intuitive interface.
            </Typography>
            <EmployeeTable />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default App;
