import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import {useNavigate} from 'react-router-dom';

const axios = require('axios').default;
const { REACT_APP_API_URL } = process.env;

export default function SignUp () {
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [repeatPassword,setRepeatPassword] = useState('');
const navigate = useNavigate();
  const useSignUp = async() => {
    try {
	    console.log(REACT_APP_API_URL);
      const response = await axios.post(REACT_APP_API_URL + '/users', {
        user: {
          email,
          password,
          password_confirmation: repeatPassword
        },
      }, {      
      	{
	  headers: {
		  'Access-Control-Allow-Origin' : '*',
		  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',  
	  },
	  withCredentials: false
      	}
      });
      const data = response.data;
      localStorage.setItem("auth_token", data.auth_token);
      navigate('/')

    } catch (error) {
      console.error(error);
    }
  }

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
            value={email}
            onChange={(e)=>setEmail(e.currentTarget.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            type="password"
            style={{width:'300px', marginTop: '20px'}}
            value={password}
            onChange={(e)=>setPassword(e.currentTarget.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Repeat Password"
            type="password"
            style={{width:'300px', marginTop: '20px'}}
            value={repeatPassword}
            onChange={(e)=>setRepeatPassword(e.currentTarget.value)}
          />
          <Button color="success" size="large" style={{ marginTop: '20px'}} variant="contained" onClick={useSignUp}>Sign Up</Button>
        </div>
      </div>
  </Box>
  );
}

