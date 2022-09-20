import "./works.scss";
import { useState } from "react";
import React from 'react';

function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      modelo: "V-DRIVE",
      marca: "Nissan",
      img: "./assets/vdrive2.png",
      texto: "Semanal $3,200 / aprox"
    },
    {
      id: "2",
      modelo: "MARCH",
      marca: "Nissan",
      img: "./assets/march.png",
      texto: "Semanal $3,200 / aprox"
    },
    {
      id: "3",
      modelo: "ATTITUD",
      marca: "DODGE",
      img: "./assets/attitude2.png",
      texto: "Semanal $3,200 / aprox"
    },
    {
      id: "4",
      modelo: "KWID",
      marca: "RENAULT",
      img: "./assets/kwid.png",
      texto: "Semanal $3,200 / aprox"
    },
    {
      id: "5",
      modelo: "AVEO",
      marca: "CHEVROLET",
      img: "./assets/aveo.png",
      texto: "Semanal $3,200 / aprox"
    },
  ];

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2)
    : setCurrentSlide(currentSlide<data.length -1 ? currentSlide + 1 : 0 );
  };

  
  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 40}vw)` }}>
        { data.map(d=> (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <h2>{d.modelo}</h2>
                <h3>{d.marca}</h3>
                <p>{d.texto}</p>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" className="image-carro"/>
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
