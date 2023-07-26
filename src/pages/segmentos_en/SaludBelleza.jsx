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
        title: "FOOD SUPLEMENTS",
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
        listTitle2: "On film:",
        listItems2: [
            { id: 1, name: 'Transparent BOPP', description: 'Descripción del elemento 1' },
            { id: 2, name: 'White BOPP', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Metalized BOPP', description: 'Descripción del elemento 2' },
            { id: 4, name: 'White vinyl', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/salud-y-belleza/cards/suplementes-salud.jpg",
    },
    {
        inverseOrder: true,
        title: "COSMETIC",
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
        listTitle2: "On film:",
        listItems2: [
            { id: 1, name: 'Transparent BOPP', description: 'Descripción del elemento 1' },
            { id: 2, name: 'White BOPP', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Metalized BOPP', description: 'Descripción del elemento 2' },
            { id: 4, name: 'White vinyl', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/salud-y-belleza/cards/cosmetica.png",
    },
    {
        inverseOrder: false,
        title: "HOME",
        subtitle: "",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Twvek",
        listTitle: "Available on",
        listItems: [
            { id: 1, name: 'Textured paper',  },
            { id: 2, name: 'Metalized paper',  },
            { id: 3, name: 'Hi-gloss paper',  },
            { id: 4, name: 'Semi coated paper',  },
            { id: 5, name: 'Matte paper',  },
        ],
        listTitle2: "On film:",
        listItems2: [
            { id: 1, name: 'Transparent BOPP', description: 'Descripción del elemento 1' },
            { id: 2, name: 'White BOPP', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Metalized BOPP', description: 'Descripción del elemento 2' },
            { id: 4, name: 'White vinyl', description: 'Descripción del elemento 3' },
        ],
        listTitle3: "Shrink sleeve",
        backgroundImage: "/assets/salud-y-belleza/cards/hogar-salud.webp",
    },

]
const container2Data = [
    {
        inverseOrder: false,
        title: `GLOSSY LAMINATION​`,
        description: `Guarantees long lasting printing and protects  your label from outside conditions.`,
        image: "/assets/salud-y-belleza/cards/card5.png",
        titleItem: "Embellishments"
    },
    {
        inverseOrder: true,
        title: "MATTE LAMINATION​",
        description: `Similar to the glossy,  Guarantees long lasting printing  and protects  your label from outside conditions but with a fine matte finish.`,
        image: "/assets/salud-y-belleza/cards/matte-salud.webp",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "GLOSSY VARNISH",
        description: "Generates a protective layer against ambiental factors that can badly affect your label with an extra brilliant look.",
        image: "/assets/salud-y-belleza/cards/glossyvarnish_salud.jpg",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "MATTE VARNISH",
        description: "Gives a sophisticated look without shining with a high resistance cover and high definition.",
        image: "/assets/salud-y-belleza/cards/mattevarnish-salud.webp",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "COLD FOIL",
        description: "Add special cold metal and holographic motives for smooth materials and shrink sleeves.​",
        image: "/assets/salud-y-belleza/cards/coldfoil-sauld.jpeg",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "MANGA TERMOENCOGIBLE",
        description: "It gives a sophisticated look of dullness with a coating of high resistance to friction and excellent clarity.",
        image: "/assets/salud-y-belleza/cards/manga-salud.jpg",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "SOFT TOUCH",
        description: "Finished with tactile properties that make it totally different, thanks to the combination of satin and matte textures, gives an elegant sensation with soft touch.",
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
                text1={"Eye-catching"}
                text2={"labels"}
                theme={theme}
            />
            {container}
            {container2}
            <Footer theme={theme} />

        </PageStyles>
    )
}

export default SaludBelleza
