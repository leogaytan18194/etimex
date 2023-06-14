import "./print.scss";
import Background from "./print-connect.png";

export default function Print() {


  return (
    <div className="print" id="print" style={{ backgroundImage:`url(${Background})`, backgroundRepeat: 'no-repeat',}}>
        <div className="wrapper">
          <h1 className="ITBold">Print</h1>
          <h2>to connect</h2>
        <h3 className="helvetica">Diferenciarnos en el punto de venta es lo mas importante para capta la atención, nuestra gama de materiales, acabaos en formato digital es el futuro.</h3>
        </div>
      </div>
  );
}
