import { useState } from "react";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";

const Login = () => {

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (res.ok) {
      login(data);   // ✅ Direct dashboard
    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
  <div className="login-component">
    <div className="login-box">
      <h2 className="login-title">Login</h2>
      <p className="login-subtitle">Welcome Back 👋</p>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          className="input-box"
          placeholder="Email Address"
          onChange={(e)=>setFormData({...formData, email:e.target.value})}
        />

        <label>Password</label>
        <input
          className="input-box"
          type="password"
          placeholder="Password"
          onChange={(e)=>setFormData({...formData, password:e.target.value})}
        />

        <button type="submit" className="login-btn">
          Login
        </button>

        <p style={{ marginTop: "15px" }}>
          Don’t have account? <Link to="/">Sign Up</Link>
        </p>
      </form>
    </div>
  </div>
);

};

export default Login;
