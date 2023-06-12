import "./topbar.scss";
import logo from './etimex-logo.png';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img className="logo" src={logo} alt="" />
          </a>
          <div className="itemContainer">
            <span className="ITBk">inicio</span>
          </div>
          <div className="itemContainer">
            <span className="ITBk">segmentos</span>
          </div>
          <div className="itemContainer">
            <span className="ITBk">servicios</span>
          </div>
          <div className="itemContainer">
            <span className="ITBk">clientes</span>
          </div>
          <div className="itemContainer">
            <span className="ITBk">contacto</span>
          </div>
          <div className="itemContainer">
            <span className="ITBk">blog</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
