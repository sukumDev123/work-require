import React from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
const Header = () =>
  <div className="header-div">
    <h2>Work Planning</h2>
    <ul>
      <li>
        <NavLink className="nav-item" to="/auth">Sign IN</NavLink>
      </li>
      <li>
        <NavLink className="nav-item" to="/auth/sign-up/">Sign Up</NavLink>
      </li>
      <li>
        <NavLink className="nav-item" to="/user-page">Sukhum Nilpech</NavLink>
      </li>
      <li>Logout</li>
    </ul>
  </div>;

export default Header;
