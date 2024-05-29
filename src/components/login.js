import { Alert } from '@mui/material';
import React from 'react';
import { useState, useContext} from 'react';
import { json, useNavigate } from 'react-router-dom';
import '@/styling/login.css'
import { setUsername } from '../Redux/userSlice';
import { useDispatch } from 'react-redux';


function Login () {
const [password, setPassword] = useState('');
const [username1, setUsername1] = useState('');

const dispatch = useDispatch();

const handleUsernameChange = (event) => {
    setUsername1(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  let navigate = useNavigate();


  const loginSuccess = (user) => {
    navigate('/mainpage')
  }

  function loginUnsuccessful() {
    alert('Username or Password is Incorrect');
    setPassword('')
    setUsername1('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
        username: username1,
        password: password
      };
      try {
        const response = await fetch("http://localhost:4321/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        console.log("data sent!", JSON.stringify(userData));
        const data = await response.json();
    if (response.ok) {
        console.log('Login successful:', data);
        loginSuccess(username1);
        dispatch(setUsername(username1))
    } else {
        loginUnsuccessful();
        console.error('Login failed:', data);
    }
    } catch (error) {
            console.error("Error sending item:", error);
  };
}

    return (
      <div className='login'>
          <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username1}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      </div>
        
    );
}

export default Login;

