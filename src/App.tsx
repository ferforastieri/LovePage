import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import OurStory from './pages/OurStory/OurStory';
import Memories from './pages/Memories/Memories';
import FutureGoals from './pages/FutureGoals/FutureGoals';
import QuizPage from './components/QuizPage/QuizPage';
import { Header } from './components/Header/Header'; // Ajuste o caminho conforme necessário
import { Footer } from './components/Footer/Footer'; // Ajuste o caminho conforme necessário

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/future-goals" element={<FutureGoals />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

