import React from 'react'
import './requisitos.scss';
import styled from 'styled-components'
import { ArrowNext } from '@styled-icons/fluentui-system-regular/ArrowNext'

function Requisitos() {
    const ArrowNextS = styled(ArrowNext)`scale: 0.5;`
    return (
        <div className="requisitos" id="comunidad">
            <h1>Ser parte de la comunidad BESTA es fácil, sencillo y rápido.</h1>
            <h3>En nuestro arrendamiento con opción a compra, te ofrecemos un auto a tu medida para trabajarlo en Uber o DiDi</h3>
            <div className="container">
                <div className="card featured">
                    <div className="top">
                        <div className='top-img-container'>
                            <img
                                className="requisitosImagen"
                                src="/assets/pasos/paso1.png"
                                alt=""
                            />
                        </div>
                        <div className='top-txt-container'>
                            <h3>1. Selecciona tu auto</h3>
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="textoRequisitos">Y comienza tu proceso de renta con opción a compra.</p>
                    </div>
                </div>
                <div className='arrow'>
                    <div className='arrow-container'>
                        <ArrowNextS />
                    </div>
                </div>
                <div className="card featured">
                    <div className="top">
                        <div className='top-img-container'>
                            <img
                                className="requisitosImagen"
                                src="/assets/pasos/paso2.png"
                                alt=""
                            />
                        </div>
                        <div className='top-txt-container'>
                            <h3>2. Envía tu formulario</h3>
                        </div>

                    </div>
                    <div className="bottom">
                        <p>O manda mensaje de WhatsApp y envía los documentos solicitados.</p>
                    </div>
                </div>
                <div className='arrow'>
                    <div className='arrow-container'>
                        <ArrowNextS />
                    </div>
                </div>
                <div className="card featured">
                    <div className="top">
                        <div className='top-img-container'>
                            <img
                                className="requisitosImagen"
                                src="/assets/pasos/paso3.png"
                                alt=""
                            />
                        </div>
                        <div className='top-txt-container'>
                            <h3>3. Agenda cita</h3>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>Estás por terminar y a punto de ser tu propio jefe.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Requisitos