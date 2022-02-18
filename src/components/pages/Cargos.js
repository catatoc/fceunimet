import React from 'react';

import Cargos from "../Cargos/Cargos";
import FloatingWhatsApp from 'react-floating-whatsapp';
import logo from './../../logo_blanco.png';

export default function CargosPage() {
    return (
        <>
            <Cargos />
            <FloatingWhatsApp allowClickAway={true} avatar={logo} phoneNumber="+584141181358" accountName="FCE UNIMET" statusMessage="Federación de Centros de Estudiantes de la Universidad Metropolitana de Caracas" chatMessage="Hola! Un gusto saludarte. Estamos a la orden para ayudarte. Ponte en contacto con nosotros para indicarte cómo es la mejor manera de resolver tu inquietud." CSSProperties="z-index=100"
            />

        </>
    )
}