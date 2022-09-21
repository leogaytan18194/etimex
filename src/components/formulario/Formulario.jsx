import "./formulario.scss";
import * as React from 'react';
import {  useRef , useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { useParams } from 'react-router-dom'
import axios from "axios";


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
    <div className="c" id="contacto">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
        <h1 className="o-title"><strong>{carro.modelo}</strong></h1>
        <h2 className="o-title2">{carro.marca}</h2>
        <div className="detalles-form">
            <img src={carro.carrito} alt="" className="imgMiniAuto"/> <p className="texto-form">&nbsp; Estándar &nbsp;</p> 
            <img src={carro.calendario} alt="" className="imgMini"/> <p className="texto-form"> &nbsp; 2022 &nbsp;</p>
            <img src={carro.galardon} alt="" className="imgMini"/> <p className="texto-form"> &nbsp;Nuevo </p>
        </div>
          <div className="c-info-item">
            <img src={carro.imagen} alt="" className="c-imagen"/>
            <p>36 Meses</p>
          </div>
        </div>
        <div className="c-right">
          <div className="formulario">
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
    </div>
  );
};

export default Formulario;