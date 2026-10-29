import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'; // Este reemplaza a About y Booking
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <main className="App-contenido">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;