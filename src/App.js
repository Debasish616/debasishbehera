import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';

import Projects from './pages/Projects';
import Blog from './pages/Blog';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Home />} />
          {/* Other pages */}

          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
