import React from 'react';
import './Maps.css';

export default function Maps() {
    return (
        <section className='maps'>
            <div className='Mcontainer'>
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1VkBNdfhvsMK-xNsqbyfYMBrgjz8M-shP&ehbc=2E312F"></iframe>
            </div>
            <div className='Mcontainer Mtext'>
                <h3>Atlas Unimet</h3>
                <p>
                    Integrado con Google Maps, desde tu teléfono o la computadora podrás 
                    ubicar cualquier punto en la universidad. Para ver la lista con todos los 
                    puntos haga clic en la flecha a la derecha que se encuentra en la esquina 
                    izquierda superior del mapa, luego es cuestión de marcar los módulos que 
                    desea visualizar o no. 
                    <br></br><br></br>
                    Si integra el Atlas en su Google Maps, para poder ver todos los puntos deberá 
                    seleccionar cualquier punto, más información, y ver leyenda del mapa. Para 
                    integrarlo haga clic en la estrella que se encuentra en el marco negro del mapa, 
                    abra Google Maps con su cuenta, busque "Guardados" o "Tus Sitios" y en mapas aparecerá 
                    el Directorio 21-22.
                </p>
            </div>
        </section>
    )
}