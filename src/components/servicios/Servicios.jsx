import "./servicios.scss";
import { Link } from 'react-router-dom'


export default function Servicios() {


  return (
    <div className="servicios" id="servicios">
      <h1 className="ITBold">Servicios</h1>
      <div className="container">
          <Link to="/servicios/materia-prima" className="card featured">
          <div className="item">
                <img
                  src="assets/servicios1.jpg"
                  alt="Materias primas"
                />
                <h3>Materias Primas</h3>
          </div>
          </Link>
          <div className="item">
            <img
              src="assets/servicios2.png"
              alt="Acabados"
            />
            <h3>Acabados</h3>
          </div>
      </div>
      <div className="container">
      <Link to="/servicios/tintas" className="card featured">
            <div className="item">
              <img
                src="assets/servicios3.png"
                alt="Tintas"
              />
              <h3>Tintas</h3>
            </div>
          </Link>
          <div className="item">
            <img
              src="assets/servicio4.png"
              alt=""
            />
            <h3>Asesoría Integral</h3>
          </div>
      </div>
    </div>
  );
}
