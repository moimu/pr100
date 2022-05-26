import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

import '../../../css//favorito.css'


const Edit = (props) => {
    const { resena } = usePage().props;
    const { data, setData, put, errors } = useForm({
        descripcion: resena.descripcion || "",
        estrellas: resena.estrellas || "",


    });
    console.log(data);
    function handleSubmit(e) {
        e.preventDefault();
        put(route("resenas.update", resena.id));
    }
    function destroy() {
        if (confirm("Seguro que quieres borrar este receta?")) {
            Inertia.delete(route("resenas.destroy", resena.id));
        }
    }
    return (

        <div className="containerEditResenas mx-auto">

            <Header props={props} />

            <form name="createForm" onSubmit={handleSubmit}
                className="max-w-3xl p-8 bg-white rounded shadow contenedorForm"
            >
                <div className="flex flex-col">

                    <div className="mb-4">
                        <label className=""> Descripción </label>
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
                            required
                            onChange={(e) =>
                                setData("estrellas", e.target.value)
                            }
                        />
                        <span className="text-red-600">
                            {errors.estrellas}
                        </span>
                    </div>

                </div>

                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="px-4 py-2 text-white bg-green-500 rounded"
                    >
                        Actualizar
                    </button>
                    <button
                        onClick={destroy}
                        tabIndex="-1"
                        type="button"
                        className="px-4 py-2 text-white bg-red-500 rounded"
                    >
                        Borrar
                    </button>
                </div>
            </form>


            <Footer />

        </div>

    );
};

export default Edit;