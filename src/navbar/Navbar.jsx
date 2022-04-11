import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" container-fluid d-inline-flex row p-0 m-0 bg-light navbar-light">
      <h5 className="navbar-brand ">
        <img src="https://img.icons8.com/color/48/000000/chat--v1.png" /> Post
        In
      </h5>
      <ul className="navbars ">
        <li className="nav-link">
          <NavLink className="NavLink" to="/">
            Create post
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink className="NavLink" to="/mypost">
            My post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
