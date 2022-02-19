import React from 'react';
import { Fade } from "react-awesome-reveal";
import Header from '../common/Header';
import Text from '../common/Text'; //Esto hay que cambiarlo cuando se mueva de store
import CA from './CA'
import JD from './JD'
import JoinUs from './JoinUs';

export default function Us() {
    return(
      <div className="">
        <Fade cascade triggerOnce>
            <Header image="/images/presidentes.jpg" title="NOSOTROS" text="" />
            <Text text={'¡Un equipo de 104 personas comprometidas con el bienestar unimetano!'} />
            <CA />
            <JD />
            <JoinUs />
        </Fade>
      </div>
    )
}