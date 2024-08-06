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
        title: "FROZEN",
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
        listTitle3: "Inmold",
        backgroundImage: "/assets/alimentos-y-bebidas/cards/card1.png",
    },
    {
        inverseOrder: true,
        title: "SODAS AND JUICES",
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
            { id: 3, name: 'White vinyl', description: 'Descripción del elemento 2' },
        ],
        listTitle3: "Shrink sleeve",
        backgroundImage: "/assets/alimentos-y-bebidas/cards/card2.png",
    },
    {
        inverseOrder: false,
        title: "FOOD",
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
        listTitle3: "",
        backgroundImage: "/assets/alimentos-y-bebidas/cards/card3.png",
    },

    {
        inverseOrder: true,
        title: "WATER",
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
        backgroundImage: "/assets/alimentos-y-bebidas/cards/card4.png",
    },

]
const container2Data = [
    {
        inverseOrder: false,
        title: `GLOSSY LAMINATION​`,
        description: `Guarantee the print lasting and protects from the outside conditions.`,
        image: "/assets/alimentos-y-bebidas/cards/card5.png",
        titleItem: "Embellishment"
    },
    {
        inverseOrder: true,
        title: "MATTE LAMINATION​",
        description: `Similar to the glossy,  Guarantees long lasting printing  and protects  your label from outside conditions but with a fine matte finish.`,
        image: "/assets/alimentos-y-bebidas/cards/card6.png",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "GLOSSY VARNISH",
        description: "Generates a protector layer against ambiental factors that can badly affect your label with an extra brilliant look.",
        image: "/assets/alimentos-y-bebidas/cards/glossy-lami-alimentos.png",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "MATTE VARNISH",
        description: "Gives a sophisticated look without shining with a high resistance cover and high definition.",
        image: "/assets/alimentos-y-bebidas/cards/card8.png",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "COLD FOIL",
        description: "Add special cold metal and holographic motives for smooth materials and shrink sleeves.​",
        image: "/assets/alimentos-y-bebidas/cards/card9.png",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "SHRINK SLEEVE",
        description: "It gives a sophisticated look of dullness with a coating of high resistance to friction and excellent clarity.",
        image: "/assets/alimentos-y-bebidas/cards/manga-alimentos.jpg",
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

const AlimentosBebidas = () => {


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
                backgroundImage={"/assets/alimentos-y-bebidas/hero.jpg"}
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

export default AlimentosBebidas
