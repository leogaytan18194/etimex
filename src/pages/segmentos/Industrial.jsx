import React, { useState, useEffect, useRef } from 'react';
import { PageStyles } from '../../styles/Styles'
import Header from '../../components/segmentos/Header'
import HeroContainer from '../../components/segmentos/HeroContainer'
import Footer from '../../components/segmentos/Footer'
import Container2 from '../../components/segmentos/Container2'
import { useSpring, animated } from 'react-spring';

const container2Data = [
    {
        inverseOrder: false,
        title: `GLOSSY LAMINATE`,
        description: `Garantiza la duración de la impresión y protege de la intemperie.`,
        image: "/assets/industrial/cards/card1.png",
        titleItem: "Acabados"
    },
    {
        inverseOrder: true,
        title: "MATTE LAMINATE",
        description: `Al igual que el glossy garantiza la duración de la impresión y protege de la intemperie.`,
        image: "/assets/industrial/cards/mattelami-industrial.jpg",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "GLOSSY VARNISH",
        description: "Genera una capa de protección ante factores ambientales que pueden perjudicar tu etiqueta con un look ultra brillante.",
        image: "/assets/industrial/cards/card3.png",
        titleItem: false,
    },
]



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
