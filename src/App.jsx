import Home from "./components/home/Home";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Contacto from "./components/contact/Contact";
import Formulario from "./components/formulario/Formulario";
import Preguntas from "./components/preguntas/Preguntas";
import Privacidad from "./components/privacidad/Privacidad";
import NotFoundPage from "./components/notfoundpage/NotFoundPage";
import Visitanos from "./components/visitanos/Visitanos";
import React from 'react';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import { useState } from "react";
import logoUber from './bestapart.png';
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState (false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <img class="button_float" src={logoUber} alt="" />
      <div className="sections">
        <BrowserRouter>
          <Routes>
           <Route path="/" element={ <Home />} />
           <Route path="/contacto" element={ <Contacto />} />
           <Route path="/formulario/:id" element={ <Formulario />} />
           <Route path="/privacidad" element={ <Privacidad />} />
           <Route path="/visitanos" element={ <Visitanos />} />
           <Route path="/preguntas-frecuentes" element={ <Preguntas />} />
           <Route path="*" element={ <NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
