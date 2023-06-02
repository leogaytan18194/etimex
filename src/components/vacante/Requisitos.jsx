import React from 'react'

export const LiContainer = ({children}) =>{

    return(
        <li><div className='arrow-req'></div><span>{children}</span></li>
    )
}
const Requisitos = () => {
    return (
        <div className='requisitos-container'>
            <div className='requisitos-left'>
                <ul>
                    <LiContainer>
                        Liderazgo
                    </LiContainer>
                    <LiContainer>
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
    )
}

export default Requisitos