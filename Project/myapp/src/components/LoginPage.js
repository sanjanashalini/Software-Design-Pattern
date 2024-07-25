import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'correctpassword') {
      setIsAuthenticated(true);
      navigate('/');
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-page">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
