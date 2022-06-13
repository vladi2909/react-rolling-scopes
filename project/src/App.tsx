import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import { HomePage } from './pages/Homepage';
import { AboutUs } from './pages/AboutUspage';
import { NotFound } from './pages/NotFoundpage';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

function App() {
  return (
    <div className="App">
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
