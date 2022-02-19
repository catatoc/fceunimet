import React from 'react';
import './JDCard.css';

export default function Card({position = '', src = '', alt = '', name = '', info = ''}) {
    return (
        <div className='position-card'>
            <h3>{position}</h3>
            <div className='card-image'>
                <img  src={src} alt={alt} />
            </div>
            <h4>{name}</h4>
            <p>{info}</p>
        </div>
    )
}