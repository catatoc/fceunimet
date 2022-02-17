import React from 'react';
import { Fade } from "react-awesome-reveal";
import './FAQs.css';
import Header from '../common/Header';
import Text from '../common/Text';
import Questions from './cards/question';
import { FaQuestionCircle } from 'react-icons/fa';
import CTA from './CTA-FAQ';

export default function FAQ() {
    return(
      <div className="">
        <Fade cascade triggerOnce>
            <Header image="" title="PREGUNTAS FRECUENTES" text="" />
            <Text text={'A continuación se presentan las preguntas más frecuentes en los estudiantes de todas las carreras.'} />
            <div>
                <h1>Filtro</h1>
            </div>
            <div className='faqcards__container'>
                <div className='faqcards__wrapper'>
                <ul className='faqcards__items'>
                    <Questions/>
                </ul>
                </div>
            </div>
            <CTA />
        </Fade>
      </div>
    )
}