import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import "./works.scss";

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
        "./assets/slider2.svg",
    },
    {
      id: "3",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "./assets/slider3.svg",
    },
  ];


  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);

    // Assuming the slide translate animation takes 500ms
    setTimeout(() => {
      const newSlide = way === "left"
        ? currentSlide > 0 ? currentSlide - 1 : 2
        : currentSlide < data.length - 1 ? currentSlide + 1 : 0;

      const newColor = data[newSlide].id === "2" ? "#5A141E" : data[newSlide].id === "3" ? "#A9D5C2" : "transparent";
      setBackgroundColor(newColor);
    }, 500); // This delay should be the same as the duration of your slide transition
  };

  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const fadeInProps = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    delay: 200,
    config: { duration: 1000 },
  });

  const slideProps = useSpring({
    transform: isVisible ? "translateY(0px)" : "translateY(20px)",
    from: { transform: "translateY(20px)" },
    delay: 400,
    config: { duration: 1000 },
  });

  const scaleProps = useSpring({
    transform: data[currentSlide].id !== "3" ? "scale(1)" : "scale(0.9)",
    from: { transform: "scale(0.9)" },
    delay: 600,
    config: { duration: 1000 },
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

  const springProps = useSpring({
    backgroundColor,
    config: { delay: 500 },
  });

  return (
    <animated.div className="works" id="works" ref={ref} style={springProps}>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)`, height: '100%' }}>
        {data.map((d, index) => (
          <div className="container" key={index}>
            <animated.div className="item" style={springProps}>
              <div
                className="left"
                style={{
                  backgroundImage: `url(${d.img})`,
                  backgroundSize: `${d.id !== "3" ? 0 : "cover"}`,
                  backgroundRepeat: "no-repeat",
                  overflow: "unset",
                  backgroundPosition: "121% 0",

                }}
              >
                {d.id !== '3' && <animated.img
                  className={`${d.id === '2' ? "slider2-h" : ""}`}
                  style={d.id !== '3' ? scaleProps : {}} src={d.img} alt="" />}
              </div>
              <div className="right">
                <div className="rightContainer" style={{
                  color: `${d.id === '2' ? "#fff" : ""}`
                }}>
                  <animated.h2 style={fadeInProps} className="ITBold tset">
                    {d.title}
                  </animated.h2>
                  <animated.p style={slideProps} className="helvetica delay1">
                    {d.desc}
                  </animated.p>
                </div>
              </div>
            </animated.div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")} />
    </animated.div>
  );
}
