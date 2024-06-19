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
import AvisoPrivacidadEN from '../pages/secciones_en/AvisoPrivacidad'
import AvisoPrivacidad from '../pages/secciones/AvisoPrivacidad'

localStorage.setItem("LANG", "es");
const PageRoutes = () => {
    
    const LANG = localStorage.getItem("LANG");
    const wppLANG = {
        "es":{
            chatMessage:"¡Hola! 🤝 ¿En qué podemos ayudarte? " 
        },
        "en":{
            chatMessage:"Hi! 🤝 ¿En qué podemos ayudarte? " 
        }
    }
    return (
        <>{/* 
            <FloatingWhatsApp
            phoneNumber="528131166651"
            accountName="Etimex"
            statusMessage="Normalmente responde en 5-10 minutos."
            chatMessage="¡Hola! 🤝 ¿En qué podemos ayudarte?"
            avatar="/assets/svg/logo.svg"
            buttonClassName="floating-whatsapp-button"
            /> */}
            <a href="https://wa.link/z6c4if" target="_blank"><img class="whatsapp-icon" src="assets/icono-whatsapp.webp" alt="" /></a>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vinos-y-licores" element={<Vinos />} />
                <Route path="/etiquetas-para-vinos-y-licores" element={<Vinos />} />
                <Route path="/alimentos-y-bebidas" element={<AlimentosBebidas />} />
                <Route path="/mangas-termoencogibles" element={<AlimentosBebidas />} />
                <Route path="/etiquetas-para-alimentos-y-bebidas" element={<AlimentosBebidas />} />
                <Route path="/etiquetas-resistentes-al-agua" element={<AlimentosBebidas />} />
                <Route path="/salud-y-belleza" element={<SaludBelleza />} />
                <Route path="/industrial" element={<Industrial />} />
                <Route path="/etiquetas-industriales" element={<Industrial />} />
                <Route path="/admision" element={<Boletaje />} />
                <Route path="/retail" element={<Retail />} />
                <Route path="/sustentabilidad" element={<Sustentabilidad />} />
                <Route path="/servicios/tintas" element={<Tintas />} />
                <Route path="/servicios/materiales" element={<MateriaPrima />} />
                <Route path="/materiales/" element={<MateriaPrima />} />
                <Route path="/servicios/asesoria-integral" element={<AsesoriaIntegral />} />
                <Route path="/servicios/acabados" element={<Acabados />} />
                <Route path="/en" element={<HomeEn />} />
                <Route path="/en/wines-and-spirits/" element={<VinosEn />} />
                <Route path="/en/food-and-drinks/" element={<AlimentosBebidasEn />} />
                <Route path="/en/health-and-beauty/" element={<SaludBellezaEn />} />
                <Route path="/en/industrial/" element={<IndustrialEn />} />
                <Route path="/en/admission/" element={<BoletajeEn />} />
                <Route path="/en/retail/" element={<RetailEn />} />
                <Route path="/en/sustentabilidad/" element={<SustentabilidadEn />} />
                <Route path="/en/services/tintas/" element={<TintasEn />} />
                <Route path="/en/services/materials/" element={<MateriaPrimaEn />} />
                <Route path="/en/services/integral-advises/" element={<AsesoriaIntegralEn />} />
                <Route path="/en/services/embellishments/" element={<AcabadosEn />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/aviso/" element={<AvisoPrivacidad />} />
                <Route path="/aviso/en" element={<AvisoPrivacidadEN />} />
            </Routes>
        </>
    )
}

export default PageRoutes
