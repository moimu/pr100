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


    return (

        <div className="">

            <Header props={props} />

            <div className="overflow-x-auto contenedorFavoritos bg-gray-100">

                {data.map(({ user_id, recetas_id, recetas_nombre, recetas_img }) => (

                    <article className="articleFavoritoIndex bg-white">
                        <header>
                            <InertiaLink
                                tabIndex="1"
                                className="flex items-center"
                                href={route("recetas.show", recetas_id)}
                            >
                                <img src={recetas_img} className="imgrecetaindex" alt={recetas_nombre} loading="lazy" />
                            </InertiaLink>
                        </header>
                        <main>
                            <h1 className="nombrerecetaindex">{recetas_nombre}</h1>
                            <p>{ }</p>
                            <p>{ } Minutos</p>
                        </main>
                        <footer >
                            <section>
                                {/* valoraciones */}
                            </section>
                        </footer>
                    </article>

                ))}
                {data.length === 0 && (

                    <div> No existen Favoritos.</div>

                )}

            </div>

            <Footer />

        </div>

    );
};

export default Index;