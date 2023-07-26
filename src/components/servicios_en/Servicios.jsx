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
      <animated.h2 style={fadeInProps} className="ITBold">Services</animated.h2>
      <div className="container">
        <animated.div  style={slideProps4}>
          <Link to="/en/services/materials" className="item">
            <img
              src="assets/servicios1.png"
              alt="Materiales"
            />
            <h3>Materials</h3>
          </Link>

        </animated.div>
        <animated.div  style={slideProps2}>

          <Link to="/en/services/embellishments" className="item">
            <img
              src="assets/servicios2.png"
              alt="Acabados"
            />
            <h3>Embellishmt finishes</h3>
          </Link>
        </animated.div>

        <animated.div  style={slideProps}>

          <Link to="/en/services/integral-advises" className="item">
            <img
              src="assets/servicios3.png"
              alt=""
            />
            <h3>Comprehensive advice</h3>
          </Link>
        </animated.div>
      </div>
    </div>
  );
}
