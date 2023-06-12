import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
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
            <Person className="icon" />
            <span>+333445224</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>info@etimex.com</span>
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
