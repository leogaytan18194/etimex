import React, { useState, useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';
import { CardStylesSecciones } from '../../styles/Styles';

function Card({ delay, title, desc, bg, bgsz }) {
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
        threshold: 0.2,
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
    <CardStylesSecciones ref={ref} style={animationProps} bg={bg} bgsz={bgsz}>
      <div className='card-container'>
        <div className='card-title'>
          {title}
        </div>
        <div className='card-desc'>
          {desc}
        </div>
      </div>
    </CardStylesSecciones>
  );
}

export default Card;
