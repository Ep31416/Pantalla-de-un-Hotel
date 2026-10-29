import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contenedor-contacto">
      <h2>Contacto</h2>
      <p className="texto-descriptivo">Dejanos tu consulta y te responderemos a la brevedad.</p>

      <form className="formulario-contacto">
        <input type="text" placeholder="Nombre completo" className="input-form" />
        <input type="email" placeholder="Correo electrónico" className="input-form" />
        <textarea placeholder="Mensaje..." rows="5" className="input-form"></textarea>
        
        <button type="button" className="btn-verde">Enviar Consulta</button>
      </form>
    </div>
  );
};

export default Contact;