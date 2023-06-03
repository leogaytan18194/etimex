import React from 'react'

export const LiContainer = ({ children, type }) => {

    return (
        <li className={`${type}`}><div className={`arrow-req`}></div><span>{children}</span></li>
    )
}
const Requisitos = () => {
    return (
        <>
            <div className='title-req'>
                <h1>En Besta estamos buscando un Sr. Financial Analyst que nos apoye en análisis financiero, seguimiento de deuda estructurada y modelos para fundraising.</h1>
            </div>
            <div className='requisitos-container'>
                <div className='requisitos-left'>
                    <ul>
                        <LiContainer>
                            Liderazgo
                        </LiContainer>
                        <LiContainer type="ana">
                            Analitico
                        </LiContainer>
                        <LiContainer>
                            Enfoque a resultados.
                        </LiContainer>
                        <LiContainer>
                            Trabajo en equipo
                        </LiContainer>
                    </ul>
                </div>
                <div className='requisitos-right'>
                    <div className='requisitos-exp'>
                        <h3>Mínimo <span>2 años</span> de experiencia en: </h3>
                    </div>
                    <ul>
                        <li> <span>  </span></li>
                        <LiContainer>Modelos financieros</LiContainer>
                        <LiContainer>Valuaciones</LiContainer>
                        <LiContainer>Análisis de estados financieros</LiContainer>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Requisitos