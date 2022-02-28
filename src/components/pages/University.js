import React from 'react';
import '../../App.css';
import University from '../university/University';
import FloatingWhatsApp from 'react-floating-whatsapp';
import logo from './../../logo_blanco.png';
import WhatsAppIcon from './../../components/svg/whatsapp-white.svg'
import '../../App.css';

export default function UniPage() {
  return (
    <>
      <University />
      <div className='btn-whatsapp'>
        <a className='anchor-whatsapp' href="https://api.whatsapp.com/send?phone=584241961948" target="_blank">
          <img src={WhatsAppIcon} alt='WhatsApp'></img>
        </a>
      </div>
    </>
  );
}