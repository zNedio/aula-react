// src/pages/Produtos.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Produtos.css'; // Estilos (opcional)

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  // Carrega produtos do localStorage ao iniciar
  useEffect(() => {
    const produtosSalvos = JSON.parse(localStorage.getItem('produtos')) || [];
    setProdutos(produtosSalvos);
  }, []);

  return (
    <div className="produtos-page">
      <header className="header">
        <h1>MiniStore</h1>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/produtos">Produtos</Link> | 
          <Link to="/cadastrar">Cadastrar</Link>
        </nav>
      </header>

      <main className="main-content">
        <h2>Nossos Produtos</h2>
        
        {produtos.length === 0 ? (
          <p>Nenhum produto cadastrado ainda.</p>
        ) : (
          <ul className="lista-produtos">
            {produtos.map((produto, index) => (
              <li key={index}>
                <h3>{produto.nome}</h3>
                <p>Preço: R$ {produto.preco}</p>
                <p>Quantidade: {produto.quantidade}</p>
              </li>
            ))}
          </ul>
        )}
      </main>

      <footer className="footer">
        <p>© 2025 MiniStore - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default Produtos;