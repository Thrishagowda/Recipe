import React, { useState } from 'react';
import './AdminLogin.css'; // Import the external CSS
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const adminEmail = 'admin@gmail.com';
  const adminPassword = 'admin123';

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Email and Password should not be empty.');
      return;
    }

    if (email === adminEmail && password === adminPassword) {
      console.log('Admin logged in successfully');
      setErrorMessage('');
       navigate('/admin');
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className="form">
        <div className="inputContainer">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className="inputContainer">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;