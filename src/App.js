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
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/gallery/creations' element={<Creations />} />
          <Route path='/gallery/comics' element={<Comics />} />
        </Routes>
      </div>
  );
}

export default App;
