import "./contact.scss";
import { estadosOptions } from "./estados";
import { sectoresOptions } from "./sectores";
import { cantidadPiezasOptions } from "./piezas";
import { FadeInScale } from "../intro/Intro";
import { Link } from 'react-router-dom'
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [selectFocused, setSelectFocused] = useState(false);

  const form = useRef();
  const [done, setDone] = useState(false);

  const handleSelectFocus = () => {
    setSelectFocused(true);
  };

  const handleSelectBlur = () => {
    setSelectFocused(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u9vh00r','template_ll0d17l', form.current, 'VH9dxa0YuS-LEFisK')
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        });
    form.current.reset()
  };
  const [selectedRadio, setSelectedRadio] = useState(false);
  return (
    <>
      <div className="contenedor-padre" id="contacto">
        <div className="contenedor-hijo-1">
          <div>
            <h2>Contáctanos</h2>
          </div>
        </div>

        <div className="contenedor-hijo-2">
          <form ref={form} onSubmit={handleSubmit}>

            <div className="form-group" >
              <div className="input-group" style={{ }}>

                <div className="flex-container">
                  <label htmlFor="input1" className="input-label">
                    Nombre completo
                  </label>
                  <input type="text" id="input1" name="nombre" className="input-field"/>

                </div>
              </div>
              <div className="input-group" style={{

              }}>
                <div className="flex-container">
                  <label htmlFor="input1" className="input-label">
                    Correo
                  </label>
                  <input type="email" id="input1" name="correo" className="input-field"
                  style={{
                    width: '100%',
                    padding: '10px',
                    boxSizing: 'border-box',
                    outline:'none'
                  }}
                  />

                </div>
              </div>
              <div className="input-group" style={{

              }}>
                <div className="flex-container">
                  <label htmlFor="input1" className="input-label">
                    Teléfono
                  </label>

                  <input type="text" id="input1" name="telefono" className="input-field" />

                </div>
              </div>

            </div>
            <div className="form-container">
              <div className="form-gruop-container">
                <div className={`input-group${selectFocused ? " focused" : ""}`}>
                  <div className="flex-container">
                    <label htmlFor="select1" className="select-label">
                      Estado
                    </label>
                    <select id="select1" name="estado" className="select-field" onFocus={handleSelectFocus} onBlur={handleSelectBlur} >
                      <option value="0"></option>
                      {
                        estadosOptions.map(data => <option value={`${data.value}`}>{data.text}</option>)
                      }
                    </select>

                  </div>
                </div>
                <div className={`input-group${selectFocused ? " focused" : ""}`}>
                  <div className="flex-container">
                    <label htmlFor="select2" className="select-label">
                      Sector de mercado
                    </label>
                    <select id="select2" name="mercado" className="select-field" onFocus={handleSelectFocus} onBlur={handleSelectBlur}>
                      <option value="0"></option>
                      {
                        sectoresOptions.map(data => <option value={`${data.value}`}>{data.text}</option>)
                      }
                    </select>

                  </div>
                </div>
                <div className={`input-group${selectFocused ? " focused" : ""}`}>
                  <div className="flex-container">
                    <label htmlFor="select3" className="select-label">
                      Cantidad de piezas
                    </label>
                    <select id="select3" name="piezas" className="select-field" onFocus={handleSelectFocus} onBlur={handleSelectBlur}>
                      <option value="0"></option>
                      {
                        cantidadPiezasOptions.map(data => <option value={`${data.value}`}>{data.text}</option>)
                      }
                    </select>

                  </div>
                </div>
              </div>
              <div className="form-gruop-container">
                <div className="input-group-radio">
                  <label className="no-animation">¿Cómo fué que nos conociste?</label>
                  <div className="flex-container-radio">
                    <div>
                      <input type="radio" id="radio1" name="encontro" value="Google"/>
                      <label className="no-animation" htmlFor="radio1" name="encontro" value="Google">google</label>
                    </div>
                    <div>
                      <input type="radio" id="radio2" name="encontro" value="LinkedIn"/>
                      <label className="no-animation" htmlFor="radio2" name="encontro" value="LinkedIn">Linkedln</label>
                    </div>
                    <div>
                      <input type="radio" id="radio3" name="encontro" value="Facebook"/>
                      <label className="no-animation" htmlFor="radio3" name="encontro" value="Facebook">Facebook</label>
                    </div>
                    <div>
                      <input type="radio" id="radio4" name="encontro" value="Instagram"/>
                      <label className="no-animation" htmlFor="radio4" name="encontro" value="Instagram">Instagram</label>
                    </div>
                    <div>
                      <input type="radio" id="radio5" name="encontro" value="recomendacion"/>
                      <label className="no-animation" htmlFor="radio5" name="encontro" value="recomendacion">recomendación</label>
                    </div>
                    <div>
                      <input type="radio" id="radio6" name="encontro" value="otro"/>
                      <label className="no-animation" htmlFor="radio6" name="encontro" value="otro">otro</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="textarea-container">
              <div className="textarea-item">
                <label className="no-animation" htmlFor="radio1">Mensaje</label>
                <textarea rows="" cols="" name="mensaje"></textarea>
              </div>
            </div>
            <div className="btn-container">
              <button>Enviar</button>
            </div>
            {done && "Gracias solicitud enviada..."}
          </form>
        </div>

      </div>
      <div className="contact-info">
        <div className="contact-info-container">
          <div className="contact-info-item">
            <FadeInScale>
              <p>{`Llámanos:
81 8479 0800`}</p>
              <a href="https://www.etimex.com/blog/linea-de-transparencia/">{`Linea de Transparencia`}</a>
            </FadeInScale>
          </div>
          <div className="contact-info-item">
            <FadeInScale>
              <p>{`Horario de atención:
Lunes a viernes.
9 am-5 pm`}</p></FadeInScale>
          </div>
          <div className="contact-info-item">
            <FadeInScale>
              <p>{`Ubicación:
Av. San Ángel 201,
Col. Churubusco, C.P. 64590,
Monterrey, N.L. México.`}</p></FadeInScale>
          </div>
        </div>
      </div>
    </>
  );
}
