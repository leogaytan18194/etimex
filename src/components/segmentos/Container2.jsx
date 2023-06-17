import React, { useEffect, useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Container2Styles } from '../../styles/Styles';

const Container2 = ({ inverseOrder, title, description, image, titleItem, index }) => {
    const containerStyle = inverseOrder ? 'container inverse' : 'container';
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.8,
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

    const fade = useSpring({
        opacity: isVisible ? 1 : 0,
        delay: isVisible ? 300 * index : 0,
    });

    const rotate = useSpring({
        transform: isVisible ? 'rotate(0deg)' : 'rotate(-90deg)',
        delay: isVisible ? 300 * index + 100 : 0,
    });

    const scale = useSpring({
        transform: isVisible ? 'scale(1)' : 'scale(0)',
        delay: isVisible ? 300 * index + 200 : 0,
    });

    const fadeSlide = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
        delay: isVisible ? 300 * index + 300 : 0,
    });
    const moveDown = useSpring({
        from: { transform: isVisible ? "translateY(-100%)" : "translateY(0)" },
        to: { transform: "translateY(0)" },
        delay: isVisible ? 300 * index : 0,
    });

    const moveRight = useSpring({
        from: { transform: "translateX(100px)" },
        to: { transform: "translateX(0)" },
        delay: isVisible ? 100 * index : 0, // Aumentar el delay
    });

    const spinZoom = useSpring({
        from: { transform: isVisible ? "scale(0) rotate(0deg)" : "scale(1) rotate(360deg)" },
        to: { transform: "scale(1) rotate(360deg)" },
        delay: isVisible ? 300 * index : 0,
    });

    // Estas dos animaciones son infinitas, por lo que no es útil agregar la condición `isVisible`
    // Ya que, sin importar si el elemento es visible o no, la animación se ejecutará continuamente

    const popIn = useSpring({
        from: { scale: isVisible ? 0 : 1 },
        to: { scale: 1 },
        config: { tension: 200, friction: 20 },
        delay: isVisible ? 300 * index : 0,
    });

    const swing = useSpring({
        from: { transform: isVisible ? "rotate(0deg)" : "rotate(30deg)" },
        to: { transform: "rotate(30deg)" },
        config: { tension: 180, friction: 12 },
        delay: isVisible ? 300 * index : 0,
    });

    const bounce = useSpring({
        from: { transform: isVisible ? 'scale(1.05)' : 'scale(1)' },
        to: { transform: 'scale(1)' },
        config: { tension: 180, friction: 12 },
        delay: isVisible ? 300 * index : 0,
    });

    return (
        <animated.div  ref={ref}>
            <Container2Styles>
                {titleItem && <animated.div style={scale} className='container-title'>
                    {titleItem}
                </animated.div>}

                <animated.div className={containerStyle}>
                    <animated.div style={scale} className='image-container'>
                        <img src={image} alt='' />
                    </animated.div>
                    <div className='text-container'>
                        <animated.h1 style={fadeSlide}>{title}</animated.h1>
                        <animated.p style={scale}>{description}</animated.p>
                    </div>
                </animated.div>
            </Container2Styles>
        </animated.div>
    );
};

export default Container2;
