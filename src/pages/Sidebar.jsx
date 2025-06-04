
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Socials from "./Socials";
import logo from "../assets/images/logo.png";
import "../index.css";

const Sidebar = () => {
  const location = useLocation();
  const links = ["Home", "About", "Career", "Highlights", "Contact"];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        {links.map((link) => (
          <Link
            key={link}
            to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
            className={location.pathname === (link === "Home" ? "/" : `/${link.toLowerCase()}`) ? "active" : ""}
          >
            {link}
          </Link>
        ))}
      </nav>
      <div className="theme-toggle">🌙</div>
      <Socials />
    </div>
  );
};

export default Sidebar;
