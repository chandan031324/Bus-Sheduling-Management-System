import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy authentication logic (replace with API call)
    if (user.email === "admin@example.com" && user.password === "password") {
      alert("Login successful!");
      navigate("/Dashboard.js");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <p>
        Don't have an account? <span className="register-link" onClick={() => navigate("/register")}>Register here</span>
      </p>
    </div>
  );
};

export default Login;
