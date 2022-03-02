import React from "react";
import './SchoolCard_Faces.css';

export default function SchoolCard_Faces() {
    return (
        <> 
            <lu className="Lu-card-faces">
                <li className="Li-card-faces"><p className="p-Card-School-admin">Administración de Empresas</p><img src="/images/Admi.png" className="img"/></li>
                <li className="Li-card-faces"><p className="p-Card-School-faces">Economía Empresarial</p><img src="/images/Economia.png" className="img"/></li>
                <li className="Li-card-faces"><p className="p-Card-School-faces">Contaduría Pública</p><img src="/images/Contaduria.png" className="img"/></li>
            </lu>
            



        </>

    );
}

