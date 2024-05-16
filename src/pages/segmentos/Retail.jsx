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
        title: "PROMOCIONAL",
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
        listTitle2: "En película",
        listItems2: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'BOPP metalizado', description: 'Descripción del elemento 2' },
            { id: 4, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/retail/cards/PROMOCIONAL-RETAIL.png",
    },
    {
        inverseOrder: true,
        title: "MARCAS PROPIAS",
        subtitle: "",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "Papeles",
        listItems: [
            { id: 1, name: 'Papel Thermal NTC',  },
            { id: 2, name: 'Papel Thermal TC',  },
        ],
        listTitle2: "En película",
        listItems2: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'BOPP metalizado', description: 'Descripción del elemento 2' },
            { id: 4, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/retail/cards/card2.png",
    },
    {
        inverseOrder: false,
        title: "PRECIADORES",
        subtitle: "",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Twvek",
        listTitle: "Papeles",
        listItems: [
            { id: 1, name: 'Papel Thermal NTC',  },
            { id: 2, name: 'Papel Thermal TC',  },
        ],
        listTitle2: "En película",
        listItems2: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'BOPP metalizado', description: 'Descripción del elemento 2' },
            { id: 4, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/retail/cards/preciadores-retail.jpg",
    },

]
const container2Data = [
    {
        inverseOrder: false,
        title: `GLOSSY LAMINATION​`,
        description: `Garantiza la duración de la impresión y protege de la intemperie.`,
        image: "/assets/retail/cards/card4.png",
        titleItem: "Acabados"
    },
    {
        inverseOrder: true,
        title: "MATTE LAMINATION​",
        description: `Al igual que el glossy garantiza la duración de la impresión y protege de la intemperie.`,
        image: "/assets/retail/cards/card5.png",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "MANGA TERMOENCOGIBLE",
        description: "Da un look sofisticado de acabado sin brillo con un recubrimiento de alta resistencia al roce y excelente claridad.",
        image: "/assets/retail/cards/card8.webp",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "INMOLD",
        description: "Impresión sobre films especiales, que permiten fusionarse al envase de manera permanente",
        image: "/assets/retail/cards/INMOLD-RETAIL.png",
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

const Retail = () => {


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
                backgroundImage={"/assets/retail/hero.png"}
                text1={"Garantiza "}
                text2={"tu inventario."}
                theme={theme}
            />
            {container}
            {container2}
            <Footer theme={theme} />

        </PageStyles>
    )
}

export default Retail
