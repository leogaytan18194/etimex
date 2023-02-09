import React from 'react'
import './requisitos.scss';

function Requisitos() {

  return (
        <div className="requisitos" id="comunidad">
        <h1>Únete a nuestra comunidad BESTA</h1>
        <div className="container">
            <div className="card featured">
                <div className="top">
                <img
                    className="requisitosImagen"
                    src="assets/requisitos.png"
                    alt=""
                />
                <h3>ALGUNOS REQUISITOS</h3>
                </div>
                <div className="bottom">
                <p className="textoRequisitos">INE, Comprobante de domicilio, Constancia de situación fiscal actualizada, CURP, Licencia tipo C, Captura de Pantalla de App 1020 viajes en 3 meses,Capturas de las ganancias de los últimos dos meses en Uber y/o DiDi, INE de un aval, puede ser amigo, familiar o conocido, siempre y cuando no viva en el mismo domicilio, Depósito de garantía y gastos notariales (el monto lo dictarán en la entrevista y si esta al corriente sin deudas, éste se puede usar al final del contrato para poder liquidar el vehículo).</p>
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
                
                <p>Selecciona el auto de tus sueños y completa el formulario.</p>
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