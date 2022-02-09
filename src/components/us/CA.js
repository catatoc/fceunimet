import React from 'react';
import './CA.css';

//Dos Consejeros Académicos, se debe pasar imagen, nombre y descripción de cada uno
export default function CA({ img1 = '', name1 = '', info1 = '' , img2 = '' , name2 = '' , info2 = ''}) {
    return (
        <section className='CAsection'>
            <div className="title">
                <h2>Consejeros Académicos</h2>
                <button>Organigrama</button>
            </div>
            <p className="functions">Función de los CA</p>
            <div className="container">
                <div>
                    <h3>{name1}</h3>
                    <img src={img1} alt={`Imagen de ${name1}`}/>
                    <p>{info1}</p>
                </div>
                <div>
                    <h3>{name2}</h3>
                    <img src={img2} alt={`Imagen de ${name2}`}/>
                    <p>{info2}</p>
                </div>
            </div>
        </section>
    )
}