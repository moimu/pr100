import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

import banAmericaNorte from '../img/paises/banAmericaNorte.jpg';
import bandChina from '../img/paises/bandChina.jpg';
import bandEuropa from '../img/paises/bandEuropa.png';
import bandOceania from '../img/paises/bandOceania.png';
import bndMexico from '../img/paises/bndMexico.png';
import bandAntartica from '../img/paises/bandAntartica.png';

import '../../css//Filtros.css'

const FiltroPaises = () => {
    const { data, setData, post, errors } = useForm({
        pais: "",
        paises: true,

    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("filtros.index"));
    }

    return (

        <div  id="FiltroPaises" className=" oculto p-4 bg-white rounded containerFiltro bg-gray-100">

            <form name="createForm" onSubmit={handleSubmit}>

                <div className="formFiltro max-w-3xl shadow sm:rounded-lg bg-white" >


                    <div>
                        <img className="icon" src={banAmericaNorte} />
                        <input
                            type="radio"
                            name="pais"
                            value="América del Norte"
                            onChange={(e) =>
                                setData("pais", e.target.value)
                            }
                        />
                        <span className="text-red-600">
                            {errors.pais}
                        </span>
                    </div>

                    <div>
                        <img className="icon" src={bandChina} />
                        <input
                            type="radio"
                            name="pais"
                            value="Asia"
                            onChange={(e) =>
                                setData("pais", e.target.value)
                            }
                        />
                        <span className="text-red-600">
                            {errors.pais}
                        </span>
                    </div>

                    <div>
                        <img className="icon" src={bandEuropa} />
                        <input
                            type="radio"
                            name="pais"
                            value="Europa"
                            onChange={(e) =>
                                setData("pais", e.target.value)
                            }
                        />
                        <span className="text-red-600">
                            {errors.pais}
                        </span>
                    </div>


                    <div>
                        <img className="icon" src={bandOceania} />
                        <input
                            type="radio"
                            name="pais"
                            value="Oceanía"
                            onChange={(e) =>
                                setData("pais", e.target.value)
                            }
                        />
                        <span className="text-red-600">
                            {errors.pais}
                        </span>
                    </div>

                    <div>
                        <img className="icon" src={bndMexico} />
                        <input
                            type="radio"
                            name="pais"
                            value="América del Sur"
                            onChange={(e) =>
                                setData("pais", e.target.value)
                            }
                        />
                        <span className="text-red-600">
                            {errors.pais}
                        </span>
                    </div>

                    <div>
                        <img className="icon" src={bandAntartica} />
                        <input
                            type="radio"
                            name="pais"
                            value="Antártida"
                            onChange={(e) =>
                                setData("pais", e.target.value)
                            }
                        />
                        <span className="text-red-600">
                            {errors.pais}
                        </span>
                    </div>



                </div>

                <div className="botonFormFiltro ">
                    <button

                        type="submit"
                        className="px-4 py-2 text-white bg-blue-500 rounded boton"
                    >
                        Filtrar
                    </button>
                </div>

            </form>
        </div>
    );
}


export default FiltroPaises; 