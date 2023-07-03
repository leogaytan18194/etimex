import React, { useState, useEffect, useRef } from 'react';
import { PageStyles } from '../../styles/Styles'

import { useSpring, animated } from 'react-spring';
import Header from '../../components/secciones/Header';
import HeroContainer from '../../components/secciones/HeroContainer';
import Footer from '../../components/secciones/Footer';
import Container from '../../components/secciones/Container';



const cardItems = [
    {
        title: "Fluorescente",
        desc: "Crea un efecto de color que al activarse con luz UV, lucen más fuertes y brillantes, realzando formas y detalles.",
        bg: "/assets/tintas/cards/1.webp",
        delay: 200,
        bgsz: "90%",
    },
    {
        title: "Invisible",
        desc: "Añade elementos de seguridad que solo pueden visualizarse bajo luz UV, perfecta para aplicaciones en textos, códigos y formas invisibles.",
        bg: "/assets/tintas/cards/2.webp",
        delay: 400,
        bgsz: "100%",
    },
    {
        title: "Inkjet",
        desc: "Da relieve a detalles finos y precisos con aplicaciones nítidas, creando una experiencia de textura en tu etiqueta.",
        bg: "/assets/tintas/cards/3.webp",
        delay: 600,
        bgsz: "190%",
    },
    {
        title: "Plateada",
        desc: "Agrega valor y aspecto premium con tintas plateadas, ideales para detalles sutiles en textos.",
        bg: "/assets/tintas/cards/4.webp",
        delay: 800,
        bgsz: "100%",
    },
    {
        title: "Termocromática",
        desc: "Incluye la característica que permite cambiar reversiblemente los colores en tu etiqueta con la temperatura.",
        bg: "/assets/tintas/cards/5.webp",
        delay: 1000,
        bgsz: "150%",
    },
    {
        title: "Aromática",
        desc: "Brinda una experiencia mulsisensorial con microcápsulas perfumadas que al rascarse desprenden olor.",
        bg: "/assets/tintas/cards/6.webp",
        delay: 1200,
        bgsz: "190%",
    },
]

const containerMap = (data, index, theme) => {
    return (

        <Container
            title={data.title}
            desc={data.desc}
            bg={data.bg}
            delay={data.delay}
            bgsz={data.bgsz}
            theme={theme}
        />

    );
};

const tabItems = [
    {
        ico: "/assets/svg/dot",
        text: "Materiales",
        route: "/servicios/materiales",
        top: "0",
    },
    {
        ico: "/assets/svg/dot",
        text: "ACABADOS BÁSICOS & PREMIUM",
        route: "/servicios/acabados",
        top: "0",
    },
    {
        //Materiales   ·      ·    
        ico: "/assets/svg/dot",
        text: "ASESORÍA INTEGRAL",
        route: "/servicios/asesoria-integral",
        top: "0",
    },
]
const Tintas = () => {


    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    const fadeInAndSlideUp = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
        delay: 300,
        config: { duration: 1000 },
    });    
    const container = cardItems.map((elemento, index) => containerMap(elemento, index, "light"));


    return (
        <PageStyles theme={"light"}>
            <Header
                logo={"/assets/etimex-logo.png"}
                theme={"light"}
            />
            <HeroContainer
                backgroundImage={"/assets/tintas/cover-tintas.jpg"}
                text1={
                    <div className='tintas-bg-white'>
                        Tintas
                    </div>
                }
                text2={"Da detalles especiales para hacer la diferencia."}
                theme={"light"}
                theme2={"dark"}
            />
            <div className='cards-container'>
                {container}
            </div>
            <Footer theme={"light"} tabItems={tabItems} />

        </PageStyles>
    )
}

export default Tintas
