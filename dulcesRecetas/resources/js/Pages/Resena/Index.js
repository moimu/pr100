import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";


import Header from "../../Components/Header.js";
import Footer from "../../Components/Footer.js";

import '../../../css//resena.css'
import imageFavorito from '../../img/favorito.png';


const Index = (props) => {
    const resenas = usePage().props;
    const data = resenas.resenas;
    console.log(data);
    /**
     * 
     * @param {*} resenas 
     * @returns 
     */
    function tarjetasResenas(resenas) {

        const lista = resenas.map(function (resena, index) {

            let numeroEstrellas = resena.estrellas;
            let img = [];
            while (numeroEstrellas > 0) {
                img.push(<img src={imageFavorito} alt="imgfavorito" className="imgfav" />);
                numeroEstrellas--;
            }
            return (
                <section className="tarjetaResena" key={index}>
                    <header>
                        <img src={ resena.recetas_img } className="imgRes" loading="lazy" />
                    </header>
                    <main>
                        {resena.descripcion}
                    </main>
                    <footer>
                        {img}
                    </footer>
                    <InertiaLink
                        tabIndex="1"
                        className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none botonEdit"
                        href={route("resenas.edit", resena.id)}
                    >
                        Editar
                    </InertiaLink>
                </section>

            );
        });
        return lista;
    }

    return (

        <div className="principal">

            <Header props={props} />

            <div className="overflow-x-auto bg-white contenedoresenas bg-gray-100">

                {
                    tarjetasResenas(data)
                }
                {data.length === 0 && (
                    <div> No existen reseñas.</div>
                )}

            </div>

            <Footer />

        </div>

    );
};

export default Index;