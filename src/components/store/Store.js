import React from 'react';
import { Fade } from "react-awesome-reveal";
import './Store.css';
import Header from '../common/Header';
import Text from './Text';
import Carousel from './cards/Carousel';
import CTA from './CTA';

export default function Store({ products = [] }) {
    return(
      <div className="">
        <Fade cascade triggerOnce>
            <Header image="/images/saman.jpg" title="TIENDA" text="" />
            <Text />
            <Carousel products={products} />
            <CTA />
        </Fade>
      </div>
    )
}