import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      
        <span className="logo">Melodia Mágica</span>       
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            Sobre
          </Link>
          <Link to="/services" className="nav-link">
            Serviços
          </Link>
          <Link to="/contact" className="nav-link">
            Contato
          </Link>
        </div>
    
    </nav>
  );
};

export default Navbar;