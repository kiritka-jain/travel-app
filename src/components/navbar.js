import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';



const NavBar=(props)=>{
   
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Travel App
            </Typography>
            <Button color="inherit" href='/signup'>Sign Up</Button>
            <Button color="inherit" href='/login' >Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  export default NavBar;