import Home from "./components/home/Home";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Palenca from "./components/palenca/Palenca";
import Contacto from "./components/contact/Contact";
import Formulario from "./components/formulario/Formulario";
import Preguntas from "./components/preguntas/Preguntas";
import Privacidad from "./components/privacidad/Privacidad";
import NotFoundPage from "./components/notfoundpage/NotFoundPage";
import Visitanos from "./components/visitanos/Visitanos";
import Uber from "./components/uber/Uber";
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import logoUber from './bestapart.png';
import whatsapp from './whatsapp.png'
import "./app.scss";
import Vacante from "./components/vacante/Vacante";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <BrowserRouter>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <img class="button_float" src={logoUber} alt="" />
        <a href="https://bit.ly/3pGO0pN"><img class="whatsapp-icon" src={whatsapp} alt="" /></a>
        <div className="sections">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/formulario/:id" element={<Formulario />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/visitanos" element={<Visitanos />} />
            <Route path="/alianza-uberbesta" element={<Uber />} />
            <Route path="/palenca" element={<Palenca />} />
            <Route path="/vacante" element={<Vacante />} />
            <Route path="/preguntas-frecuentes" element={<Preguntas />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
