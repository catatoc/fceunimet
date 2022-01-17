import React from "react";

export default function Card({ product = { image: '', name: 'Product name', price: '12' } }) {
  return(
    <div className="card">
        <img className="card-image" src={product.image} />
        <div className="card-text">
            <p className="card-name">{product.name}</p>
            <p className="card-price">${product.price}</p>
        </div>
    </div>
  )
}