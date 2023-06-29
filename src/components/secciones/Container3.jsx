import React, { useState, useEffect, useRef } from 'react';
import { ContainerStyles2 } from '../../styles/Styles';
import { useSpring, animated } from 'react-spring';

export const Icon = ({ src, alt, text, isVisible, theme }) => {
    const spin = useSpring({
        from: { transform: 'rotate(0deg)' }, // Comienza sin rotar
        to: { transform: 'rotate(360deg)' }, // Gira 360 grados
        delay: 300
    });
    const fade = useSpring({
        opacity: isVisible ? 1 : 0,
        delay: isVisible ? 500 : 0,
    });

    return (
        <animated.div style={fade} className='icon-text-container'>
            <div className='icon'>
                <img src={`/assets/acabados/icos/${theme === 'dark' ? src : `${src}`}`}
                    style={{
                        height: "30px",
                        width: "30px",
                    }}
                    alt={alt} />
            </div>
        </animated.div>
    );
};

const Container3 = ({ inverseOrder, title, subtitle, icon1, icon1Text, icon2, icon2Text, icon3, icon3Text, listTitle, listItems, backgroundImage, theme, icon4, icon4Text, icon5, icon5Text, }) => {
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

    const containerStyle = inverseOrder ? 'container inverse' : 'container';

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

    const backgroundFade = useSpring({
        opacity: isVisible ? 1 : 0,
        delay: 500,
        background: `url(${backgroundImage}) no-repeat center center`,
        backgroundSize: 'cover',
    });
    const shake = useSpring({
        to: [{ transform: 'translateX(-10px)' }, { transform: 'translateX(10px)' }, { transform: 'translateX(0)' }],
        from: { transform: 'translateX(0)' },
    });
    return (

        <ContainerStyles2 theme={"dark"} ref={ref} >
            <animated.div style={{
                ...scale, backgroundImage: `url(${backgroundImage})`,
            }} className='image-container-bg'>

                <animated.div className='block-text-container'>
                    <animated.div style={slideInFromBottom} className='txt-container'>
                        <animated.h2>{title}</animated.h2>
                        <animated.p style={{
                            ...slideInFromBottom,
                            maxWidth: "95%",
                            margin: "0 auto",

                        }}>{subtitle}</animated.p>
                    </animated.div>
                    <animated.div className='icon-container'
                        style={
                            {
                                justifyContent: (icon1 && !icon2 && !icon3) ? 'start' : "center",
                            }
                        }
                    >
                        {icon1 && <Icon src={icon1} alt='icon1' text={icon1Text} isVisible={isVisible} theme={"dark"} />}
                        {icon2 && <Icon src={icon2} alt='icon2' text={icon2Text} isVisible={isVisible} theme={"dark"} />}
                        {icon3 && <Icon src={icon3} alt='icon3' text={icon3Text} isVisible={isVisible} theme={"dark"} />}
                        {icon4 && <Icon src={icon4} alt='icon4' text={icon4Text} isVisible={isVisible} theme={"dark"} />}
                        {icon5 && <Icon src={icon5} alt='icon5' text={icon5Text} isVisible={isVisible} theme={"dark"} />}
                    </animated.div>
                </animated.div>
            </animated.div>
        </ContainerStyles2>

    );
};

export default Container3;