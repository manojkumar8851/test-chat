import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    // Dummy signup logic
    alert('Signup successful!');
    navigate('/login');
  };

  return (
    <div>
      <h1>Signup</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;