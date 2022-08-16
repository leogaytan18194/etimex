import Topbar from "./components/topbar/Topbar";
import Beneficios from "./components/beneficios/Beneficios";
import Intro from "./components/intro/Intro";
import Autos from "./components/autos/Autos";
import Contact from "./components/contact/Contact";
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
        <img class="button_float" src="assets/bestapart.png" alt="" />
      <div className="sections">
        <Intro/>
        <Autos/>
        <Requisitos/>
        <Beneficios/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
