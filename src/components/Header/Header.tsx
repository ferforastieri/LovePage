import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Certifique-se de que este caminho está correto

export const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/our-story">Nossa História</Link>
        <Link to="/memories">Memórias</Link>
        <Link to="/future-goals">Metas Futuras</Link>
        <Link to="/quiz">Quiz</Link>
      </nav>
    </header>
  );
};
