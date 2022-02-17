import React from 'react';
import { Fade } from "react-awesome-reveal";
import Header from '../common/Header';
import Text from '../common/Text'; //Esto hay que cambiarlo cuando se mueva de store
import CA from './CA'
import JD from './JD'
import JoinUs from './JoinUs';

export default function Us() {
    return(
      <div className="">
        <Fade cascade triggerOnce>
            <Header image="/images/gente.jpg" title="NOSOTROS" text="" />
            <Text />
            <CA 
                img1 = '' 
                name1 = 'Nicolle Giraud' 
                info1 = 'Estudiante de Ingeniería Química. Agregar más cosas' 
                img2 = '' 
                name2 = 'José Cisneros' 
                info2 = 'Estudiante de Ingeniería de Sistemas y Producción. Agregar más cosas' 
            />
            <JD 
                img1 = ''
                name1 = 'Raquel Greige'
                info1 = 'Estudiante de Derecho. Agregar más'
                img2 = ''
                name2 = 'Ricardo Pulido'
                info2 = 'Estudiante de Ciencias Administrativas, mención Gerencia y mención Banca y Finanzas. Agregar más'
                img3 = ''
                name3 = 'Carlos Carrasquero'
                info3 = 'Ingeniero de Producción y estudiante de Ingeniería de Sistemas. Agregar más'
                img4 = ''
                name4 = 'Marcello Piunno'
                info4 = 'Estudiante de Ciencias Adminitrativas, mención Gerencia. Agregar más'
                img5 = ''
                name5 = 'Santiago Pérez Mussa'
                info5 = 'Estudiante de Economía Empresarial. Agregar más'
            />
            <JoinUs />
        </Fade>
      </div>
    )
}