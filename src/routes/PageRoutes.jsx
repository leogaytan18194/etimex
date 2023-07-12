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
import Acabados from '../pages/secciones/Acabados'



const PageRoutes = () => {
    return (
        <>
            <FloatingWhatsApp
            phoneNumber="+5218131166651"
            accountName="Etimex"
            statusMessage="Normalmente responde en 1 hora."
            chatMessage={<>¡Hola! 🤝 ¿En qué podemos ayudarte? </>}
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
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default PageRoutes
