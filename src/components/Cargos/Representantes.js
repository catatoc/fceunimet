import React from "react";
import './Representantes.css';

export default function Representantes() {
    return(
        <div className="representantes_container">
            <h2 className="title_representantes">Representantes estudiantiles</h2>
            <h3 className="subtitle_representantes">Consejeros de escuela</h3>
            <div className="consejeros_container">
                <div className="consejeros_cards">
                    <img src="/images/Ana Montoya.jpg" alt="" className="cargo_img" />
                    <p className="name_cargo">Ana Montoya</p>
                    <p className="role_cargo">Consejera de escuela</p>
                </div>
                <div className="consejeros_cards">
                    <img src="/images/Daniela Serrano.jpg" alt="" className="cargo_img" />
                    <p className="name_cargo">Daniela Serrano</p>
                    <p className="role_cargo">Consejera de escuela</p>
                </div>
                <div className="consejeros_cards">
                    <img src="/images/Alejandro Hulcan.jpg" alt="" className="cargo_img" />
                    <p className="name_cargo">Alejandro Hulcán</p>
                    <p className="role_cargo">Consejero de escuela</p>
                </div>
            </div>
            <h3 className="subtitle_representantes">Junta Directiva</h3>
            <div className="junta_container">
                <div className="consejeros_cards">
                    <img src="/images/Genesis.jpg" alt="" className="cargo_img" />
                    <p className="name_cargo">Génesis Recine</p>
                    <p className="role_cargo">Presidente</p>
                </div>
                <div className="consejeros_cards">
                    <img src="/images/Nat.jpg" alt="" className="cargo_img" />
                    <p className="name_cargo">Natasha Camero</p>
                    <p className="role_cargo">Coordinadora General</p>
                </div>
                <div className="consejeros_cards">
                    <img src="/images/Nicole.jpg" alt="" className="cargo_img" />
                    <p className="name_cargo">Nicole Villegas</p>
                    <p className="role_cargo">Tesorera</p>
                </div>
            </div>
        </div>
    )
}