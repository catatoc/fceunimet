import React from 'react';
import './CA.css';
import CACard from './cards/CACard';
import { ca } from '../../lib/FCE2122';

//Dos Consejeros Académicos, se debe pasar imagen, nombre y descripción de cada uno
export default function CA() {
    return (
        <section className='CA-section'>
            <div className="title">
                <h2>Consejeros Académicos</h2>
                <button>Organigrama</button>
            </div>
            <p className="functions">Función de los CA</p>
            <div className="cards">
                {ca.map((c, i) => (
                    <CACard key={i} src={c.src} name={c.name} info={c.info} />
                ))}
            </div>
        </section>
    )
}