import React from 'react';
import './App.css';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Comics from './pages/gallery/comics';
import Creations from './pages/gallery/creations';
import { Routes, Route} from 'react-router-dom';
import NavbarComponent from './components/navigation/Navbar';


function App() {
  return (
      <div>
        <NavbarComponent />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/creations' exact element={<Creations />} />
          <Route path='/comics' exact element={<Comics />} />
        </Routes>
      </div>
  );
}

export default App;
