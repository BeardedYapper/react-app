import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';

class SignUp extends Component {
  render() {
    return (
      <Box
      component="form"
      noValidate
      autoComplete="off"
      style={{marginTop: 'auto'}}
    >
      <div>
        <Typography variant="h3" style={{marginTop: '20px', marginBottom: '20px'}}>
          Sign up
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
          <Button component={Link} to="/home" color="success" size="large" style={{ marginTop: '20px'}} variant="contained">Sign Up</Button>
        </div>
      </div>
    </Box>
    );
  }
}

export default SignUp;
