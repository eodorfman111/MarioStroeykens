import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import ThemeToggle from "./ThemeToggle";

const Sidebar = ({ open, onToggle }) => {
  return (
    <div className={`sidebar${open ? ' open' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <button className="close-btn" onClick={onToggle}>✕</button>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
        <NavLink to="/highlights">Highlights</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <ThemeToggle />
    </div>
  );
};

export default Sidebar;
