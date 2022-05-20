import React from "react";

import iconLacteos from '../img/alergenos/iconLacteos.png';
import iconHuevo from '../img/alergenos/iconHuevo.png';
import iconGluten from '../img/alergenos/iconGluten.png';
import iconSoja from '../img/alergenos/iconSoja.png';
import iconFrutosSecos from '../img/alergenos/iconFrutosSecos.png';
import iconCacahuete from '../img/alergenos/iconCacahuete.png';
import iconMoluscos from '../img/alergenos/iconMoluscos.png';
import iconCrustaceo from '../img/alergenos/iconCrustaceo.png';
import iconPescado from '../img/alergenos/iconPescado.png';
import iconMostaza from '../img/alergenos/iconMostaza.png';

import '../../css//FiltroAlergenos.css'

class FiltroAlergenos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alergenos: [],
        }

        this.seleccion = this.seleccion.bind(this);
        this.removeItemFromArr = this.removeItemFromArr.bind(this);
        this.alergenos = [];

    }

    /**
     * borra un valor dado dentro del array 
     * @param {*} arr 
     * @param {*} item 
     */
    removeItemFromArr(arr, item) {
        let i = arr.indexOf(item);

        if (i !== -1) {
            arr.splice(i, 1);
        }
    }
    /**
     * Añade clase a elemento clicado y 
     * añade alérgeno al array de alérgenos,
     * actualiza el estado 
     * @param {*} e 
     */
    seleccion(e) {
        let alergeno = e.currentTarget.value
        let elemento = e.currentTarget;

        if (elemento.classList.contains('seleccion')) {
            elemento.classList.remove('seleccion');
            this.removeItemFromArr(this.alergenos, alergeno)
        }
        else {
            elemento.classList.add('seleccion');
            this.alergenos.push(alergeno);
        }

        this.setState({
            alergenos: this.alergenos,
        });
        console.log(this.alergenos);

    }
    render() {
        return (
            <>

                <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">


                    <button className="botonIcon" onClick={this.seleccion} value="Lácteos">
                        <img className="icon" src={iconLacteos} />
                    </button>
                    <button className="botonIcon" onClick={this.seleccion} value="Huevo">
                        <img className="icon" src={iconHuevo} />
                    </button>
                    <button className="botonIcon" onClick={this.seleccion} value="Gluten">
                        <img className="icon" src={iconGluten} />
                    </button>
                    <button className="botonIcon" onClick={this.seleccion} value="Soja">
                        <img className="icon" src={iconSoja} />
                    </button>
                    <button className="botonIcon" onClick={this.seleccion} value="Frutos secos">
                        <img className="icon" src={iconFrutosSecos} />
                    </button>
                    <button className="botonIcon" onClick={this.seleccion} value="Cacahuete">
                        <img className="icon" src={iconCacahuete} />
                    </button>
                    <button className="botonIcon" onClick={this.seleccion} value="Moluscos">
                        <img className="icon" src={iconMoluscos} />
                    </button>
                    <button className="botonIcon" onClick={this.seleccion} value="Crustáceos">
                        <img className="icon" src={iconCrustaceo} />
                    </button>
                    <button className="botonIcon" onClick={this.seleccion} value="Pescado">
                        <img className="icon" src={iconPescado} />
                    </button>
                    <button className="botonIcon" onClick={this.seleccion} value="Mostaza">
                        <img className="icon" src={iconMostaza} />
                    </button>

                </div>


            </>

        );
    }



}

export default FiltroAlergenos; 