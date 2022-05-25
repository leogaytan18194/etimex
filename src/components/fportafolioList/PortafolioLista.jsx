import "./portafolioLista.scss"

export default function PortafolioLista({id, title, active, setSelected}) {
    
  return (
    <li className={active ? "portafolioLista active" : "portafolioLista"} onClick={() => setSelected(id)}>
        {title}
    </li>
  )
}
