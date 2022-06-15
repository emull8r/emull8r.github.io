import React from 'react';
import './App.css';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Comics from './pages/gallery/comics';
import Creations from './pages/gallery/creations';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/gallery/creations' component={Creations} />
          <Route path='/gallery/comics' component={Comics} />
        </Routes>
      </div>
      
    
  );
}

export default App;
