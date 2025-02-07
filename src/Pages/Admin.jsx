import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import Sidebar from "../Components/Sidebar";

const AdminPage = () => {
  return (
    <div className="admin-container">
      <Sidebar/>
      <div className="admin-card">
        
        <h1>Welcome, Admin!</h1>
        <p>Please log in to access the admin panel.</p>
        <Link to='/AdminLogin'>
        <button className="login-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
