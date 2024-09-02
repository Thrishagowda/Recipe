

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import HPage from './Images/HPage.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">
          <h1>Recipe Finder</h1>
        </div>
        <div className="auth-buttons">
          <button className="sign-in-btn" onClick={() => navigate('/signin')}>Sign In</button>

          <button className="admin-login-btn" onClick={() => navigate('/admin-login')}>Admin Login</button>
        </div>
      </header>
      <main className="content">
        <div className="banner-container">
          <img src={HPage} alt="HPage" className="banner-image" />
          <div className="banner-text">
            <h2>Welcome to Recipe Finder</h2>
            <p>Discover delicious recipes easily!</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;



