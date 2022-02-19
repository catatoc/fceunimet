import React from 'react';
import { Fade } from "react-awesome-reveal";
import Header from '../common/Header';
import CargosInfo from './CargosInfo';
import Representantes from './Representantes';
import Carousel from '../store/cards/Carousel';
export default function Cargos({ products = [] }) {
    
    return(
      <div className="">
        <Fade cascade triggerOnce>
            <Header image="/images/gente.jpg" title="Ingenieria de Produccion" text="" />  
            <CargosInfo />
            <Representantes />
            <Carousel products={products} />
        </Fade>
      </div>
    )
}