import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

function Card({ delay, children }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const animationProps = useSpring({
    transform: isVisible ? 'translateY(30px)' : 'translateY(0px)',
    opacity: isVisible ? 1 : 0,
    delay,
    config: { duration: 500 },
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
    <animated.div ref={ref} style={animationProps} className="card featured">
      {children}
    </animated.div>
  );
}

export default Card;
