import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';

import './css/Register.css'

const Register = () => {
  const [message, setMessage] = useState("");
  const { registerUser, signInWithGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Register user
  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password);
      alert("User registered successfully!");
    } catch (error) {
      setMessage("Please provide a valid email and password");
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      alert("Google sign in failed!");
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Please Register</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder="Email Address"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>

          {message && <p className="text-red-500 text-xs italic mb-3">{message}</p>}

          <button type="submit" className="button">Register</button>
        </form>

        <p className="bottom-text">
          Have an account? Please <Link to="/login">Login</Link>
        </p>

        {/* Google sign-in */}
        <div>
          <button
            onClick={handleGoogleSignIn}
            className="google-button"
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>

        <p className="bottom-text">©2025 Book Store. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Register;
