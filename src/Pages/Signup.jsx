import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    uname: "", // 🔹 Changed from "username" to "uname" to match backend
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.uname || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    // Password length validation
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      // Log the form data to check what is being sent
      console.log("Form Data: ", formData);

      // Send data to backend
      const response = await axios.post("http://localhost:5000/user", formData);

      // If the signup is successful
      alert(`Welcome, ${formData.uname}! Your account has been created.`);
      
      // Clear the form data and errors
      setFormData({ uname: "", email: "", password: "" });
      setError("");

      // Redirect to login page after successful signup
      navigate("/login"); 
    } catch (error) {
      console.error("Error response:", error.response);
      // Set error message if signup fails
      setError(error.response?.data?.message || "Signup failed!!");
    }
  };

  return (
    <>
    <Navbar/>
   
    <div className="signup-page">
      <div className="signup-container">
        <h1>Create an Account</h1>
        {error && <p className="error-message">{error}</p>}
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="uname" 
              placeholder="Full Name" 
              value={formData.uname} 
              onChange={handleChange} 
              required 
            />
          </div>
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
          <button type="submit" className="submit-button">Sign Up</button>
          <br />
          <Link to="/login">
            <h5 className="h5">Already have an account? <p>Login here</p></h5>
          </Link>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SignUpPage;
