import React, { useState } from 'react'
import Video from '../../components/video_en/Video'
import VideoMobile from '../../components/video_en/VideoMobile'
import Works from '../../components/works_en/Works'
import Intro from '../../components/intro/Intro_en'
import Print from '../../components/informacion_en/Print'
import Informacion from '../../components/informacion_en/Informacion'
import Segmentos from '../../components/segmentos_en/Segmentos'
import Servicios from '../../components/servicios_en/Servicios'
import Impresiones from '../../components/informacion_en/Impresiones'
import Clientes from '../../components/clientes_en/Clientes_en'
import Contact from '../../components/contact_en/Contact'
import Topbar from '../../components/topbar/Topbar'
import Menu from '../../components/menu/Menu'
import "../../app.scss"
import Footer from '../../components/footer_en/Footer'
import Header from '../../components/secciones_en/Header'

const HomeEn = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    const [theme, setTheme] = useState("light")
    return (
        <div className="app">
            <Header
                logo={"/assets/Logo_etimex oficial.png"}
                theme={"theme"}
            />
            {/* <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}            
            <div className="sections" id='inicio'>
                <Video />
                <VideoMobile />
                <Works />
                <Informacion />
                <Segmentos />
                <Intro />
                <Print />
                <Servicios />
                <Impresiones />
                <Clientes />
                <Contact />
                <Footer theme={theme} heigth="auto" />
            </div>
        </div>
    )
}

export default HomeEn
