import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext';

import './css/Login.css'

const Login = () => {
    const [message, setMessage] = useState("");
    const { loginUser, signInWithGoogle} = useAuth();
    const navigate = useNavigate();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = async (data) => {
        try {
            await loginUser(data.email, data.password);
            alert("Login successful!");
            navigate("/");
        } catch (error) {
            setMessage("Please provide a valid email and password");
            console.error(error);
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            alert("Login successful!");
            navigate("/");
        } catch (error) {
            alert("Google sign in failed!");
            console.error(error);
        }
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Please Login</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            {...register("email", { required: "Email is required", pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i })}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            className="input-field"
                        />
                        {errors.email && <p className="error-text">{errors.email.message}</p>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            {...register("password", { required: "Password is required" })}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="input-field"
                        />
                        {errors.password && <p className="error-text">{errors.password.message}</p>}
                    </div>

                    {message && <p className="error-text">{message}</p>}

                    <div>
                        <button className="submit-button">Login</button>
                    </div>
                </form>

                <p className="register-link">
                    Haven't an account? Please <Link to="/register">Register</Link>
                </p>

                {/* Google sign in */}
                <div className="google-signin">
                    <button onClick={handleGoogleSignIn} className="google-button">
                        <FaGoogle className="google-icon" />
                        Sign in with Google
                    </button>
                </div>

                <p className="footer-text">©2025 Book Store. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Login;
