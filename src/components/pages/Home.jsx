import React from 'react';
import { Fade } from "react-awesome-reveal";
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import FloatingWhatsApp from 'react-floating-whatsapp';
import logo from './../../logo_blanco.png';
import Footer from "../footer/Footer";
import WhatsAppIcon from './../../components/svg/whatsapp-white.svg'

function Home() {
  return (
    <>
        <HeroSection />
        <Cards />
        <div className='btn-whatsapp'>
          <a className='anchor-whatsapp' href="https://api.whatsapp.com/send?phone=584241961948" target="_blank">
		        <img src={WhatsAppIcon} alt='WhatsApp'></img>
	        </a>
        </div>
    </>
  );
}

export default Home;
