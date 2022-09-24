import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./autos2.scss";
import { dataAutos } from './data';
import 'swiper/css';


export default function VerticalTabs() {

  return (
    <div className="modelos-besta" id="modelos-besta">
      <h1 className="h1-autos">Modelos disponibles</h1>
      <div className="autos-besta">
        <Swiper
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
     
          
          {dataAutos.map((item) => (
            <SwiperSlide>
          <Link to={`formulario/${item.id}`} className="link">
          <div className="card-autos">
            <div className="card-top">
              <h2>{item.marca}</h2>
              <h3>{item.modelo}</h3>
              <img
                src={item.imagen} alt="Autos besta"/>
            </div>
            <div className="card-bottom">
              <p className="texto-autos"><strong>{item.montoSemanal}</strong></p>
              <img src="assets/calendaricon.png" alt="" className="calendario" align="left"/><br></br><p className="texto">{item.texto}</p>
            </div>
          </div>
          </Link>
          </SwiperSlide>
        ))}
        
    </Swiper>
      </div>
    </div>
  );
}
