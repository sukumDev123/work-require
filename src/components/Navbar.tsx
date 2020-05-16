import React from "react";
import "../styles/Navbar.css";
const Navbar: React.FC = () =>
  <div className="navbar-div">
    <h3>
      Welcome to,
      Work Planning!
    </h3>
    <ul>
      <li>Task</li>
      <li>Profile</li>
      <li>Setting</li>
    </ul>
  </div>;
export default Navbar;
