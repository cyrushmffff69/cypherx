import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import SignupVerification from './Pages/SignupVerification';
import ForgetPassword from './Pages/ForgetPassword';
import Chat from './Pages/Chat';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signupverify" element={<SignupVerification />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}
