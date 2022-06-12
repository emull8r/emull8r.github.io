import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
