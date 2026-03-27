import { useState } from "react";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      Swal.fire({
        icon: "warning",
        title: "All fields required"
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://hospital-management-system-qf91.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Account Created 🎉",
          timer: 1200,
          showConfirmButton: false
        });

        login(data);
      } else {
        Swal.fire({
          icon: "error",
          title: "Signup Failed",
          text: data.message || "Something went wrong"
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
            ) : "Sign Up"}
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