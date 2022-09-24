import "./visitanos.scss";
import * as React from 'react';
import {  useRef , useState } from "react";
import emailjs from '@emailjs/browser';
import taller from "./img/taller.png";
import emergencia from "./img/emergencia.png";
import gnv from "./img/gnvtaller.png";
import venta from "./img/venta.png";
import atencion from "./img/atncliente.png";
import sucursal from "./img/form-pc.png";


const Visitanos = (props) => {

  const form = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fst7gdm', 'template_3il5sqt', form.current, 'QQvoOXLmHkR29h36W')
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
    <div className="c" id="contacto">
      <div className="c-wrapper">
        <div className="c-left">
        <h1 className="o-title"><strong>Visítanos en nuestras sedes</strong></h1>
        <h2 className="o-title2">Ven a ver un auto o realiza una inspección</h2>
            <div className="detalles-visit">
            <img src={atencion} alt="" className="imgMini"/> <p className="texto-visit">&nbsp; Sucursal Nuevo León &nbsp;</p> <br />
            <p>Av. Churubusco #3900, Industrial Benito Juarez, C.P. 64517, Monterrey, Nuevo León, México.</p>
            <br />
            <img src={atencion} alt="" className="imgMini"/> <p className="texto-visit">&nbsp; Sucursal Jalisco &nbsp;</p> <br />
            <p>Av. Churubusco #3900, Industrial Benito Juarez, C.P. 64517, Monterrey, Nuevo León, México.</p>
            </div>
        </div>
        <div className="c-center">
            <img src={sucursal} alt="" className="imgSuc"/>
        </div>
        <div className="c-right">
          <div className="formulario">
          <div className="c-desc-visit">
            <h3>Se parte de BESTA,</h3> 
            <h2>¡Bienvenido!</h2>
          </div>
          <form ref={form} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Nombre Completo" name="nombre" required/>
            <input  type="text" placeholder="Celular con whatsapp" name="telefono" required/>
            <label htmlFor="">Selecciona una opción: </label> 
            <select name="apps" required>
            <option value="uber">Uber</option>
            <option value="didi">Didi</option>
            <option value="uber y didi">Uber y Didi</option>
            <option value="otros">Otros</option>
            </select><br />
            <textarea  rows="5" placeholder="Mensaje" name="mensaje" />
            <button>Enviar</button>
            {done && "Gracias solicitud enviada..."}
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visitanos;