import React from "react";
import './SchoolCard.css';
import { Link } from "react-router-dom";

export default function SchoolCard() {
    return (
        <> 
            <lu className="Lu-card-ing">
                <li className="Li-card-ing"><p className="p-Card-School">Ingenieria Civil</p><img src="/images/Civil.png" className="img"/></li>
                <li className="Li-card-ing"><p className="p-Card-School">Ingenieria Mecanica</p><img src="/images/Mecanica.png" className="img"/></li>
                <li className="Li-card-ing"><Link to="Cargos"><p className="p-Card-School">Ingenieria Produccion</p></Link><img src="/images/Produccion.png" className="img"/></li>
                
            </lu>
            <lu className="Lu-card-ing">
                <li className="Li-card-ing"><p className="p-Card-School">Ingenieria Quimica</p><img src="/images/Quimica.png" className="img"/></li>
                <li className="Li-card-ing"><p className="p-Card-School">Ingenieria Sistemas</p><img src="/images/Sistemas.png" className="img"/></li>
                <li className="Li-card-ing"><p className="p-Card-School">Ingenieria Electrica</p><img src="/images/Electrica.png" className="img"/></li>
            </lu>



        </>

    );
}

