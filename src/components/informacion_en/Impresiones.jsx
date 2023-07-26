import "./impresiones.scss";
import { useSpring, animated } from "react-spring";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";


export const FadeInScale = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const props = useSpring({
    to: { opacity: isVisible ? 1 : 0, transform: isVisible ? 'scale(1)' : 'scale(0.5)' },
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
        threshold: 0.6,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return (
    <animated.span style={props} ref={ref}>
      {children}
    </animated.span>
  );
}
export default function Impresiones() {


  return (
    <div className="impresiones" id="impresiones" >

      <div className="wrapper">


        <h2 className="helvetica">   <FadeInScale><b>Nuestra tecnología no tiene límite</b>, desde tiradas cortas, grandes y la flexibilidad para el desarrollo de diferentes empaques.      </FadeInScale></h2>

      </div>
    </div>
  );
}
