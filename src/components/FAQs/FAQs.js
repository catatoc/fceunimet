import React from 'react';
import { Fade } from "react-awesome-reveal";
import './FAQs.css';
import Header from '../common/Header';
import Text from '../common/Text';
import Questions from './cards/question';
// import CTA from './CTA';

export default function Store({ products = [] }) {
    return(
      <div className="">
        <Fade cascade triggerOnce>
            <Header image="" title="PREGUNTAS FRECUENTES" text="" />
            <Text text={'text'} />
            <div>
                <h1>Filtro</h1>
            </div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Questions
                 />
                </ul>
                </div>
            </div>
        </Fade>
      </div>
    )
}