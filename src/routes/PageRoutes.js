import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Home from '../pages/home/Home'
import Vinos from '../pages/segmentos/Vinos'
import SaludBelleza from '../pages/segmentos/SaludBelleza'
import AlimentosBebidas from '../pages/segmentos/AlimentosBebidas'
import Tintas from '../pages/secciones/Tintas'
import Industrial from '../pages/segmentos/Industrial'
import Retail from '../pages/segmentos/Retail'
import Boletaje from '../pages/segmentos/Boletaje'
import MateriaPrima from '../pages/secciones/MateriaPrima'
import AsesoriaIntegral from '../pages/secciones/AsesoriaIntegral'
import { NotFound } from '../pages/NotFound'
import Sustentabilidad from '../pages/segmentos/Sustentabilidad'
import Acabados from '../pages/secciones/Acabados';
import VinosEn from '../pages/segmentos_en/Vinos';
import SaludBellezaEn from '../pages/segmentos_en/SaludBelleza'
import AlimentosBebidasEn from '../pages/segmentos_en/AlimentosBebidas'
import TintasEn from '../pages/secciones_en/Tintas'
import IndustrialEn from '../pages/segmentos_en/Industrial'
import RetailEn from '../pages/segmentos_en/Retail'
import BoletajeEn from '../pages/segmentos_en/Boletaje'
import MateriaPrimaEn from '../pages/secciones_en/MateriaPrima'
import AsesoriaIntegralEn from '../pages/secciones_en/AsesoriaIntegral'
import SustentabilidadEn from '../pages/segmentos_en/Sustentabilidad'
import AcabadosEn from '../pages/secciones_en/Acabados'
import HomeEn from '../pages/home/Home_en'

localStorage.setItem("LANG", "es");
const PageRoutes = () => {
    
    const LANG = localStorage.getItem("LANG");
    const wppLANG = {
        "es":{
            chatMessage:"¡Hola! 🤝 ¿En qué podemos ayudarte? " 
        },
        "en":{
            chatMessage:"¡Hola! 🤝 ¿En qué podemos ayudarte? " 
        }
    }
    return (
        <>
            <FloatingWhatsApp
            phoneNumber="528131166651"
            accountName="Etimex"
            statusMessage="Normalmente responde en 5-10 minutos."
            chatMessage={<>{wppLANG[LANG]} </>}
            avatar="/assets/svg/logo.svg"
            />
            {/* <a href="https://wa.link/5754nh"><img class="whatsapp-icon" src="assets/whatsapp.png" alt="" /></a> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vinos-y-licores" element={<Vinos />} />
                <Route path="/alimentos-y-bebidas" element={<AlimentosBebidas />} />
                <Route path="/salud-y-belleza" element={<SaludBelleza />} />
                <Route path="/industrial" element={<Industrial />} />
                <Route path="/admision" element={<Boletaje />} />
                <Route path="/retail" element={<Retail />} />
                <Route path="/sustentabilidad" element={<Sustentabilidad />} />
                <Route path="/servicios/tintas" element={<Tintas />} />
                <Route path="/servicios/materiales" element={<MateriaPrima />} />
                <Route path="/servicios/asesoria-integral" element={<AsesoriaIntegral />} />
                <Route path="/servicios/acabados" element={<Acabados />} />
                <Route path="/en" element={<HomeEn />} />
                <Route path="/vinos-y-licores/en" element={<VinosEn />} />
                <Route path="/alimentos-y-bebidas/en" element={<AlimentosBebidasEn />} />
                <Route path="/salud-y-belleza/en" element={<SaludBellezaEn />} />
                <Route path="/industrial/en" element={<IndustrialEn />} />
                <Route path="/admision/en" element={<BoletajeEn />} />
                <Route path="/retail/en" element={<RetailEn />} />
                <Route path="/sustentabilidad/en" element={<SustentabilidadEn />} />
                <Route path="/servicios/tintas/en" element={<TintasEn />} />
                <Route path="/servicios/materiales/en" element={<MateriaPrimaEn />} />
                <Route path="/servicios/asesoria-integral/en" element={<AsesoriaIntegralEn />} />
                <Route path="/servicios/acabados/en" element={<AcabadosEn />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default PageRoutes
