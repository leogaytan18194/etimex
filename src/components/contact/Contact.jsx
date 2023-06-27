import { useState } from "react";
import "./contact.scss";
import { estadosOptions } from "./estados";
import { sectoresOptions } from "./sectores";
import { cantidadPiezasOptions } from "./piezas";
import { FadeInScale } from "../intro/Intro";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [selectFocused, setSelectFocused] = useState(false);

  const handleSelectFocus = () => {
    setSelectFocused(true);
  };

  const handleSelectBlur = () => {
    setSelectFocused(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
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
          <form>

            <div className="form-group" >
              <div className="input-group" style={{

              }}>

                <div className="flex-container">
                  <label htmlFor="input1" className="input-label">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="input1"
                    name="input1"
                    className="input-field"
                  />

                </div>
              </div>
              <div className="input-group" style={{

              }}>
                <div className="flex-container">
                  <label htmlFor="input1" className="input-label">
                    Correo
                  </label>
                  <input
                    type="text"
                    id="input1"
                    name="input1"
                    className="input-field"
                  />

                </div>
              </div>
              <div className="input-group" style={{

              }}>
                <div className="flex-container">
                  <label htmlFor="input1" className="input-label">
                    Teléfono
                  </label>

                  <input
                    type="text"
                    id="input1"
                    name="input1"
                    className="input-field"
                  />

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
                    <select
                      id="select1"
                      className="select-field"
                      onFocus={handleSelectFocus}
                      onBlur={handleSelectBlur}
                    >
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
                    <select
                      id="select2"
                      className="select-field"
                      onFocus={handleSelectFocus}
                      onBlur={handleSelectBlur}
                    >
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
                    <select
                      id="select3"
                      className="select-field"
                      onFocus={handleSelectFocus}
                      onBlur={handleSelectBlur}
                    >
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
                      <input type="radio" id="radio1" name="knowoption" />
                      <label className="no-animation" htmlFor="radio1">google</label>
                    </div>
                    <div>
                      <input type="radio" id="radio2" name="knowoption" />
                      <label className="no-animation" htmlFor="radio2">Linkedln</label>
                    </div>
                    <div>
                      <input type="radio" id="radio3" name="knowoption" />
                      <label className="no-animation" htmlFor="radio3">facebook</label>
                    </div>
                    <div>
                      <input type="radio" id="radio4" name="knowoption" />
                      <label className="no-animation" htmlFor="radio4">Instagram</label>
                    </div>
                    <div>
                      <input type="radio" id="radio5" name="knowoption" />
                      <label className="no-animation" htmlFor="radio5">recomendación</label>
                    </div>
                    <div>
                      <input type="radio" id="radio6" name="knowoption" />
                      <label className="no-animation" htmlFor="radio6">otro</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="textarea-container">
              <div className="textarea-item">
                <label className="no-animation" htmlFor="radio1">Mensaje</label>
                <textarea rows="" cols=""></textarea>
              </div>
            </div>
            <div className="btn-container">
              <button>Enviar</button>
            </div>
          </form>
        </div>

      </div>
      <div className="contact-info">
        <div className="contact-info-container">
          <div className="contact-info-item">
            <FadeInScale>
              <p>{`Llámanos:
81 8479 0800`}</p>
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
