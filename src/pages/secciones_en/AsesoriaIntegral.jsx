import React, { useState, useEffect, useRef } from 'react';
import { PageStyles } from '../../styles/Styles'

import { useSpring, animated } from 'react-spring';
import Header from '../../components/secciones_en/Header';
import HeroContainer from '../../components/secciones_en/HeroContainer';
import Footer from '../../components/secciones_en/Footer';
import Container2 from '../../components/secciones_en/Container2';
import Card2 from '../../components/secciones_en/Card2';


const containerData = [
    {
        inverseOrder: true,
        title: "AUTO ADHERIBLES",
        subtitle: "Disponible en papel",
        icon1: "bond.svg",
        icon1Text: "Bondes",
        icon2: "termico.svg",
        icon2Text: "Térmico",
        icon3: "shrek.svg",
        icon3Text: "Tyvek1",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', },
            { id: 2, name: 'BOPP blanco', },
            { id: 3, name: 'Vinil blanco', },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card1.png",
    },
    {
        inverseOrder: false,
        title: "ENVOLVENTES",
        subtitle: "Disponible en papel",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        icon3: "shrek.svg",
        icon3Text: "Tyvek2",
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
        title: "MANGA TERMOENCOGIBLE",
        subtitle: "Disponible en papel",
        icon1: "none.svg",
        icon1Text: false,
        icon2: false,
        icon2Text: false,
        icon3: false,
        icon3Text: false,
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
        title: "SEÑALIZACIÓN Y BOLETAJE",
        subtitle: "Disponible en papel",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        icon3: "shrek.svg",
        icon3Text: "Tyvek3",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card3.png",
    },

]





export const Card1Svg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.38 120.14">
        <defs>
            <style>
                .cls-1{'{'}fill:none;stroke:#1d1d1b;stroke-miterlimit:10;stroke-width:2px;{'}'}
            </style>
        </defs>
        <g id="Capa_2" data-name="Capa 2">
            <g id="Layer_3" data-name="Layer 3">
                <path
                    className="cls-1"
                    d="M83.64,64.53l9-5.06a1.67,1.67,0,0,0,.52-2.34L87,48.83A1.56,1.56,0,0,1,87,47l6-8.43a1.51,1.51,0,0,0-.52-2.2l-9.08-4.8a1.42,1.42,0,0,1-.78-1.69l1.69-10.11A1.55,1.55,0,0,0,82.86,18l-10.25-.39a1.51,1.51,0,0,1-1.42-1.17L68.33,6.55a1.54,1.54,0,0,0-2.07-1l-9.47,4A1.61,1.61,0,0,1,55,9.14L48.1,1.49a1.65,1.65,0,0,0-2.34,0L39,9.27a1.56,1.56,0,0,1-1.82.39L27.73,5.77a1.5,1.5,0,0,0-2.07,1l-2.73,10A1.69,1.69,0,0,1,21.51,18l-10.25.65a1.55,1.55,0,0,0-1.43,1.82l1.82,10.11a1.56,1.56,0,0,1-.78,1.69L1.79,37a1.65,1.65,0,0,0-.52,2.33l6.1,8.3a1.56,1.56,0,0,1,0,1.82l-6,8.43a1.51,1.51,0,0,0,.52,2.2L11,64.91a1.42,1.42,0,0,1,.78,1.69L10.09,76.72a1.54,1.54,0,0,0,1.43,1.81l10.24.39a1.52,1.52,0,0,1,1.43,1.17L26,90a1.55,1.55,0,0,0,2.08,1l9.47-4a1.59,1.59,0,0,1,1.81.39L46.28,95a1.65,1.65,0,0,0,2.33,0l6.75-7.79a1.55,1.55,0,0,1,1.81-.39l9.47,3.89a1.51,1.51,0,0,0,2.08-1l2.72-10a1.69,1.69,0,0,1,1.43-1.17l10.25-.65a1.54,1.54,0,0,0,1.42-1.81L82.73,66a1.49,1.49,0,0,1,.91-1.42ZM47.19,76.2A27.89,27.89,0,1,1,75.08,48.31,27.93,27.93,0,0,1,47.19,76.2ZM69.72,86l7.55,25.92a1.13,1.13,0,0,1-1.43,1.42l-9.21-2.72a1,1,0,0,0-1.17.39l-6,7.65a1.18,1.18,0,0,1-2.07-.39h0L50.33,93M44.44,93l-8.35,25.4a1.12,1.12,0,0,1-1.94.39l-6-7.66A1.06,1.06,0,0,0,27,110.7l-9.21,2.72A1.18,1.18,0,0,1,16.25,112h0l8.83-25.37M65,45.2l-8,6.74,2.46,10.25A2.27,2.27,0,0,1,56,64.66l-8.82-5.58-8.95,5.57a2.28,2.28,0,0,1-3.37-2.46l2.46-10.25-8-6.74a2.21,2.21,0,0,1,1.3-3.89l10.5-.78,4-9.73a2.26,2.26,0,0,1,4.15,0l4,9.73,10.51.78A2.18,2.18,0,0,1,65,45.2Z"
                />
            </g>
        </g>
    </svg>
);
export const Card2Svg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 139.83 120.14">
        <defs>
            <style>
                .cls-1{'{'}fill:none;stroke:#1d1d1b;stroke-miterlimit:10;stroke-width:2px;{'}'}
            </style>
        </defs>
        <g id="Capa_2" data-name="Capa 2">
            <g id="Layer_3" data-name="Layer 3">
                <polyline className="cls-1" points="42.75 47.37 18.22 47.37 18.22 30.75" />
                <line className="cls-1" x1="36.62" y1="65.57" x2="7.73" y2="65.57" />
                <circle className="cls-1" cx="18.22" cy="27.38" r="3.36" />
                <circle className="cls-1" cx="63.58" cy="60.69" r="3.36" />
                <circle className="cls-1" cx="69.62" cy="4.36" r="3.36" />
                <circle className="cls-1" cx="4.36" cy="65.57" r="3.36" />
                <polyline className="cls-1" points="97.07 47.37 121.61 47.37 121.61 30.75" />
                <line className="cls-1" x1="103.21" y1="65.57" x2="132.1" y2="65.57" />
                <circle className="cls-1" cx="121.61" cy="27.38" r="3.36" />
                <circle className="cls-1" cx="135.46" cy="65.57" r="3.36" />
                <polyline className="cls-1" points="97.07 83.78 121.61 83.78 121.61 100.4" />
                <circle className="cls-1" cx="121.61" cy="103.77" r="3.36" />
                <polyline className="cls-1" points="42.75 83.78 18.22 83.78 18.22 100.4" />
                <circle className="cls-1" cx="18.22" cy="103.77" r="3.36" />
                <line className="cls-1" x1="69.62" y1="31.74" x2="69.62" y2="7.99" />
                <path className="cls-1" d="M98.11,65.57A28.5,28.5,0,1,0,53.45,89,12.62,12.62,0,0,1,59,99.38v4.39H79.76v-4a12.25,12.25,0,0,1,5.42-10.28A28.45,28.45,0,0,0,98.11,65.57Z" />
                <path className="cls-1" d="M72.73,116.83a3.37,3.37,0,0,1-6.73,0" />
                <rect className="cls-1" x="58.98" y="103.77" width="20.78" height="13.06" />
                <line className="cls-1" x1="58.98" y1="116.83" x2="79.76" y2="112.37" />
                <line className="cls-1" x1="58.98" y1="113.04" x2="79.76" y2="108.59" />
                <line className="cls-1" x1="58.98" y1="109.26" x2="79.76" y2="104.8" />
                <line className="cls-1" x1="63.58" y1="103.63" x2="63.58" y2="64.06" />
                <circle className="cls-1" cx="75.26" cy="60.69" r="3.36" />
                <line className="cls-1" x1="75.26" y1="103.63" x2="75.26" y2="64.06" />
            </g>
        </g>
    </svg>
);
export const Card3Svg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 156.77 118.39">
        <defs>
            <style>
                .cls-11{'{'}fill:none;{'}'}.cls-11,.cls-22{'{'}stroke:#1d1d1b;stroke-miterlimit:10;stroke-width:2px;{'}'}.cls-22{'{'}fill:#fff;{'}'}
            </style>
        </defs>
        <g id="Capa_2" data-name="Capa 2">
            <g id="Layer_3" data-name="Layer 3">
                <circle className="cls-11" cx="35.73" cy="10.95" r="9.95" />
                <path className="cls-11" d="M35.73,1H145.81a10,10,0,1,1,0,19.91H35.73" />
                <circle className="cls-11" cx="35.73" cy="34.44" r="9.95" />
                <path className="cls-11" d="M35.73,24.48H145.81a10,10,0,1,1,0,19.91H35.73" />
                <rect className="cls-22" x="59.21" y="24.48" width="79.63" height="92.9" />
                <rect className="cls-22" x="66.87" y="30.1" width="64.32" height="42.85" />
                <polyline className="cls-11" points="66.87 66.34 90.86 46.15 103.11 66.34 117.66 37.22 131.19 61.11" />
                <line className="cls-11" x1="66.87" y1="78.59" x2="131.19" y2="78.59" />
                <line className="cls-11" x1="66.87" y1="85.99" x2="131.19" y2="85.99" />
                <line className="cls-11" x1="66.87" y1="93.39" x2="131.19" y2="93.39" />
                <line className="cls-11" x1="66.87" y1="100.8" x2="131.19" y2="100.8" />
                <line className="cls-11" x1="35.73" y1="1" x2="8.68" y2="1" />
                <line className="cls-11" x1="19.57" y1="5.76" x2="31.82" y2="5.76" />
                <line className="cls-11" x1="25.69" y1="10.19" y2="10.19" />
                <line className="cls-11" x1="18.55" y1="14.27" x2="23.14" y2="14.27" />
            </g>
        </g>
    </svg>
);
export const Card4Svg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160.9 114.2">
        <defs>
            <style>
                .cls-1{'{'}fill:none;stroke-width:2px;{'}'}
                .cls-1,.cls-3,.cls-4{'{'}stroke:#1d1d1b;{'}'}
                .cls-1,.cls-3{'{'}stroke-miterlimit:10;{'}'}
                .cls-2{'{'}fill:#1d1d1b;{'}'}
                .cls-3,.cls-4{'{'}fill:#fff;stroke-width:1.51px;{'}'}
                .cls-4{'{'}stroke-linecap:round;stroke-linejoin:round;{'}'}
            </style>
        </defs>
        <g id="Capa_2" data-name="Capa 2">
            <g id="Layer_3" data-name="Layer 3">
                <rect className="cls-1" x="1" y="9.4" width="130.74" height="103.8" rx="8.61" />
                <line className="cls-1" x1="1" y1="29.21" x2="131.74" y2="29.21" />
                <path className="cls-1" d="M52.63,1H80.1a2.64,2.64,0,0,1,2.64,2.64V9.4a0,0,0,0,1,0,0H50a0,0,0,0,1,0,0V3.64A2.64,2.64,0,0,1,52.63,1Z" />
                <circle className="cls-2" cx="11.3" cy="37.13" r="0.55" />
                <circle className="cls-2" cx="21.18" cy="37.13" r="0.55" />
                <circle className="cls-2" cx="31.07" cy="37.13" r="0.55" />
                <circle className="cls-2" cx="40.95" cy="37.13" r="0.55" />
                <circle className="cls-2" cx="50.84" cy="37.13" r="0.55" />
                <circle className="cls-2" cx="60.72" cy="37.13" r="0.55" />
                <circle className="cls-2" cx="70.61" cy="37.13" r="0.55" />
                <circle className="cls-2" cx="80.49" cy="37.13" r="0.55" />
                <circle className="cls-2" cx="90.38" cy="37.13" r="0.55" />
                <circle className="cls-2" cx="100.26" cy="37.13" r="0.55" />
                <circle className="cls-2" cx="110.14" cy="37.13" r="0.55" />
                <circle className="cls-2" cx="120.03" cy="37.13" r="0.55" />
                <circle className="cls-2" cx="11.3" cy="46.37" r="0.55" />
                <circle className="cls-2" cx="21.18" cy="46.37" r="0.55" />
                <circle className="cls-2" cx="31.07" cy="46.37" r="0.55" />
                <circle className="cls-2" cx="40.95" cy="46.37" r="0.55" />
                <circle className="cls-2" cx="50.84" cy="46.37" r="0.55" />
                <circle className="cls-2" cx="60.72" cy="46.37" r="0.55" />
                <circle className="cls-2" cx="70.61" cy="46.37" r="0.55" />
                <circle className="cls-2" cx="80.49" cy="46.37" r="0.55" />
                <circle className="cls-2" cx="90.38" cy="46.37" r="0.55" />
                <circle className="cls-2" cx="100.26" cy="46.37" r="0.55" />
                <circle className="cls-2" cx="110.14" cy="46.37" r="0.55" />
                <circle className="cls-2" cx="120.03" cy="46.37" r="0.55" />
                {/* Agrega el resto de los círculos aquí */}
                <path className="cls-3" d="M159.74,19.68,109.59,67.39,104,68l.89-5.58L155,14.71a1.3,1.3,0,0,1,1.84,0l2.94,3.09A1.3,1.3,0,0,1,159.74,19.68Z" />
                <line className="cls-3" x1="104.86" y1="62.42" x2="109.41" y2="67.2" />
                <line className="cls-3" x1="125.24" y1="43.03" x2="129.97" y2="48.01" />
                <line className="cls-3" x1="109.81" y1="62.26" x2="124.4" y2="48.38" />
                <line className="cls-4" x1="103.97" y1="68" x2="103.33" y2="68.61" />
            </g>
        </g>
    </svg>
);

const cardItems = [
    {
        title: "Quality",
        desc: "Our materials and personal service guarantee the quality of your labels and packaging.",
        img: <Card1Svg />,
        delay: 200,
        bgsz: "90%",
    },
    {
        title: "Innovation",
        desc: "We work with ultimate technology in our site ensuring premium printing in every label and packaging produced.",
        img: <Card2Svg />,
        delay: 400,
        bgsz: "100%",
    },
    {
        title: "Rapidly",
        desc: "Delivery time distinguishes us, every day we optimize it to deliver your orders in the shortest possible time.",
        img: <Card3Svg />,
        delay: 600,
        bgsz: "190%",
    },
    {
        title: "Design",
        desc: "We have a design team to capture together the history of your product on its label, in this way we can offer you 360° service to shine on the shelf.",
        img: <Card4Svg />,
        delay: 800,
        bgsz: "100%",
    },

]


const containerMap = (data, index, theme) => {
    return (
        <>
            <Container2
                inverseOrder={data.inverseOrder}
                title={data.title}
                subtitle={data.subtitle}
                icon1={data.icon1}
                icon1Text={data.icon1Text}
                icon2={data.icon2}
                icon2Text={data.icon2Text}
                icon3={data.icon3}
                icon3Text={data.icon3Text}
                listTitle={data.listTitle}
                listItems={data.listItems}
                backgroundImage={data.backgroundImage}
                theme={theme}
            />
        </>
    );
};

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
const AsesoriaIntegral = () => {


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

    const subMenuFooter = [{

    }]
    return (
        <PageStyles theme={theme}>
            <Header
                logo={"/assets/Logo_etimex oficial.png"}
                theme={theme}
            />
            <HeroContainer
                backgroundImage={"/assets/asesoria-integral/hero3.png"}
                text1={<>
                    <span className='strokeText'>Integral</span>
                </>}
                text2={"advises"}
                text3={""}
                theme={"dark"}
                h1Only={true}
            />
            <div className='small-cards'>
                <div className='small-cards-container'>

                    {

                        cardItems.map((card, index) => (
                            <Card2 delay={card.delay}>
                                <div className='small-card-title'>
                                    {card.title}
                                </div>
                                <div className='small-card-img'>
                                    {card.img}
                                </div>
                                <div className='small-card-desc'>
                                    <span>{card.desc}</span>
                                </div>

                            </Card2>

                        ))
                    }

                </div>

            </div>
            <HeroContainer
                backgroundImage={"/assets/asesoria-integral/hero2.png"}
                text1={<>
                    <span className='strokeText'>We generate solutions </span>
                </>}
                text2={<>
                    <span style={{
                        width: '100%',
                        display: 'flex',
                        maxWidth: '1920px',
                        minWidth: '1920px',
                        justifyContent: 'center',
                    }}>
                        one step forward.
                    </span>
                </>}
                text3={`We are the bond between the product and the consumer, with the best quality scrupulous on the answer factor and delivery time. In Etimex we recommend printings and materials according to the project objective, type of brand, product, reach, and budgets.`}
                theme={theme}
                theme2={"light"}
                h1Only={true}
            />

            <Footer theme={theme} tabItems={tabItems} />

        </PageStyles>
    )
}

export default AsesoriaIntegral
