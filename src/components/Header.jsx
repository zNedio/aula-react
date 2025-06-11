import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>ConnectBook</h1>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/contacts" className="nav-link">Contatos</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;