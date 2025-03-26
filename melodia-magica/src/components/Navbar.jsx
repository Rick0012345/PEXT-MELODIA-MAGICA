import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const pathBase = "/PEXT-MELODIA-MAGICA";
  return (
    <nav className="navbar">
      <span className="logo">Melodia Mágica</span>       
      <div className="nav-links">
        <Link to={`${pathBase}/`} className="nav-link">Home</Link>
        <Link to={`${pathBase}/about`} className="nav-link">Sobre</Link>
        <Link to={`${pathBase}/services`} className="nav-link">Serviços</Link>
        <Link to={`${pathBase}/contact`} className="nav-link">Contato</Link>
        {/* 🔹 Botão de login */}
        <Link to={`${pathBase}/login`} className="nav-link">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
