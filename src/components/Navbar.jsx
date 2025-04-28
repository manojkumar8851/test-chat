import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/userSlice';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { changeTheme } from '../Redux/appSlice';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mode = useSelector((state) => state.appConfig.themeMode)
  const changeName = ()=>{
    // dispatch(changeTheme('dark'));
    let modes = mode;//light//
    if (modes==="light") {
      dispatch(changeTheme('dark'));
      console.log(`theme set to ${mode}`);
      

    }else{
      dispatch(changeTheme('light'));
      console.log(`theme set to ${mode}`);


    }
    
    // let value = true;
    // if(){

    // }
    
}
const handleLogout = () => {
  dispatch(logout()); // Clear user state
  navigate('/login'); // Redirect to login page
};

return (
  <Container maxWidth="xl" disableGutters={true} >
    <Paper elevation={2}>
      <Box style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f0f0f0' }}>
        <Typography variant='h6'>App Name</Typography>
        <Button onClick={changeName} >{mode}</Button>
        <Button onClick={handleLogout} style={{ padding: '5px 10px', cursor: 'pointer' }}>
          Logout
        </Button>
        <Button><Link to={'/profile'}>Profile</Link></Button>
      </Box>

    </Paper>

  </Container>

);
}

export default Navbar;