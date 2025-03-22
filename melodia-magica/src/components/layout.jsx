// components/Layout.jsx
import Navbar from "./Navbar";
import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Navbar />
      <Menu />
      {children} {/* Isso renderizará o conteúdo específico de cada rota */}
    </div>
  );
};

export default Layout;