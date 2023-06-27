import { Link } from "react-router-dom";
import "./servicios.scss";
import { useSpring, animated, useSprings } from "react-spring";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";


export default function Servicios() {
  const [isVisible, setIsVisible] = useState(false)
  const fadeInProps = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    delay: 300,
    config: { duration: 666 },
  });

  const slideProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(120px)",
    from: { opacity: 0, transform: "translateY(120px)" },
    delay: 100,
    config: { duration: 666 },
  });
  const slideProps2 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0px)" : "translateX(120px)",
    from: { opacity: 0, transform: "translateX(120px)" },
    delay: 100,
    config: { duration: 666 },
  });
  const slideProps3 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0px)" : "translateX(-120px)",
    from: { opacity: 0, transform: "translateX(-120px)" },
    delay: 100,
    config: { duration: 666 },
  });
  const slideProps4 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(-120px)",
    from: { opacity: 0, transform: "translateY(-120px)" },
    delay: 100,
    config: { duration: 666 },
  });
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // if (entry.isIntersecting && !isVisible) {
        // }
        setIsVisible(entry.isIntersecting );
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
    <div className="servicios" id="servicios" ref={ref}>
      <animated.h1 style={fadeInProps} className="ITBold">Servicios</animated.h1>
      <div className="container">
        <animated.div  style={slideProps4}>
          <Link to="servicios/materia-prima" className="item">
            <img
              src="assets/servicios1.jpg"
              alt="Materias primas"
            />
            <h3>Materias Primas</h3>
          </Link>

        </animated.div>
        <animated.div  style={slideProps2}>

          <Link to="servicios/acabados" className="item">
            <img
              src="assets/servicios2.png"
              alt="Acabados"
            />
            <h3>Acabados</h3>
          </Link>
        </animated.div>
      </div>
      <div className="container">
        <animated.div  style={slideProps3}>

          <Link to="servicios/tintas" className="item">
            <img
              src="assets/servicios3.png"
              alt="Tintas"
            />
            <h3>Tintas</h3>
          </Link>
        </animated.div>
        <animated.div  style={slideProps}>

          <Link to="servicios/asesoria-integral" className="item">
            <img
              src="assets/servicio4.png"
              alt=""
            />
            <h3>Asesoría Integral</h3>
          </Link>
        </animated.div>
      </div>
    </div>
  );
}
