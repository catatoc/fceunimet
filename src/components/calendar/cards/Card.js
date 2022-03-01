import React from "react";
import './Card.css';

export default function Card({ product = { image: '', name: 'Product name', price: '12' } }) {
  return(
    <div className="card-calendar">
        <p className="card-date-calendar">{product.date}</p>
        <img className="card-image-calendar" src={product.image} alt={product.name} />
        <div className="card-text-calendar">
            <p className="card-name-calendar">{product.name}</p>
            <p className="card-name-calendar">{product.semana}</p>
            <p className="card-name-calendar">{product.place}</p>
            <p className="card-name-calendar">{product.escuela}</p>
        </div>
    </div>
  )
}