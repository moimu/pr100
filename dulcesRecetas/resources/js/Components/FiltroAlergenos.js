import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

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

const FiltroAlergenos = () => {
    const { data, setData, post, errors } = useForm({
        lacteos: false,
        huevo: false,
        gluten: false,
        soja: false,
        frutos: false,
        cacahuete: false,
        moluscos: false,
        crustaceos: false,
        pescado: false,
        mostaza: false,
        alergenos: true,

    });
    console.log(data);
    function handleSubmit(e) {
        e.preventDefault();
       post(route("filtros.index"));         
    }

    return (

        <div className="p-4 bg-white rounded containerFiltro bg-gray-100">

            <div className="max-w-3xl shadow sm:rounded-lg bg-white">
                <form name="createForm" className="formFiltro" onSubmit={handleSubmit }>

                    <div>
                        <img className="icon" src={iconLacteos} />
                        <input
                            type="checkbox"
                            name="lacteos"
                            value="lacteos"
                            onChange={
                                (e) => {
                                    if (data.lacteos) { return setData("lacteos", false); } setData("lacteos", true)
                                }
                            }
                        />
                        <span className="text-red-600">
                            {errors.lacteos}
                        </span>
                    </div>

                    <div>
                        <img className="icon" src={iconHuevo} />
                        <input
                            type="checkbox"
                            name="huevo"
                            value="huevo"
                            onChange={
                                (e) => {
                                    if (data.huevo) { return setData("huevo", false); } setData("huevo", true)
                                }
                            }
                        />
                        <span className="text-red-600">
                            {errors.huevo}
                        </span>
                    </div>

                    <div>
                        <img className="icon" src={iconGluten} />
                        <input
                            type="checkbox"
                            name="gluten"
                            value="gluten"
                            onChange={
                                (e) => {
                                    if (data.gluten) { return setData("gluten", false); } setData("gluten", true)
                                }
                            }
                        />
                        <span className="text-red-600">
                            {errors.gluten}
                        </span>
                    </div>

                    <div>
                        <img className="icon" src={iconSoja} />
                        <input
                            type="checkbox"
                            name="soja"
                            value="soja"
                            onChange={
                                (e) => {
                                    if (data.soja) { return setData("soja", false); } setData("soja", true)
                                }
                            }
                        />
                        <span className="text-red-600">
                            {errors.soja}
                        </span>
                    </div>

                    <div>
                        <img className="icon" src={iconFrutosSecos} />
                        <input
                            type="checkbox"
                            name="frutos"
                            value="frutos"
                            onChange={
                                (e) => {
                                    if (data.frutos) { return setData("frutos", false); } setData("frutos", true)
                                }
                            }
                        />
                        <span className="text-red-600">
                            {errors.frutos}
                        </span>
                    </div>

                    <div>
                        <img className="icon" src={iconCacahuete} />
                        <input
                            type="checkbox"
                            name="cacahuete"
                            value="cacahuete"
                            onChange={
                                (e) => {
                                    if (data.cacahuete) { return setData("cacahuete", false); } setData("cacahuete", true)
                                }
                            }
                        />
                        <span className="text-red-600">
                            {errors.cacahuete}
                        </span>
                    </div>

                    <div>
                        <img className="icon" src={iconMoluscos} />
                        <input
                            type="checkbox"
                            name="moluscos"
                            value="moluscos"
                            onChange={
                                (e) => {
                                    if (data.moluscos) { return setData("moluscos", false); } setData("moluscos", true)
                                }
                            }
                        />
                        <span className="text-red-600">
                            {errors.moluscos}
                        </span>
                    </div>

                    <div>
                        <img className="icon" src={iconCrustaceo} />
                        <input
                            type="checkbox"
                            name="crustaceos"
                            value="crustaceos"
                            onChange={
                                (e) => {
                                    if (data.crustaceos) { return setData("crustaceos", false); } setData("crustaceos", true)
                                }
                            }
                        />
                        <span className="text-red-600">
                            {errors.crustaceos}
                        </span>
                    </div>

                    <div>
                        <img className="icon" src={iconPescado} />
                        <input
                            type="checkbox"
                            name="pescado"
                            value="pescado"
                            onChange={
                                (e) => {
                                    if (data.pescado) { return setData("pescado", false); } setData("pescado", true)
                                }
                            }
                        />
                        <span className="text-red-600">
                            {errors.pescado}
                        </span>
                    </div>

                    <div>
                        <img className="icon" src={iconMostaza} />
                        <input
                            type="checkbox"
                            name="mostaza"
                            value="mostaza"
                            onChange={
                                (e) => {
                                    if (data.mostaza) { return setData("mostaza", false); } setData("mostaza", true)
                                }
                            }
                        />
                        <span className="text-red-600">
                            {errors.mostaza}
                        </span>
                    </div>


                    <div className="flex justify-between">
                        <button

                            type="submit"
                            className="px-4 py-2 text-white bg-blue-500 rounded boton"
                        >
                            Filtrar
                        </button>

                    </div>


                </form>
            </div>
        </div>
    );
}

// class FiltroAlergenos extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             alergenos: [],
//         }
//         this.seleccion = this.seleccion.bind(this);
//         this.removeItemFromArr = this.removeItemFromArr.bind(this);
//         this.alergenos = [];
//     }
//     /**
//      * borra un valor dado dentro del array
//      * @param {*} arr
//      * @param {*} item
//      */
//     removeItemFromArr(arr, item) {
//         let i = arr.indexOf(item);
//         if (i !== -1) {
//             arr.splice(i, 1);
//         }
//     }
//     /**
//      * Añade clase a elemento clicado y
//      * añade alérgeno al array de alérgenos,
//      * actualiza el estado
//      * @param {*} e
//      */
//     seleccion(e) {
//         let alergeno = e.currentTarget.value
//         let elemento = e.currentTarget;
//         if (elemento.classList.contains('seleccion')) {
//             elemento.classList.remove('seleccion');
//             this.removeItemFromArr(this.alergenos, alergeno)
//         }
//         else {
//             elemento.classList.add('seleccion');
//             this.alergenos.push(alergeno);
//         }
//         this.setState({
//             alergenos: this.alergenos,
//         });
//     }
//     render() {
//         let alergenosNo = "WWWWWAAAA";
//         return (
//             <>
//                 <form name="createForm" action={route('filtros.index', this.state.alergenos)}>

//                     <button
//                         type="submit"
//                         className="px-4 py-2 text-white bg-green-500 rounded"
//                     >
//                         Envio Filtro
//                     </button>

//                     <div className="shadow sm:rounded-lg">
//                         <input className="botonIcon" onClick={this.seleccion} defaultValue="Lácteos">
//                             <img className="icon" src={iconLacteos} />
//                         </input>
//                         <input className="botonIcon" onClick={this.seleccion} defaultValue="Huevo">
//                             <img className="icon" src={iconHuevo} />
//                         </input>
//                         <input className="botonIcon" onClick={this.seleccion} defaultValue="Gluten">
//                             <img className="icon" src={iconGluten} />
//                         </input>
//                         <input className="botonIcon" onClick={this.seleccion} defaultValue="Soja">
//                             <img className="icon" src={iconSoja} />
//                         </input>
//                         <input className="botonIcon" onClick={this.seleccion} defaultValue="Frutos secos">
//                             <img className="icon" src={iconFrutosSecos} />
//                         </input>
//                         <input className="botonIcon" onClick={this.seleccion} defaultValue="Cacahuete">
//                             <img className="icon" src={iconCacahuete} />
//                         </input>
//                         <input className="botonIcon" onClick={this.seleccion} defaultValue="Moluscos">
//                             <img className="icon" src={iconMoluscos} />
//                         </input>
//                         <input className="botonIcon" onClick={this.seleccion} defaultValue="Crustáceos">
//                             <img className="icon" src={iconCrustaceo} />
//                         </input>
//                         <input className="botonIcon" onClick={this.seleccion} defaultValue="Pescado">
//                             <img className="icon" src={iconPescado} />
//                         </input>
//                         <input className="botonIcon" onClick={this.seleccion} defaultValue="Mostaza">
//                             <img className="icon" src={iconMostaza} />
//                         </input>
//                     </div>

//                 </form>



//             </>

//         );
//     }



// }

export default FiltroAlergenos; 