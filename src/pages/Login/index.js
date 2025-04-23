import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/userSlice';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dummyUsername = 'dummyUser';
  const dummyPassword = 'dummyPass';

  console.log(`Valid Dummy Credentials:\nUsername: ${dummyUsername}\nPassword: ${dummyPassword}`);

  const handleLogin = () => {
    // Dispatch login action with dummy user details
    const dummyUser = { username: dummyUsername, password: dummyPassword };
    dispatch(login(dummyUser));
    navigate(`/chat/${dummyUsername}`);
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;