import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSpring, animated, useTransition } from 'react-spring';
import { CustomLi2, HeaderStyles2, MenuMobile } from '../../styles/Styles'
import { HashLink } from 'react-router-hash-link';

const Header2 = ({ logo, theme }) => {
    const location = useLocation();
    const { pathname } = location;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Crear una animación de desplazamiento desde la derecha
    const slideInFromRight = useSpring({
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0)' },
        delay: 300,
    });

    const spin = useSpring({
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)', },
        config: { duration: 1000 },
    });
    const bounce = useSpring({
        to: [{ transform: 'translateY(0)' }, { transform: 'translateY(-20px)' }],
        from: [{ transform: 'translateY(-20px)' }, { transform: 'translateY(0px)' }],
        config: { tension: 200, friction: 10 },
    });

    const textTyping = useSpring({
        to: { width: '100%' },
        from: { width: '0%' },
    });

    const pulse = useSpring({
        to: [{ transform: 'scale(1.1)' }, { transform: 'scale(0.9)' }, { transform: 'scale(1)' }],
        from: { transform: 'scale(1)' },
    });

    const rotateIn = useSpring({
        to: [{ opacity: 1, transform: 'rotate(0deg)' }],
        from: { opacity: 0, transform: 'rotate(-180deg)' },
    });

    const containerAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { tension: 200, friction: 20 },
    });
    const textAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { tension: 200, friction: 20 },
        delay: 500,
    });
    const logoAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { tension: 200, friction: 20 },
        delay: 300,
    });
    const textAnimation2 = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { tension: 200, friction: 20 },
        delay: 600,
    });
    const textAnimation3 = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { tension: 200, friction: 20 },
        delay: 700,
    });
    const textAnimation4 = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { tension: 200, friction: 20 },
        delay: 800,
    });
    const textAnimation5 = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { tension: 200, friction: 20 },
        delay: 900,
    });
    const textAnimation6 = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { tension: 200, friction: 20 },
        delay: 1000,
    });


    const circleAnimation = useSpring({
        from: { opacity: 0, transform: 'scale(0) rotate(180deg)', },
        to: { opacity: 1, transform: 'scale(1) rotate(-180deg)', },
        config: { tension: 200, friction: 20 },
        delay: 1000,
    });

    const [lastScrollPos, setLastScrollPos] = useState(0);
    const [shouldShowHeader, setShouldShowHeader] = useState(true);

    const transitions = useTransition(shouldShowHeader, {
        from: { opacity: 0, transform: 'translateY(-100%)' },
        enter: { opacity: 1, transform: 'translateY(0%)' },
        leave: { opacity: 0, transform: 'translateY(-100%)' },
        config: {
            tension: 220,
            friction: 60,
        },
    });

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const shouldShow = lastScrollPos > currentScrollPos || currentScrollPos < 50;

            setShouldShowHeader(shouldShow);
            setLastScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollPos]);

    const isMobile = window.innerWidth <= 980;

    const [showMenu1, setShowMenu1] = useState(false);

    const [showMenuMo, setShowMenuMo] = useState(false);
    const load = () => {
        setShowMenuMo(false);
    }
    const [lang, setLang] = useState("ENG");
    return (
        <HeaderStyles2 theme={theme}>
            {transitions((styles, item) =>
                item
                    ? <>

                        {isMobile ? <animated.div style={styles} className="menu-container m-mobile">
                            <ul style={{
                                gap: '20px'
                            }}>
                                <li className="logov2" >
                                    <HashLink to="/en/#home">
                                        <animated.img src={`${logo}`} alt="Logo" style={logoAnimation} />
                                    </HashLink>
                                </li>


                                <MenuMobile onClick={() => setShowMenuMo(prev => !prev)} theme={theme}>
                                    <div class={`menu-button ${showMenuMo ? "a-menu-button" : ""} `}>
                                        <div class="menu-line"></div>
                                    </div>

                                </MenuMobile>
                                <div style={{ position: 'absolute', left: `${showMenuMo ? '0' : '100%'}`, opacity: `${showMenuMo === true ? 1 : 0}`, transition: 'all 0.3s' }} className='menu-mobile-container'>
                                    <CustomLi2 theme={theme} icon={`${pathname === '/sustentabilidad' ? "sustentabilidad" : ""}`} className={`${pathname === '/sustentabilidad' ? "activeMenu" : ""}`}>
                                        <Link to="/en/sustentabilidad">
                                            <animated.span style={textAnimation}>
                                                Sustentabilidad
                                            </animated.span>
                                        </Link>
                                    </CustomLi2>
                                    <CustomLi2 theme={theme} justify="end">
                                        <Link to="/sustentabilidad">
                                            <animated.span style={textAnimation6} className={`${theme === "dark" ? "item-lang-dark" : "item-lang-light"}`}>
                                                ES
                                            </animated.span>
                                        </Link>
                                    </CustomLi2>
                                </div>

                            </ul>

                        </animated.div> :
                            <animated.div style={{ ...styles }} className="menu-container m-web">
                                <ul style={{
                                    gap: '20px'
                                }}>
                                    <li className="logov2" >
                                        <HashLink to="/en/#home">
                                            <animated.img src={`${logo}`} alt="Logo" style={logoAnimation} />
                                        </HashLink>
                                    </li>
                                    <CustomLi2 theme={theme} icon={`${pathname === '/sustentabilidad' ? "sustentabilidad" : ""}`} className={`${pathname === '/sustentabilidad' ? "activeMenu" : ""}`}>
                                        <Link to="/en/sustentabilidad">
                                            <animated.span style={textAnimation}>
                                                Sustainability
                                            </animated.span>
                                        </Link>
                                    </CustomLi2>
                                    <CustomLi2 theme={theme} justify="end" style={{
                                        width: "96%",
                                    }}>
                                        <Link to="/sustentabilidad" className='no-link'>
                                            <animated.span style={textAnimation5} className={`${theme === "dark" ? "item-lang-dark" : "item-lang-light"}`}>
                                                ES
                                            </animated.span>
                                        </Link>
                                    </CustomLi2>
                                </ul>
                            </animated.div>}
                    </>
                    : "")}
        </HeaderStyles2>
    )
}

export default Header2