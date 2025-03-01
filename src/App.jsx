import React from 'react';
import Home from './Home';
import "./App.css"
import Contact from './Contact';
import Features from './Features';
import About from './About';
import Offer from './Offer';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {''
  return ( 
    <BrowserRouter>
      <div>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}
