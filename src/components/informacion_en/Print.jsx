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
        if (entry.isIntersecting && !isVisible) {
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
    <div className="print" id="print" ref={ref}>
      <div className="wrapper">
        <animated.h2 style={slideInFromLeftProps} className="ITBold">
          Print
        </animated.h2>
        <animated.h3 style={slideInFromRightProps}>
          to connect
        </animated.h3>
        <animated.h4 style={fadeInProps} className="helvetica">
        Differentiating ourselves at the point of sale is the most important thing to capture attention, our range of materials, finishes in digital format is the future.
        </animated.h4>
      </div>
    </div>
  );
}
