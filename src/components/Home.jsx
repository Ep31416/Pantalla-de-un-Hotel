import React from 'react';
import './Home.css';

const Home = () => {
  // 1. Agregás la ruta de la imagen en tu lista
const habitaciones = [
  { id: 1, nombre: "Habitación Clásica", precio: "$50.000 / noche", imagen: "/img/hab1.jpg" },
  { id: 2, nombre: "Doble Superior", precio: "$85.000 / noche", imagen: "/img/hab2.jpg" },
  { id: 3, nombre: "Suite Ejecutiva", precio: "$130.000 / noche", imagen: "/img/hab3.jpg" },
  { id: 4, nombre: "Suite Presidencial", precio: "$200.000 / noche", imagen: "/img/hab4.jpg" }
];
  

  return (
    <div className="contenedor-home">
      
      {/* SECCIÓN 1: ACERCA DEL HOTEL */}
      <section id="about" className="seccion-hotel">
        <div className="tarjeta-elegante">
          <h2>Bienvenidos a Hotel POLIMARDO</h2>
          <p>
            Descubra la combinación perfecta entre lujo, confort y la mejor atención. 
            Nuestras instalaciones están diseñadas para brindar una experiencia de 
            descanso inolvidable.
          </p>
          <div className="servicios">
          </div>
          {/* Botón que desliza hacia abajo */}
          <a href="#reservas" className="btn-dorado">Ver Habitaciones</a>
        </div>
      </section>

      {/* SECCIÓN 2: RESERVAS */}
      <section id="reservas" className="seccion-reservas">
        <h2>Nuestras Habitaciones</h2>
        <div className="grilla-habitaciones">
          {habitaciones.map((hab) => (
            <div key={hab.id} className="tarjeta-habitacion">
              {/* 2. Agregás la imagen acá arriba */}
              <img src={hab.imagen} alt={hab.nombre} className="img-habitacion" />
              
              <h3>{hab.nombre}</h3>
              <div className="linea-decorativa"></div>
              <p>{hab.precio}</p>
              <button className="btn-dorado">Reservar</button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );

  
};


export default Home;