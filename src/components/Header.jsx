import React from 'react';
import logo from '../assets/images/logo.png';
import menuIcon from '../assets/images/54206.png';

const Header = ({ onMenuToggle }) => (
  <header className="mobile-header">
    <img src={logo} alt="MS" className="header-logo" />
    <button className="hamburger" onClick={onMenuToggle}>
      <img src={menuIcon} alt="Menu" />
    </button>
  </header>
);

export default Header;
