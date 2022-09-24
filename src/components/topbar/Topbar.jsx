import "./topbar.scss"
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from './bestalogo.png';


export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">
                    <img src={logo} alt="" />
                </a>
                <div className="itemContainer">
                    <a href="/#/#modelos-besta">Modelos</a>
                </div>
                <div className="itemContainer">
                    <a href="/#/#comunidad">¿Cómo funciona?</a>
                </div>
                <div className="itemContainer">
                    <a href="/#/#beneficios">Beneficios</a>
                </div>
                <div className="itemContainer">
                    <a href="/#/#contacto">Contacto</a>
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
