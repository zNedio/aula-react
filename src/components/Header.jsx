import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>ConnectBook</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/contacts">Contatos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;