import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated, useSprings } from "react-spring";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "etimex",
      desc:
        "It is a company that for more than five decades has been dedicated to the packaging and label printing production industry.",
      img:
        "./assets/bote2.png",
      img2:
        "",
    },
    {
      id: "2",
      title: "Mission",
      desc:
        "It is to exceed with excellence the printing expectations of our clients.",
      img:
        "./assets/slide2.png",
    },
    {
      id: "3",
      title: "We create experiences",
      desc:
        "We seek to create labels and packaging that make you remember, aspire and feel over time, connecting brands and people..",
      img:
        "./assets/botella1.png",
      img2:
        "./assets/botella2.png",
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

  // const scaleProps = useSpring({
  //   transform: data[currentSlide].id !== "3" ? "scale(1)" : "scale(0.9)",
  //   from: { transform: "scale(0.9)" },
  //   delay: 600,
  //   config: { duration: 1000 },
  // });
  const scaleProps = useSprings(
    data.length,
    data.map((d, i) => ({
      transform: i === currentSlide ? (d.id === "2" ? "scale(1)" : "scale(1)") : "scale(0.9)",
      from: { transform: "scale(0.9)" },
      delay: 600,
      config: { duration: 1000 },
    }))
  );

  const scalePropsAndRotateTop = useSpring({
    transform: data[currentSlide].id !== "3" ? "scale(1) rotate(-30deg)   translate(0, -90vh)" : "scale(0.9) rotate(-30deg)  translate(0, 0)",
    from: { transform: "scale(0.9) rotate(0deg)  translate(0, -90vh)" },
    delay: 0,
    config: { duration: 1000 },
  });
  const scalePropsAndRotateBottom = useSpring({
    transform: data[currentSlide].id !== "3" ? "scale(1) rotate(-30deg)   translate(0, 90vh)" : "scale(0.9) rotate(-30deg)  translate(0, 0)",
    from: { transform: "scale(0.9) rotate(0deg)  translate(0, 90vh)" },
    delay: 0,
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
            <animated.div className={d.id === '3' ? "item-3" : "item"} style={springProps}>
              <div
                className="left"
                style={{
                  backgroundImage: d.id === "3" ? `linear-gradient(60deg, rgb(223 138 145) 50%, rgb(168 213 193) 50%)` : "",
                }}
              >

                {(d.id === '3' && d.img2) ?
                  <>
                    <animated.img
                      className={`imgdiagonal1`}
                      style={{ ...scalePropsAndRotateTop, position: "absolute", left: "18%" }} src={d.img} alt="" />
                    <animated.img
                      className={`imgdiagonal2`}
                      style={{ ...scalePropsAndRotateBottom, position: "absolute", left: "59%" }} src={d.img2} alt="" />
                  </>
                  :
                  <animated.img
                    className={`${d.id === '2' ? "slider2-h" : "slider1-h"}`}
                    style={{ ...scaleProps[index] }} src={d.img} alt="" />
                }
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
