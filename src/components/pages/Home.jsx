import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import HeroVideo from "../HeroVideo";
import Footer from "../footer/Footer";
import FloatingWhatsApp from "react-floating-whatsapp";
import logo from "./../../logo_blanco.png";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <FloatingWhatsApp
        allowClickAway={true}
        avatar={logo}
        phoneNumber="+584141181358"
        accountName="FCE-UNIMET"
        statusMessage="Universidad Metropolitana de Caracas"
        chatMessage="Hola! Un gusto saludarte. Estamos a la orden para ayudarte🌳🍊"
        CSSProperties="z-index=100"
      />
      <Footer />
    </>
  );
}

export default Home;
