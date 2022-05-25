import "./topbar.scss"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
                <a href="https://wa.link/rl4eij"><WhatsAppIcon className="icon1" /></a>
                </div>
                <div className="itemContainer"> 
                <a href="tel:8125120146"><LocalPhoneIcon className="icon2" /></a>
                    
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
