import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

import '../../../css//favorito.css'

function Create() {
    const datos = usePage().props;

    const { data, setData, errors, post } = useForm({

        user_id: datos.auth.user.id,
        recetas_id: datos.receta[0].id,
        recetas_nombre: datos.receta[0].nombre,
        recetas_img: datos.receta[0].img,
        receta: datos.receta[0],

    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("favoritos.store"));
    }

    return (

        <form name="createForm" onSubmit={handleSubmit} >

            <button
                type="submit"
                className="px-6 py-2 font-bold text-white bg-yellow-500 rounded btn btn-warning"
            >
                Favorito
            </button>

        </form>

    );
};

export default Create;