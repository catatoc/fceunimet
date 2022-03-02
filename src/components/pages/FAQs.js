import React from "react";
import "../../App.css";
import FAQs from "../FAQs/FAQs";
import Footer from "../footer/Footer";
import FloatingWhatsApp from "react-floating-whatsapp";
import logo from "./../../logo_blanco.png";
import WhatsAppIcon from './../../components/svg/whatsapp-white.svg'
import '../../App.css';

export default function FAQsPage() {
  // query de productos aquí
  return (
    <>
      <FAQs />
      <div className='btn-whatsapp'>
        <a className='anchor-whatsapp' href="https://api.whatsapp.com/send?phone=584241961948" target="_blank">
          <img src={WhatsAppIcon} alt='WhatsApp'></img>
        </a>
      </div>

    </>
  );
}