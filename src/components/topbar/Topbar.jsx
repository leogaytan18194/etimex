import "./topbar.scss";
import logo from './etimex-logo.png';
import TranslateIcon from '@mui/icons-material/Translate';
import { Link } from 'react-router-dom';

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
            <Link to="/vinos-y-licores" className="card featured">  
              <span className="ITBk">segmentos</span>
            </Link>
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
          <TranslateIcon/>
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