
import Beneficios from "../beneficios/Beneficios";
import Intro from "../intro/Intro";
import Autos from "../autos/Autos";
import Autos2 from "../autos/Autos2";
import Contact from "../contact/Contact";
import Requisitos from "../requisitos/Requisitos";
import React from 'react';



function Home() {
  
  return (
        <>
        <Intro/>
        <Autos/>
        <Autos2/>
        <Requisitos/>
        <Beneficios/>
        <Contact/>
        </>
  );
}

export default Home;
