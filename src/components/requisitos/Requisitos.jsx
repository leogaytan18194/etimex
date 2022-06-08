import React from 'react'
import './requisitos.scss';

function Requisitos() {


  return (
    <div className="requisitos" id="requisitos">
    <h1>¿Que necesitas para obtener un auto con BESTA?</h1>
    <div className="container">
          <div className="card featured">
            <div className="top">
              <img
                className="user"
                src="assets/safety.png"
                alt=""
              />
            </div>
            <div className="bottom">
              <h3>Seguro</h3>
            </div>
          </div>
          <div className="card featured">
            <div className="top">
              <img
                className="user"
                src="assets/identi.png"
                alt=""
              />
            </div>
            <div className="bottom">
              <h3>Identificación oficial vigente</h3>
            </div>
          </div>
          <div className="card featured">
            <div className="top">
              <img
                className="user"
                src="assets/licencia.png"
                alt=""
              />
            </div>
            <div className="bottom">
              <h3>Licencia de conducir vigente</h3>
            </div>
          </div>
          <div className="card featured">
            <div className="top">
              <img
                className="user"
                src="assets/plataformas-conductor.png"
                alt=""
              />
            </div>
            <div className="bottom">
              <h3>Viajes en plataformas de conductor privado</h3>
            </div>
          </div>
          <div className="card featured">
            <div className="top">
              <img
                className="user"
                src="assets/refrendo.png"
                alt=""
              />
            </div>
            <div className="bottom">
              <h3>Comprobante de domicilio</h3>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Requisitos