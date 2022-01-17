import React from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import './Carousel.css';
import Card from './Card';

export default function Carousel({ products = [] }) {
  const [productIndex, setProductIndex] = React.useState(0);

  let firstThreeProducts = products.slice(productIndex, productIndex + 3);

  const nextProduct = () => {
    const lastProductIndex = products.length - 1;
    const resetProductIndex = productIndex === lastProductIndex;
    const index = resetProductIndex ? 0 : productIndex + 1;
    setProductIndex(index);
  };
  const prevProduct = () => {
    const lastProductIndex = products.length - 1;
    const resetProductIndex = productIndex === 0;
    const index = resetProductIndex ? lastProductIndex : productIndex - 1;
    setProductIndex(index);
  };
  return (
    <div className="carousel-holder">
        <button className="carousel-button" type="button" onClick={(e) => prevProduct()}>
            <FaChevronCircleLeft className="carousel-button-arrow" />
        </button>
        <div className="products-holder">
            {products?.map((p, i) => (
            <Card key={i} product={p} />
            ))}
        </div>
        <button className="carousel-button" type="button" onClick={(e) => nextProduct()}>
            <FaChevronCircleRight className="carousel-button-arrow" />
        </button>
    </div>
  )
}