import  "./testimonials.scss";
import React from 'react';

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Maricela Romo",
      img:
        "https://besta.mx/wp-content/uploads/2022/03/test5-180x180.jpg",
      icon: "assets/twitter.png",
      desc:
        "Atención excelente y la rapidez en el trámite es inmediata. Recomendable al 100%",
    },
    {
      id: 2,
      name: "Juanjo Salinas",
      img:
        "https://besta.mx/wp-content/uploads/2022/03/test4-180x180.jpg",
      icon: "assets/youtube.png",
      desc:
        "Muy buena opción para hacerte de tu vehículo, los asesores muy buenos en su trabajo y sin estafas todo real.",
      featured: true,
    },
    {
      id: 3,
      name: "Israel Arroyo",
      img:
        "https://besta.mx/wp-content/uploads/2022/03/test1-180x180.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Muy buena atención desde el momento en que se brinda la información, hasta el momento de la entrega.",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Se Parte de la #ComunidadBesta</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              
              <img
                className="user"
                src={d.img}
                alt=""
              />
              
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
