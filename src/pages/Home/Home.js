// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Estilos específicos (opcional)

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <h1>MiniStore</h1>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/produtos">Produtos</Link> | 
          <Link to="/cadastrar">Cadastrar</Link>
        </nav>
      </header>

      <main className="main-content">
        <h2>Bem-vindo à MiniStore!</h2>
        <p>Explore nosso catálogo e cadastre novos produtos.</p>
        
        <div className="actions">
          <Link to="/produtos" className="button">Ver Produtos</Link>
          <Link to="/cadastrar" className="button">Cadastrar Produto</Link>
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 MiniStore - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default Home;