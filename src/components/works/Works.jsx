import "./works.scss";
import { useState } from "react";
import React from 'react';

function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Tu mejor aliado",
      desc: "Gas GNV incluido",
      img: "./assets/aliado.png"
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Esto es BESTA",
      desc: "Ofrecemos el mejor financiamiento",
      img: "./assets/esbesta.png"
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Adaptado a tu vida",
      desc: "Sin revisar buro de crédito",
      img: "./assets/adoptado.png"
    },
  ];

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2)
    : setCurrentSlide(currentSlide<data.length -1 ? currentSlide + 1 : 0 );
  };

  
  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        { data.map(d=> (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
          
        </div>))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
    </div>
  )
}

export default Works
