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
        title: "SUPLEMENTOS ALIMENTICIOS",
        subtitle: "",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "Papeles",
        listItems: [
            { id: 1, name: 'Papel Texturizado',  },
            { id: 2, name: 'Papel Metalizado',  },
            { id: 3, name: 'Papel Hi-gloss',  },
            { id: 4, name: 'Papel Semi coated',  },
            { id: 5, name: 'Papel Mate',  },
        ],
        listTitle2: "En película:",
        listItems2: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'BOPP metalizado', description: 'Descripción del elemento 2' },
            { id: 4, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/salud-y-belleza/cards/suplementes-salud.jpg",
    },
    {
        inverseOrder: true,
        title: "COSMÉTICA",
        subtitle: "",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "Papeles",
        listItems: [
            { id: 1, name: 'Papel Texturizado',  },
            { id: 2, name: 'Papel Metalizado',  },
            { id: 3, name: 'Papel Hi-gloss',  },
            { id: 4, name: 'Papel Semi coated',  },
            { id: 5, name: 'Papel Mate',  },
        ],
        listTitle2: "En película:",
        listItems2: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'BOPP metalizado', description: 'Descripción del elemento 2' },
            { id: 4, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/salud-y-belleza/cards/cosmetica.png",
    },
    {
        inverseOrder: false,
        title: "HOGAR",
        subtitle: "",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Twvek",
        listTitle: "Papeles",
        listItems: [
            { id: 1, name: 'Papel Texturizado',  },
            { id: 2, name: 'Papel Metalizado',  },
            { id: 3, name: 'Papel Hi-gloss',  },
            { id: 4, name: 'Papel Semi coated',  },
            { id: 5, name: 'Papel Mate',  },
        ],
        listTitle2: "En película:",
        listItems2: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'BOPP metalizado', description: 'Descripción del elemento 2' },
            { id: 4, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        listTitle3: "En Manga Termoencogible",
        backgroundImage: "/assets/salud-y-belleza/cards/hogar-salud.webp",
    },

]
const container2Data = [
    {
        inverseOrder: false,
        title: `GLOSSY LAMINATION​`,
        description: `Garantiza la duración de la impresión y protege de la intemperie.`,
        image: "/assets/salud-y-belleza/cards/card5.png",
        titleItem: "Acabados"
    },
    {
        inverseOrder: true,
        title: "MATTE LAMINATION​",
        description: `Al igual que el glossy garantiza la duración de la impresión y protege de la intemperie.`,
        image: "/assets/salud-y-belleza/cards/matte-salud.webp",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "GLOSSY VARNISH",
        description: "Genera una capa de protección ante factores ambientales que pueden perjudicar tu etiqueta con un look ultra brillante.",
        image: "/assets/salud-y-belleza/cards/glossyvarnish_salud.jpg",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "MATTE VARNISH",
        description: "Da un look sofisticado de acabado sin brillo con un recubrimiento de alta resistencia al roce y excelente claridad.",
        image: "/assets/salud-y-belleza/cards/mattevarnish-salud.webp",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "COLD FOIL",
        description: "Agrega motivos metálicos y holográficos en frío especial para materiales lisos y mangas termoencogibles.​",
        image: "/assets/salud-y-belleza/cards/coldfoil-sauld.jpeg",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "MANGA TERMOENCOGIBLE",
        description: "Da un look sofisticado de acabado sin brillo con un recubrimiento de alta resistencia al roce y excelente claridad.",
        image: "/assets/salud-y-belleza/cards/manga-salud.jpg",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "SOFT TOUCH",
        description: "Acabado con propiedades táctiles que lo hacen totalmente diferente, gracias al juego con texturas satinadas y mate, aporta una sensación de elegancia y suavidad al tacto.",
        image: "/assets/salud-y-belleza/cards/SOFT_TOUCH.png",
        titleItem: false,
    }
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
                listTitle3={data.listTitle3}
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

const SaludBelleza = () => {


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
                backgroundImage={"/assets/salud-y-belleza/cover-salud.jpg"}
                text1={"Haz que tu etiqueta"}
                text2={"atraiga miradas"}
                theme={theme}
            />
            {container}
            {container2}
            <Footer theme={theme} />

        </PageStyles>
    )
}

export default SaludBelleza
