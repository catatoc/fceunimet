import React from 'react';
import { Link } from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll'

function CardItem(props) {

  // Funcion para subir al home
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
              onClick={toggleHome}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
