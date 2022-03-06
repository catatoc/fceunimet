import React from "react";
import JoinUs from "../us/JoinUs";
import Schools from "../schools/Schools";
import FloatingWhatsApp from "react-floating-whatsapp";
import logo from "./../../logo_blanco.png";

export default function SchoolsPage() {
  return (
    <>
      <Schools />
      <FloatingWhatsApp
        allowClickAway={true}
        avatar={logo}
        phoneNumber="+584141181358"
        accountName="FCE UNIMET"
        statusMessage="Federación de Centros de Estudiantes de la Universidad Metropolitana de Caracas"
        chatMessage="Hola! Un gusto saludarte. Estamos a la orden para ayudarte. Ponte en contacto con nosotros para indicarte cómo es la mejor manera de resolver tu inquietud."
        CSSProperties="z-index=100"
      />
      <JoinUs />
    </>
  );
}
