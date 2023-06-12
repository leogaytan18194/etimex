import "./clientes.scss";


export default function Clientes() {


  return (
    <div className="clientes" id="clientes">
      <h1 className="ITBold">Nuestros <b>clientes</b></h1>
      <h2 className="helvetica">En <b>Etimex</b> avanzamos, con el futuro de la impresión a la vanguardia de tu marca.</h2>
      <div className="container">
          <div className="item">
            <img
              src="assets/clientes.png"
              alt="Clientes Etimex"
            />
          </div>
      </div>
      
    </div>
  );
}
