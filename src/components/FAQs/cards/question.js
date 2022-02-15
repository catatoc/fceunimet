import React from "react";
import './question.css';

export default function Card({ product = { image: '', name: 'Product name', price: '12' } }) {
  return(
    <div className="questioncard">
        <div className="questioncard-text">
            <p className="questioncard-name">{product.name}</p>
            <p className="questioncard-text">{product.name}</p>
        </div>
    </div>
  )
}