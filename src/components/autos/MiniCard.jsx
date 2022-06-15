import React from "react";
import styled from "styled-components";
import Calendar from "../../img/yearCalendar.png";

const Container = styled.div`
  width: 500px;
  padding: 10px;
  display: flex;
  float: left;
  border-radius: 10px;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    width: 80px
  }
`;

const Image = styled.img`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;
`;

const Text = styled.span`
  margin-top: 10px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Subtitle = styled.h6`
  font-size: 25px;
  font-weight: bold;
  text-align: left;
  color: black;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  text-align: left;
  color: black;
`;

const Label = styled.span`
    display: flex;
    align-items: center;
    line-height: 1.2;
    @media only screen and (max-width: 480px) {
    font-size: 14px;
    }
`;

const MiniCard = () => {
  return (
    <div className="unidad">
                <h5>Nissan</h5>
                <h2>V-DRIVE</h2>    
                <img src="assets/yearCalendar.png" className="imagenYear"/>
                <p className="DescripcionYear"> 2022</p>
                <img src="assets/estandaricono.png" className="imagenAuto"/>
                <p className="DescripcionAuto"> Estándar</p>
                <img src="assets/nuevoicono.png" className="imagenUso"/>
                <p className="DescripcionUso"> Nuevo</p>
            </div>
            <div className="plazo">
                <h3>Plazo</h3>
                <p>36 Meses</p>
                <div className="vehicle-card">
                    <div className="v-drive-offer">
                        <div className="top">
                            <p className="precio">$3,300</p>
                        </div>
                        <div className="bottomAutos">
                            <p className="iva">Incluye IVA</p>
                        </div>
                    </div>
                </div>
                <div className="vehicle-card">
                    <div className="v-drive-offer">
                        <div className="top">
                            <p className="precio">$3,300</p>
                        </div>
                        <div className="bottomAutos">
                            <p className="iva">Incluye IVA</p>
                        </div>
                    </div>
                </div>
            </div>
  );
};

export default MiniCard;