import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>¡Estamos trabajando para ti!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/unimet3.jpg'
              text='Descubre lo que significa ser parte de este equipo'
              label='Nosotros'
              path='/services'
            />
            <CardItem
              src='images/unimet.jpg'
              text='Encuentra los productos que hemos desarrollado'
              label='Tienda'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bandera.jpg'
              text='Próximas actividades'
              label='Calendario'
              path='/services'
            />
            <CardItem
              src='images/saman.jpg'
              text='Mejora tu vida universitaria formando parte de agrupaciones'
              label='Agrupaciones'
              path='/products'
            />
            <CardItem
              src='images/vintage.jpg'
              text='Información relevante sobre nuetra Universidad'
              label='Universidad'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
