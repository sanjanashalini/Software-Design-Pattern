import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import LandingPage from './components/LandingPage';

import './assests/css/Login.css'
import './assests/css/signup.css'
import './assests/css/LandingPage.css'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
  
    <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
  </Routes>
  );
}

export default App;
