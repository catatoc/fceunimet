import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import {animateScroll as scroll} from 'react-scroll'

function Cards() {

  // Funcion para subir al home
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <div className='cards'>
      <h1>¡Estamos trabajando para ti!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/presidentes-min-min.jpg'
              text='Descubre lo que significa ser parte de este equipo'
              label='Nosotros'
              path='/us'
            />
            <CardItem
              src='images/unimet.jpg'
              text='Encuentra los productos que hemos desarrollado'
              label='Tienda'
              path='/store'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bandera.jpg'
              text='¡No te quedes con dudas!'
              label='Preguntas Frecuentes'
              path='/ayuda'
            />
            <CardItem
              src='images/saman.jpg'
              text='Mejora tu vida universitaria involucrándote con tu Escuela'
              label='Escuelas'
              onClick={toggleHome}
              path='/products'
            />
            <CardItem
              src='images/vintage.jpg'
              text='Información relevante sobre nuetra Universidad'
              label='Universidad'
              onClick={toggleHome}
              path='/escuelas'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
