import { useState } from "react";
import { useAuth } from "./AuthContext";
// import "../../App.css";
import { Link } from "react-router-dom";

const SignUp = () => {

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (res.ok) {
      login(data);   // ✅ Signup ke baad direct login + dashboard
    } else {
      alert(data.message || "Signup failed");
    }
  };

  return (
  <div className="login-component">
    <div className="login-box">
      <h2 className="login-title">Sign Up</h2>
      <p className="login-subtitle">Create Your Account</p>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className="input-box"
          placeholder="Full Name"
          onChange={(e)=>setFormData({...formData, name:e.target.value})}
        />

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
          Sign Up
        </button>

        <p style={{ marginTop: "15px" }}>
          Already have account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  </div>
);

};

export default SignUp;
