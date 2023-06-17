import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSpring, animated } from 'react-spring';
import { CustomLi, HeaderStyles } from '../../styles/Styles'
import { HashLink } from 'react-router-hash-link';

const Header = ({ logo, theme }) => {
    const location = useLocation();
    const { pathname } = location;

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
        from: [{ transform: 'translateY(-20px)'}, {transform: 'translateY(0px)'} ],
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
    
      const circleAnimation = useSpring({
        from: { opacity: 0, transform: 'scale(0) rotate(180deg)', },
        to: { opacity: 1, transform: 'scale(1) rotate(-180deg)', },
        config: { tension: 200, friction: 20 },
        delay: 1000,
      });
    
      
    return (
        <HeaderStyles theme={theme}>
            <animated.div style={containerAnimation} className="menu-container">
                <ul>
                    <li className="logo" >
                        <HashLink to="/#home">
                            <animated.img src={`${logo}`} alt="Logo" style={circleAnimation} />
                        </HashLink>
                    </li>
                    <CustomLi theme={theme} icon={`${pathname === '/vinos-y-licores' ? "vinos" : ""}`} className='activeMenu'>
                        <Link to="/vinos-y-licores">
                            <animated.span style={textAnimation}>
                                Vinos y Licores
                            </animated.span>
                        </Link>
                    </CustomLi>
                    <CustomLi theme={theme} icon={""} >
                        <Link to="/alimentos-y-bebidas">
                            <animated.span style={textAnimation}>
                                Alimentos y bebidas
                            </animated.span>
                        </Link>
                    </CustomLi>
                    <CustomLi theme={theme} >
                        <Link to="/salud-y-belleza">
                            <animated.span style={textAnimation2}>
                                Salud y belleza
                            </animated.span>
                        </Link>
                    </CustomLi>
                    <CustomLi theme={theme} >
                        <Link to="/industrial">
                            <animated.span style={textAnimation3}>
                                Industrial
                            </animated.span>
                        </Link>
                    </CustomLi>
                    <CustomLi theme={theme} >
                        <Link to="/retail">
                            <animated.span style={textAnimation4}>
                                Retail
                            </animated.span>
                        </Link>
                    </CustomLi>
                    <CustomLi theme={theme} >
                        <Link to="/boletaje">
                            <animated.span style={textAnimation5}>
                                Boletaje
                            </animated.span>
                        </Link>
                    </CustomLi>
                </ul>
            </animated.div>
        </HeaderStyles>
    )
}

export default Header
