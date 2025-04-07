import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">SwiftRide</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
        <li><Link to="/routes">Routes</Link></li>
        <li><Link to="/buses">Buses</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/Dashboard">Dashboard</Link></li>
        <li><Link to="/Notifications">Notifications</Link></li>
        <li><Link to="/MapView">MapView</Link></li>
        <Link to="/Contact">Contact</Link>




        <li><Link to="/login" className="login-btn">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
