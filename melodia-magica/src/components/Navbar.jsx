import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const pathBase = "/PEXT-MELODIA-MAGICA";
  return (
    <nav className="navbar">
<<<<<<< HEAD
      <span className="logo">Melodia Mágica</span>       
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">Sobre</Link>
        <Link to="/services" className="nav-link">Serviços</Link>
        <Link to="/contact" className="nav-link">Contato</Link>
        {/* 🔹 Botão de login */}
        <Link to="/login" className="nav-link">Login</Link>
      </div>
=======
      
        <span className="logo">Melodia Mágica</span>       
        <div className="nav-links">
          <Link to={`${pathBase}/`} className="nav-link">
            Home
          </Link>
          <Link to={`${pathBase}/about`} className="nav-link">
            Sobre
          </Link>
          <Link to={`${pathBase}/services`} className="nav-link">
            Serviços
          </Link>
          <Link to={`${pathBase}/contact`} className="nav-link">
            Contato
          </Link>
        </div>
    
>>>>>>> 01302924e909c899cc288c47fc3e8c4a55ae5777
    </nav>
  );
};

export default Navbar;
