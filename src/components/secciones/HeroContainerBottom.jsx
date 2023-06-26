import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { HeroBackgroundSecciones } from '../../styles/Styles';


const HeroContainerBottom = ({ backgroundImage, text1, text2, theme, h1Only, text3, theme2 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef();

    // Configurar IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.5,
            }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    // Crear una animación de opacidad
    const fade = useSpring({
        opacity: isVisible ? 1 : 0,
        delay: 300,
    });
    const fadeSlide = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
        delay: isVisible ? 300 + 300 : 0,
    });
    const moveDown = useSpring({
        from: { transform: isVisible ? "translateY(-100%)" : "translateY(0)" },
        to: { transform: "translateY(0)" },
        delay: isVisible ? 300 : 0,
    });

    const moveRight = useSpring({
        from: { transform: "translateX(100px)" },
        to: { transform: "translateX(0)" },
        delay: isVisible ? 100 : 0, // Aumentar el delay
    });

    const spinZoom = useSpring({
        from: { transform: isVisible ? "scale(0) rotate(0deg)" : "scale(1) rotate(360deg)" },
        to: { transform: "scale(1) rotate(360deg)" },
        delay: isVisible ? 300 : 0,
    });

    // Estas dos animaciones son infinitas, por lo que no es útil agregar la condición `isVisible`
    // Ya que, sin importar si el elemento es visible o no, la animación se ejecutará continuamente   

    const slideInFromLeft = useSpring({
        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
        delay: isVisible ? 500 : 0,
        opacity: isVisible ? 1 : 0,
    });

    const slideInFromBottom = useSpring({
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        opacity: isVisible ? 1 : 0,
        delay: isVisible ? 500 : 0,
    });
    //     const [backgroundPositionY, setBackgroundPositionY] = useState(0);
    //   const [backgroundSize, setBackgroundSize] = useState('100vh');

    //   useEffect(() => {
    //     const handleScroll = () => {
    //       const scrollPosition = window.pageYOffset;
    //       const scaleFactor = 1 - scrollPosition * 0.001; // Ajusta la velocidad del efecto

    //       setBackgroundPositionY(scrollPosition);
    //       setBackgroundSize(`${scaleFactor * 100}vh`);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);



    return (
        <HeroBackgroundSecciones theme={theme} theme2={theme2}>
            <div className='hero bloque'
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    //backgroundPositionY: `${backgroundPositionY}px`, backgroundSize: backgroundSize
                }} ref={heroRef}>
                <div className='hero-text'>

                    {h1Only ?

                        <>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}>
                                <animated.h1 style={slideInFromBottom}>{text1}{` `}</animated.h1>
                                <animated.h1 style={slideInFromLeft}>{text2}</animated.h1>
                            </div>
                            <animated.p style={slideInFromLeft}>{text3}</animated.p>
                        </>
                        :
                        <>
                            <animated.h1 style={slideInFromBottom}>{text1}{` `}</animated.h1>
                            <animated.p style={slideInFromLeft}>{text2}</animated.p>
                        </>
                    }

                </div>
            </div>
        </HeroBackgroundSecciones>
    );
};

export default HeroContainerBottom;
