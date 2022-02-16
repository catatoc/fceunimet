import React from "react";
import './SchoolSection.css';
//import logo from '..\src\Images';
import SchoolCard from './SchoolCard';



export default function SchoolSection() {
    return (
        
        <div class="container_school">
                <div class="lbl-menu">
                    <label for="radio2"><img src={"https://www.udg.co.cu/cmap/sistemas_operativos/administracion_memoria/Traduccion%20de%20DV%20a%20DR/images/memoria_virtual2.png"} className="logo" /></label>
                    <label for="radio1">Ingenieria</label>
                    <label for="radio3">Faces</label>
                    <label for="radio4">Ciencias</label>
                    <label for="radio5">Humanidades</label>
                    <label for="radio6">Juridicos y Politicos</label>
                </div>

                <div class="content">
                    <input type="radio" name="radio" id="radio1" checked></input>
                    <div class="tab1">
                        <h2 className="title">Ingenieria</h2>
                        <SchoolCard /> 
                    </div>

                    <input type="radio" name="radio" id="radio2" checked></input>
                    <div class="tab2">
                        <p>Aca dice que toque la carrera</p>
                    </div>

                    <input type="radio" name="radio" id="radio3"></input>
                    <div class="tab3">
                        <h2 className="title">Faces</h2>
                        <p>ACA VAN COSAS DE FACESssssssssssssssssss sssssssssssssssssssssssssssssssssss</p>
                    </div>

                    <input type="radio" name="radio" id="radio4"></input>
                    <div class="tab4">
                        <h2 className="title">Ciencias</h2>
                        <p>ACA VAN COSAS DE CIENCIASsssssssssssssssss ssssssssssssssssssssssssssssssssssssss</p>
                    </div>

                    <input type="radio" name="radio" id="radio5"></input>
                    <div class="tab5">
                        <h2 className="title">Humanidades</h2>
                        <p>ACA VAN COSAS DE HUMANIDADESsssssssssss ssssssssssssssssssssssssssssssssssssss</p>
                    </div>
                    <input type="radio" name="radio" id="radio6"></input>
                    <div class="tab6">
                        <h2 className="title">Juridicos y Politicos</h2>
                        <p>ACA VAN COSAS DE JyPpppppppppppppppppppp ppppppppppppppppppppppppppppppppppppppp</p>
                    </div>
                </div>
            </div>
    );
}

