import './App.css';
import { BrowserRouter as Router, Link, useRoutes } from 'react-router-dom';
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
import {token} from './utils/global.utils';

function App() {
  
  const handleLogOut = () => {
    window.localStorage.removeItem('auth_token');
  };
  const Routes = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/login", element: <LogIn /> },
      { path: "/signUp", element: <SignUp /> },
      { path: "/coursers", element: <Courses /> },
      { path: "/careers", element: <Careers /> }
    ]);
    return routes;
  };
  
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
            <Link style={{textDecoration: 'none', color: 'white'}} to="/">
            <MenuIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            APP NAME HERE
          </Typography>
          {!token && (
            <Button color="inherit"> <Link style={{textDecoration: 'none', color: 'white'}} to="/login">Login</Link></Button>
          )}
          {token && (
            <Button color="inherit"> <Link style={{textDecoration: 'none', color: 'white'}} to="/login" onClick={handleLogOut}>Log Out</Link></Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
