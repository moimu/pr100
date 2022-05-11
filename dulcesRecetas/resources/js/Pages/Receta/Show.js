import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

import '../../../css//receta.css'
import Resena from "../Resena/Create.js";

const Show = () => {
    const data = usePage().props;
    const receta = data.receta[0];
    const resenas = data.receta[1];
    
    console.log(receta);
    console.log(resenas);

    function listado(cadena) {
        let array = cadena.split(',');
        const lista = array.map((element) => <li> {element} </li>);
        return lista;
    }

    function tarjetasResenas(resenas) {

        const lista = resenas.map(function (resena) {

            let numeroEstrellas = resena.estrellas;
            let img=[];
            while( numeroEstrellas>0 ){
                img.push(  <img scr="no lo consigo"  className="estrella"/> );
                numeroEstrellas--;
            }
            return (<div className="tarjetaRes">
                        <a href=""> <img src="" /> </a>
                        <section className="tarjetaResContent">
                            <header>
                                <span>{resena.nombre}</span>
                                <div>   { img }  </div>
                            </header>
                            <main>
                                {resena.descripcion}
                            </main>
                        </section>
                    </div>);
        });
        return lista;
    }
    // /home/moi/proyectos/pr100/dulcesRecetas/storage/app/public/icons/favorito.png
    return (

        <div>
            <div className="container mx-auto">

                <h1 className="text-3xl font-bold text-center hunoshow"> Recetas </h1>

                <div className="flex items-center justify-between mb-6 navshow">
                    <InertiaLink
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                        href={route("recetas.index")}
                    >
                        Recetas
                    </InertiaLink>
                    <InertiaLink
                        tabIndex="1"
                        className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                        href={route("recetas.edit", receta.id)}
                    >
                        Editar
                    </InertiaLink>
                </div>

                <div className="overflow-x-auto bg-white rounded shadow contenarticuloshow">

                    <div className="espaciador"></div>


                    <article className="articlerecetashow">
                        <header class="headershow">
                            <img src={receta.img} className="imgshow" alt={receta.nombre} loading="lazy" />


                            <section class="sectionheader">
                                <h1>{receta.nombre}</h1>
                                <div class="datostagshow">
                                    <div>
                                        <div class="itemtagshow">
                                            <h4> Origen </h4>
                                            <p>{receta.continente}</p>
                                        </div>
                                        <div class="itemtagshow">
                                            <h4> Alergenos </h4>
                                            <p>{receta.alergenos}</p>
                                        </div>
                                        <div class="itemtagshow">
                                            <h4> Nivel </h4>
                                            <p>{receta.dificultad}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="itemtagshow">
                                            <h4> Calorías </h4>
                                            <p>{receta.calorias}</p>
                                        </div>
                                        <div class="itemtagshow">
                                            <h4> Comensales </h4>
                                            <p>{receta.npersonas}</p>
                                        </div>
                                        <div class="itemtagshow">
                                            <h4> Minutos </h4>
                                            <p>{receta.tiempo}</p>
                                        </div>
                                    </div>

                                </div>

                            </section>
                        </header>

                        <div className="separador">
                            <hr />
                        </div>
                        <main>
                            <section>
                                <h3> Descripción </h3>
                                <p>
                                    {receta.descripcion}
                                </p>
                            </section>

                            <section>
                                <h3> Ingredientes </h3>
                                <ul>
                                    {listado(receta.ingreCantidad)}
                                </ul>

                                <h3> Procedimiento </h3>
                                <ul>
                                    {listado(receta.procedimiento)}
                                </ul>
                            </section>
                            <section>
                                <h3>Detalles</h3>
                                <p>
                                    {receta.detalles}
                                </p>
                            </section>
                        </main>
                        <footer >
                            <section>
                                <ol>
                                    <li></li>
                                </ol>
                            </section>
                        </footer>
                    </article>

                </div>

                <div className="overflow-x-auto bg-white rounded shadow resenasShow">
                
                    <Resena receta_id={receta.id}/>
                    {tarjetasResenas(resenas)}

                </div>

            </div>
        </div>

    );
};

export default Show;