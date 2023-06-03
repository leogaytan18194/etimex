import React, { useState } from 'react';
import { useEffect } from 'react';

const CustomInput = ({ name, label, type, setIsValidForm, isValidForm, clearInputs }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const handleFocus = (e) => {
        setIsFocused(true);
    };

    const handleBlur = (e) => {
        setIsFocused(false);
        //console.log('ola')
        if (e.target.value) {
            setIsFocused(true);
            if (type === 'email') {
                const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                setIsValid(regex.test(e.target.value));
                setIsValidForm(regex.test(e.target.value));
            }
            if (type === 'input') {
                setIsValid(e.target.value.trim() !== '');
                setIsValidForm(e.target.value.trim() !== '');
                
            }
        } else {
            setIsValid(false);
        }
    };
    const handleChange = (e) => {
        setIsFocused(false);
        //console.log('ola')
        if (e.target.value) {
            setIsFocused(true);
            if (type === 'email') {
                const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                setIsValid(regex.test(e.target.value));
                setIsValidForm(regex.test(e.target.value))
            }
            if (type === 'input') {
                setIsValid(e.target.value.trim() !== '');
            }
        } else {
            setIsValid(false);
        }
    };
    useEffect(() => {
        // if(isValidForm){
        //     setIsValid(false)
        // }
        if(clearInputs){
            const daa = document.querySelector('form-item');
            var nodos = daa.current.querySelectorAll('input:not([type="file"]):not([type="hidden"])');
            var camposVacios = true;
            var emailsValidos = true;
            nodos.forEach(function (nodo) {
                nodo.value = '';
            });
        }
        return () => {
            
        };
    }, [clearInputs]);
    return (
        <div className="form-item">
            <label className={isFocused ? 'label-a' : ''} htmlFor={label}>
                {label}:
            </label>
            {
                type === 'input' && <>
                    <input
                        type="text"
                        className={`input-style ${isValid ? '' : 'invalid'}`}
                        name={name}
                        id={label}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {
                        isValid === false && <span>Campo requerido</span>
                    }
                </>

            }
            {
                type === 'email' && 
                <>                
                    <input
                        type="email"
                        className={`input-style ${isValid ? '' : 'invalid'}`}
                        name={name}
                        id={label}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {
                        isValid === false && <span>ingresa un correo valido</span>
                    }
                </>
            }
            {
                type === 'textarea' && <textarea
                    type="text"
                    className="input-style"
                    name={name}
                    id={label}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            }
        </div>
    );
};

export default CustomInput;
