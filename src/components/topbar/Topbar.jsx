import "./topbar.scss"
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">
                    <img src="assets/bestalogo.png" alt="" />
                </a>
                <div className="itemContainer">
                    <a href="#autos">Modelos</a>
                </div>
                <div className="itemContainer">
                    ¿Cómo funciona?
                </div>
                <div className="itemContainer">
                    Beneficios
                </div>
                <div className="itemContainer">
                    Contacto
                </div>
                <div className="itemContainer">
                    Blog
                </div>
            </div>
            
            <div className="right">
                <AccountCircleIcon className="iconUser"></AccountCircleIcon>
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
