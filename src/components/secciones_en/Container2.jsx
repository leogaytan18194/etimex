import React, { useState, useEffect, useRef } from 'react';
import { ContainerStyles } from '../../styles/Styles';
import { useSpring, animated } from 'react-spring';

const Icon = ({ src, alt, text, isVisible, theme }) => {
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
                <img src={`/assets/svg/${theme === 'dark' ? src : `l-${src}`}`} alt={alt} />
            </div>
            <div className='text-icon'>
                <p>{text}</p>
            </div>
        </animated.div>
    );
};

const Container2 = ({ inverseOrder, title, subtitle, subtitle2, icon1, icon1Text, icon2, icon2Text, icon3, icon3Text, listTitle, listItems, listTitle2, listItems2, backgroundImage, theme }) => {
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
        <animated.div ref={ref} style={{ height: '100%' }}>
            <ContainerStyles theme={theme}>

                <animated.div className={containerStyle}>
                    <animated.div className='block block-left'>
                        <animated.div className='block-text-container'>
                            <animated.div style={slideInFromBottom} className='txt-container'>
                                <animated.h2>{title}</animated.h2>
                                <animated.p style={slideInFromBottom}>{subtitle}</animated.p>
                                <animated.p style={slideInFromBottom}>{subtitle2}</animated.p>
                            </animated.div>
                            <animated.div className='list-container'>
                                <animated.h3 style={slideInFromLeft}>{listTitle}</animated.h3>
                                <animated.ul style={slideInFromBottom}>
                                    {listItems.map((item, index) => <li key={index}>{item.name}</li>)}
                                </animated.ul>
                            </animated.div>
                            <animated.div className='list-container'>
                                <animated.h3 style={slideInFromLeft}>{listTitle2}</animated.h3>
                                <animated.ul style={slideInFromBottom}>
                                    {listItems2.map((item, index) => <li key={index}>{item.name}</li>)}
                                </animated.ul>
                            </animated.div>

                        </animated.div>
                    </animated.div>

                    <animated.div style={scale} className='image-container'>
                        <img src={backgroundImage} alt='' />
                    </animated.div>

                </animated.div>
            </ContainerStyles>
        </animated.div>
    );
};

export default Container2;