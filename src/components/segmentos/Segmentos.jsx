import React from 'react'
import './segmentos.scss';
import Card from './Card';
import { Link } from 'react-router-dom';

function Segmentos() {

    return (
        <div className="segmentos" id="">
            <div id="comunidad" className='hashlink-id'></div>
            <h1 className="ITBold">Segmentos</h1>
            <div className="container">
                <Card delay={200}>
                    <Link to="/vinos-y-licores" className="card featured">
                        <div className="top">
                            <div className='top-img-container'>
                                <img
                                    className="requisitosImagen"
                                    src="/assets/segmento1.png"
                                    alt=""
                                />
                            </div>
                            <div className='top-txt-container'>
                                <h3>Vinos y Licores</h3>
                            </div>
                        </div>
                        <div className="bottom">
                            <p>Vestimos vinos y licores que llevan  una historia detrás y forman parte de momentos únicos.</p>
                        </div>
                    </Link>
                </Card>
                <Card delay={400}>
                    <Link to="/alimentos-y-bebidas" className="card featured">
                        <div className="top">
                            <div className='top-img-container'>
                                <img
                                    className="requisitosImagen"
                                    src="/assets/segmento2.png"
                                    alt=""
                                />
                            </div>
                            <div className='top-txt-container'>
                                <h3>Alimentos y Bebidas</h3>
                            </div>

                        </div>
                        <div className="bottom">
                            <p>Entendemos los retos de la industria de etiquetas para alimentos y te asesoramos con las soluciones más atractivas.</p>
                        </div>
                    </Link>
                </Card>
                <Card delay={600}>
                    <div className="card featured">
                        <div className="top">
                            <div className='top-img-container'>
                                <img
                                    className="requisitosImagen"
                                    src="/assets/segmento3.png"
                                    alt=""
                                />
                            </div>
                            <div className='top-txt-container'>
                                <h3>Salud y Belleza</h3>
                            </div>
                        </div>
                        <div className="bottom">
                            <p>La industria cosmética y farmacéutica es  altamente competitiva  el mantenerse a la vanguardia es la clave del éxito para estos productos.</p>
                        </div>
                    </div>
                </Card>
                <Card delay={800}>
                    <div className="card featured">
                        <div className="top">
                            <div className='top-img-container'>
                                <img
                                    className="requisitosImagen"
                                    src="/assets/segmento4.png"
                                    alt=""
                                />
                            </div>
                            <div className='top-txt-container'>
                                <h3 className="ITBold">Industrial</h3>
                            </div>
                        </div>
                        <div className="bottom">
                            <p >Conocemos las diversas condiciones a las que se enfrentan los productos de uso industrial.</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Segmentos;
