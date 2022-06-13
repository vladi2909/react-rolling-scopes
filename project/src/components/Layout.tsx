import { Link, Outlet } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

const Layout = () => {
  return (
    <>
      <header className="App-header">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <Link to="/">Home</Link>
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <Link to="/about">About Us</Link>
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
      <Outlet />
    </>
  );
};

export { Layout };
