import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="encabezado-hotel">
      <div className="logo-hotel">
        <h2>Hotel POLIMARDO</h2>
      </div>
      <nav className="navegacion-hotel">
        <Link to="/">El Hotel</Link>
        <a href="#reservas">Habitaciones</a>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;