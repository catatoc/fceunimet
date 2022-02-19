import React from 'react';
import './JD.css';
import JDCard from './cards/JDCard';
import { jd } from '../../lib/FCE2122';

//5 integrantes de la Junta Directiva, se debe pasar imagen, nombre y descripción de cada uno
//El código no se encuentra en orden jerarquico, es por orden de posición en la página
export default function JD() {
    return (
        <section className='JD-section'>
            <div className="title">
                <h2>Junta Directiva</h2>
                <button>Organigrama</button>
            </div>
            <p className="functions">Función de la JD</p>
            <div className="cards">
                {jd.map((m, i) => (
                    <JDCard key={i} position={m.position} src={m.src} alt={m.alt} name={m.name} info={m.info} />
                ))}
            </div>
        </section>
    )
}