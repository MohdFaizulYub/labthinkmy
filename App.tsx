
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import CustomizedTraining from './pages/CustomizedTraining';
import HSECompetency from './pages/HSECompetency';
import Training from './pages/Training';
import Certification from './pages/Certification';
import Highlights from './pages/Highlights';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* 
        The key attribute on the main element ensures that React treats it as a new 
        element on every route change, triggering the CSS animation defined in index.html 
      */}
      <main key={location.pathname} className="flex-grow animate-page-entry transition-wrapper">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div className="pt-20"><About /></div>} />
          <Route path="/solutions" element={<div className="pt-20"><Solutions /></div>} />
          <Route path="/solutions/customized-training" element={<div className="pt-20"><CustomizedTraining /></div>} />
          <Route path="/solutions/hse-competency" element={<div className="pt-20"><HSECompetency /></div>} />
          <Route path="/training" element={<div className="pt-20"><Training /></div>} />
          <Route path="/certification" element={<div className="pt-20"><Certification /></div>} />
          <Route path="/highlights" element={<div className="pt-20"><Highlights /></div>} />
          <Route path="/contact" element={<div className="pt-20"><Contact /></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;
