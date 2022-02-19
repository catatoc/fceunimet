import React from "react";
import './SchoolSection.css';
//import logo from '..\src\Images';
import SchoolCard from './SchoolCard';
import SchoolCard_Faces from "./SchoolCard_Faces";
import SchoolCard_JyP from "./SchoolCard_JyP";
import SchoolCard_humanidades from "./SchoolCard_humanidades";
import SchoolCard_Ciencias from "./SchoolCard_Ciencias";
export default function SchoolSection() {
    return (
        
        <div className="container_school">
                <div className="lbl-menu">
                    <label for="radio2"><img src="/images/logo.png" alt="FCE Unimet Logo" className="logo" /></label>
                    <label for="radio1">Ingeniería</label>
                    <label for="radio3">Faces</label>
                    <label for="radio4">Ciencias</label>
                    <label for="radio5">Humanidades</label>
                    <label for="radio6">Jurídicos y Políticos</label>
                </div>

                <div className="content">
                    <input type="radio" name="radio" id="radio1" checked></input>
                    <div class="tab1">
                        <h2 className="title_carreras">Ingeniería</h2>
                        <SchoolCard /> 
                    </div>

                    <input type="radio" name="radio" id="radio2" checked></input>
                    <div class="tab2">
                        <h2 className="title_carreras">Toque la pestaña de la facultad que desea ver</h2>
                        <img src="/images/mano.png" alt="" className="pulsar" />
                    </div>

                    <input type="radio" name="radio" id="radio3"></input>
                    <div class="tab3">
                        <h2 className="title_carreras">Faces</h2>
                        <SchoolCard_Faces />
                    </div>

                    <input type="radio" name="radio" id="radio4"></input>
                    <div class="tab4">
                        <h2 className="title_carreras">Ciencias</h2>
                        <SchoolCard_Ciencias />
                    </div>

                    <input type="radio" name="radio" id="radio5"></input>
                    <div class="tab5">
                        <h2 className="title_carreras">Humanidades</h2>
                        <SchoolCard_humanidades />
                    </div>
                    <input type="radio" name="radio" id="radio6"></input>
                    <div class="tab6">
                        <h2 className="title_carreras">Jurídicos y Políticos</h2>
                        <SchoolCard_JyP />
                    </div>
                </div>
            </div>
    );
}

