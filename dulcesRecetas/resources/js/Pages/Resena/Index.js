import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

import '../../../css//resena.css'
import imageFavorito from '../../img/favorito.png';


const Index = () => {
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
                        {/* <img src={urlImgUser} alt="imguser" className="imguser" /> */}
                        <span>{resena.user_nombre}</span>
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

        <div className="container mx-auto">

            <h1 className="text-3xl font-bold text-center hunoindexResenas"> Reseñas </h1>

            <div className="flex items-center justify-between navindex">
                <InertiaLink
                    className="px-6 py-2 text-white bg-orange-500 rounded-md focus:outline-none"
                    href={route("dashboard")}
                >
                    Mi zona
                </InertiaLink>
            </div>


            <div className="overflow-x-auto bg-white contenedoresenas ">

                {
                    tarjetasResenas(data)
                }
                {data.length === 0 && (
                    <div> No existen reseñas.</div>
                )}

            </div>

        </div>

    );
};

export default Index;