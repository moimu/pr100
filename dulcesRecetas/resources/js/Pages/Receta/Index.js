import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

import '../../../css//receta.css'

const Index = () => {
    const recetas = usePage().props;
    const data = recetas.recetas;
    // console.log(data);
    return (

        <div>
            <div className="container mx-auto">

                <h1 className="text-3xl font-bold text-center hunoindex"> Recetas </h1>

                <div className="flex items-center justify-between navindex">
                    <InertiaLink
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                        href={route("recetas.create")}
                    >
                        Nueva receta
                    </InertiaLink>
                </div>

                <div className="overflow-x-auto bg-white contenedorrecetas">


                    {data.map(({ id, nombre, img, dificultad, tiempo  }) => (
                        
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
            </div>
        </div>

    );
};

export default Index;