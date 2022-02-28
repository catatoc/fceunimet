import React from 'react';
import { Fade } from "react-awesome-reveal";
import Header from '../common/Header';
import Text from '../common/Text'; //Esto hay que cambiarlo cuando se mueva de store
import CA from './CA'
import JD from './JD'
import JoinUs from './JoinUs';
import WhatsAppIcon from './../../components/svg/whatsapp-white.svg'
import InstagramIcon from './../../components/svg/instagram-blanco.svg'
import YoutubeIcon from './../../components/svg/youtube-blanco.svg'
import '../../App.css';
import './../FAQs/cards/question.css';

export default function Us() {
    return(
      <div className="">
        <Fade cascade triggerOnce>
            <Header image="/images/presidentes-min-min.jpg" title="NOSOTROS" text="" />
            <Text text={'¡Un equipo de 104 personas comprometidas con el bienestar unimetano!'} />
            <div className='btn-whatsapp'>
              <a className='anchor-whatsapp' href="https://api.whatsapp.com/send?phone=584241961948" target="_blank">
                <img src={WhatsAppIcon} alt='WhatsApp'></img>
              </a>
            </div>
            {/* Esto de social network lo codee todo en App.css por si acaso queremos usarlo en otro lado. Puede verse mejor pero mientras tanto.*/}
            <div className='social-network'> 
              <div className='btn-whatsapp-sm'>
                <a className='anchor-whatsapp' href="https://api.whatsapp.com/send?phone=584241961948" target="_blank">
                  <img src={WhatsAppIcon} alt='WhatsApp'></img>
                </a>
              </div>
              <div className='btn-instagram'>
                <a className='anchor-whatsapp' href="https://api.whatsapp.com/send?phone=584241961948" target="_blank">
                  <img src={InstagramIcon} alt='WhatsApp'></img>
                </a>
              </div>
              <div className='btn-youtube'>
                <a className='anchor-whatsapp' href="https://api.whatsapp.com/send?phone=584241961948" target="_blank">
                  <img src={YoutubeIcon} alt='WhatsApp'></img>
                </a>
              </div>

            </div>

            <CA />
            <JD />
            <JoinUs />
        </Fade>
      </div>
    )
}