import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileMenu = ({ open, onClose }) => {
  const handle = () => onClose();
  return (
    <div className={`mobile-menu${open ? ' open' : ''}`} onClick={onClose}>
      <nav onClick={e => e.stopPropagation()}>
        <NavLink to="/" end onClick={handle}>Home</NavLink>
        <NavLink to="/about" onClick={handle}>About</NavLink>
        <NavLink to="/career" onClick={handle}>Career</NavLink>
        <NavLink to="/highlights" onClick={handle}>Highlights</NavLink>
        <NavLink to="/contact" onClick={handle}>Contact</NavLink>
      </nav>
    </div>
  );
};

export default MobileMenu;
