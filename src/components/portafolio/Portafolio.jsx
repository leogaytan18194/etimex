
import "./portafolio.scss";


function Portafolio() {
    return (
        <div className="portafolio" id="portafolio">
            <h1>Beneficios</h1>
            <h3>Un producto integral</h3>
            <div className="container">
                <div className="item">
                    <img src="./assets/taller.png" alt=""/>
                    <h3>BESTA</h3>
                </div>
                <div className="item">
                    <img src="./assets/taller2.png" alt=""/>
                    <h3>BESTA</h3>
                </div>
                <div className="item">
                    <img src="./assets/gps2.png" alt=""/>
                    <h3>BESTA</h3>
                </div>
                <div className="item">
                    <img src="./assets/carro2.png" alt=""/>
                    <h3>BESTA</h3>
                </div>
            </div>
        </div>
    )
}

export default Portafolio
