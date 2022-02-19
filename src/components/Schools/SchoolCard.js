import React from "react";
import './SchoolCard.css';
import { Link } from "react-router-dom";

export default function SchoolCard() {
    return (
        <> 
            <lu className="Lu-card-ing">
                <li className="Li-card-ing"><p className="p-Card-School">Ingeniería Civil</p><img src="/images/Civil.png" className="img"/></li>
                <li className="Li-card-ing"><p className="p-Card-School">Ingeniería Mecánica</p><img src="/images/Mecanica.png" className="img"/></li>
                <li className="Li-card-ing"><Link to="Cargos"><p className="p-Card-School">Ingeniería Producción</p></Link><img src="/images/Produccion.png" className="img"/></li>
                
            </lu>
            <lu className="Lu-card-ing">
                <li className="Li-card-ing"><p className="p-Card-School">Ingeniería Química</p><img src="/images/Quimica.png" className="img"/></li>
                <li className="Li-card-ing"><p className="p-Card-School">Ingeniería Sistemas</p><img src="/images/Sistemas.png" className="img"/></li>
                <li className="Li-card-ing"><p className="p-Card-School">Ingeniería Eléctrica</p><img src="/images/Electrica.png" className="img"/></li>
            </lu>



        </>

    );
}

