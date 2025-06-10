// src/pages/Cadastrar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cadastrar.css'; // Estilos (opcional)

const Cadastrar = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação simples
    if (!nome || !preco || !quantidade) {
      alert('Preencha todos os campos!');
      return;
    }

    // Obtém produtos existentes ou inicia um array vazio
    const produtosSalvos = JSON.parse(localStorage.getItem('produtos')) || [];
    
    // Adiciona o novo produto
    const novoProduto = {
      nome,
      preco: parseFloat(preco).toFixed(2),
      quantidade: parseInt(quantidade),
    };
    
    const novosProdutos = [...produtosSalvos, novoProduto];
    localStorage.setItem('produtos', JSON.stringify(novosProdutos));
    
    // Redireciona para a página de produtos
    navigate('/produtos');
  };

  return (
    <div className="cadastrar-page">
      <header className="header">
        <h1>MiniStore</h1>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/produtos">Produtos</Link> | 
          <Link to="/cadastrar">Cadastrar</Link>
        </nav>
      </header>

      <main className="main-content">
        <h2>Cadastrar Novo Produto</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome:</label>
            <input 
              type="text" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Preço (R$):</label>
            <input 
              type="number" 
              step="0.01"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Quantidade:</label>
            <input 
              type="number" 
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="button">Salvar Produto</button>
        </form>
      </main>

      <footer className="footer">
        <p>© 2025 MiniStore - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default Cadastrar;