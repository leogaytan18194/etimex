import React, { useState } from 'react';
import FAQ from './FAQ';
import './faq.scss';

function Preguntas () {

  const [faqs, setfaqs] = useState([
    {
      question: '¿Qué necesitas para obtener tu auto BESTA?',
      answer: 'Es muy sencillo, sólo tienes que contar con: INE, Comprobante de domicilio, RFC (Constancia de situación fiscal), CURP. Licencia tipo C, Captura de pantalla de App 400 viajes, INE de un aval (puede ser amigo, familiar o conocido)',
      open: true
    },
    {
      question: '¿Hay enganche?',
      answer: 'Es un depósito de garantía de $15,000.00* + $2,000.00 de gastos notariales aproximadamente, ÚNICAMENTE el depósito de garantía se puede utilizar para completar la liquidación de su unidad al término de contrato, siempre y cuando no haya adeudos.',
      open: false
    },
    {
      question: '¿Mi unidad puede ir sin GNV?',
      answer: 'Todas las unidades que manejamos por el momento son de transmisión manual con GNV, no se entregan vehículos sin GNV ya que el objetivo es que el socio conductor pueda ahorrar en gasolina y así maximizar sus ingresos.',
      open: false
    },
    {
        question: '¿Los vehículos son con opción a compra?',
        answer: 'De momento todas nuestras unidades son con opción a compra.',
        open: false
    },
    {
        question: '¿Las semanas aumentan?',
        answer: 'No, tu pago semanal sería el mismo durante todo tu contrato siempre y cuando no te atrases.',
        open: false
    },
    {
        question: '¿Qué incluye la renta de mi vehículo?',
        answer: 'Incluye Seguro con cobertura amplia para conducir en la plataforma de tu preferencia, Sistema de GNV, Mantenimiento de GNV y verificación, Mantenimientos preventivos, Asesoría en siniestros 24/7, Prevención anti-robo (GPS), 1 Alta y 2 refrendos* y Acceso a crédito mediante recaudo GNV para reparar tu unidad.',
        open: false
    },
    {
        question: '¿Tengo que estar dado de alta con alguna plataforma?',
        answer: 'Así es, uno de nuestros requisitos es que hayan realizado mínimo 400 viajes comprobables.',
        open: false
    },
    {
        question: '¿En qué ciudad se encuentran?',
        answer: 'Por el momento operamos en el estado de Nuevo León y Jalisco.',
        open: false
    },
    {
        question: '¿Cuándo termina el tiempo de mi contrato para acceder a la opción a compra?',
        answer: 'Es un contrato de 3 años notariado y tendrás la copia para que tengas la confianza que somos una empresa sin engaños',
        open: false
    },
    {
        question: '¿Puedo viajar a otros estados?',
        answer: 'Las unidades de BESTA se pueden utilizar únicamente dentro del estado en dónde haya adquirido su vehículo, es decir, no pueden salir fuera del estado de procedencia.',
        open: false
    },
    {
        question: '¿Puedo subarrendar mi unidad BESTA?',
        answer: 'No, el subarrendamiento no está permitido y es una causa de rescisión de contrato.',
        open: false
    },
    {
        question: '¿Puedo usar mi unidad para cosas personales?',
        answer: 'Claro, el uso personal está permitido, pero no olvides que tú eres la única persona que está autorizada para conducir el auto.',
        open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <h1>Deja tus dudas, decídete por BESTA</h1>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default Preguntas;