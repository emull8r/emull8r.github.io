import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Routes>
    </HashRouter>
    
  );
}

export default App;
