import React from 'react';
import './CACard.css';

export default function CACard({src = '', alt = '', name = '', info = ''}) {
    return (
        <div className='ca-card'>
            <h2>{name}</h2>
            <img src={src} alt={`Imagen de ${name}`}/>
            <p>{info}</p>
        </div>
    )
}