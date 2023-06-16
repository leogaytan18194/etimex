import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import "./clientes.scss";

export default function Clientes() {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const fadeInProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
    delay: 300,
    config: { duration: 1000 },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
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

  return (
    <animated.div 
      ref={ref} 
      style={{
        ...fadeInProps, 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}
      className="clientes" 
      id="clientes"
    >
      <h1 className="ITBold">Nuestros <b>clientes</b></h1>
      <h2 className="helvetica">En <b>Etimex</b> avanzamos, con el futuro de la impresión a la vanguardia de tu marca.</h2>
      <div className="container">
          <div className="item">
            <img src="assets/clientes.png" alt="Clientes Etimex" className="imgClientes"/>
          </div>
      </div>
      
    </animated.div>
  );
}
