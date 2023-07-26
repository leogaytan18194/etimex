import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import "./clientes.scss";

export default function ClientesEn() {
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
        if(entry.isIntersecting && !isVisible){
          
          setIsVisible(true);
        }
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
      <h2 className="ITBold">Out <b>clients</b></h2>
      <h3 className="helvetica">At <b>Etimex</b> we move forward, with the future of printing at the forefront of your brand</h3>
      <div className="container">
          <div className="item">
            <img src="assets/clientes.png" alt="Clientes Etimex" className="imgClientes"/>
          </div>
          <div className='txt-more-clients'>
              <h3 className='helvetica'>and more...</h3>
          </div>
      </div>
      
    </animated.div>
  );
}
