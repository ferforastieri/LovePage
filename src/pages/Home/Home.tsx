// Home.tsx
import React from 'react';
import { LoveQuote } from '../../components/LoveQuote/LoveQuote';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-content">
      <h1>Bem-vindos à Nossa História de Amor</h1>
      
      <div className="love-quote">
        <LoveQuote
          quote="O amor não se vê com os olhos, mas com o coração."
          author="William Shakespeare"
        />
      </div>
      
      <div className="section">
        <h2>Nosso Amor por Memes</h2>
        <img src="path/to/romantic-meme1.jpg" alt="Meme romântico 1" />
        <img src="path/to/romantic-meme2.jpg" alt="Meme romântico 2" />
        <p>Compartilhamos muitos momentos divertidos com memes que nos fazem rir e nos lembram do quanto nos amamos.</p>
      </div>

      <div className="section">
        <h2>One Direction</h2>
        <img src="path/to/one-direction.jpg" alt="One Direction" />
        <p>One Direction sempre foi uma parte especial de nossa história. Suas músicas são a trilha sonora do nosso amor.</p>
      </div>

      <div className="section">
        <h2>Comida que Amamos</h2>
        <img src="path/to/romantic-dinner.jpg" alt="Jantar romântico" />
        <p>Adoramos cozinhar juntos e desfrutar de deliciosos pratos. A comida é uma parte importante da nossa vida juntos.</p>
      </div>
    </div>
  );
};

export default Home;
