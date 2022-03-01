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
              onClick={toggleHome}
              path='/us'
            />
                <CardItem
                  src='images/calendario.jpg'
                  text='¡Entérate de nuestros eventos!'
                  label='Calendario'
                  onClick={toggleHome}
                  path='/calendar'
                />
              <CardItem
                src='images/bandera.jpg'
                text='¡No te quedes con dudas!'
                label='Preguntas Frecuentes'
                onClick={toggleHome}
                path='/ayuda'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/unimet.jpg'
              text='Encuentra los productos que hemos desarrollado'
              label='Tienda'
              onClick={toggleHome}
              path='/store'
            />
            <CardItem
              src='images/saman.jpg'
              text='Mejora tu vida universitaria involucrándote con tu Escuela'
              label='Escuelas'
              onClick={toggleHome}
              path='/schools'
            />
            <CardItem
              src='images/vintage.jpg'
              text='Información relevante sobre nuestra Universidad'
              label='Universidad'
              onClick={toggleHome}
              path='/university'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
