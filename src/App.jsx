import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Segmentos from "./components/segmentos/Segmentos"
import Informacion from "./components/informacion/Informacion"
import Impresiones from "./components/informacion/Impresiones"
import Works from "./components/works/Works"
import Clientes from "./components/clientes/Clientes"
import Contact from "./components/contact/Contact"
import Servicios from "./components/servicios/Servicios"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
        <Works/>
       <Intro/>
       <Informacion/>
       <Segmentos/>
       <Servicios/>
       <Impresiones/>
       <Clientes/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
