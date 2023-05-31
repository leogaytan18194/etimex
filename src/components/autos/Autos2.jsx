import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./autos2.scss";
import { dataAutos } from './data';
import 'swiper/css';


export default function VerticalTabs() {

  return (
    <div className="autos2" id="modelos">
      <h1 className="h1-autos">Vehículos disponibles</h1>
      <div className="autos-besta">
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >               
          {dataAutos.map((item) => (
            <SwiperSlide>
          <Link to={`formulario/${item.id}`} className="link">
          <div className="card-autos2">
            <div className="card-top2">
              <h2>{item.marca}</h2>
              <h3>{item.modelo}</h3>
              <img
                src={item.imagen} alt="Autos besta"/>
            </div>
            <div className="card-bottom2">
              <p className="texto-autos2"><strong>*{item.montoSemanal}</strong></p>
              <img src="assets/calendarioicon2.png" alt="" className="calendario" align="left"/><br></br><p className="texto">{item.texto}</p>
              <p className="textoAviso">*Precio sujeto a cambios sin previo aviso</p>
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
