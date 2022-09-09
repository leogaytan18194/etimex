import "./menu.scss"
import React from 'react';


export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="/">Inicio</a>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="/#beneficios">Beneficios</a>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="/#autos">Autos</a>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="/#requisitos">Requisitos</a>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="#contacto">Contacto</a>
            </li>
        </ul>
    </div>
  )
}
