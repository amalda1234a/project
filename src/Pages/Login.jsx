import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle form data change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Debug: Log form data being sent
    console.log("Form data being sent:", formData);

    try {
      // Make the login request to backend
      const response = await axios.post("http://localhost:5000/user/login", formData);

      // Check if response contains token
      if (response.data.token) {
        alert("Welcome back!");

        // Store the JWT token in localStorage
        localStorage.setItem("token", response.data.token);
        
        // Reset form and error
        setFormData({ email: "", password: "" });
        setError("");

        // Redirect to homepage after login
        navigate("/");
      } else {
        // If token is not received, handle error
        setError("Login failed, please try again.");
      }
    } catch (error) {
      // Handle backend errors (e.g., invalid login credentials)
      console.log("Login Error:", error); // Debugging log
      setError(error.response?.data?.message || "Invalid login credentials.");
    }
  };

  return (
    <>
    <Navbar/>
   
    <div className="login-page">
      <div className="login-container">
        <h1>Login to Your Account</h1>
        {error && <p className="error-message">{error}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
          <div className="signup-link">
            <p>
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LoginPage;
