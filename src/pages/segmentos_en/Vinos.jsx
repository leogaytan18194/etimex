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
        title: "WINES",
        subtitle: "",
        icon1: "bond.svg",
        icon1Text: "Bondes",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "Available on",
        listItems: [
            { id: 1, name: 'Textured',  },
            { id: 2, name: 'Hi-gloss paper',  },
            { id: 3, name: 'Semi coated paper',  },
            { id: 4, name: 'Mate paper',  },
        ],
        listTitle2: "On Film:",
        listItems2: [
            { id: 1, name: 'Transparent BOPP', description: 'Descripción del elemento 1' },
            { id: 2, name: 'White BOPP', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Metalized BOPP', description: 'Descripción del elemento 2' },
            { id: 4, name: 'White vinyl', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card1.png",
    },
    {
        inverseOrder: true,
        title: "SPIRITS",
        subtitle: "",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "Available on",
        listItems: [
            { id: 1, name: 'Textured',  },
            { id: 2, name: 'Hi-gloss paper',  },
            { id: 3, name: 'Semi coated paper',  },
            { id: 4, name: 'Mate paper',  },
        ],
        listTitle2: "On Film:",
        listItems2: [
            { id: 1, name: 'Transparent BOPP', description: 'Descripción del elemento 1' },
            { id: 2, name: 'White BOPP', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Metalized BOPP', description: 'Descripción del elemento 2' },
            { id: 4, name: 'White vinyl', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card2.png",
    },
    {
        inverseOrder: false,
        title: "CRAFT BEER",
        subtitle: "",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "Available on",
        listItems: [
            { id: 1, name: 'Textured',  },
            { id: 2, name: 'Hi-gloss paper',  },
            { id: 3, name: 'Semi coated paper',  },
            { id: 4, name: 'Mate paper',  },
        ],
        listTitle2: "On Film:",
        listItems2: [
            { id: 1, name: 'Transparent BOPP', description: 'Descripción del elemento 1' },
            { id: 2, name: 'White BOPP', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Metalized BOPP', description: 'Descripción del elemento 2' },
            { id: 4, name: 'White vinyl', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/cervezas.png",
    },

]
const container2Data = [
    {
        inverseOrder: false,
        title: `COLD FOIL`,
        description: `Add special cold metal and holographic motives for smooth materials and shrink sleeves.`,
        image: "/assets/vinos-y-licores/cards/card4.png",
        titleItem: "Embellishment"
    },
    {
        inverseOrder: true,
        title: "HOT FOIL",
        description: `Add a premium look and make a metalized visual contrast just for your needs.`,
        image: "/assets/vinos-y-licores/cards/card5.png",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "EMBOSS",
        description: "Show tactile excellence and make specific design patterns on your label.",
        image: "/assets/vinos-y-licores/cards/card6.png",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "DEBOSS",
        description: "It creates a look of depth by accentuating distinctive attributes for an elegant and sophisticated image.",
        image: "/assets/vinos-y-licores/cards/card7.png",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "SILK SCREEN",
        description: "Subtle and elegant varnish that provides a tactile experience even in the finest details of your label, elevating your experience​",
        image: "/assets/vinos-y-licores/cards/card8.png",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "CAST & CURE",
        description: "Add holographic effects as an excellent differentiation value and falsification prevention.",
        image: "/assets/vinos-y-licores/cards/marine.jpg",
        titleItem: false,
    }
    ,
    {
        inverseOrder: false,
        title: "SOFT TOUCH",
        description: "Finished with tactile properties that make it totally different, thanks to the combination of satin and matte textures, gives an elegant sensation with soft touch.",
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
                text1={"Be unique,"}
                text2={"be bold."}
            />
            {container}
            {container2}
            <Footer theme={theme} />

        </PageStyles>
    )
}

export default Vinos
