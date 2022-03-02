import React from "react";
import './SchoolCard.css';
import { Link } from "react-router-dom";

export default function SchoolCard() {
    return (
        <> 
            <lu className="Lu-card-ing">
                <li className="Li-card-ing"><p className="p-Card-School">Ingeniería Civil</p><img src={"https://www.udg.co.cu/cmap/sistemas_operativos/administracion_memoria/Traduccion%20de%20DV%20a%20DR/images/memoria_virtual2.png"} className="img"/></li>
                <li className="Li-card-ing"><p className="p-Card-School">Ingeniería Mecanica</p><img src={"https://www.udg.co.cu/cmap/sistemas_operativos/administracion_memoria/Traduccion%20de%20DV%20a%20DR/images/memoria_virtual2.png"} className="img"/></li>
                <li className="Li-card-ing"><Link to="Cargos"><p className="p-Card-School">Ingenieria Produccion</p></Link><img src={"https://www.udg.co.cu/cmap/sistemas_operativos/administracion_memoria/Traduccion%20de%20DV%20a%20DR/images/memoria_virtual2.png"} className="img"/></li>
                
            </lu>
            <lu className="Lu-card-ing">
                <li className="Li-card-ing"><p className="p-Card-School">Ingenieria Quimica</p><img src={"https://www.udg.co.cu/cmap/sistemas_operativos/administracion_memoria/Traduccion%20de%20DV%20a%20DR/images/memoria_virtual2.png"} className="img"/></li>
                <li className="Li-card-ing"><p className="p-Card-School">Ingenieria Sistemas</p><img src={"https://www.udg.co.cu/cmap/sistemas_operativos/administracion_memoria/Traduccion%20de%20DV%20a%20DR/images/memoria_virtual2.png"} className="img"/></li>
                <li className="Li-card-ing"><p className="p-Card-School">Ingenieria Electrica</p><img src={"https://www.udg.co.cu/cmap/sistemas_operativos/administracion_memoria/Traduccion%20de%20DV%20a%20DR/images/memoria_virtual2.png"} className="img"/></li>
            </lu>



        </>

    );
}

