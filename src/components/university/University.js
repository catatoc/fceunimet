import React from 'react';
import { Fade } from "react-awesome-reveal";
import Header from '../common/Header';
import Text from '../common/Text'; //Esto hay que cambiarlo cuando se mueva de store
import Maps from './Maps'

export default function University() {
    return(
      <div className="">
        <Fade cascade triggerOnce>
          <Header image="/images/unimet3.jpg" title="UNIVERSIDAD" text="" />
          <Text text='texto sobre universidad' />
          <Maps />
        </Fade>
      </div>
    )
}