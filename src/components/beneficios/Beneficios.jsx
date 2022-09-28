import "./beneficios.scss";
import * as React from 'react';
import { Link } from "react-router-dom";



const Beneficios = () => {

  return ( 
    <div className="c-beneficios" id="beneficios">
      <h1 className="c-title-beneficios">BESTA ADAPTADO A TU VIDA </h1>
      <div className="c-bg"></div>
      <div className="c-wrapper-beneficios">
        <div className="c-izquierdo">
          <div className="c-info-item">
          <p>Logramos ser tu aliado más importante gracias a nuestros beneficios y la rápida respuesta para maximizar tus ganancias.</p>
          </div>
          <Link to="/preguntas-frecuentes" className="enlace">Preguntas frecuentes</Link >
        </div>
        <div className="c-derecho">
          <p className="c-desc">
            <img src="assets/CARRO-BENEFICIOS2.png" alt="Beneficios besta" className="c-imagen"/>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Beneficios;