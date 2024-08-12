import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Page/HomePage';
import DashboardPage from './Page/DashboardPage';
import LoginPage from './Page/LoginPage';
import SignupPage from './Page/SignupPage';
import ForgetPasswordPage from './Page/ForgetPasswordPage';

import './App.css';
import './Styles/Components.css';

function App() {
  return (
    <div className="App">
      <Router>
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/forgot-password" element={<ForgetPasswordPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
              </Routes>
            </Router>
    </div>
  );
}

export default App;
