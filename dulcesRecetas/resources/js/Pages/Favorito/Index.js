import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

import '../../../css//favorito.css'

const Index = () => {
    const favoritos = usePage().props;
    const data = favoritos.favoritos;
    console.log(data);


    return (

        <div className="container mx-auto">

            <h1 className="text-3xl font-bold text-center hunoindex"> Favoritos </h1>

            <div className="flex items-center justify-between navindex">
                <InertiaLink
                    className="px-6 py-2 text-white bg-orange-500 rounded-md focus:outline-none"
                    href={route("dashboard")}
                >
                    Mi zona
                </InertiaLink>
            </div>
            <div className="overflow-x-auto bg-white contenedorFavoritos">

                {data.map(({ user_id, recetas_id, recetas_nombre, recetas_img }) => (

                    <article className="articleFavoritoIndex">
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
        </div>

    );
};

export default Index;