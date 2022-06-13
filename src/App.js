import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Routes>
      </div>
      
    
  );
}

export default App;
