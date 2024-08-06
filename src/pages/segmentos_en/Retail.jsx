import React, { useState, useEffect, useRef } from 'react';
import { PageStyles } from '../../styles/Styles'
import Header from '../../components/segmentos_en/Header'
import Container from '../../components/segmentos_en/Container'
import HeroContainer from '../../components/segmentos_en/HeroContainer'
import Footer from '../../components/segmentos_en/Footer'
import Container2 from '../../components/segmentos_en/Container2'
import { useSpring, animated } from 'react-spring';

const containerData = [
    {
        inverseOrder: false,
        title: "PROMOTIONAL",
        subtitle: "",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "Available on",
        listItems: [
            { id: 1, name: 'Textured paper',  },
            { id: 2, name: 'Metalized paper',  },
            { id: 3, name: 'Hi-gloss paper',  },
            { id: 4, name: 'Semi coated paper',  },
            { id: 5, name: 'Matte paper',  },
        ],
        listTitle2: "On film",
        listItems2: [
            { id: 1, name: 'Transparent BOPP', description: 'Descripción del elemento 1' },
            { id: 2, name: 'White BOPP', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Metalized BOPP', description: 'Descripción del elemento 2' },
            { id: 4, name: 'White vinyl', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/retail/cards/PROMOCIONAL-RETAIL.png",
    },
    {
        inverseOrder: true,
        title: "OWN BRANDS",
        subtitle: "",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "Available on",
        listItems: [
            { id: 1, name: 'Pressure Sensitive label',  },
            { id: 2, name: 'Thermal NTC paper',  },
            { id: 3, name: 'Thermal TC paper',  },
        ],
        listTitle2: "On film",
        listItems2: [
            { id: 1, name: 'Transparent BOPP', description: 'Descripción del elemento 1' },
            { id: 2, name: 'White BOPP', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Metalized BOPP', description: 'Descripción del elemento 2' },
            { id: 4, name: 'White vinyl', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/retail/cards/card2.png",
    },
    {
        inverseOrder: false,
        title: "SALES LABEL",
        subtitle: "",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Twvek",
        listTitle: "Available on",
        listItems: [
            { id: 1, name: 'Pressure Sensitive label',  },
            { id: 2, name: 'Thermal NTC paper',  },
            { id: 3, name: 'Thermal TC paper',  },
        ],
        listTitle2: "On film",
        listItems2: [
            { id: 1, name: 'Transparent BOPP', description: 'Descripción del elemento 1' },
            { id: 2, name: 'White BOPP', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Metalized BOPP', description: 'Descripción del elemento 2' },
            { id: 4, name: 'White vinyl', description: 'Descripción del elemento 3' },
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
        titleItem: "Embellishment"
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
                logo={"/assets/Logo_etimex oficial.png"}
                theme={theme}
            />
            <HeroContainer
                backgroundImage={"/assets/retail/hero.png"}
                text1={"Shine"}
                text2={"on the shelf"}
                theme={theme}
            />
            {container}
            {container2}
            <Footer theme={theme} />

        </PageStyles>
    )
}

export default Retail
