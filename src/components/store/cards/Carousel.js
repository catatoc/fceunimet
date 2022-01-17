import React from 'react';
import Card from './Card';

export default function Carousel({ products = [] }) {
  return (
    <div className="carousel-holder">
        {products?.map((p, i) => (
          <Card key={i} product={p} />
        ))}
    </div>
  )
}