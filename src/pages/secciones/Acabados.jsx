
import React, { useState, useEffect, useRef } from 'react';
import { ContainerStyles2, PageStyles } from '../../styles/Styles'

import { useSpring, animated } from 'react-spring';
import Header from '../../components/secciones/Header';
import HeroContainer from '../../components/secciones/HeroContainer';
import Footer from '../../components/secciones/Footer';
import Container3, { Icon } from '../../components/secciones/Container3';
import NavTab from '../../components/secciones/NavTab';


const containerData = [
    {
        inverseOrder: true,
        title: "Auto adheribles",
        subtitle: "Disponible en papel",
        icon1: "1.svg",
        icon1Text: "Bond",
        icon2: "2.svg",
        icon2Text: "Térmico",
        icon3: "3.svg",
        icon3Text: "Tyvek",
        icon4: "4.svg",
        icon4Text: "Tyvek",
        icon5: "5.svg",
        icon5Text: "Tyvek",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', },
            { id: 2, name: 'BOPP blanco', },
            { id: 3, name: 'Poliéster metalizado', },
            { id: 4, name: 'Poliéster blanco', },
            { id: 5, name: 'Vinil blanco', },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card1.png",
    },
    {
        inverseOrder: false,
        title: "Envolventes",
        subtitle: "Disponible en papel",
        icon1: "1.svg",
        icon1Text: "Bond",
        icon2: "2.svg",
        icon2Text: "Tyvek",
        icon3: "3.svg",
        icon3Text: "Tyvek",
        icon4: "4.svg",
        icon4Text: "Tyvek",
        icon5: "5.svg",
        icon5Text: "Tyvek",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card2.png",
    },
    {
        inverseOrder: true,
        title: "Manga Termoencogible",
        subtitle: "Disponible en papel",
        icon1: "1.svg",
        icon1Text: "Bond",
        icon2: "3.svg",
        icon2Text: "Tyvek",
        icon3: "4.svg",
        icon3Text: "Tyvek",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card3.png",
    },
    {
        inverseOrder: false,
        title: "Manga termoencongible",
        subtitle: "Disponible en papel",
        icon1: "1.svg",
        icon1Text: "Bond",
        icon2: "2.svg",
        icon2Text: "Tyvek",
        icon3: "3.svg",
        icon3Text: "Tyvek",
        icon4: "4.svg",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'Pet', description: 'Descripción del elemento 1' },
            { id: 2, name: 'Pet G', description: 'Descripción del elemento 2' },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card3.png",
    }, 

]
const containerData2 = [
    {
        inverseOrder: true,
        title: "Auto adheribles",
        subtitle: "Disponible en papel",
        icon1: "1.svg",
        icon1Text: "Bond",
        icon2: "2.svg",
        icon2Text: "Térmico",
        icon3: "6.svg",
        icon3Text: "Tyvek",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', },
            { id: 2, name: 'BOPP blanco', },
            { id: 3, name: 'Poliéster metalizado', },
            { id: 4, name: 'Poliéster blanco', },
            { id: 5, name: 'Vinil blanco', },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card1.png",
    },
    {
        inverseOrder: false,
        title: "Envolventes",
        subtitle: "Disponible en papel",
        icon1: "1.svg",
        icon1Text: "Bond",
        icon2: "2.svg",
        icon2Text: "Tyvek",
        icon3: "3.svg",
        icon3Text: "Tyvek",
        icon4: "4.svg",
        icon4Text: "Tyvek",
        icon5: "5.svg",
        icon5Text: "Tyvek",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card2.png",
    },
    {
        inverseOrder: true,
        title: "Manga Termoencogible",
        subtitle: "Disponible en papel",
        icon1: "1.svg",
        icon1Text: "Bond",
        icon2: "3.svg",
        icon2Text: "Tyvek",
        icon3: "4.svg",
        icon3Text: "Tyvek",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card3.png",
    },
    {
        inverseOrder: false,
        title: "Manga termoencongible",
        subtitle: "Disponible en papel",
        icon1: "1.svg",
        icon1Text: "Bond",
        icon2: "2.svg",
        icon2Text: "Tyvek",
        icon3: "3.svg",
        icon3Text: "Tyvek",
        icon4: "4.svg",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'Pet', description: 'Descripción del elemento 1' },
            { id: 2, name: 'Pet G', description: 'Descripción del elemento 2' },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card3.png",
    }, 

]



const cardItems = [
    {
        title: "Fluorescente",
        desc: "Crea un efecto de color que al activarse con luz UV, lucen más fuertes y brillantes, realzando formas y detalles.",
        bg: "/assets/tintas/cards/1.webp",
        delay: 200,
        bgsz: "90%",
    },
    {
        title: "Invisible",
        desc: "Añade elementos de seguridad que solo pueden visualizarse bajo luz UV, perfecta para aplicaciones en textos, códigos y formas invisibles.",
        bg: "/assets/tintas/cards/2.webp",
        delay: 400,
        bgsz: "100%",
    },
    {
        title: "Inkjet",
        desc: "Da relieve a detalles finos y precisos con aplicaciones nítidas, creando una experiencia de textura en tu etiqueta.",
        bg: "/assets/tintas/cards/3.webp",
        delay: 600,
        bgsz: "190%",
    },
    {
        title: "Plateada",
        desc: "Agrega valor y aspecto premium con tintas plateadas, ideales para detalles sutiles en textos.",
        bg: "/assets/tintas/cards/4.webp",
        delay: 800,
        bgsz: "100%",
    },
    {
        title: "Termocromática",
        desc: "Incluye la característica que permite cambiar reversiblemente los colores en tu etiqueta con la temperatura.",
        bg: "/assets/tintas/cards/5.webp",
        delay: 1000,
        bgsz: "150%",
    },
    {
        title: "Aromática",
        desc: "Brinda una experiencia mulsisensorial con microcápsulas perfumadas que al rascarse desprenden olor.",
        bg: "/assets/tintas/cards/6.webp",
        delay: 1200,
        bgsz: "190%",
    },
]



const containerMap = (data, index, theme) => {
    return (
        <>
            <Container3
                inverseOrder={data.inverseOrder}
                title={data.title}
                subtitle={data.subtitle}
                icon1={data.icon1}
                icon1Text={data.icon1Text}
                icon2={data.icon2}
                icon2Text={data.icon2Text}
                icon3={data.icon3}
                icon3Text={data.icon3Text}
                icon4={data.icon4}
                icon4Text={data.icon4Text}
                icon5={data.icon5}
                icon5Text={data.icon5Text}
                listTitle={data.listTitle}
                listItems={data.listItems}
                backgroundImage={data.backgroundImage}
                theme={theme}
            />
        </>
    );
};
const containerMap2 = (data, index, theme) => {
    return (
        <>
            <Container3
                inverseOrder={data.inverseOrder}
                title={data.title}
                subtitle={data.subtitle}
                icon1={data.icon1}
                icon1Text={data.icon1Text}
                icon2={data.icon2}
                icon2Text={data.icon2Text}
                icon3={data.icon3}
                icon3Text={data.icon3Text}
                icon4={data.icon4}
                icon4Text={data.icon4Text}
                icon5={data.icon5}
                icon5Text={data.icon5Text}
                listTitle={data.listTitle}
                listItems={data.listItems}
                backgroundImage={data.backgroundImage}
                theme={theme}
            />
        </>
    );
};


const Acabados = () => {

    
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    const fadeInAndSlideUp = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
        delay: 300,
        config: { duration: 1000 },
    });
    const container = containerData.map((elemento, index) => containerMap(elemento, index, "dark"));
    const container2 = containerData2.map((elemento, index) => containerMap2(elemento, index, "dark"));
    const tabItems = [
        {
            ico: "/assets/svg/dot",
            text: "Materias Primas",
            route: "/servicios/materia-prima",
            top: "0",
        },
        {
            ico: "/assets/svg/dot",
            text: "ACABADOS BÁSICOS & PREMIUM",
            route: "/servicios/acabados",
            top: "0",
        },
        {
            //MATERIAS PRIMAS   ·      ·    
            ico: "/assets/svg/dot",
            text: "ASESORÍA INTEGRAL",
            route: "/servicios/asesoria-integral",
            top: "0",
        },
    ]

    const [theme, setTheme] = useState("dark");
    

    // Animaciones
    const fade = useSpring({
        opacity: isVisible ? 1 : 0,
        delay: isVisible ? 500 : 0,
    });

    const scale = useSpring({
        transform: isVisible ? 'scale(1)' : 'scale(0)',
        delay: isVisible ? 500 : 0,
    });

    const slideInFromLeft = useSpring({
        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
        delay: isVisible ? 500 : 0,
        opacity: isVisible ? 1 : 0,
    });

    const slideInFromBottom = useSpring({
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        delay: isVisible ? 500 : 0,
        opacity: isVisible ? 1 : 0,
    });
    const spinZoom = useSpring({
        from: { transform: isVisible ? "scale(0) rotate(0deg)" : "scale(1) rotate(360deg)" },
        to: { transform: "scale(1) rotate(360deg)" },
        delay: isVisible ? 500 : 0,
    });

    const shake = useSpring({
        to: [{ transform: 'translateX(-10px)' }, { transform: 'translateX(10px)' }, { transform: 'translateX(0)' }],
        from: { transform: 'translateX(0)' },
    });
    return (
        <PageStyles theme={"light"}>
            <Header
                logo={"/assets/etimex-logo.png"}
                theme={"light"}
            />
            <HeroContainer
                backgroundImage={"/assets/acabados/hero.png"}
                text1={<>
                    Acabados
                </>}
                text2={""}
                text3={<span
                    style={{
                        fontFamily: "Helvetica",
                        textShadow: "unset !important"
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                </span>}
                theme={"light"}
                h1Only={true}

            />
            <div className='acabados'>
                <NavTab
                    tab_title_1={"Premium"}
                    tab_title_2={"Básicos"}
                    theme={theme}
                    tab_item_1={
                        <AcabadosBasicos>
                            <div className='acabados-container'>
                                {container}                               
                            </div>

                            <ContainerStyles2 theme={"dark"} ref={ref} >

                            <div className='acabados-bottom'>
                            <animated.div style={{
                                ...scale, backgroundImage: `url("/assets/acabados/b/5.png")`, 
                                marginTop: 10             
                            }} className='image-container-bg'>

                                <animated.div className='block-text-container'>
                                    <animated.div style={slideInFromBottom} className='txt-container'>
                                        <animated.h2>REGISTRATION VARNISH</animated.h2>
                                        <animated.p style={slideInFromBottom}>Resalta elementos de forma sutil con una apariencia brillante potenciando colores y  gráficos destacables.</animated.p>
                                    </animated.div>
                                    <animated.div className='icon-container'
                                        style={
                                            {
                                                justifyContent: "center",
                                            }
                                        }
                                    >
                                        <Icon src={"4.svg"} alt='icon1' text={"icon1Text"} isVisible={isVisible} theme={"dark"} />
                                        <Icon src={"2.svg"} alt='icon2' text={"icon2Text"} isVisible={isVisible} theme={"dark"} />
                                        <Icon src={"1.svg"} alt='icon3' text={"icon3Text"} isVisible={isVisible} theme={"dark"} />
                                    </animated.div>
                                </animated.div>
                            </animated.div>
                            </div>

                            </ContainerStyles2>
                        </AcabadosBasicos>}
                    tab_item_2={
                        <AcabadosPremium>
                            <div className='acabados-container'>
                                {container2}
                            </div>

                        </AcabadosPremium>}
                />

            </div>

            <Footer theme={"light"} tabItems={tabItems} />

        </PageStyles>
    )
}

export default Acabados

export const AcabadosBasicos = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
}
export const AcabadosPremium = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
}