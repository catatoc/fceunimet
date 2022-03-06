import React from "react";
import "../../App.css";
import Calendar from "../calendar/Calendar";
import Footer from "../footer/Footer";
import FloatingWhatsApp from "react-floating-whatsapp";
import logo from "./../../logo_blanco.png";
import WhatsAppIcon from "./../../components/svg/whatsapp-white.svg";
import "../../App.css";
import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";

export default function StorePage() {
  // query de productos aquí
  const products = [
    {
      name: "Título largo del evento a realizar",
      image: "/images/Escuelas/Liberales/liberales-banco-central.jpeg",
      semana: "Semana 8",
      date: "2 de marzo",
      place: "Auditorio Manoa",
      escuela: "Liberales",
    },
    {
      name: "Título largo del evento a realizar",
      image: "/images/Escuelas/Idiomas/idiomas-algo.jpeg",
      semana: "Semana 9",
      date: "14 de marzo",
      place: "Auditorio Polar",
      escuela: "Idiomas Modernos",
    },
    {
      name: "Título largo del evento a realizar",
      image: "/images/Escuelas/Social/social-acoso.jpeg",
      semana: "Semana 8",
      date: "16 de marzo",
      place: "Auditorio Pensieri",
      escuela: "Coord. Social",
    },
    {
      name: "Título largo del evento a realizar",
      image: "/images/Escuelas/Liberales/liberales-banco-central.jpeg",
      semana: "Semana 8",
      date: "2 de marzo",
      place: "Auditorio Manoa",
      escuela: "Ing. Sistemas",
    },
  ];

  return (
    <>
      <Calendar products={products} />
      <ReactEmbeddedGoogleCalendar
        publicUrl="https://calendar.google.com/calendar/embed?src=ceum%40unimet.edu.ve&ctz=America%2FCaracas"
        height="400px"
      />
      <div className="btn-whatsapp">
        <a
          className="anchor-whatsapp"
          href="https://api.whatsapp.com/send?phone=584241961948"
          target="_blank"
        >
          <img src={WhatsAppIcon} alt="WhatsApp"></img>
        </a>
      </div>
    </>
  );
}
