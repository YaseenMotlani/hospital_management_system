import React from "react";
import '../App.css'


const Login = () => {
    return (
        <div className="login-component">
            <div className="login-box">
                <h2 className="login-title">Login</h2>
                <p className="login-subtitle">login to your Account</p>

                {/* Email */}
                <label>E-mail address</label>
                <input type="email" className="input-box" placeholder="Enter your email"/>

                {/* password */}
                <label>Password</label>
                <input type="password" className="input-box" placeholder="Enter your password"/>

                <div className="row">
                    <div>
                        <input type="checkbox"/>Remember me
                    </div>
                    <a href="#" className="reset-link"> Reset Password?</a>
                </div>

                <button className="login-btn" >Sign In</button>
            </div>
        </div>
    );
};

export default Login;