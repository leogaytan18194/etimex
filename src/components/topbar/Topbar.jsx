import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react';


export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">
                    <img src="assets/bestalogo.png" alt="" />
                </a>
                <div className="itemContainer">
                    <PersonIcon className="icon" />
                    <span>+81 2512 0146</span>
                </div>
                <div className="itemContainer"> 
                    <EmailIcon className="icon" />
                    <span>info@besta.mx</span>
                </div>
            </div>
            
            <div className="right">
                <div className="hamburguer" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
