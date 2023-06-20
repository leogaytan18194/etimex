import React, { useState, useEffect, useRef } from 'react';
import { PageStyles } from '../../../styles/Styles'
import Header from '../../../components/segmentos/Header'
import Container from '../../../components/segmentos/Container'
import HeroContainer from '../../../components/segmentos/HeroContainer'
import Footer from '../../../components/segmentos/Footer'
import Container2 from '../../../components/segmentos/Container2'
import { useSpring, animated } from 'react-spring';

const containerData = [
    {
        inverseOrder: false,
        title: "Vinos",
        subtitle: "Disponoble en papel",
        icon1: "/assets/svg/bond.svg",
        icon1Text: "Bond",
        icon2: "/assets/svg/shrek.svg",
        icon2Text: "Twvek",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'Elemento 1', description: 'Descripción del elemento 1' },
            { id: 2, name: 'Elemento 2', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Elemento 3', description: 'Descripción del elemento 3' },
            { id: 4, name: 'Elemento 4', description: 'Descripción del elemento 4' },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card1.png",
    },
    {
        inverseOrder: true,
        title: "Vinos",
        subtitle: "Disponoble en papel",
        icon1: "/assets/svg/bond.svg",
        icon1Text: "Bond",
        icon2: "/assets/svg/shrek.svg",
        icon2Text: "Twvek",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'Elemento 1', description: 'Descripción del elemento 1' },
            { id: 2, name: 'Elemento 2', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Elemento 3', description: 'Descripción del elemento 3' },
            { id: 4, name: 'Elemento 4', description: 'Descripción del elemento 4' },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card2.png",
    },
    {
        inverseOrder: false,
        title: "Vinos",
        subtitle: "Disponoble en papel",
        icon1: "/assets/svg/bond.svg",
        icon1Text: "Bond",
        icon2: "/assets/svg/shrek.svg",
        icon2Text: "Twvek",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'Elemento 1', description: 'Descripción del elemento 1' },
            { id: 2, name: 'Elemento 2', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Elemento 3', description: 'Descripción del elemento 3' },
            { id: 4, name: 'Elemento 4', description: 'Descripción del elemento 4' },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card3.png",
    },

]
const container2Data = [
    {
        inverseOrder: false,
        title: `COLD FOIL`,
        description: `Aporta un look premium y genera
                contraste visual con un aspecto metalizado 
                hecho a tu medida.`,
        image: "/assets/vinos-y-licores/cards/card4.png",
        titleItem: "Acabados"
    },
    {
        inverseOrder: true,
        title: "HOT FOIL",
        description: `Agrega motivos metálicos y holográficos en frío especial para materiales lisos y mangas termoencogibles.v`,
        image: "/assets/vinos-y-licores/cards/card5.png",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "EMBOSS",
        description: "description",
        image: "/assets/vinos-y-licores/cards/card6.png",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "DEBOSS",
        description: "description",
        image: "/assets/vinos-y-licores/cards/card7.png",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "SILK SCREEN",
        description: "description",
        image: "/assets/vinos-y-licores/cards/card8.png",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "CAST & CURE",
        description: "description",
        image: "/assets/vinos-y-licores/cards/card9.png",
        titleItem: false,
    }
]



const containerMap = (data, index) => {
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
                backgroundImage={data.backgroundImage}
            />
        </>
    );
};

const Container2Map = (data, index) => {
    const ref = useRef();

    return (
        <div ref={ref}>
            <Container2
                inverseOrder={data.inverseOrder}
                title={data.title}
                description={data.description}
                image={data.image}
                titleItem={data.titleItem}
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
    const container = containerData.map((elemento, index) => containerMap(elemento, index));
    const container2 = container2Data.map((elemento, index) => Container2Map(elemento, index));
    const [theme, setTheme] = useState("light");


    return (
        <PageStyles theme={theme}>
            <Header
                logo={"/assets/svg/logo-l.svg"}
                theme={theme}
            />
            <HeroContainer
                backgroundImage={"/assets/alimentos-y-bebidas/hero.jpg"}
                text1={"Brilla"}
                text2={"en el anaquel"}
                theme={theme}
            />
            {container}
            {container2}
            <Footer theme={theme} />

        </PageStyles>
    )
}

export default AlimentosBebidas
