import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

import { Link, Head } from '@inertiajs/inertia-react';
import FiltroAlergenos from "../../Components/FiltroAlergenos.js";
import Header from "../../Components/Header.js";
import Footer from "../../Components/Footer.js";


import '../../../css//receta.css'
// import banner from '../../img/banner.jpeg';

const Index = (props) => {
    const recetas = usePage().props;
    const data = recetas.recetas;
    console.log(data);
    return (

        <div className="mx-auto principal">

            <Head>
                <title> Dulces Recetas </title>
                {/* <link rel="icon" type="image/ico" href="../../img/favicon.ico" /> */}
            </Head>

            <Header props={props} />

            <FiltroAlergenos />


            <div className="overflow-x-auto bg-white contenedorrecetas">


                {data.map(({ id, nombre, img, dificultad, tiempo }) => (

                    <article className="articlerecetasindex">
                        <header>
                            <InertiaLink
                                tabIndex="1"
                                className="flex items-center"
                                href={route("recetas.show", id)}
                            >
                                <img src={img} className="imgrecetaindex" alt={nombre} loading="lazy" />
                            </InertiaLink>
                        </header>
                        <main>
                            <h1 className="nombrerecetaindex">{nombre}</h1>
                            <p>{dificultad}</p>
                            <p>{tiempo} Minutos</p>
                        </main>
                        <footer >
                            <section>
                                {/* valoraciones */}
                            </section>
                        </footer>
                    </article>


                ))}
                {data.length === 0 && (

                    <div> No existen recetas.</div>

                )}


            </div>

            <Footer />

        </div>

    );
};

export default Index;