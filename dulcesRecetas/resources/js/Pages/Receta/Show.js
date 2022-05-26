import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

import Header from "../../Components/Header.js";
import Footer from "../../Components/Footer.js";

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

const Show = (props) => {
    const data = usePage().props;
    const urlImgUser = data.auth.user.imguser;
    // Datos de la receta
    const receta = data.receta[0];

    // Reseñas de la receta a mostrar
    const resenas = data.receta[1];
    console.log(props.auth.user);

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


        <div className="containerRecetaShow mx-auto">

            <Header props={props} />

            <div className="overflow-x-auto bg-white rounded shadow contArticleShow bg-gray-100">

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

                                    <div>
                                        <div className="botoneraShow">
                                            <InertiaLink
                                                tabIndex="1"
                                                className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                                href={route("recetas.edit", receta.id)}
                                            >
                                                Editar
                                            </InertiaLink>

                                            <FavoritoCreate receta={receta} />
                                        </div>
                                    </div>

                                </div>
                            </section>

                        </div>
                        <div>
                            <div className="itemtagshowAlergenos">
                                <h4> Alérgenos </h4>
                                <div className="divIconsAlergenos">

                                    {receta.lacteos === 1 && (<img className="iconAlergenos" src={iconLacteos} />)}
                                    {receta.huevo === 1 && (<img className="iconAlergenos" src={iconHuevo} />)}
                                    {receta.gluten === 1 && (<img className="iconAlergenos" src={iconGluten} />)}
                                    {receta.soja === 1 && (<img className="iconAlergenos" src={iconSoja} />)}
                                    {receta.frutos === 1 && (<img className="iconAlergenos" src={iconFrutosSecos} />)}
                                    {receta.cacahuete === 1 && (<img className="iconAlergenos" src={iconCacahuete} />)}
                                    {receta.moluscos === 1 && (<img className="iconAlergenos" src={iconMoluscos} />)}
                                    {receta.crustaceos === 1 && (<img className="iconAlergenos" src={iconCrustaceo} />)}
                                    {receta.pescado === 1 && (<img className="iconAlergenos" src={iconPescado} />)}
                                    {receta.mostaza === 1 && (<img className="iconAlergenos" src={iconMostaza} />)}

                                    {/* {iconAlergenos(receta.alergenos)} */}

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

            <Footer />

        </div>

    );
};

export default Show;