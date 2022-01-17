import React from 'react';
import './Store.css';
import Header from '../common/Header';
import Text from './Text';
import Carousel from './cards/Carousel';
import CTA from './CTA';

export default function Store({ products = [] }) {
    return(
      <div className="">
        <Header image="/images/saman.jpg" title="TIENDA" text="" />
        <Text />
        <Carousel products={products} />
        <CTA />
      </div>
    )
}