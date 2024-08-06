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
        title: "OILS AND LUBRICANTS",
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
        backgroundImage: "/assets/industrial/cards/aceites_cuadrado.png",
    },
    {
        inverseOrder: true,
        title: "STAIRS",
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
            { id: 5, name: 'Polyester', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/industrial/cards/escaleras-industrial.jpg",
    },


]

const container2Data = [
    {
        inverseOrder: false,
        title: `GLOSSY LAMINATION​`,
        description: `Guarantee the print lasting and protects from the outside conditions.`,
        image: "/assets/industrial/cards/card1.png",
        titleItem: "Embellishment"
    },
    {
        inverseOrder: true,
        title: "MATTE LAMINATION​",
        description: `Similar to the glossy,  Guarantees long lasting printing  and protects  your label from outside conditions but with a fine matte finish. `,
        image: "/assets/industrial/cards/mattelami-industrial.jpg",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "GLOSSY VARNISH",
        description: "Generates a protector layer against ambiental factors that can badly affect your label with an extra brilliant look.",
        image: "/assets/industrial/cards/glossy_ind.jpg",
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

const Industrial = () => {


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
                backgroundImage={"/assets/industrial/cover-industrial.webp"}
                text1={"+Powerful"}
                text2={"+Resistant"}
                text3={"+Durable"}
                h1Only={true}
                flexDirection={"column"}
                theme={theme}
            />
            {container}
            {container2}
            <div className='industrial-container'>
                <div className='industrial-items'>
                    <div className='industrial-item-txt'>
                        <p>Etimex brinda soluciones de impresión, a través de una asesoría personalizada, ofreciendo los materiales de la mas alta gama en el mundo, asegurando distinción, calidad de impresión y tiempo de entrega únicos en el mercado. </p>
                    </div>
                    <div className='industrial-item-img'>
                        <img src="/assets/industrial/cards/card4.png" alt="" />
                    </div>
                </div>
            </div>
            <Footer theme={theme} />

        </PageStyles>
    )
}

export default Industrial
