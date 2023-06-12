import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">inicio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">segmentos</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">servicios</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">clientes</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">contacto</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">blog</a>
        </li>
      </ul>
    </div>
  );
}
