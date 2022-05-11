import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

import '../../../css//resena.css'

function Create(){
    const  datos  = usePage().props;
    const { data, setData, errors, post } = useForm({
        
        user_id: datos.auth.user.id,
        recetas_id: datos.receta[0].id,         
        descripcion: "",      
        estrellas: "",        
        user_nombre: datos.auth.user.name,

    });

    // console.log('oyeee');
    // console.log(eee);
    // console.log(data);

    function handleSubmit(e) {
        e.preventDefault();
        // envio datos del formulario a esta ruta
        post(route("resenas.store"));
    }
    return (
        
            
                    <form name="createForm" onSubmit={handleSubmit} className="tarjetaInputResena">

                        <div className="flex flex-col">


                            <div >
                                <a href=""> <img src="" /> </a>
                                <section className="tarjetaResContent">

                                    <div className="mb-4">
                                        <label className=""> Comentario </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="descripcion"
                                            name="descripcion"
                                            value={data.descripcion}
                                            required
                                            onChange={(e) =>
                                                setData("descripcion", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.descripcion}
                                        </span>
                                    </div>

                                    <div className="mb-4">
                                        <label className=""> Estrellas </label>
                                        <input
                                            type="number"
                                            className="w-full px-4 py-2"
                                            label="estrellas"
                                            name="estrellas"
                                            value={data.estrellas}
                                            min="0"
                                            max="5"
                                            placeholder="máximo 5"
                                            required
                                            onChange={(e) =>
                                                setData("estrellas", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.estrellas}
                                        </span>
                                    </div>

                                </section>
                            </div>


                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                            >
                                Compartir
                            </button>
                        </div>

                    </form>
                

        
    );
};

export default Create;