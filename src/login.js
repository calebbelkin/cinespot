import React from 'react';
import { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';

function Login () {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
        username: username,
        password: password
      };
      try {
        await fetch("http://localhost:4321/userLogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        console.log("data sent!", JSON.stringify(userData));
    } catch (error) {
            console.error("Error sending item:", error);
  };
}

    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
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
        {/* <div >Dont have an account? Sign up here</div>
        <button onClick={}>Sign Up</button> */}
      </form>
    );
}

export default Login;


