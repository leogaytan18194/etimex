import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Vinos from '../pages/segmentos/Vinos'
import SaludBelleza from '../pages/segmentos/SaludBelleza'
import AlimentosBebidas from '../pages/segmentos/AlimentosBebidas'
import Tintas from '../pages/secciones/Tintas'

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vinos-y-licores" element={<Vinos />} />
            <Route path="/alimentos-y-bebidas" element={<AlimentosBebidas />} />
            <Route path="/servicios/tintas" element={<Tintas />} />
            <Route path="/salud-y-belleza" element={<SaludBelleza />} />

        </Routes>
    )
}

export default PageRoutes
