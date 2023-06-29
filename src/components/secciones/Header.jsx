import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSpring, animated, useTransition } from 'react-spring';
import { CustomLi, HeaderStylesSecciones, iones, MenuMobile } from '../../styles/Styles'
import { HashLink } from 'react-router-hash-link';

const Header = ({ logo, theme }) => {
    const location = useLocation();
    const { pathname } = location;

    console.log(pathname)
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

    const textAnimation7 = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { tension: 200, friction: 20 },
        delay: 1100,
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
    const [lang, setLang] = useState("USA");
    const [showMenuMo, setShowMenuMo] = useState(false);
    const load = () => {
        setShowMenuMo(false);
    }
    const menuList = [
        {
            item: 'inicio',
            route: 'inicio',
            section: 'home',
            animation: textAnimation,
            callback: () => {
                return;
            }
        },
        {
            item: 'servicios',
            route: 'servicios',
            section: 'servicios',
            animation: textAnimation2,
            callback: () => {
                return;
            }
        },
        {
            item: 'segmentos',
            route: 'segmentos',
            section: 'segmentos',
            animation: textAnimation3,
            callback: () => {
                return;
            }
        },
        {
            item: 'clientes',
            route: 'clientes',
            section: 'clientes',
            animation: textAnimation4,
            callback: () => {
                return;
            }
        },
        {
            item: 'contacto',
            route: 'contacto',
            section: 'contacto',
            animation: textAnimation5,
            callback: () => {
                return;
            }
        },
        {
            item: 'blog',
            route: '/blog',
            section: 'blog',
            animation: textAnimation6,
            callback: () => {
                return;
            }
        },
        {
            item: `${lang}`,
            route: '#',
            section: 'lang',
            animation: textAnimation7,
            callback: () => {
                setLang(prev => {
                    if (prev === "USA") {
                        return "MX";
                    }
                    if (prev === "MX") {
                        return "USA";
                    }
                });
            }
        },

    ]

    console.log(showMenuMo);
    return (
        <HeaderStylesSecciones theme={theme}>
            {transitions((styles, item) =>
                item
                    ? <>

                        {isMobile ? <animated.div style={styles} className="menu-container m-mobile">
                            <ul>
                                <li className="logo" >
                                    <HashLink to="/#inicio" smooth>
                                        <animated.img src={`${logo}`} alt="Logo" />
                                    </HashLink>
                                </li>


                                <MenuMobile onClick={() => setShowMenuMo(prev => !prev)} theme={theme}>
                                    <div class={`menu-button ${showMenuMo ? "a-menu-button" : ""} `}>
                                        <div class="menu-line"></div>
                                    </div>

                                </MenuMobile>
                                <div style={{ position: 'absolute', visibility: `${showMenuMo === true ? 1 : 0}`, left: `${showMenuMo === true ? "0" : "100%"}`, transition: 'all 0.3s' }} className='menu-mobile-container'>
                                    {
                                        menuList.map((menu, index) => (
                                            <CustomLi theme={theme} className={`${pathname.includes(menu.section) ? "activeMenu" : ""}`}>
                                                <HashLink to={`/#${menu.route}`} smooth>
                                                    <animated.span
                                                        onClick={menu.callback}
                                                        style={
                                                            menu.animation
                                                        } className={`${menu.section === "lang" ? theme === "dark" ? "item-lang-dark" : "item-lang-light" : ""}`}>
                                                        {menu.item}
                                                    </animated.span>
                                                </HashLink>
                                            </CustomLi>

                                        ))
                                    }

                                </div>

                            </ul>

                        </animated.div> :
                            <animated.div style={styles} className="menu-container m-web">
                                <ul>
                                    <li className="logo" >
                                        <HashLink to="/#inicio" smooth>
                                            <animated.img src={`${logo}`} alt="Logo" />
                                        </HashLink>
                                    </li>
                                    {
                                        menuList.map((menu, index) => (
                                            <CustomLi theme={theme} className={`${pathname.includes(menu.section) ? "activeMenu" : ""}`}>
                                                <HashLink to={`/#${menu.route}`} smooth>
                                                    <animated.span
                                                        onClick={menu.callback}
                                                        style={
                                                            menu.animation
                                                        } className={`${menu.section === "lang" ? theme === "dark" ? "item-lang-dark" : "item-lang-light" : ""}`}>
                                                        {menu.item}
                                                    </animated.span>
                                                </HashLink>
                                            </CustomLi>

                                        ))
                                    }
                                </ul>
                            </animated.div>}
                    </>
                    : "")}
        </HeaderStylesSecciones>
    )
}

export default Header