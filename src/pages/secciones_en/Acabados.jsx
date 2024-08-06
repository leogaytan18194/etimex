
import React, { useState, useEffect, useRef } from 'react';
import { ContainerStyles2, PageStyles } from '../../styles/Styles'

import { useSpring, animated } from 'react-spring';
import Header from '../../components/secciones_en/Header';
import HeroContainer from '../../components/secciones_en/HeroContainer';
import Footer from '../../components/secciones_en/Footer';
import Container3, { Icon } from '../../components/secciones_en/Container3';
import NavTab from '../../components/secciones_en/NavTab';
import Container2 from '../../components/segmentos/Container2'

//Contenido de basicos
const containerData = [
    {
        inverseOrder: true,
        title: "GLOSSY LAMINATION​",
        subtitle: "Guarantee the print lasting and protects from the outside conditions.",

        listTitle: "On film",
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
        subtitle: "Similar to the glossy,  Guarantees long lasting printing  and protects  your label from outside conditions but with a fine matte finish. ",

        listTitle: "On film",
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
        subtitle: "Generates a protector layer against ambiental factors that can badly affect your label with an extra brilliant look.",

        listTitle: "On film",
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
        subtitle: "Gives a sophisticated look without shining with a high resistance cover and high definition.",
        listTitle: "On film",
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
        subtitle: "Add special cold metal and holographic motives for smooth materials and shrink sleeves.",
        listTitle: "On film",
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
        subtitle: "Add a premium look and make a metalized visual contrast just for your needs.",

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
        subtitle: "Show tactile excellence and make specific design patterns on your label.",

        listTitle: "On film",
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
        subtitle: "It creates a look of depth by accentuating distinctive attributes for an elegant and sophisticated image.",
        listTitle: "On film",
        listItems: [
            { id: 1, name: 'Pet', description: 'Descripción del elemento 1' },
            { id: 2, name: 'Pet G', description: 'Descripción del elemento 2' },
        ],
        backgroundImage: "/assets/acabados/p/card4.png",
    },
    {
        inverseOrder: false,
        title: "SILK SCREEN",
        subtitle: "Subtle and elegant varnish that provides a tactile experience even in the finest details of your label, elevating your experience.​",
        listTitle: "On film",
        listItems: [
            { id: 1, name: 'Pet', description: 'Descripción del elemento 1' },
            { id: 2, name: 'Pet G', description: 'Descripción del elemento 2' },
        ],
        backgroundImage: "/assets/acabados/p/card5.png",
    }, 
    {
        inverseOrder: false,
        title: "CAST&CURE",
        subtitle: " Add holographic effects as an excellent differentiation value and falsification prevention.",
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
        title: `Glow in the dark`,
        description: `Create a color effect that activates with UV light, they look more strong and brilliant making shapes and details.`,
        image: "/assets/acabados/cards/card1.png",
        titleItem: "Embellishments"
    },
    {
        inverseOrder: true,
        title: "Invisible​",
        description: `Give security elements that can only be visible under UV lights, perfect for text applications and invisible shapes.`,
        image: "/assets/acabados/cards/card2.png",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "Inkjet",
        description: "Highlights fine and precise details with clear applications creating a label texture experience.",
        image: "/assets/acabados/cards/card3.png",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "Silver",
        description: "Gives value and premium look with silver inks, perfect for tiny text details.",
        image: "/assets/acabados/cards/card4.png",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "Thermochromic",
        description: "Has the characteristic to change the colors of your label depending on the temperature.​",
        image: "/assets/acabados/cards/card5.png",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "Aromatic",
        description: "It provides a multisensory experience with scented microcapsules that give odor when scratched.",
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
            text: "Materials",
            route: "/en/services/materials",
            top: "0",
        },
        {
            ico: "/assets/svg/dot",
            text: "Embellishment finishes",
            route: "/en/services/embellishments",
            top: "0",
        },
        {
            //Materiales   ·      ·    
            ico: "/assets/svg/dot",
            text: "Integral advice",
            route: "/en/services/integral-advises",
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
                    Embellishments
                </>}
                text2={""}
                text3={<span
                    style={{
                        fontFamily: "Helvetica",
                        textShadow: "unset !important"
                    }}
                >
                    Stand out on the shelf with unparalleled embellishments.
                </span>}
                theme={"light"}
                h1Only={true}

            />
            <div className='acabados'>
                <NavTab
                    tab_title_1={"Premium"}
                    tab_title_2={"Basics"}
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
                                        <animated.p style={slideInFromBottom}>Highlights elements in a subtle way with a bright appearance enhancing colors and remarkable graphics.</animated.p>
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