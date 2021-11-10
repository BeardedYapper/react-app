import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';

export default function LogIn ()  {  
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      style={{marginTop: 'auto'}}
    >
      <div>
        <Typography variant="h3" style={{marginTop: '20px', marginBottom: '20px'}}>
          Log In
        </Typography>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px'}}>
          <TextField
            required
            id="outlined-required"
            label="Email"
            style={{width:'300px', marginTop: '20px'}}
          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            type="password"
            style={{width:'300px', marginTop: '20px'}}
          />
          <Button component={Link} to="/home" color="success" size="large" style={{ marginTop: '20px'}} variant="contained">Log in</Button>
          <Typography variant="body1" style={{marginTop:'10px'}}>Don't have an account?<Link to="/signUp"> Sign up</Link></Typography>
        </div>
      </div>
    </Box>
  );
}
