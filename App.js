import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Ensure these paths match exactly the file structure on your disk
import LandingPage from './pages/LandingPage'; // Make sure this file exists in src/pages/LandingPage.js or .jsx
import Register from './pages/Register';      
import Login from './pages/Login';            
import Chat from './pages/Chat';               

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        {/* Redirect unknown paths to landing page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
