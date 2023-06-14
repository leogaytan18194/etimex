import "./impresiones.scss";
import Background from "./equipo-impresora.jpg";

export default function Impresiones() {


  return (
    <div className="impresiones" id="impresiones" style={{ backgroundImage:`url(${Background})`, backgroundRepeat: 'no-repeat',}}>
      
        <div className="wrapper">
          <h2 className="helvetica"><b>Nuestra tecnología no tiene límite</b>, desde tiradas cortas, grandes y la flexibilidad para el desarrollo de diferentes empaques.</h2>
        </div>
      </div>
  );
}
