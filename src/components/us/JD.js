import React from 'react';
import './JD.css';

//5 integrantes de la Junta Directiva, se debe pasar imagen, nombre y descripción de cada uno
//El código no se encuentra en orden jerarquico, es por orden de posición en la página
export default function JD({ img1 = "/images/raquel.jpg", name1 = '', info1 = '' , img2 = '' , name2 = '' , info2 = '' , img3 = '/images/catato.jpg' , name3 = '' , info3 = '' , img4 = '' , name4 = '' , info4 = '' , img5 = '' , name5 = '' , info5 = ''}) {
    return (
        <section className='JDsection'>
            <div className="title">
                <h2>Junta Directiva</h2>
                <button>Organigrama</button>
            </div>
            <p className="functions">Función de la JD</p>
            <div className="row">
                <div>
                    <h3>Secretaria General</h3>
                    <img src="/images/raquel.jpg" alt="Imagen Secretario General" />
                    <h4>{name1}</h4>
                    <p>{info1}</p>
                </div>
                <div>
                    <h3>Presidente</h3>
                    <img src="/images/pulido.jpg" alt="Imagen Presidente" />
                    <h4>{name2}</h4>
                    <p>{info2}</p>
                </div>
                <div>
                    <h3>Secretario de Asuntos Internos</h3>
                    <img src="/images/catato.jpg" alt="Imagen Secretario Asuntos Internos" />
                    <h4>{name3}</h4>
                    <p>{info3}</p>
                </div>
            </div>
            <div className='row'>
                <div>
                    <h3>Coordinador General</h3>
                    <img src="/images/marcello.jpg" alt="Imagen Coordinador General" />
                    <h4>{name4}</h4>
                    <p>{info4}</p>
                </div>
                <div>
                    <h3>Tesorero</h3>
                    <img src="/images/santiago.jpg" alt="Imagen Tesorero" />
                    <h4>{name5}</h4>
                    <p>{info5}</p>
                </div>
            </div>
        </section>
    )
}