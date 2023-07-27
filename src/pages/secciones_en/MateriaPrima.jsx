import React, { useState, useEffect, useRef } from 'react';
import { PageStyles } from '../../styles/Styles'

import { useSpring, animated } from 'react-spring';
import Header from '../../components/secciones_en/Header';
import HeroContainer from '../../components/secciones_en/HeroContainer';
import Footer from '../../components/secciones_en/Footer';
import Container2 from '../../components/secciones_en/Container2';


const containerData = [
    {
        inverseOrder: true,
        title: "PRESSURE SENSITIVE LABELS",
        subtitle: "We offer limitless design possibilities that far ",
        subtitle2: " exceed those of paper wet glue labels.",
        listTitle: "Available on",
        listItems: [
            { id: 1, name: 'Textured paper', },
            { id: 2, name: 'Metalized paper', },
            { id: 3, name: 'Hi-gloss paper', },
            { id: 4, name: 'Semi coated paper', },
            { id: 5, name: 'Matte paper', },
        ],
        listTitle2: "On film",
        listItems2: [
            { id: 1, name: 'Transparent BOPP', },
            { id: 2, name: 'White BOPP', },
            { id: 3, name: 'Metalized BOPP', },
            { id: 4, name: 'Metalized polyester', },
            { id: 5, name: 'White polyester', },
            { id: 6, name: 'White vinyl', },
        ],
        backgroundImage: "/assets/materia-prima/cards/autoaderible.png",
    },
    {
        inverseOrder: false,
        title: "WRAPAROUNDS",
        subtitle: "Flexible labels that are applied in a way that completely encircles the perimeter of a container.",
        subtitle2: "Our process ensures color and quality consistency between label and tube wrap, making your brand pop.",
        listTitle: "Available on",
        listItems: [
            { id: 1, name: 'Textured paper', },
            { id: 2, name: 'Metalized paper', },
            { id: 3, name: 'Hi-gloss paper', },
            { id: 4, name: 'Semi coated paper', },
            { id: 5, name: 'Matte paper', },
        ],
        listTitle2: "On film",
        listItems2: [
            { id: 1, name: 'Transparent BOPP', },
            { id: 2, name: 'White BOPP', },
            { id: 3, name: 'Metalized BOPP', },
            { id: 4, name: 'Metalized polyester', },
            { id: 5, name: 'White polyester', },
            { id: 6, name: 'White vinyl', },
        ],
        backgroundImage: "/assets/materia-prima/cards/envolvente.png",
    },
    {
        inverseOrder: true,
        title: "SHRINK SLEEVE",
        subtitle: "Made of synthetic material ",
        subtitle2: "to dress 100% of the container",
        icon1: "none.svg",
        icon1Text: false,
        icon2: false,
        icon2Text: false,
        icon3: false,
        icon3Text: false,
        listTitle: "",
        listItems: [
            
        ],
        listTitle2: "On film",
        listItems2: [
            { id: 1, name: 'Transparent BOPP', },
            { id: 2, name: 'White BOPP', },
            { id: 3, name: 'White polyester', },
            { id: 4, name: 'Metalized polyester', },
            { id: 5, name: 'White vinyl', },
        ],
        backgroundImage: "/assets/materia-prima/cards/manga.png",
    },
    {
        inverseOrder: false,
        title: "SIGNAGE AND TICKETING",
        subtitle: "Available on",
        subtitle2: "-Cardboard",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "termico.svg",
        icon2Text: "Thermal",
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
            text: "Materials",
            route: "/en/services/materials",
            top: "0",
        },
        {
            ico: "/assets/svg/dot",
            text: "Embellishment finishes",
            route: "/en/services/embellishments",
            top: "0",
        },
        {
            //Materiales   ·      ·    
            ico: "/assets/svg/dot",
            text: "Integral advice",
            route: "/en/services/integral-advises",
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
                    <span className='strokeTex2'>Materials</span>
                </>}
                text2={false}
                text3={"Innovation and high quality to perfectly cover your needs. "}
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
