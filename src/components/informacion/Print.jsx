import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from 'react-spring';
import "./print.scss";

export default function Print() {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const slideInFromLeftProps = useSpring({
    transform: isVisible ? 'translateX(0px)' : 'translateX(-100px)',
    from: { transform: 'translateX(-100px)' },
    opacity: isVisible ? 1 : 0,
    delay: 200,
    config: { duration: 1000 }
  });

  const slideInFromRightProps = useSpring({
    transform: isVisible ? 'translateX(0px)' : 'translateX(100px)',
    from: { transform: 'translateX(100px)' },
    opacity: isVisible ? 1 : 0,
    delay: 400,
    config: { duration: 1000 }
  });

  const fadeInProps = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    delay: 600,
    config: { duration: 1000 }
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
    <div className="print" id="print" ref={ref}>
      <div className="wrapper">
        <animated.h1 style={slideInFromLeftProps} className="ITBold">
          Print
        </animated.h1>
        <animated.h2 style={slideInFromRightProps}>
          to connect
        </animated.h2>
        <animated.h3 style={fadeInProps} className="helvetica">
          Diferenciarnos en el punto de venta es lo mas importante para capta la atención, nuestra gama de materiales, acabaos en formato digital es el futuro.
        </animated.h3>
      </div>
    </div>
  );
}
