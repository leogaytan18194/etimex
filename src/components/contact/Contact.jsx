import "./contact.scss";
import * as React from 'react';
import {  useRef , useState } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();
  const [done, setDone] = useState(false);

 



  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fst7gdm', 'template_oblxilh', form.current, 'QQvoOXLmHkR29h36W')
    .then(
      (result) => {
        console.log(result.text);
        setDone(true)
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="c-contact" id="contacto">
      <h1 className="c-title">¡SÁLTATE LAS COMPLICACIONES!</h1>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        
        <div className="c-left">
          <div className="c-info-item">
            <img src="assets/solicitud-enviada.png" alt="" className="c-imagen"/>
          </div>
        </div>
        <div className="c-right-contact">
          <p className="c-desc">
            <h3>¡Déjanos tus datos!</h3> 
            <p>Nosotros te contactamos</p>
          </p>
          <form ref={form} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Nombre Completo" name="nombre" required/>
            <input  type="text" placeholder="Telefono" name="telefono" required/>
            <label htmlFor="">Selecciona una opción: </label> 
            <select name="apps" required>
            <option value="uber">Uber</option>
            <option value="didi">Didi</option>
            <option value="uber y didi">Uber y Didi</option>
            <option value="otros">Otros</option>
          </select>
            <textarea  rows="5" placeholder="Mensaje" name="mensaje" />
            <button>Enviar</button>
            {done && "Gracias solicitud enviada..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;