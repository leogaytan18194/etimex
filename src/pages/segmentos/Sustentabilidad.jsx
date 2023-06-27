import React, { useState, useEffect, useRef } from 'react';
import { FooterStyles, PageStyles } from '../../styles/Styles'
import Header from '../../components/segmentos/Header'
import Container from '../../components/segmentos/Container'
import HeroContainer2 from '../../components/segmentos/HeroContainer2'
import Footer from '../../components/segmentos/Footer'
import Container2 from '../../components/segmentos/Container2'
import { useSpring, animated } from 'react-spring';
import Header2 from '../../components/segmentos/Header2';
import Contact2 from '../../components/contact/Contact2';

const containerData = [
    {
        inverseOrder: false,
        title: "Vinos",
        subtitle: "Disponible en papel",
        icon1: "bond.svg",
        icon1Text: "Bondes",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', },
            { id: 2, name: 'BOPP blanco', },
            { id: 3, name: 'Vinil blanco', },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card1.png",
    },
    {
        inverseOrder: true,
        title: "Licores",
        subtitle: "Disponible en papel",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/vinos-y-licores/cards/card2.png",
    },
    {
        inverseOrder: false,
        title: "Cerveza artesanal",
        subtitle: "Disponible en papel",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
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
        description: `Agrega motivos metálicos y holográficos en frío especial para materiales lisos y mangas termoencogibles.`,
        image: "/assets/vinos-y-licores/cards/card5.png",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "EMBOSS",
        description: "Brinda una experiencia táctil y realza patrones de diseño específicos en la superficie de tu etiqueta.",
        image: "/assets/vinos-y-licores/cards/card6.png",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "DEBOSS",
        description: "Genera un aspecto de profundidad acentuando atributos distintivos para una imagen elegante y sofisticada.",
        image: "/assets/vinos-y-licores/cards/card7.png",
        titleItem: false,
    },
    {
        inverseOrder: false,
        title: "SILK SCREEN",
        description: "Aporta un look premium y genera contraste visual con un aspecto metalizado hecho a tu medida.",
        image: "/assets/vinos-y-licores/cards/card8.png",
        titleItem: false,
    },
    {
        inverseOrder: true,
        title: "CAST & CURE",
        description: "Agrega efectos de hologramas como una excelente herramienta de diferenciación, valor agregado y prevención de falsificación.",
        image: "/assets/vinos-y-licores/cards/card9.png",
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

const Sustentabilidad = () => {


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

    const socialIcons = [
        {
          ico: "/assets/svg/in.svg",
          alt: "LinkedIn",
          link: "http://www.linkedin.com"
        },
        {
          ico: "/assets/svg/ins.svg",
          alt: "Instagram",
          link: "http://www.instagram.com"
        },
        {
          ico: "/assets/svg/fb.svg",
          alt: "Facebook",
          link: "http://www.facebook.com"
        }
      ];
    return (
        <PageStyles theme={theme}>
            <Header2
                logo={"/assets/svg/logo.svg"}
                theme={"dark"}
            />
            <HeroContainer2
                backgroundImage={"/assets/sustentabilidad/hero.webp"}
                text1={<>
                    <span className='strokeText'>Planta libre</span>
                </>}
                text2={"de CO2"}
                text3={`Contribuimos a un planeta más sostenible
                adecuando etiquetas y empaques, 
                siempre comprometidos con la calidad.`}
                theme={"light"}
                h1Only={true}
                theme2={"light"}
                flexDirection="column"
            />
            <div className="logos-sustentabilidad">
                <img src="/assets/sustentabilidad/logos.svg" alt=""/>
            </div>
            <div className="contact-section">
                <Contact2 />
            </div>
            <FooterStyles theme={"dark"} heigth={""} >

                <div className="footer-container-green">
                    <div className='footer-items'>
                        <ul className="footer-list">
                            <li>Copyright © 2023 Etimex</li>
                            <li>Contacto: info@etimex.com</li>
                            <li>81 8479 0800</li>
                            <li>+52 (81) 3116 6651</li>
                            <li>Dir. San Ángel 201, Churubusco, 64590 Monterrey, N.L. México</li>
                        </ul>
                        <div className="social-icons">
                            {socialIcons.map((social, index) => (
                                <a href={social.link} target='_blank' rel="noreferrer">
                                    <img src={social.ico} alt={social.alt} />
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
            </FooterStyles>

        </PageStyles>
    )
}

export default Sustentabilidad