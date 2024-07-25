import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Admin = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'correctpassword') {
      setIsAuthenticated(true);
      navigate('/');
    } 
  };

  return (
    <div className="container mx-auto px-4 min-h-screen py-20 ">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"></div>
    <div className="login-page-container">
      <div className="login-page">
        <form onSubmit={handleLogin}>
          <h2>Admin</h2>
          <label>Username</label>
          <input type="text" value={username} placeholder = "email" onChange={(e) => setUsername(e.target.value)} required />
          <label>Password</label>
          <input type="password" value={password} placeholder ="password" onChange={(e) => setPassword(e.target.value)} required />
         
          <button type="submit" > Login</button>
         
          
        </form>
      </div>
    </div>
      </div>
    
  );
};

export default Admin;
