import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="navbar">
    <nav className="container">
      <ul className="nav-list">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/index2">Como Funciona</Link></li>
        <li><Link to="/index3">Benefícios</Link></li>
        <li><Link to="/index4">Impactos do Problema</Link></li>
        <li><Link to="/index5">Testemunhos</Link></li>
        <li><Link to="/index6">FAQ</Link></li>
        <li><Link to="/menu">Contato</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
