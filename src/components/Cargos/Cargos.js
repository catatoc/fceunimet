import React from 'react';
import { Fade } from "react-awesome-reveal";
import Header from '../common/Header';
import CargosInfo from './CargosInfo';
import Representantes from './Representantes';
export default function Cargos() {
    
    return(
      <div className="">
        <Fade cascade triggerOnce>
            <Header image="/images/gente.jpg" title="Ingenieria de Produccion" text="" />  
            <CargosInfo />
            <Representantes />
        </Fade>
      </div>
    )
}