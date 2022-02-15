import React from "react";
import './Card.css';

export default function Card({ product = { image: '', name: 'Product name', price: '12' } }) {
  return(
    <div className="card">
        <div className="card-text">
            <p className="card-name">{product.name}</p>
            <p className="card-text">{product.name}</p>
        </div>
    </div>
  )
}