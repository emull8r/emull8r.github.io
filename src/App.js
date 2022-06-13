import React from 'react';
import './App.css';
//import Navbar from './components/navbar';
//import { Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <Home />
    /*
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Routes>
    </Router>
    */
  );
}

export default App;
