import React, { useState, useEffect, useRef } from 'react';
import { PageStyles } from '../../styles/Styles'
import Header from '../../components/segmentos/Header'
import Container from '../../components/segmentos/Container'
import HeroContainer from '../../components/segmentos/HeroContainer'
import Footer from '../../components/segmentos/Footer'
import Container2 from '../../components/segmentos/Container2'
import { useSpring, animated } from 'react-spring';

const containerData = [
    {
        inverseOrder: false,
        title: "Eventos",
        subtitle: "Disponible en",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "-Cartulina",
        listItems: [
            { id: 1, name: '    Thermal TC 4.0', description: 'Descripción del elemento 2' },
            { id: 2, name: '    Thermal TC 7.0', description: 'Descripción del elemento 3' },
        ],
        listTitle2: "",
        listItems2: [
        ],
        backgroundImage: "/assets/boletaje/cards/card1.png",
    },
    {
        inverseOrder: true,
        title: "Estacionamientos",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "-Cartulina",
        listItems: [
            { id: 1, name: '    Thermal TC 4.0', description: 'Descripción del elemento 2' },
            { id: 2, name: '    Thermal TC 7.0', description: 'Descripción del elemento 3' },
        ],
        listTitle2: "",
        listItems2: [

        ],
        backgroundImage: "/assets/boletaje/cards/card2.png",
    },
    {
        inverseOrder: false,
        title: "Aerolíneas",
        subtitle: "",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Twvek",
        listTitle: "-Cartulina",
        listItems: [
            { id: 1, name: 'Thermal TC 4.0 - 7.0', description: 'Descripción del elemento 2' },
        ],
        listTitle2: "",
        listItems2: [

        ],
        backgroundImage: "/assets/boletaje/cards/card3.png",
    },

]
const container2Data = [
    {
        inverseOrder: false,
        title: "MATTE LAMINATION​",
        description: `Al igual que el glossy garantiza la duración de la impresión y protege de la intemperie.`,
        image: "/assets/boletaje/cards/boletaje-matte.png",
        titleItem: "Acabados"
    },
    {
        inverseOrder: true,
        title: "CAST & CURE",
        description: "Agrega efectos de hologramas como una excelente herramienta de diferenciación, valor agregado y prevención de falsificación.",
        image: "/assets/boletaje/cards/boletaje-cast&cure.png",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "SILK SCREEN",
        description: "Barniz sutil y elegante que brinda una experiencia táctil hasta en los detalles más finos de tu etiqueta, elevando su experiencia.​",
        image: "/assets/boletaje/cards/BOLETAJE-SILK-SCREEN.png",
        titleItem: false,
    },
]



const containerMap = (data, index, theme) => {
    return (
        <>
            <Container
                inverseOrder={data.inverseOrder}
                title={data.title}
                subtitle={data.subtitle}
                icon1={data.icon1}
                icon1Text={data.icon1Text}
                icon2={data.icon2}
                icon2Text={data.icon2Text}
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

const Container2Map = (data, index, theme) => {
    const ref = useRef();

    return (
        <div ref={ref}>
            <Container2
                inverseOrder={data.inverseOrder}
                title={data.title}
                description={data.description}
                image={data.image}
                titleItem={data.titleItem}
                theme={theme}
            />
        </div>
    );
};

const Boletaje = () => {


    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    const fadeInAndSlideUp = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
        delay: 300,
        config: { duration: 1000 },
    });
    const [theme, setTheme] = useState("light");
    const container = containerData.map((elemento, index) => containerMap(elemento, index, theme));
    const container2 = container2Data.map((elemento, index) => Container2Map(elemento, index, theme));


    return (
        <PageStyles theme={theme}>
            <Header
                logo={"/assets/etimex_negro.svg"}
                theme={theme}
            />
            <HeroContainer
                backgroundImage={"/assets/boletaje/hero.webp"}
                text1={"Haz de tu boletaje"}
                text2={"toda una experiencia"}
                flexDirection="column"
                theme={theme}
            />
            {container}
            {container2}
            <Footer theme={theme} />

        </PageStyles>
    )
}

export default Boletaje
