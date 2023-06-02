import React, { useState } from "react";
import { ArrowNext, Attach } from '@styled-icons/fluentui-system-regular'
import emailjs from '@emailjs/browser';
import Footer from "./Footer";
import { useRef } from "react";
import CustomInput from "./CustomInput";
import { useEffect } from "react";

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
    const [done, setDone] = useState(false);
    const form = useRef();
    const [isValidForm, setIsValidForm] = useState(false);
    function validarEmail(email) {
        // Expresión regular para validar emails
        var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regexEmail.test(email);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        //console.log(isValidForm);
        //console.log(form.current.querySelectorAll('input:not([type="file"])'));
        var nodos = form.current.querySelectorAll('input:not([type="file"]):not([type="hidden"])');
        var camposVacios = true;
        var emailsValidos = true;
        nodos.forEach(function (nodo) {
            if (nodo.value.trim() !== '') {
                camposVacios = false;
                console.log(nodo.value)
                if (nodo.type === 'email') {
                    if (!validarEmail(nodo.value)) {
                        emailsValidos = false;
                        setFileSizeMsg('Algunos campos hay campos de tipo "email" inválido.');
                    } else {
                        setFileSizeMsg('');
                    }
                    //setFileSizeMsg('');                 
                }
            } else {
                console.log(nodo.value)
                setFileSizeMsg('Hay campos que están vacíos.');
                //return false;
            }
        });
        if (camposVacios) {
            setFileSizeMsg('Todos los campos están vacíos.');
            return false;
        }
        if (file) {
            const filesize = checkFileSize(file.size);
            if (!filesize) {
                emailjs.sendForm('service_fst7gdm', 'template_q8xx62h', form.current, 'QQvoOXLmHkR29h36W', {
                    from_name: 'Edgar Ramos'
                })
                    .then(
                        (result) => {
                            console.log(result.text);
                            setDone(true)
                            setTimeout(() => {
                                setDone(false);
                            }, 4000);
                        },
                        (error) => {
                            console.log(error.text);
                        });
            } else {
                setFileSizeMsg("El archivo es demasiado grande");
            }
        } else {
            setFileSizeMsg("Adjunta un archivo valido");
        }

    };
    const [fileSizeMsg, setFileSizeMsg] = useState('');
    const checkFileSize = (size) => {
        const limitSize = Number(size) / (1024 * 1024);
        if (limitSize > 2) {
            setFileSizeMsg("El archivo no puede tener mas de 2MB de peso");
            //setFile(null);
            return true;
        } else {
            setFileSizeMsg("");
            return false;
        }
    }
    // useEffect(() => {

    //     console.log(file);
    //     if (file) {
    //         checkFileSize(file.size);
    //     }
    //     return () => {

    //     };
    // }, [file]);
    const formTitle = "Unete al equipo";
    return (

        <>
            <div className="vacante-form">
                <div className="form-title">
                    <h2>{formTitle}</h2>
                </div>
                <form ref={form}>
                    <div className="form-item">
                        <CustomInput
                            name="nombre"
                            label="nombre"
                            type="input"
                            setIsValidForm={setIsValidForm}
                        />
                        <input
                            type="hidden"
                            className="input-style"
                            name="bbc"
                            defaultValue="edgarramoslun333@gmail.com"
                        />
                    </div>
                    <div className="form-item">
                        <CustomInput
                            name="apellido"
                            label="apellido"
                            type="input"
                            setIsValidForm={setIsValidForm}
                        />
                    </div>
                    <div className="form-item">
                        <CustomInput
                            name="correo"
                            label="correo"
                            type="email"
                            setIsValidForm={setIsValidForm}
                        />
                    </div>
                    <div className="form-item txt">
                        <CustomInput
                            name="mensaje"
                            label="mensaje"
                            type="textarea"
                            setIsValidForm={setIsValidForm}
                        />
                    </div>
                    <div className="form-item fl">
                        <label htmlFor="adjunto" className="file">
                            Archivo adjunto:
                            <Attach size="33" />
                            <input
                                type="file" name="file" id="adjunto" className="input-style" onChange={(e) => setFile(e.target.files[0])} required />
                            {file !== null && <p>{file.name}</p>}
                            {fileSizeMsg !== '' && <p>{fileSizeMsg}</p>}
                        </label>
                    </div>
                </form>
            </div>
            {
                done === true &&
                <center style={{color:'#fff'}}>
                    Mensaje enviado
                </center>
            }
            <Footer onSubmit={handleFormSubmit} />

        </>
    );
}

export default Formulario;
