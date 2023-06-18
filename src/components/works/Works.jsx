import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';

import "./works.scss";

import { useRef } from "react";


export default function Works() {


  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "ETIMEX",
      desc:
        "Es una empresa que desde más de cinco décadas, se dedica a la industria de la producción de impresión de empaques y  etiquetas.",
      img:
        "./assets/bote2.png",
    },
    {
      id: "2",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const fadeInProps = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    delay: 200,
    config: { duration: 1000 }
  });

  const slideProps = useSpring({
    transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
    from: { transform: 'translateY(20px)' },
    delay: 400,
    config: { duration: 1000 }
  });

  const scaleProps = useSpring({
    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
    from: { transform: 'scale(0.9)' },
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
    <div className="works" id="works" ref={ref}>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <animated.img
                  style={scaleProps}
                  src="assets/bote2.png"
                  alt=""
                />
              </div>
              <div className="right">
                <div className="rightContainer">
                  <animated.h2 style={fadeInProps} className={`ITBold tset`}>
                    {d.title}
                  </animated.h2>
                  <animated.p style={slideProps} className={`helvetica delay1`}>
                    {d.desc}
                  </animated.p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("right")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}