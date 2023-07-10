import "./intro.scss";
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

export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="wrapper">
        <div className="into-txt">
          <FadeInScale>
            <p className="helvetica">Detrás de cada etiqueta y empaque hay pasión e ingenio de un equipo
              dedicado que busca la perfección y la conexión de tu marca con tu consumidor.
              <br />
              <br />
              Déjanos contar tu historia.
            </p>
          </FadeInScale>
        </div>
      </div>
    </div>
  );
}
