import "./intro.scss";
import React from 'react';

export default function Intro() {

  return (
    <div className='intro' id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/vdrive2.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Obten ya tu vehiculo nuevo con </h2>
            <h1>BESTA</h1>
            <h3>Tu mejor  <span >Aliado</span></h3>
          </div>
          <a href="#portafolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
    </div>
  )
}
