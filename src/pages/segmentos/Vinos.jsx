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
        title: "Vinos",
        subtitle: "Disponible en papel",
        icon1: "bond.svg",
        icon1Text: "Bondes",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente',  },
            { id: 2, name: 'BOPP blanco',  },
            { id: 3, name: 'Vinil blanco',  },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card1.png",
    },
    {
        inverseOrder: true,
        title: "Licores",
        subtitle: "Disponible en papel",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card2.png",
    },
    {
        inverseOrder: false,
        title: "Cerveza artesanal",
        subtitle: "Disponible en papel",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/cervezas.png",
    },

]
const container2Data = [
    {
        inverseOrder: false,
        title: `COLD FOIL`,
        description: `Agrega motivos metálicos y holográficos en frío especial para materiales lisos y mangas termoencogibles.`,
        image: "/assets/vinos-y-licores/cards/card4.png",
        titleItem: "Acabados"
    },
    {
        inverseOrder: true,
        title: "HOT FOIL",
        description: `Aporta un look premium y genera contraste visual con un aspecto metalizado hecho a tu medida.`,
        image: "/assets/vinos-y-licores/cards/card5.png",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "EMBOSS",
        description: "Brinda una experiencia táctil y realza patrones de diseño específicos en la superficie de tu etiqueta.",
        image: "/assets/vinos-y-licores/cards/card6.png",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "DEBOSS",
        description: "Genera un aspecto de profundidad acentuando atributos distintivos para una imagen elegante y sofisticada.",
        image: "/assets/vinos-y-licores/cards/card7.png",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "SILK SCREEN",
        description: "Agrega motivos metálicos y holográficos en frío especial para materiales lisos y mangas termoencogibles.​",
        image: "/assets/vinos-y-licores/cards/card8.png",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "CAST & CURE",
        description: "Agrega efectos de hologramas como una excelente herramienta de diferenciación, valor agregado y prevención de falsificación.",
        image: "/assets/vinos-y-licores/cards/card9.png",
        titleItem: false,
    }
    ,
    {
        inverseOrder: false,
        title: "SOFT TOUCH",
        description: "Acabado con propiedades táctiles que lo hacen totalmente diferente, gracias al juego con texturas satinadas y mate, aporta una sensación de elegancia y suavidad al tacto.",
        image: "/assets/salud-y-belleza/cards/SOFT_TOUCH.png",
        titleItem: false,
    }
]



const containerMap = (data, index,  theme) => {
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

const Vinos = () => {


    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    const fadeInAndSlideUp = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
        delay: 300,
        config: { duration: 1000 },
    });
    const [theme, setTheme] = useState("dark");
    const container = containerData.map((elemento, index) => containerMap(elemento, index, theme));
    const container2 = container2Data.map((elemento, index) => Container2Map(elemento, index, theme));

    
    return (
        <PageStyles theme={theme}>
            <Header
                logo={"/assets/svg/logov2.svg"}
                theme={theme}
            />
            <HeroContainer
                backgroundImage={"/assets/vinos-y-licores/hVinos2.png"}
                text1={"Se único,"}
                text2={"se audaz"}
            />
            {container}
            {container2}
            <Footer theme={theme} />

        </PageStyles>
    )
}

export default Vinos
