import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

import Header from "../../Components/Header.js";
import Footer from "../../Components/Footer.js";

import '../../../css//favorito.css'

const Index = (props) => {
    const favoritos = usePage().props;
    const data = favoritos.favoritos;
    console.log(data);

    /**
     * 
     * @param {*} favoritos array 
     * @returns 
     */
    function tarjetasFavoritos(favoritos) {



        const lista = favoritos.map(function (favorito, index) {
            function destroy() {
                if (confirm("Seguro que quieres borrar receta favorita?")) {
                    Inertia.delete(route("favoritos.destroy", favorito.id));
                }
            }
            return (
                <section className="tarjetaFav" key={favorito.recetas_id}>
                    <header>
                        <img src={favorito.recetas_img} className="imgFav" alt={favorito.recetas_nombre} loading="lazy" />
                    </header>
                    <main>
                        {favorito.recetas_nombre}
                    </main>
                    <footer>
                        <form name="createForm"
                        >
                            <button
                                onClick={destroy}
                                tabIndex="-1"
                                type="button"
                                className="px-4 py-2 text-white bg-red-500 rounded"
                            >
                                Borrar
                            </button>
                        </form>
                    </footer>
                </section>

            );
        });
        return lista;
    }

    return (

        <div className="">

            <Header props={props} />

            <div className="overflow-x-auto contFav bg-gray-100">

                {tarjetasFavoritos(data)}
                {data.length === 0 && (

                    <div> No existen Favoritos.</div>

                )}

            </div>

            <Footer />

        </div>

    );
};

export default Index;