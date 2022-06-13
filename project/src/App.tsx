import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/Homepage';
import { AboutUs } from './pages/AboutUspage';
import { NotFound } from './pages/NotFoundpage';

import { Layout } from './components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
