import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, Link, Head } from "@inertiajs/inertia-react";
import BotoneraControlFiltros from "../../Components/BotoneraControlFiltros.js";

import FiltroAlergenos from "../../Components/FiltroAlergenos.js";
import FiltroPaises from "../../Components/FiltroPaises.js";

import Header from "../../Components/Header.js";
import Footer from "../../Components/Footer.js";


import '../../../css//receta.css'
import imageFavorito from '../../img/favorito.png';


const Index = (props) => {
    const data = usePage().props;
    const recetas = data.recetas;

    /**
     * Funcion para pintar estrellas de valoración de las recetas
     * 
     * @param {*} idReceta  id unico de la receta
     * @param {*} resenas  total de reseñas registradas en tabla reseñas
     * @returns integer
     */
    function mediaEstrellasResenas(idReceta, resenas) {
        let resenasDeLaReceta;
        let intTotalEstrellas = 0;
        let intTotalResenas = 0;
        resenasDeLaReceta = resenas.map(resena => {
            // si es una reseña de la receta
            if (resena.recetas_id == idReceta) {
                // total.push(resena);
                intTotalEstrellas = intTotalEstrellas + resena.estrellas;
                intTotalResenas = intTotalResenas + 1;
                return resena;

            }

        });
        console.log("intTotalEstrellas"); console.log(intTotalEstrellas);
        console.log("intTotalResenas"); console.log(intTotalResenas);
        let mediaEstrellas = Math.round((intTotalEstrellas / intTotalResenas));

        let imgs = [];
        while (mediaEstrellas > 0) {
            imgs.push(<img src={imageFavorito} alt="imgfavorito" className="imgfav" />);
            mediaEstrellas--;
        }

        return imgs;
    }

    return (

        <div className="mx-auto principal min-h-screen">

            <Header props={props} />
            <BotoneraControlFiltros />

            <FiltroAlergenos />
            <FiltroPaises />

            <div className="overflow-x-auto contenedorrecetas bg-gray-100">
                {recetas.map(({ id, nombre, img, dificultad, tiempo }) => (

                    <article className="articlerecetasindex bg-white card" >
                        <header>
                            <InertiaLink
                                tabIndex="1"
                                className="flex items-center"
                                href={route("recetas.show", id)}
                            >
                                <img src={img} className="card-img-top imgreceta" alt={nombre} loading="lazy" />
                            </InertiaLink>
                        </header>
                        <main>
                            <h1 className="nombrerecetaindex">{nombre}</h1>
                            <p>{dificultad}</p>
                            <p>{tiempo} Minutos</p>
                        </main>
                        <footer >
                            <section className="contEstrellasTotalesReceta">
                                {/* { mediaEstrellasResenas(id, resenas) } */}
                            </section>
                        </footer>

                    </article>


                ))
                }
                {data.length === 0 && (

                    <div> No existen recetas.</div>

                )}
            </div>


            <Footer />

        </div>


    );
};

export default Index;