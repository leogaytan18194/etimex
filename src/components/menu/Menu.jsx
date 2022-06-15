import "./menu.scss"
import React from 'react';


export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="#intro">Inicio</a>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="#portafolio">Beneficios</a>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="#autos">Autos</a>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="#works">Elige tu auto</a>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="#requisitos">Requisitos</a>
            </li>
            <li onClick={() =>setMenuOpen(false)}>
                <a href="#testimonials">Testimonios</a>
            </li>
        </ul>
    </div>
  )
}
