import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../Redux/userSlice';
import { Box, Button, Container, Paper, Typography } from '@mui/material';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Clear user state
    navigate('/login'); // Redirect to login page
  };

  return (
    <Container maxWidth="xl" disableGutters={true} >
      <Paper elevation={2}>
        <Box style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f0f0f0' }}>
          <Typography variant='h6'>App Name</Typography>
          <Button onClick={handleLogout} style={{ padding: '5px 10px', cursor: 'pointer' }}>
            Logout
          </Button>
        </Box>

      </Paper>

    </Container>

  );
}

export default Navbar;