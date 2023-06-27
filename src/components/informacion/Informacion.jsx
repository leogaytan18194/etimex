import { useSpring, animated } from "react-spring";
import "./informacion.scss";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export const FadeInFromLeft = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const props = useSpring({
    to: { opacity: isVisible ? 1 : 0, marginLeft: isVisible ? 0 : -500 },
  });

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return (
    <animated.div style={props} ref={ref}>
      {children}
    </animated.div>
  );
}
function FadeInFromRight({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  const props = useSpring({
    to: { opacity: isVisible ? 1 : 0, marginRight: isVisible ? 0 : -500 },
  });

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);


  return (
    <animated.div style={props} ref={ref}>
      {children}
    </animated.div>
  );
}
export default function Informacion() {

  return (
    <div className="informacion" id="informacion">
      <div className="right">
        <div className="wrapper">
          <p className="helvetica"><FadeInFromLeft>Etimex brinda soluciones de impresión, a través de una asesoría personalizada, ofreciendo los materiales de la mas </FadeInFromLeft><FadeInFromRight>alta gama en el mundo, asegurando distinción, calidad de impresión y tiempo de entrega únicos en el mercado. </FadeInFromRight></p>
        </div>
      </div>
    </div>
  );
}
