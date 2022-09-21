import "./formulario.scss";
import * as React from 'react';
import {  useRef , useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { useParams } from 'react-router-dom'
import axios from "axios";
import calendar from "./img/yearCalendar.png";
import carrito from "./img/estandaricono.png";
import galardon from "./img/nuevoicono.png";
import tiempo from "./img/icotiempo.png";


const Formulario = (props) => {


    const { id } = useParams()
    const [ carro, setCarro ] = useState({})

  useEffect(() => {
    axios.get(`https://my-json-server.typicode.com/besta-mx/autosBesta/autos/${id}`).then((response) => {
      setCarro(response.data);
    });
  }, [id]);

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
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
        <h1 className="o-title"><strong>{carro.modelo}</strong></h1>
        <h2 className="o-title2">{carro.marca}</h2>
        <div className="detalles-form">
            <img src={carrito} alt="" className="imgMini2"/> <p className="texto-form">&nbsp; Estándar &nbsp;</p> 
            <img src={calendar} alt="" className="imgMini"/> <p className="texto-form"> &nbsp; 2022 &nbsp;</p>
            <img src={galardon} alt="" className="imgMini"/> <p className="texto-form"> &nbsp;Nuevo </p>
        </div>
          <div className="c-info-item-form">
            <img src={carro.imagen} alt="" className="c-imagen" align="left"/>
            <img src={tiempo} alt="" className="imgMini"/><p className="texto-meses"> &nbsp; <strong> 36 Meses </strong></p>
            <br/>
            <p>*Con opción de compra</p>
            <br />
            <p className="montos"><strong>  {carro.montoSemanal} /</strong> </p>
            <br />
            <p className="montos">Semanal</p>
            <br />
            <p className="montos"><strong> $17,000 / </strong></p>
            <p className="montos">Depósito en Garantía</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>Consulta términos y condiciones</p>
          </div>
        </div>
        <div className="c-right">
          <div className="formulario">
          <div className="c-desc-form">
            <h3>Se parte de BESTA,</h3> 
            <h2>¡Bienvenido!</h2>
          </div>
          <form ref={form} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Nombre Completo" name="nombre" required/>
            <input  type="text" placeholder="Celular con whatsapp" name="telefono" required/>
            <input  type="hidden" placeholder="interes" name="auto" value={carro.modelo} required/>
            <label htmlFor="">Selecciona una opción: </label> 
            <select name="apps" required>
            <option value="uber">Uber</option>
            <option value="didi">Didi</option>
            <option value="uber y didi">Uber y Didi</option>
            <option value="otros">Otros</option>
            </select><br /><br />
            <label htmlFor="">¿Cuántos viajes llevas realizados?: </label> 
            <select name="viajes" required>
            <option value="De 100 a 500">De 100 a 500</option>
            <option value="De 501 a 1,000"> De 501 a 1,000</option>
            <option value="Más de 1,000">Más de 1,000</option>
            </select><br /><br />
            <label htmlFor="">¿En que parte de México vives?: </label> 
            <select name="estado" required>
            <option value="Nuevo León">Nuevo León</option>
            <option value="Guadalajara"> Guadalajara</option>
            <option value="Otro">Otro</option>
            </select><br /><br />
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

export default Formulario;