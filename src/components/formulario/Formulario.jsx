import React from 'react'
import { useParams } from 'react-router-dom'

function Formulario() {
    
    const params = useParams()


    return (
        <div> <h1> Formulario </h1>
        Interesado en <strong>{params.auto}</strong>
        </div>
    )
}

export default Formulario
