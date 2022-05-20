import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

import '../../../css//receta.css'
import ResenaCreate from "../Resena/Create.js";
import FavoritoCreate from "../Favorito/Create.js";

import imageFavorito from '../../img/favorito.png';

import iconLacteos from '../../img/alergenos/iconLacteos.png';
import iconHuevo from '../../img/alergenos/iconHuevo.png';
import iconGluten from '../../img/alergenos/iconGluten.png';
import iconSoja from '../../img/alergenos/iconSoja.png';
import iconFrutosSecos from '../../img/alergenos/iconFrutosSecos.png';
import iconCacahuete from '../../img/alergenos/iconCacahuete.png';
import iconMoluscos from '../../img/alergenos/iconMoluscos.png';
import iconCrustaceo from '../../img/alergenos/iconCrustaceo.png';
import iconPescado from '../../img/alergenos/iconPescado.png';
import iconMostaza from '../../img/alergenos/iconMostaza.png';

const Show = () => {
    const data = usePage().props;
    const urlImgUser = data.auth.user.imguser;
    // Datos de la receta
    const receta = data.receta[0];

    // Reseñas de la receta a mostrar
    const resenas = data.receta[1];
    // console.log(receta); console.log(resenas); console.log(resenas); 

    function iconAlergenos(string) {
        let alergenos = string.split(',').map((alergeno) => {
            switch (alergeno) {
                case "Lácteos":
                    return <img className="iconAlergenos" src={iconLacteos} />;
                case "Huevo":
                    return <img className="iconAlergenos" src={iconHuevo} />;
                case "Gluten":
                    return <img className="iconAlergenos" src={iconGluten} />;
                case "Soja":
                    return <img className="iconAlergenos" src={iconSoja} />;
                case "Frutos secos":
                    return <img className="iconAlergenos" src={iconFrutosSecos} />;
                case "Cacahuete":
                    return <img className="iconAlergenos" src={iconCacahuete} />;
                case "Moluscos":
                    return <img className="iconAlergenos" src={iconMoluscos} />;
                case "Crustáceos":
                    return <img className="iconAlergenos" src={iconCrustaceo} />;
                case "Pescado":
                    return <img className="iconAlergenos" src={iconPescado} />;
                case "Mostaza":
                    return <img className="iconAlergenos" src={iconMostaza} />;
                default:
                    return ;
            }
        });
        return alergenos;
    }

    function listado(cadena) {
        let array = cadena.split(',');
        const lista = array.map((element) => <li> {element} </li>);
        return lista;
    }

    function tarjetasResenas(resenas) {

        const lista = resenas.map(function (resena) {
            let numeroEstrellas = resena.estrellas;
            let img = [];
            while (numeroEstrellas > 0) {
                img.push(<img src={imageFavorito} alt="imgfavorito" className="imgfav" />);
                numeroEstrellas--;
            }
            return (

                <section className="tarjetaResena">
                    <header>
                        <img src={urlImgUser} alt="imguser" className="imguser" />
                        <span>{resena.user_nombre}</span>
                    </header>
                    <main>
                        {resena.descripcion}
                    </main>
                    <footer>
                        {img}
                    </footer>

                </section>
            );
        });
        return lista;
    }


    return (

        <div>
            <div className="containerRecetaShow mx-auto">

                <h1 className="text-3xl font-bold text-center hunoshow"> Receta </h1>

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
                    {/* Create de favoritos  */}
                    <FavoritoCreate receta={receta} />
                </div>

                <div className="overflow-x-auto bg-white rounded shadow contenarticuloshow">

                    <div className="espaciador"></div>


                    <article className="articlerecetashow">
                        <header className="">
                            <div className="headershowtop">
                                <img src={receta.img} className="imgshow" alt={receta.nombre} loading="lazy" />

                                <section className="sectionheader">
                                    <h1>{receta.nombre}</h1>
                                    <div className="datostagshow">
                                        <div>
                                            <div className="itemtagshow">
                                                <h4> Origen </h4>
                                                <p>{receta.continente}</p>
                                            </div>

                                            <div className="itemtagshow">
                                                <h4> Nivel </h4>
                                                <p>{receta.dificultad}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="itemtagshow">
                                                <h4> Calorías </h4>
                                                <p>{receta.calorias}</p>
                                            </div>
                                            <div className="itemtagshow">
                                                <h4> Comensales </h4>
                                                <p>{receta.npersonas}</p>
                                            </div>
                                            <div className="itemtagshow">
                                                <h4> Minutos </h4>
                                                <p>{receta.tiempo}</p>
                                            </div>
                                        </div>

                                    </div>
                                </section>

                            </div>
                            <div>
                                <div className="itemtagshowAlergenos">
                                    <h4> Alérgenos </h4>
                                    <div className="divIconsAlergenos"> 
                                        {iconAlergenos(receta.alergenos)}
                                    </div>
                                </div>
                            </div>

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

                    {/* Create de reseñas + total reseñas de la receta */}

                    <ResenaCreate receta_id={receta.id} />
                    {tarjetasResenas(resenas)}

                </div>

            </div>
        </div >

    );
};

export default Show;