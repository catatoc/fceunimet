import React from 'react';
import { Fade } from "react-awesome-reveal";
import './Calendar.css';
import Header from '../common/Header';
import Text from '../common/Text';
import Carousel from './cards/Carousel';
import CTA from './CTA';

export default function Store({ products = [] }) {
    return(
      <div className="">
        <Fade cascade triggerOnce>
            <Header image="/images/calendario.jpg" title="CALENDARIO" text="" />
            <Text text={'¡Entérate de los eventos!'} />
            <Carousel products={products} />
        </Fade>
      </div>
    )
}