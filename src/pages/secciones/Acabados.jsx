
import React, { useState, useEffect, useRef } from 'react';
import { ContainerStyles2, PageStyles } from '../../styles/Styles'

import { useSpring, animated } from 'react-spring';
import Header from '../../components/secciones/Header';
import HeroContainer from '../../components/secciones/HeroContainer';
import Footer from '../../components/secciones/Footer';
import Container3, { Icon } from '../../components/secciones/Container3';
import NavTab from '../../components/secciones/NavTab';
import Container2 from '../../components/segmentos/Container2'

//Contenido de basicos
const containerData = [
    {
        inverseOrder: true,
        title: "GLOSSY LAMINATION​",
        subtitle: "Garantiza la duración de la impresión y protege de la intemperie.",

        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', },
            { id: 2, name: 'BOPP blanco', },
            { id: 3, name: 'Poliéster metalizado', },
            { id: 4, name: 'Poliéster blanco', },
            { id: 5, name: 'Vinil blanco', },
        ],
        backgroundImage: "/assets/acabados/b/card1.png",
    },
    {
        inverseOrder: false,
        title: "MATTE LAMINATION​",
        subtitle: "Al igual que el glossy garantiza la duración de la impresión y protege de la intemperie.",

        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/acabados/b/card2.png",
    },
    {
        inverseOrder: true,
        title: "GLOSSY VARNISH",
        subtitle: "Genera una capa de protección ante factores ambientales que pueden perjudicar tu etiqueta con un look ultra brillante.",

        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/acabados/b/card3.png",
    },
    {
        inverseOrder: false,
        title: "MATTE VARNISH",
        subtitle: "Da un look sofisticado de acabado sin brillo con un recubrimiento de alta resistencia al roce y excelente claridad.",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'Pet', description: 'Descripción del elemento 1' },
            { id: 2, name: 'Pet G', description: 'Descripción del elemento 2' },
        ],
        backgroundImage: "/assets/acabados/b/card4.webp",
    }, 

]
//Contenido de premium
const containerData2 = [
    {
        inverseOrder: true,
        title: "COLD FOIL",
        subtitle: "Agrega motivos metálicos y holográficos en frío especial para materiales lisos y mangas termoencogibles.​​",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', },
            { id: 2, name: 'BOPP blanco', },
            { id: 3, name: 'Poliéster metalizado', },
            { id: 4, name: 'Poliéster blanco', },
            { id: 5, name: 'Vinil blanco', },
        ],
        backgroundImage: "/assets/acabados/p/card1.png",
    },
    {
        inverseOrder: false,
        title: "HOT FOIL",
        subtitle: "Aporta un look premium y genera contraste visual con un aspecto metalizado hecho a tu medida.",

        listItems: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/acabados/p/card2.png",
    },
    {
        inverseOrder: true,
        title: "EMBOSS",
        subtitle: "Brinda una experiencia táctil y realza patrones de diseño específicos en la superficie de tu etiqueta.",

        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/acabados/p/card3.png",
    },
    {
        inverseOrder: false,
        title: "DEBOSS",
        subtitle: "Genera un aspecto de profundidad acentuando atributos distintivos para una imagen elegante y sofisticada.",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'Pet', description: 'Descripción del elemento 1' },
            { id: 2, name: 'Pet G', description: 'Descripción del elemento 2' },
        ],
        backgroundImage: "/assets/acabados/p/card4.png",
    },
    {
        inverseOrder: false,
        title: "SILK SCREEN",
        subtitle: "Barniz sutil y elegante que brinda una experiencia táctil hasta en los detalles más finos de tu etiqueta, elevando su experiencia.​",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'Pet', description: 'Descripción del elemento 1' },
            { id: 2, name: 'Pet G', description: 'Descripción del elemento 2' },
        ],
        backgroundImage: "/assets/acabados/p/card5.png",
    }, 
    {
        inverseOrder: false,
        title: "CAST&CURE",
        subtitle: "Agrega efectos de hologramas como una excelente herramienta de diferenciación, valor agregado y prevención de falsificación.",
        listItems: [
            { id: 1, name: 'Pet', description: 'Descripción del elemento 1' },
            { id: 2, name: 'Pet G', description: 'Descripción del elemento 2' },
        ],
        backgroundImage: "/assets/acabados/p/card6.png",
    }, 

]


const container2Data = [
    {
        inverseOrder: false,
        title: `Fluorescente​`,
        description: `Crea un efecto de color que al activarse con luz UV, lucen más fuerte y brillantes, realzando formas y detalles.`,
        image: "/assets/acabados/cards/card1.png",
        titleItem: "Acabados"
    },
    {
        inverseOrder: true,
        title: "Invisible​",
        description: `Añade elementos de seguridad que solo pueden visualizarse bajo luz UV, perfecta para aplicaciones en textos, códigos y formas invisibles`,
        image: "/assets/acabados/cards/card2.png",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "Inkjet",
        description: "Da relieve a detalles finos y precisos con aplicaciones nítidas, creando una experiencia de textura en tu etiqueta.",
        image: "/assets/acabados/cards/card3.png",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "Plateada",
        description: "Agrega valor y aspecto premium con tintas plateadas, ideales para detalles sutiles en textos.",
        image: "/assets/acabados/cards/card4.png",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "Termocromática",
        description: "Incluye la característica que permite cambiar reversiblemente los colores en tu etiqueta con la temperatura.​",
        image: "/assets/acabados/cards/card5.png",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "Aromática",
        description: "Brinda una experiencia multisensorial con microcápsulas perfumadas que al rascarse desprenden olor.",
        image: "/assets/acabados/cards/card6.png",
        titleItem: false,
    }
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
    const container3 = container2Data.map((elemento, index) => Container2Map(elemento, index, "light"));
    const tabItems = [
        {
            ico: "/assets/svg/dot",
            text: "Materiales",
            route: "/servicios/materiales",
            top: "0",
        },
        {
            ico: "/assets/svg/dot",
            text: "ACABADOS BÁSICOS & PREMIUM",
            route: "/servicios/acabados",
            top: "0",
        },
        {
            //Materiales   ·      ·    
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
                logo={"/assets/Logo_etimex oficial.png"}
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
                    Destaca en el anaquel con acabados inigualables
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
                                ...scale, backgroundImage: `url("/assets/acabados/b/card5.jpg")`, 
                                marginTop: 10,
                                backgroundPosition:"center 66%",
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
                                        {/* <Icon src={"4.svg"} alt='icon1' text={"icon1Text"} isVisible={isVisible} theme={"dark"} />
                                        <Icon src={"2.svg"} alt='icon2' text={"icon2Text"} isVisible={isVisible} theme={"dark"} />
                                        <Icon src={"1.svg"} alt='icon3' text={"icon3Text"} isVisible={isVisible} theme={"dark"} /> */}
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
                            <div className='cards-container'>
                                {container3}
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