import React, { useState } from "react";
import { ArrowNext, Attach } from '@styled-icons/fluentui-system-regular'
import Footer from "./Footer";

export const InputComponent = () => {
    const [value, setValue] = useState("");
    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <ArrowNext size="1.5em" />
            <Attach size="1.5em" />
        </div>
    )
}

function Formulario() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [message, setMessage] = useState("");
    const [file, setFile] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fname', fname);
        formData.append('lname', lname);
        formData.append('message', message);
        formData.append('file', file);
        // Aquí puedes hacer la petición HTTP a tu servidor
        console.log(formData);
    };

        console.log(fname);
    return (

        <>
            <div className="vacante-form">
                <div className="form-title">
                    <h2>Formulario de contacto</h2>
                </div>
                <form>
                    <div className="form-item">
                        <label>
                            Nombre:
                        </label>
                        <input
                            type="text"
                            className="input-style"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            required
                            onFocus={(e) => {
                                if (e.target.previousElementSibling && e.target.previousElementSibling.tagName.toLowerCase() === 'label') {
                                    e.target.previousElementSibling.classList.add("label-a");
                                }
                            }}
                            onBlur={(e) => {
                                if (e.target.previousElementSibling && e.target.previousElementSibling.tagName.toLowerCase() === 'label') {
                                    if(e.target.value){
                                        
                                    }else{
                                        e.target.previousElementSibling.classList.remove("label-a");
                                    }
                                }
                            }}
                        />

                    </div>
                    <div className="form-item">
                        <label>
                            Apellido:
                        </label>
                        <input type="text" className="input-style" value={lname} onChange={(e) => setLname(e.target.value)} required onFocus={(e) => {
                            if (e.target.previousElementSibling && e.target.previousElementSibling.tagName.toLowerCase() === 'label') {
                                e.target.previousElementSibling.classList.add("label-a");
                            }
                        }}
                            onBlur={(e) => {
                                if (e.target.previousElementSibling && e.target.previousElementSibling.tagName.toLowerCase() === 'label') {
                                    if(e.target.value){
                                        
                                    }else{
                                        e.target.previousElementSibling.classList.remove("label-a");
                                    }
                                }
                            }} />
                    </div>
                    <div className="form-item txt">
                        <label>
                            Mensaje:
                        </label>
                        <textarea value={message} className="input-style" onChange={(e) => setMessage(e.target.value)} rows="4" cols="50" required onFocus={(e) => {
                            if (e.target.previousElementSibling && e.target.previousElementSibling.tagName.toLowerCase() === 'label') {
                                e.target.previousElementSibling.classList.add("label-a");
                            }
                        }}
                            onBlur={(e) => {
                                if (e.target.previousElementSibling && e.target.previousElementSibling.tagName.toLowerCase() === 'label') {
                                    if(e.target.value){
                                        
                                    }else{
                                        e.target.previousElementSibling.classList.remove("label-a");
                                    }
                                }
                            }} />
                    </div>
                    <div className="form-item fl">
                        <label htmlFor="adjunto" className="file">
                            Archivo adjunto:
                            <Attach size="33" />
                            <input type="file" id="adjunto" className="input-style" onChange={(e) => setFile(e.target.files[0])} required />
                        </label>
                    </div>
                </form>
            </div>
            <Footer onSubmit={handleFormSubmit} />
        </>
    );
}

export default Formulario;
