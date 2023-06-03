import "./beneficios.scss";
import * as React from 'react';
import { Link } from "react-router-dom";
import imr from "../../assets/beneficios/propuesta2.png";
import BeneficioItem from "./BeneficioItem";


const datos = [
  {
    title: "Taller de mecánica",
    desc: "Servicio de mantenimiento únicamente para comunidad BESTA"
  },
  {
    title: "Sin buró de crédito",
    desc: "No revisamos buró de crédito."
  },
  {
    title: "Seguro",
    desc: "Seguro de conductor privado con deducible más bajo en el mercado (3%)."
  },
  {
    title: "Equipo GNV",
    desc: "Permite ahorrar hasta un 50% en combustible."
  },
  {
    title: "Opción de compra",
    desc: "Podrás comprar el automóvil al terminar tu contrato. Y muchos más..."
  },
];


const Beneficios = () => {

  return (
    <div className="c-beneficios" id="beneficios">
      {/* <div className="c-bg"></div> */}
      <div className="c-wrapper-beneficios">
        <div className="c-wrapper-beneficios-container">
          <div className="c-izquierdo">
            <div className="c-izquierdo-container">
              <img src={imr} alt="Beneficios besta" className="c-imagen" />
            </div>
          </div>
          <div className="c-derecho">
            <div className="c-derecho-title">
              <h1 className="c-title-beneficios">BESTA es tu mejor opción.</h1>
              <p>Logramos ser tu aliado más importante gracias a nuestros beneficios y la rápida respuesta para maximizar tus ganancias.</p>
            </div>
            <div className="c-derecho-container">
              {
                datos.map((item, index) => (
                  <BeneficioItem key={index} title={item.title} desc={item.desc} />
                ))
              }
              
            </div>
          </div>
        </div>
      </div>
      {/* <div className="c-wrapper-beneficios">
        <div className="c-izquierdo">
          <div className="c-info-item">
          <p>Logramos ser tu aliado más importante gracias a nuestros beneficios y la rápida respuesta para maximizar tus ganancias.</p>
          </div>
          <Link to="/preguntas-frecuentes" className="enlace">Preguntas frecuentes</Link >
        </div>
        <div className="c-derecho">
          <p className="c-desc">
            <img src="assets/BENEFICIOSCARRO-2023.png" alt="Beneficios besta" className="c-imagen"/>
          </p>
          
        </div>
      </div> */}
    </div>
  );
};

export default Beneficios;