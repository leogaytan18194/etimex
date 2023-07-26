import { useState } from "react";
import "./contact.scss";
import { estadosOptions } from "./estados";
import { sectoresOptions } from "./sectores";
import { cantidadPiezasOptions } from "./piezas";
import { FadeInScale } from "../intro/Intro";

export default function Contact2() {
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
