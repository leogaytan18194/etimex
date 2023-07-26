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
        listTitle: "Disponible en",
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
        backgroundImage: "/assets/industrial/cards/aceites_cuadrado.png",
    },
    {
        inverseOrder: true,
        title: "MARCAS PROPRIAS",
        subtitle: "",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "Disponible en",
        listItems: [
            { id: 1, name: 'Papel Thermal NTC',  },
            { id: 2, name: 'Papel Thermal TC',  },
        ],
        listTitle2: "En película:",
        listItems2: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'BOPP metalizado', description: 'Descripción del elemento 2' },
            { id: 4, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
            { id: 5, name: 'Poliéster', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/industrial/cards/escaleras-industrial.jpg",
    },


]

const container2Data = [
    {
        inverseOrder: false,
        title: `GLOSSY LAMINATION​`,
        description: `Garantiza la duración de la impresión y protege de la intemperie.`,
        image: "/assets/industrial/cards/card1.png",
        titleItem: "Embellishments"
    },
    {
        inverseOrder: true,
        title: "MATTE LAMINATION​",
        description: `Al igual que el glossy garantiza la duración de la impresión y protege de la intemperie.`,
        image: "/assets/industrial/cards/mattelami-industrial.jpg",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "GLOSSY VARNISH",
        description: "Genera una capa de protección ante factores ambientales que pueden perjudicar tu etiqueta con un look ultra brillante.",
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
                logo={"/assets/etimex_negro.svg"}
                theme={theme}
            />
            <HeroContainer
                backgroundImage={"/assets/industrial/cover-industrial.webp"}
                text1={"+Fuertes"}
                text2={"+Resistentes"}
                text3={"+Durables"}
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
