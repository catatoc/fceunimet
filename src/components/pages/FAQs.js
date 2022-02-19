import React from "react";
import "../../App.css";
import FAQs from "../FAQs/FAQs";
import Footer from "../footer/Footer";
import FloatingWhatsApp from "react-floating-whatsapp";
import logo from "./../../logo_blanco.png";

export default function FAQsPage() {
  // query de productos aquí
  const questions = [
    {
      title: "Preugnta 1",
      question: ""
    },
    {
      title: "Pregunta 2",
      question: ""
    },
    {
      title: "Pregunta 3",
      question: ""
    },
    {
      title: "Pregunta 4",
      question: ""
    },
  ];
  return (
    <>
      <FAQs questions={questions} />
      <FloatingWhatsApp
        allowClickAway={true}
        avatar={logo}
        phoneNumber="+584141181358"
        accountName="FCE UNIMET"
        statusMessage="Federación de Centros de Estudiantes de la Universidad Metropolitana de Caracas"
        chatMessage="Hola! Un gusto saludarte. Estamos a la orden para ayudarte. Ponte en contacto con nosotros para indicarte cómo es la mejor manera de resolver tu inquietud."
        CSSProperties="z-index=100"
      />
      {/* <Footer /> */}
    </>
  );
}