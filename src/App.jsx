import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Navbar from './components/Navbar';
import './App.css';
import Signup from './pages/Signup';
import ProtectedRoute from './Atom/ProtectedRoute';
import Profile from './pages/Profile';

function App() {
  // const navigate = useNavigate();
  // const isAuthenticated = useSelector((state) => state.user.user !== null); // Check Redux state for authentication

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate('/chat/dummyUser'); // Redirect to chat page with dummy user
  //   } else {
  //     navigate('/signup');
  //   }
  // }, [isAuthenticated, navigate]);

  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/" element={<Chat />} /> */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/chat"
            element={
              <Chat />
            }
          />
          <Route 
          path='/profile'
          element={
            <Profile />
          }
          />
        </Route>


      </Routes>
    </>
  );
}

export default App;
