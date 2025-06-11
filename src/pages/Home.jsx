import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h2>Bem-vindo ao ConnectBook</h2>
      <p>Gerencie e visualize seus contatos de forma prática.</p>
      <Link to="/contacts" className="btn">
        Visualizar Contatos
      </Link>
    </div>
  );
};

export default Home;