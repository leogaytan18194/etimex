import Topbar from "./components/topbar/Topbar";
import Portafolio from "./components/portafolio/Portafolio";
import Works from "./components/works/Works";
import Intro from "./components/intro/Intro";
import Autos from "./components/autos/Autos";
import Testimonials from "./components/testimonials/Testimonials";
import Menu from "./components/menu/Menu";
import Requisitos from "./components/requisitos/Requisitos";
import React from 'react';
import "./app.scss";
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState (false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <img class="button_float" src="https://besta.mx/wp-content/uploads/2022/05/BESTAPARTNERS-1500x430.png" alt="" />
      <div className="sections">
        <Intro/>
        <Portafolio/>
        <Autos/>
        <Works/>
        <Requisitos/>
        <Testimonials/>
      </div>
    </div>
  );
}

export default App;
