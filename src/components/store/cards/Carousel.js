import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion, useMotionValue } from 'framer-motion';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import './Carousel.css';
import Card from './Card';

export default function Carousel({ products = [] }) {
  const [productIndex, setProductIndex] = React.useState(0);
  const [next, setNext] = React.useState(false);
  const [prev, setPrev] = React.useState(false);
  const x = useMotionValue(0);

  let firstThreeProducts = products.slice(productIndex, productIndex + 3);

  function nextProduct() {
    //setNext(true);
    x.set('-100%');
    const lastProductIndex = products.length - 1;
    const resetProductIndex = productIndex === lastProductIndex;
    const index = resetProductIndex ? 0 : productIndex + 1;
    //setProductIndex(index);
    if (productIndex !== 0) {
        setProductIndex(productIndex + 1);
    }
    //await new Promise(resolve => setTimeout(resolve, 1000));
    //setNext(false);
  };
  function prevProduct() {
    //setPrev(true);
    x.set(productIndex >= 2 ? '100%' : '0');
    const lastProductIndex = products.length - 1;
    //const resetProductIndex = productIndex === 0;
    //const index = resetProductIndex ? lastProductIndex : productIndex - 1;
    if (productIndex !== lastProductIndex) {
        setProductIndex(productIndex - 1);
    }
    
    //await new Promise(resolve => setTimeout(resolve, 1000));
    //setPrev(false);
  };

  const variants = {
      next: { x: "-100%", transition: { duration: 0.5 }},
      prev: { x: "100%", transition: { duration: 0.5 }},
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <div className="carousel-button" />,
    prevArrow: <div className="carousel-button" />,
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-holder">
        <Slider {...settings} >
            {products?.map((p, i) => (
                <Card key={i} product={p} />
            ))}
        </Slider>
    </div>
  )
}








/*
  const [productIndex, setProductIndex] = React.useState(0);
  const [next, setNext] = React.useState(false);
  const [prev, setPrev] = React.useState(false);
  const x = useMotionValue(0);

  let firstThreeProducts = products.slice(productIndex, productIndex + 3);

  function nextProduct() {
    //setNext(true);
    x.set('-100%');
    const lastProductIndex = products.length - 1;
    const resetProductIndex = productIndex === lastProductIndex;
    const index = resetProductIndex ? 0 : productIndex + 1;
    //setProductIndex(index);
    if (productIndex !== 0) {
        setProductIndex(productIndex + 1);
    }
    //await new Promise(resolve => setTimeout(resolve, 1000));
    //setNext(false);
  };
  function prevProduct() {
    //setPrev(true);
    x.set(productIndex >= 2 ? '100%' : '0');
    const lastProductIndex = products.length - 1;
    //const resetProductIndex = productIndex === 0;
    //const index = resetProductIndex ? lastProductIndex : productIndex - 1;
    if (productIndex !== lastProductIndex) {
        setProductIndex(productIndex - 1);
    }
    
    //await new Promise(resolve => setTimeout(resolve, 1000));
    //setPrev(false);
  };

  const variants = {
      next: { x: "-100%", transition: { duration: 0.5 }},
      prev: { x: "100%", transition: { duration: 0.5 }},
  }
  return (
    <div className="carousel-holder">
        <motion.button 
          className="carousel-button" 
          type="button" 
          onClick={(e) => prevProduct()}
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.975 }}
          disabled={productIndex === 0}
        >
            <FaChevronCircleLeft className="carousel-button-arrow" />
        </motion.button>
        <div className="products-holder">
            {products?.map((p, i) => (
                <motion.div 
                  variants={variants}
                  style={{ x }}
                  animate={next ? 'next' : prev ? 'prev' : {}}
                >
                    <Card key={i} product={p} />
                </motion.div>
            ))}
        </div>
        <motion.button 
          className="carousel-button" 
          type="button" 
          onClick={(e) => nextProduct()}
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.975 }}
          disabled={productIndex === products.length - 1}
        >
            <FaChevronCircleRight className="carousel-button-arrow" />
        </motion.button>
    </div>
  )
*/