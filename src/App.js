import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LogIn from './LogIn';
import Home from './Home';
import SignUp from './SignUp';
import Courses from './Courses/Courses';
import Careers from './Careers/Careers';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

function App() {
  const logged = localStorage.getItem("auth_token");
  return (
    <Router>
      <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Link style={{textDecoration: 'none', color: 'white'}} to="/home">
            <MenuIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            APP NAME HERE
          </Typography>
          {!logged && (
            <Button color="inherit"> <Link style={{textDecoration: 'none', color: 'white'}} to="/login">Login</Link></Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
        <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/coursers" element={<Courses />} />
        <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
