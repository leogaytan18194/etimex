import "./uber.scss";
import * as React from 'react';
import {  useRef , useState } from "react";
import emailjs from '@emailjs/browser';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import gnv from './img/gnvtaller.png';
import money from './img/money.png';
import cliente from './img/cliente.png';
import Slider from "react-slick";
import slide1 from "./img/slide1.png";
import slide2 from "./img/slide2.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    shadows: ["none"]
  }));

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };




const Uber = (props) => {


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

    
    <div className="c-uber" id="uber">
        <div className="c-wrapper-uber">
        <Box sx={{ flexGrow: 1}}>
        
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <Item style={{boxShadow: "none"}}>
            <h1 className="o-title-uber"><strong>Somos tu mejor aliado</strong></h1>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item style={{boxShadow: "none"}}>
          <Slider {...settings}>
            <div>
              <img src={slide1} alt="" className="imgSlide"/>
            </div>
            <div>
            <img src={slide2} alt="" className="imgSlide"/>
            </div>
          </Slider>
        </Item>
        </Grid>
        <Grid item xs={12}>
          <Item style={{boxShadow: "none"}}>
            <h3>¿CÓMO FUNCIONA?</h3>
        </Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{boxShadow: "none"}}><img src={cliente} alt="" className="imgServiciosUber"/><div className="cuadro-texto"><p className="texto-servicios"><strong> Ventas</strong></p>
                <p>Eres de la comunidad BESTA y utilizas Uber</p>
                <p>Al ser parte de nuestra comunidad BESTA con una antigüedad de 3 meses y completar 85 viajes durante la semana (lunes a domingo) es decir entre 12 a 13 viajes por día utilizando la aplicación Uber, podrán generar ganancias adicionales de $200 MXN cada semana.</p></div></Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{boxShadow: "none"}}><img src={gnv} alt="" className="imgServiciosUber"/><div className="cuadro-texto"><p className="texto-servicios"><strong> Taller Besta</strong></p>
                <p>Aquieres unidad nueva en BESTA y completa viajes en la app de Uber</p>
                <p>Al tener una unidad nueva BESTA y utilizar UBER, podrás obtener un descuento de $10,000 mxn en tu depósito de garantía, si completa 85 viajes cada semana por lo menos 12 semanas consecutivas. En total serían 1,020 viajes en 3 meses.</p></div></Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{boxShadow: "none"}}>
              <img src={money} alt="" className="imgServiciosUber"/><div className="cuadro-texto"><p className="texto-servicios"><strong> Taller GNV</strong></p>
                <p>¿Cómo recibiré el incentivo?</p>
                <p>Todos los ingresos extras que generes se te otorgarán mediante monedero electrónico (Tarjeta Si Vale) y el descuento en depósito de “unidad nueva” se realizará una vez aprobada tu solicitud. Para mayor información sobre el monedero electrónico contáctanos o pregunta a tu asesor.</p></div></Item>
        </Grid>
        <Grid item xs={12}>
          <Item style={{boxShadow: "none"}}>
            <h3>BENEFICIOS</h3>
        </Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{boxShadow: "none"}}>
            <img src="assets/CARRO-BENEFICIOS2.png" alt="Beneficios besta" className="c-imagen-uber"/>
        </Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{boxShadow: "none"}}>
        <div className="c-right-uber">
          <div className="formulario-uber">
          <div className="c-desc-uber">
            <h2>¡Déjanos tus datos!</h2> 
            <h3>Nosotros te contactamos</h3>
          </div>
          <form ref={form} onSubmit={handleSubmit} className="form-uber">
            <input  type="text" placeholder="Nombre Completo" name="nombre" required/>
            <input  type="text" placeholder="Celular con whatsapp" name="telefono" required/>
            <input  type="hidden" placeholder="pagina" name="pagina" value="uber" required/>
            <label htmlFor="">Selecciona una opción: </label> 
            <select name="apps" className="select-css" required>
            <option value="uber">Uber</option>
            <option value="didi">Didi</option>
            <option value="uber y didi">Uber y Didi</option>
            <option value="otros">Otros</option>
            </select><br />
            <label htmlFor="">¿Cuántos viajes llevas realizados?: </label> 
            <select name="viajes" className="select-css" required>
            <option value="Más de 400">Más de 400</option>
            <option value="Menos de 400"> Menos de 400</option>
            </select><br />
            <label htmlFor="">¿En que parte de México vives?: </label> 
            <select name="estado" className="select-css" required>
            <option value="Nuevo León">Nuevo León</option>
            <option value="Guadalajara"> Guadalajara</option>
            <option value="Otro">Otro</option>
            </select>
            <textarea  rows="5" placeholder="Mensaje" name="mensaje" />
            <button>Enviar</button>
            {done && "Gracias solicitud enviada..."}
          </form>
          </div>
        </div></Item>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Item></Item>
      </Grid>
    </Box>
      </div>
    </div>
    
  );
};

export default Uber;