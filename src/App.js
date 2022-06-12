import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path='/emull8r.github.io' exact component={Home} />
        <Route path='/emull8r.github.io/about' component={About} />
        <Route path='/emull8r.github.io/contact' component={Contact} />
      </Routes>
    </Router>
    
  );
}

export default App;
