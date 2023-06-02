
import React from 'react'
import './vacante.scss';

import Requisitos from './Requisitos';
import Formulario from './Formulario';
import Footer from './Footer';
//@styled-icons/fluentui-system-regular/Attach
const Vacante = () => {
  return (
    <div className='vacante' id="vacante">
      <div className='vacante-top'>
        {/* <img src={top} alt='vacante' /> */}
      </div>
      <div className='vacante-container'>
          <Requisitos/>
          <Formulario />
          {/* <Footer /> */}
      </div>
    </div>
  )
}

export default Vacante