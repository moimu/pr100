import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, Link, Head } from "@inertiajs/inertia-react";

import FiltroAlergenos from "../../Components/FiltroAlergenos.js";
import Header from "../../Components/Header.js";
import Footer from "../../Components/Footer.js";


import '../../../css//receta.css'

const Index = (props) => {
    const recetas = usePage().props;
    const data = recetas.recetas;

    return (

        <div className="mx-auto principal min-h-screen">


            <Header props={props} />

            <FiltroAlergenos />

            <div className="overflow-x-auto contenedorrecetas bg-gray-100">
                {data.map(({ id, nombre, img, dificultad, tiempo }) => (

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
                            <section>
                                {/* valoraciones */}
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