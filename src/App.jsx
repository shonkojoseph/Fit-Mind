import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/home';
import Goals from './pages/Goals';
import Challenges from './pages/Challenges';
import Mindfulness from './pages/Mindfulness';
import Profile from './pages/Profile';
import Login from './pages/Login';
import './index.css';  
import './App.css';    

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch('/api/session')
      .then(response => response.json())
      .then(data => {
        setIsLoggedIn(data.loggedIn);
      });
  }, []);

  const handleLogout = () => {
    // Implement logout functionality
    setIsLoggedIn(false); 
  };

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/mindfulness" element={<Mindfulness />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
