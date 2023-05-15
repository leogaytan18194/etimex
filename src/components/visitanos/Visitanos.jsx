import "./visitanos.scss";
import * as React from 'react';
import {  useRef , useState } from "react";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import atencion from "./img/atncliente.png";
import gnv from "./img/gnvtaller.png";
import siniestros from "./img/siniestro.png";
import taller from "./img/taller.png";
import ubicacion from "./img/ubicacion.png";
import emergencias from "./img/emergencias.png";
import sucursal from "./img/form-pc.png";
import ventas from "./img/venta.png";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    display: 'flex',
    shadows: ["none"]
  }));

  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    shadows: ["none"]
  }));



const Visitanos = (props) => {


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

    
    <div className="c-visit" id="contacto">
        <div className="c-wrapper-visitanos">
        <Box sx={{ flexGrow: 1,}}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={5}>
          <Item style={{boxShadow: "none"}}>
            <div className="c-left-visit">
        <h1 className="o-title-visit"><strong>Visítanos en nuestras sedes</strong></h1>
        <h2 className="o-title2-visit">Ven a ver un auto o a realizar una inspección</h2>
        <div className="detalles-form-visit">
            <img src={ubicacion} alt="" className="imgMini"/> <p className="texto-form">&nbsp; Sucursal en Nuevo León &nbsp;</p> <br />
            <p>Av. Churubusco #3900, Industrial Benito Juarez, C.P. 64517, Monterrey, Nuevo León, México</p><br />
            <img src={ubicacion} alt="" className="imgMini"/> <p className="texto-form">&nbsp; Sucursal en Jalisco &nbsp;</p> <br />
            <p>Calle 14, 2797, Col. Colón Industrial, C.P. 44940, Guadalajara, Jalisco </p>
        </div>
        </div>
        </Item>
        </Grid>
        <Grid item xs={3}>
            <Item style={{boxShadow: "none"}}>
            <img src={sucursal} alt="" className="imgCenter"/>
            </Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{boxShadow: "none"}}>
        <div className="c-right-visit">
          <div className="formulario-visit">
          <div className="c-desc-visit">
            <h2>¡Déjanos tus datos!</h2> 
            <h3>Nosotros te contactamos</h3>
          </div>
          <form ref={form} onSubmit={handleSubmit} className="form-visit">
            <input  type="text" placeholder="Nombre Completo" name="nombre" required/>
            <input  type="text" placeholder="Celular con whatsapp" name="telefono" required/>
            <input  className="input-contact" type="hidden" placeholder="pagina" name="pagina" value="contacto" required/>
            <label htmlFor="">Selecciona una opción: </label> 
            <select name="apps" required>
            <option value="uber">Uber</option>
            <option value="didi">Didi</option>
            <option value="uber y didi">Uber y Didi</option>
            <option value="otros">Otros</option>
            </select><br />
            <label htmlFor="">¿Cuántos viajes llevas realizados?: </label> 
            <select name="viajes" required>
            <option value="Más de 400">Más de 400</option>
            <option value="Menos de 400"> Menos de 400</option>
            </select><br />
            <label htmlFor="">¿En que parte de México vives?: </label> 
            <select name="estado" required>
            <option value="Nuevo León">Nuevo León</option>
            <option value="Guadalajara"> Guadalajara</option>
            <option value="Otro">Otro</option>
            </select><br />
            <textarea  rows="5" placeholder="Mensaje" name="mensaje" />
            <button>Enviar</button>
            {done && "Gracias solicitud enviada..."}
          </form>
          </div>
        </div></Item>
        </Grid>
        <Grid item xs={12}>
          <Item style={{boxShadow: "none"}}>
            <h1>Horarios</h1>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{boxShadow: "none"}}><img src={ventas} alt="" className="imgServicios" align="left"/><div className="cuadro-texto"><p className="texto-servicios"><strong> Ventas</strong></p>
                <p>L-V de 8:00 a.m a 5:00 p.m.</p>
                <p>81 2104 3804</p></div></Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{boxShadow: "none"}}><img src={taller} alt="" className="imgServicios" align="left"/><div className="cuadro-texto"><p className="texto-servicios"><strong> Taller Besta</strong></p>
                <p>L-V de 8:00 a.m a 5:00 p.m.</p>
                <p>Sabados  9:00 am.m a 01:00 p.m.</p></div></Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{boxShadow: "none"}}><img src={gnv} alt="" className="imgServicios2" align="left"/><div className="cuadro-texto"><p className="texto-servicios"><strong> Taller GNV</strong></p>
                <p>L-V de 9:00 a.m a 6:00 p.m.</p>
                <p>81 2074 6295</p></div></Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{boxShadow: "none"}}><img src={siniestros} alt="" className="imgServicios" align="left"/><div className="cuadro-texto"><p className="texto-servicios"><strong> Siniestros</strong></p>
                <p>Toda la semana 24/7</p>
                <p>81 2108 5695</p></div></Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{boxShadow: "none"}}><img src={emergencias} alt="" className="imgServicios" align="left"/><div className="cuadro-texto"><p className="texto-servicios"><strong> Emergencias</strong></p>
                <p>Toda la semana 24/7</p>
                <p>81 2168 5695</p></div></Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{boxShadow: "none"}}><img src={atencion} alt="" className="imgServicios" align="left"/><div className="cuadro-texto"><p className="texto-servicios"><strong> Atención al Cliente</strong></p>
                <p>Lunes a Viernes de 8:00 a.m a 5:00 p.m.</p>
                <p>Sabados  9:00 am.m a 01:00 p.m.</p>
                <p>81 3471 5233</p></div></Item>
        </Grid>
        <Grid item xs={2}>
          <Item2 style={{boxShadow: "none"}}></Item2>
        </Grid>
        <Grid item xs={2.5} >
          <Item2 style={{boxShadow: "none"}}>
            <h3>Enlaces</h3>
            <div className="cuadro-texto">
                <p><Link to="/#beneficios">Beneficios</Link></p>
                <p><Link to="/#requisitos">Requisitos</Link></p>
                <p><Link to="/visitanos">Contacto</Link></p>
                </div></Item2>
        </Grid>
        <Grid item xs={2.5}>
          <Item2 style={{boxShadow: "none"}}>
            <h3>Social</h3>
            <div className="cuadro-texto">
                <p><Link to="/alianza-uberbesta">Alianzas comerciales</Link></p>
                <p><a href="https://www.facebook.com/bestamx">Facebook</a></p>
                <p><a href="https://www.instagram.com/bestamx/">Instagram</a></p></div></Item2>
        </Grid>
        <Grid item xs={2.5}>
          <Item2 style={{boxShadow: "none"}}>
            <h3>Legal</h3>
            <div className="cuadro-texto">
                <p><Link to="/preguntas-frecuentes">Preguntas frecuentes</Link></p>
                <p><Link to="/privacidad">Aviso de privacidad</Link></p></div></Item2>
        </Grid>
        <Grid item xs={2}>
          <Item2 style={{boxShadow: "none"}}></Item2>
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

export default Visitanos;