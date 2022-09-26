
import Beneficios from "../beneficios/Beneficios";
import Intro from "../intro/Intro";
import Autos from "../autos/Autos";
import Autos2 from "../autos/Autos2";
import Contact from "../contact/Contact";
import Requisitos from "../requisitos/Requisitos";
import React from 'react';
import "./home.scss";



function Home() {
  
  return (
    <div className="home">
      <div className="sections">
        <Intro/>
        <Autos/>
        <Autos2/>
        <Requisitos/>
        <Beneficios/>
        <Contact/>
      </div>
    </div>
  );
}

export default Home;
