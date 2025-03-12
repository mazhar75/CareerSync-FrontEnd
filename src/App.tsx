// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Results from './pages/Results';
import LearnMore from './pages/LearnMore/LearnMore';


const App: React.FC = () => {
  return (
  
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          
          <main className="flex-grow pt-4 pb-20 px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/results" element={<Results />} />
              <Route path="/learn-more" element={<LearnMore />} />
              
            </Routes>
            <div style={{ height: '120px' }}></div>
          </main>

          <Footer/>
        </div>
      </Router>
    
  );
};

export default App;