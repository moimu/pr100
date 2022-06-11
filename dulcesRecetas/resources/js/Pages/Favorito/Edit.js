import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

import '../../../css//favorito.css'


const Edit = (props) => {
    const { favorito } = usePage().props;
    const { data, setData, put, errors } = useForm({

    });
    console.log(favorito);
    function handleSubmit(e) {
        e.preventDefault();
        put(route("favoritos.update", resena.id));
    }
    function destroy() {
        if (confirm("Seguro que quieres borrar este receta?")) {
            Inertia.delete( route("favoritos.destroy", favorito.id) );
        }
    }
    return (

        <div className="containerEditResenas mx-auto">

           
            <form name="createForm" onSubmit={handleSubmit}
                className="max-w-3xl p-8 bg-white rounded shadow contenedorForm"
            >

                <div className="flex justify-between">
                   
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



        </div>

    );
};

export default Edit;