import React, { useState, useEffect, useRef } from 'react';
import { PageStyles } from '../../styles/Styles'

import { useSpring, animated } from 'react-spring';
import Header from '../../components/secciones/Header';
import HeroContainer from '../../components/secciones/HeroContainer';
import Footer from '../../components/secciones/Footer';
import Container2 from '../../components/secciones/Container2';


const containerData = [
    {
        inverseOrder: true,
        title: "Auto adheribles",
        subtitle: "Etiqueta con pegamento integrado",
        subtitle2: " para auto adherirse al tocar la superficie.",
        listTitle: "Disponible en",
        listItems: [
            { id: 1, name: 'Papel texturizado', },
            { id: 2, name: 'Papel Metalizado', },
            { id: 3, name: 'Papel Hi-gloss', },
            { id: 4, name: 'Papel Semi coated', },
            { id: 5, name: 'Papel mate', },
        ],
        listTitle2: "En película",
        listItems2: [
            { id: 1, name: 'BOPP transparente', },
            { id: 2, name: 'BOPP blanco', },
            { id: 3, name: 'BOPP metalizado', },
            { id: 4, name: 'Poliéster blanco', },
            { id: 5, name: 'Poliéster metalizado', },
            { id: 6, name: 'Vinil blanco', },
        ],
        backgroundImage: "/assets/materia-prima/cards/autoaderible.png",
    },
    {
        inverseOrder: false,
        title: "Envolventes",
        subtitle: "Etiqueta con pegamento en los extremos para unir  ",
        subtitle2: "uno con el otro al rodear la circunferencia del envase.",
        listTitle: "Disponible en",
        listItems: [
            { id: 1, name: 'Papel texturizado', },
            { id: 2, name: 'Papel Metalizado', },
            { id: 3, name: 'Papel Hi-gloss', },
            { id: 4, name: 'Papel Semi coated', },
            { id: 5, name: 'Papel mate', },
        ],
        listTitle2: "En película",
        listItems2: [
            { id: 1, name: 'BOPP transparente', },
            { id: 2, name: 'BOPP blanco', },
            { id: 3, name: 'BOPP metalizado', },
            { id: 4, name: 'Poliéster blanco', },
            { id: 5, name: 'Poliéster metalizado', },
            { id: 6, name: 'Vinil blanco', },
        ],
        backgroundImage: "/assets/materia-prima/cards/envolvente.png",
    },
    {
        inverseOrder: true,
        title: "Manga Termoencogible",
        subtitle: "Funda retráctil de material sintético ",
        subtitle2: "para vestir el 100% del envase.",
        icon1: "none.svg",
        icon1Text: false,
        icon2: false,
        icon2Text: false,
        icon3: false,
        icon3Text: false,
        listTitle: "Disponible en",
        listItems: [
            { id: 1, name: 'No disponible', description: 'Descripción del elemento 1' },
        ],
        listTitle2: "En película",
        listItems2: [
            { id: 1, name: 'BOPP transparente', },
            { id: 2, name: 'BOPP blanco', },
            { id: 3, name: 'Poliéster metalizado', },
            { id: 4, name: 'Poliéster blanco', },
            { id: 5, name: 'Vinil blanco', },
        ],
        backgroundImage: "/assets/materia-prima/cards/manga.png",
    },
    {
        inverseOrder: false,
        title: "Señalización y Boletaje",
        subtitle: "Disponible en",
        subtitle2: "-Cartulina",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "termico.svg",
        icon2Text: "Térmico",
        listTitle: "",
        listItems: [
            { id: 1, name: 'Thermal TC 4.0', description: 'Descripción del elemento 1' },
            { id: 2, name: 'Thermal TC 7.0', description: 'Descripción del elemento 1' },
            { id: 3, name: 'NTC Thermal 4.0', description: 'Descripción del elemento 1' },
            { id: 4, name: 'NTC Thermal 7.0', description: 'Descripción del elemento 1' },
        ],
        listTitle2: "",
        listItems2: [
        ],
        backgroundImage: "/assets/materia-prima/cards/letreros.png",
    },

]



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
        bg: "/assets/tintas/cards/letreros.png",
        delay: 1200,
        bgsz: "190%",
    },
]


const containerMap = (data, index, theme) => {
    return (
        <>
            <Container2
                inverseOrder={data.inverseOrder}
                title={data.title}
                subtitle={data.subtitle} 
                subtitle2={data.subtitle2}  
                listTitle={data.listTitle}
                listItems={data.listItems}
                listTitle2={data.listTitle2}
                listItems2={data.listItems2}
                backgroundImage={data.backgroundImage}
                theme={theme}
            />
        </>
    );
};


const MateriaPrima = () => {


    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    const fadeInAndSlideUp = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
        delay: 300,
        config: { duration: 1000 },
    });    
    const container = containerData.map((elemento, index) => containerMap(elemento, index, "light"));
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

    return (
        <PageStyles theme={"light"}>
            <Header
                logo={"/assets/etimex_negro.svg"}
                theme={"light"}
            />
            <HeroContainer
                backgroundImage={"/assets/materia-prima/herov2.png"}
                text1={<>
                    <span className='strokeTex2'>Materiales</span>
                </>}
                text2={false}
                text3={"Innovación y alta calidad para cubrir a la perfección tus necesidades."}
                theme={"light"}
                theme2={"dark"}
                h1Only={true}
            />

            {container}

            <Footer theme={"light"} tabItems={tabItems} />

        </PageStyles>
    )
}

export default MateriaPrima
