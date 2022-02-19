import React from 'react';
import { Fade } from "react-awesome-reveal";
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import FloatingWhatsApp from 'react-floating-whatsapp';
import logo from './../../logo_blanco.png';
import Footer from "../footer/Footer";

function Home() {
  return (
    <>
      {/* <Fade cascade triggerOnce> */}
        <HeroSection />
        <Cards />
        <FloatingWhatsApp
        allowClickAway={true}
        avatar={logo}
        phoneNumber="+584241961948"
        accountName="FCE-UNIMET"
        statusMessage="Universidad Metropolitana de Caracas"
        chatMessage="Hola! Un gusto saludarte. Estamos a la orden para ayudarte🌳🍊"
        CSSProperties="z-index=100"
      />
      {/* </Fade> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;
