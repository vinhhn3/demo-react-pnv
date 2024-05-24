import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleLogin = async () => {
    // Add your login logic here
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        username,
        password,
      });
      console.log("Login successful");
      history.push("/categories/all");
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed");
    }
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
