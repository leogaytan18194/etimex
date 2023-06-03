import React from 'react'
import logoUber from '../../bestapart.png';
import whatsapp from '../../whatsapp.png'
import { WhatsApp } from "@material-ui/icons";
import { useLocation } from 'react-router';
import { useEffect } from 'react';
const Iconos = () => {

  const location = useLocation();
  const pathname = location.pathname;
  // useEffect(() => {


  //   return () => {

  //   }
  // }, [location, pathname])

  return (
    <>
      {pathname !== '/vacante' &&
        <>
          <img class="button_float" src={logoUber} alt="" />
          <a href="https://bit.ly/3pGO0pN"><img class="whatsapp-icon" src={whatsapp} alt="" /></a>

        </>

      }
    </>
  )
}

export default Iconos
