import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="contenedor-pagina">
      <h2>Acerca del Hotel</h2>
      <div className="tarjeta-info">
        <h3>Nuestra Historia</h3>
        <p>
          Bienvenidos a nuestro hotel. Ofrecemos la mejor experiencia 
          de descanso con instalaciones de primer nivel, diseñadas para brindar 
          confort y tranquilidad a nuestros huéspedes.
        </p>
        <br/>
        <p><strong>Servicios:</strong> Wi-Fi de alta velocidad, Desayuno buffet, Piscina y Spa.</p>
      </div>
    </div>
  );
};

export default About;