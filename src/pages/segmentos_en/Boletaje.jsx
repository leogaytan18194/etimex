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
        title: "EVENTS",
        subtitle: "Available on",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "-Cardboard",
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
        title: "PARKING LOT",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "-Cardboard",
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
        title: "AIRLINES",
        subtitle: "",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Twvek",
        listTitle: "-Cardboard",
        listItems: [
            { id: 1, name: 'NTC 4.0 - 7.0', description: 'Descripción del elemento 2' },
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
        description: `Similar to the glossy,  Guarantees long lasting printing  and protects  your label from outside conditions but with a fine matte finish.`,
        image: "/assets/boletaje/cards/boletaje-matte.png",
        titleItem: "Embellishments"
    },
    {
        inverseOrder: true,
        title: "CAST & CURE",
        description: "Add holographic effects as an excellent differentiation value and falsification prevention.",
        image: "/assets/boletaje/cards/boletaje-cast&cure.png",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "SILK SCREEN",
        description: "Add special cold metal and holographic motives for smooth materials and shrink sleeves.​",
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
                text1={"Make your ticketing"}
                text2={"a great experience"}
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
