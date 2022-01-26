import React from "react";
import './SchoolSection.css';



function SchoolSection() {


    return (
        <>
            <div class="container">
                <div class="lbl-menu">
                    <label for="radio1">Ingenieria</label>
                    <label for="radio2">Faces</label>
                    <label for="radio3">Ciencias</label>
                    <label for="radio4">Humanidades</label>
                    <label for="radio5">JyP</label>
                </div>

                <div class="content">

                    <input type="radio" name="radio" id="radio1" checked></input>
                    <div class="tab1">
                        <h2>Ingenieria</h2>
                        <p>ACA VAN COSAS DE INGgggggggggggg pero no se que puedo poner realmente aunque </p>
                    </div>

                    <input type="radio" name="radio" id="radio2"></input>
                    <div class="tab2">
                        <h2>Faces</h2>
                        <p>ACA VAN COSAS DE FACESssssssssssssssssss sssssssssssssssssssssssssssssssssss</p>
                    </div>

                    <input type="radio" name="radio" id="radio3"></input>
                    <div class="tab3">
                        <h2>Ciencias</h2>
                        <p>ACA VAN COSAS DE CIENCIASsssssssssssssssss ssssssssssssssssssssssssssssssssssssss</p>
                    </div>

                    <input type="radio" name="radio" id="radio4"></input>
                    <div class="tab4">
                        <h2>Humanidades</h2>
                        <p>ACA VAN COSAS DE HUMANIDADESsssssssssss ssssssssssssssssssssssssssssssssssssss</p>
                    </div>
                    <input type="radio" name="radio" id="radio5"></input>
                    <div class="tab5">
                        <h2>JyP</h2>
                        <p>ACA VAN COSAS DE JyPpppppppppppppppppppp ppppppppppppppppppppppppppppppppppppppp</p>
                    </div>
                </div>
            </div>


        </>

    );
}

export default SchoolSection;

