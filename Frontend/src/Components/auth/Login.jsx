import { useState } from "react";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      Swal.fire({
        icon: "warning",
        title: "All fields required"
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://hospital-management-system-qf91.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Login Successful 🎉",
          timer: 1200,
          showConfirmButton: false
        });

        login(data);
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: data.message || "Invalid credentials"
        });
      }

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Server not responding"
      });
    }

    setLoading(false);
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
          <div style={{ position: "relative" }}>
            <input
              className="input-box"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e)=>setFormData({...formData, password:e.target.value})}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "10px",
                cursor: "pointer"
              }}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? (
              <span className="spinner-border spinner-border-sm"></span>
            ) : "Login"}
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