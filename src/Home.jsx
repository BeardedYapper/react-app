import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

class Home extends Component {
  render() {
    return (
      <Box style={{marginTop: 'auto'}}>
      <div>
        <Typography variant="h3" style={{marginTop: '20px', marginBottom: '20px'}}>
          Home
        </Typography>
        <div style={{display: 'flex',alignItems: 'center', margin: '20px', justifyContent: 'center'}}>
            <Button style={{margin:'10px'}} variant="outlined" color="primary" component={Link} to="/coursers">Courses</Button>
            <Button style={{margin:'10px'}} variant="outlined" color="primary" component={Link} to="/careers">Careers</Button>
        </div>
      </div>
    </Box>
    );
  }
}

export default Home;
