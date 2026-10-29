import React from 'react';
import './Booking.css';

const Booking = () => {
  const habitaciones = [
    { id: 1, nombre: "Habitación Simple", precio: "$50.000 / noche" },
    { id: 2, nombre: "Habitación Doble", precio: "$85.000 / noche" },
    { id: 3, nombre: "Suite Ejecutiva", precio: "$130.000 / noche" },
    { id: 4, nombre: "Suite Presidencial", precio: "$200.000 / noche" }
  ];

  return (
    <div className="contenedor-pagina">
      <h2>Reservar Habitaciones</h2>
      
      <div className="grilla-habitaciones">
        {habitaciones.map((hab) => (
          <div key={hab.id} className="tarjeta-habitacion">
            <h3>{hab.nombre}</h3>
            <p>{hab.precio}</p>
            <button className="btn-verde">Reservar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;