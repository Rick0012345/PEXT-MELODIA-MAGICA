import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from "../assets/logo.jpeg"; 
const Navbar = () => {
  const pathBase = "/PEXT-MELODIA-MAGICA";
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="nav-links">
        <Link to={`${pathBase}/`} className="nav-link">Home</Link>
        <Link to={`${pathBase}/services`} className="nav-link">Serviços</Link>
        <Link to={`${pathBase}/contact`} className="nav-link">Contato</Link>
        {/* 🔹 Botão de login */}
        <Link to={`${pathBase}/login`} className="nav-link">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
