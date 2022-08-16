import "./beneficios.scss";
import * as React from 'react';



const Beneficios = () => {

  return (
    <div className="c">
      <h1 className="c-title">BESTA ADAPTADO A TU VIDA</h1>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-izquierdo">
          <div className="c-info-item">
          <p>Logramos ser tu aliado más importante gracias a nuestros beneficios y la rápida respuesta para maximizar tus ganancias.</p>
          </div>
          <button>Preguntas frecuentes</button>
        </div>
        <div className="c-derecho">
          <p className="c-desc">
            <img src="assets/CARRO-BENEFICIOS2.png" alt="Beneficios" className="c-imagen"/>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Beneficios;