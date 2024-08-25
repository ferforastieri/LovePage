// src/pages/QuizPage/QuizPage.tsx
import React, { useState } from 'react';
import './QuizPage.css'; // Adicione o arquivo CSS para estilizar a página

const questions = [
  { question: "Qual é o nome do primeiro álbum do One Direction?", choices: ["Up All Night", "Take Me Home", "Midnight Memories"], correct: 0 },
  { question: "Em que ano o One Direction foi formado?", choices: ["2009", "2010", "2011"], correct: 1 },
  { question: "Qual membro deixou a banda em 2015?", choices: ["Harry Styles", "Niall Horan", "Zayn Malik"], correct: 2 },
  { question: "Qual é o título da música que contém a frase 'You don't know you're beautiful'?", choices: ["What Makes You Beautiful", "Story of My Life", "Best Song Ever"], correct: 0 },
  { question: "Em qual programa de TV o One Direction foi formado?", choices: ["American Idol", "The X Factor", "Britain's Got Talent"], correct: 1 },
  { question: "Qual é o nome do último álbum lançado pelo One Direction antes do hiato?", choices: ["Four", "Made in the A.M.", "Take Me Home"], correct: 1 },
  { question: "Qual membro do One Direction nasceu na Irlanda?", choices: ["Louis Tomlinson", "Liam Payne", "Niall Horan"], correct: 2 },
  { question: "Qual é o título da música que começa com 'You're insecure, don't know what for'?", choices: ["One Thing", "What Makes You Beautiful", "Live While We're Young"], correct: 1 }
];

const QuizPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuiz, setShowQuiz] = useState(true);
  const [showDeclaration, setShowDeclaration] = useState(false);

  const loadQuestion = () => {
    const q = questions[currentQuestion];
    return (
      <>
        <h2>{q.question}</h2>
        <div id="choices">
          {q.choices.map((choice, index) => (
            <button key={index} onClick={() => checkAnswer(index)}>
              {choice}
            </button>
          ))}
        </div>
      </>
    );
  };

  const checkAnswer = (index: number) => {
    if (index === questions[currentQuestion].correct) {
      alert('Resposta correta!');
      setCurrentQuestion(prev => {
        if (prev < questions.length - 1) {
          return prev + 1;
        } else {
          setShowQuiz(false);
          setShowDeclaration(true);
          return prev;
        }
      });
    } else {
      alert('Resposta incorreta. Tente novamente!');
    }
  };

  return (
    <div className="quiz-page">
      <div className={`welcome-screen ${!showQuiz ? 'hidden' : ''}`}>
        <h1>Quiz One Direction e Declaração de Amor</h1>
        <h2>Bem-vinda, Duda!</h2>
        <p>Preparei algo especial para você. Antes de ver minha declaração de amor, que tal um pequeno desafio?</p>
        <p>Vamos testar seus conhecimentos sobre o One Direction com um quiz divertido!</p>
        <p>Responda corretamente às perguntas e, no final, você verá uma surpresa especial.</p>
        <button onClick={() => setShowQuiz(true)}>Iniciar Quiz</button>
      </div>

      <div className={`quiz-container ${showQuiz ? '' : 'hidden'}`}>
        <h2>Quiz One Direction</h2>
        <p>Responda corretamente para ver a declaração de amor!</p>
        <div id="question">
          {loadQuestion()}
        </div>
      </div>

      <div className={`declaration ${!showDeclaration ? 'hidden' : ''}`}>
        <h2>Minha Declaração de Amor para Você, Duda</h2>
        <p>Duda, meu amor por você é como as músicas do One Direction: inesquecível e eterno.</p>
        <p>Cada dia ao seu lado é uma nova aventura, cheia de alegria e emoção.</p>
        <p>Você é a melodia que faz meu coração cantar, a harmonia que completa minha vida.</p>
        <p>Te amo mais do que todas as estrelas no céu, mais do que todas as notas musicais do mundo.</p>
        <p>Obrigado por ser minha "Little Things" e por fazer cada momento especial.</p>
      </div>

      <button onClick={() => window.location.href = '/'} className="back-button">Voltar ao Menu</button>
    </div>
  );
};

export default QuizPage;
