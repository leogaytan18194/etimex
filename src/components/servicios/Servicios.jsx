import "./servicios.scss";


export default function Servicios() {


  return (
    <div className="servicios" id="servicios">
      <h1>Servicios</h1>
      <div className="container">
          <div className="item">
            <img
              src="assets/servicios1.jpg"
              alt="Materias primas"
            />
            <h3>Materias Primas</h3>
          </div>
          <div className="item">
            <img
              src="assets/servicios2.png"
              alt="Acabados"
            />
            <h3>Acabados</h3>
          </div>
      </div>
      <div className="container">
          <div className="item">
            <img
              src=""
              alt=""
            />
            <h3>Tintas</h3>
          </div>
          <div className="item">
            <img
              src="assets/servicios4.jpg"
              alt=""
            />
            <h3>Asesoría Integral</h3>
          </div>
      </div>
    </div>
  );
}
