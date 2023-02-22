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
      });
      form.current.reset()
  };

  return (
    <div className="c-contact" id="contacto">
      <h1 className="c-title-contact">¡SÁLTATE LAS COMPLICACIONES!</h1>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        
        <div className="c-left">
          <div className="c-info-item">
            <img src="assets/solicitud-enviada.png" alt="Contacto besta" className="c-imagen"/>
          </div>
        </div>
        <div className="c-right-contact">
          <p className="c-desc-contact">
            <h3>¡Déjanos tus datos!</h3> 
            <p>Nosotros te contactamos</p>
          </p>
          <form ref={form} onSubmit={handleSubmit}>
            <input  className="input-contact" type="text" placeholder="Nombre Completo" name="nombre" required/>
            <input  className="input-contact"type="text" placeholder="Teléfono" name="telefono" required/>
            <input  className="input-contact" type="hidden" placeholder="pagina" name="pagina" value="inicio" required/>
            <label htmlFor="">Selecciona una opción: </label> 
            <select name="apps" className="select-css" required>
            <option value="uber">Uber</option>
            <option value="didi">Didi</option>
            <option value="uber y didi">Uber y Didi</option>
            <option value="otros">Otros</option>
          </select><br />
          <label htmlFor="">¿Cuántos viajes llevas realizados?: </label>  
            <select name="viajes" className="select-css" required>
            <option value="Menos de 700">Menos de 700</option>
            <option value="Mas de 800">Mas de 800</option>
            <option value="Mas de 1,000">Más de 1,000</option>
            <option value="Mas de 3,000">Más de 3,000</option>
            </select><br />
            <label htmlFor="">¿En que parte de México vives?: </label> 
            <select name="estado" className="select-css" required>
            <option value="Nuevo León">Nuevo León</option>
            <option value="Guadalajara"> Guadalajara</option>
            <option value="Otro">Otro</option>
            </select>
            <textarea  rows="5" placeholder="Mensaje" name="mensaje" className="textarea-contact"/>
            <button className="button-contact">Enviar</button>
            {done && "Gracias solicitud enviada..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;