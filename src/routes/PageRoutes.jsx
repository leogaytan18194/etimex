import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Video from '../components/video/Video'
import Works from '../components/works/Works'
import Intro from '../components/intro/Intro'
import Print from '../components/informacion/Print'
import Informacion from '../components/informacion/Informacion'
import Segmentos from '../components/segmentos/Segmentos'
import Servicios from '../components/servicios/Servicios'
import Impresiones from '../components/informacion/Impresiones'
import Clientes from '../components/clientes/Clientes'
import Contact from '../components/contact/Contact'
import Home from '../pages/home/Home'
import Vinos from '../pages/segmentos/vinos/Vinos'

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vinos-y-licores" element={<Vinos />} />

        </Routes>
    )
}

export default PageRoutes
