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
            <p className="functions">Los Consejeros Académicos somos tus representantes estudiantiles ante el Consejo Académico: una reunión a la que asisten las máximas autoridades de la Universidad, donde defendemos los derechos de los estudiantes y donde materializamos proyectos de interés para la comunidad unimetana. </p>
            <div className="cards">
                {ca.map((c, i) => (
                    <CACard key={i} src={c.src} name={c.name} info={c.info} />
                ))}
            </div>
        </section>
    )
}