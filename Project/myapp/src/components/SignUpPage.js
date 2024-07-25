import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Implement sign-up logic
    alert('Account created successfully!');
    navigate('/login');
  };

  return (
    <div className='signup-page-container'>
    <div className="signup-page">
      <form onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label>Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default SignUpPage;
