import React from 'react'
import './requisitos.scss';

function Requisitos() {

  return (
        <div className="requisitos" id="requisitos">
        <h1>Únete a nuestra comunidad BESTA</h1>
        <div className="container">
            <div className="card featured">
                <div className="top">
                <img
                    className="requisitosImagen"
                    src="assets/requisitos.png"
                    alt=""
                />
                <h3>REQUISITOS</h3>
                </div>
                <div className="bottom">
                
                <p>INE, Comprobante de domicilio, RFC (Constancia de situación fiscal), CURP, Licencia tipo C, Captura de pantalla de App 400 viajes, INE de un aval (puede ser amigo, familiar o conocido).</p>
                </div>
            </div>
            <div className="card featured">
                <div className="top">
                <img
                    className="requisitosImagen"
                    src="assets/escoger-unidadbesta.png"
                    alt=""
                />
                <h3>SELECCIONA TU AUTO</h3>
                
                </div>
                <div className="bottom">
                
                <p>Selecciona el auto de tus sueños y completa el formulario o envíalo mediante WhastApp.</p>
                </div>
            </div>
            <div className="card featured">
                <div className="top">
                <img
                    className="requisitosImagen"
                    src="assets/cita-solicitud-info.png"
                    alt=""
                />
                <h3>RECIBE TU SOLICITUD</h3>  
                </div>
                <div className="bottom">
                
                <p>En el transcurso del día, un asesor se contactará contigo para agendar una entrevista y/o dar respuesta a tu solicitud.</p>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Requisitos