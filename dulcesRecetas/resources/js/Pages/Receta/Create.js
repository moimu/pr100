import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import Header from "../../Components/Header.js";
import Footer from "../../Components/Footer.js";
import '../../../css//receta.css'

const Create = (props) => {
    const { data, setData, errors, post } = useForm({
        nombre: "",
        continente: "",
        descripcion: "",
        dificultad: "",
        tiempo: "",
        calorias: "",
        ingreCantidad: "",
        procedimiento: "",
        img: "",
        detalles: "",
        lacteos: false,
        huevo: false,
        gluten: false,
        soja: false,
        frutos: false,
        cacahuete: false,
        moluscos: false,
        crustaceos: false,
        pescado: false,
        mostaza: false,
    });
    console.log(props.auth.user);

    function handleSubmit(e) {

        // if(!data.alergenos){
        //     data.alergenos="Ninguno";
        // }

        e.preventDefault();
        // envio datos del formulario a esta ruta
        post(route("recetas.store"));
    }
    // function editalergenos(e){
    //     data.alergenos += e.currentTarget.value.toString()+",";
    //     console.log(data);
    // }
    return (

        <div className="containerEditoCreate mx-auto">

            <Header props={props} />

            <div className="max-w-6xl p-8 bg-white rounded shadow contenedorForm bg-gray-100">
                <form name="createForm" onSubmit={handleSubmit}>

                    <div className="flex flex-col">
                        <img scr="http://localhost/icons/libro-de-cocina.png" />
                        <div className="mb-4">
                            <label className="">Nombre</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2"
                                label="Nombre"
                                name="nombre"
                                value={data.nombre}
                                required
                                onChange={(e) =>
                                    setData("nombre", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.nombre}
                            </span>
                        </div>

                        <div className="mb-4">
                            <label className=""> Imagen </label>
                            <input
                                type="file"
                                className="w-full px-4 py-2"
                                label="img"
                                name="img"
                                required
                                onChange={(e) =>
                                    setData("img", e.target.files[0])
                                }
                            />
                            <span className="text-red-600">
                                {errors.img}
                            </span>
                        </div>

                        <div className="mb-0">
                            <label className=""> Continente </label>
                            <select
                                className="w-full rounded"
                                label="continente"
                                name="continente"
                                errors={errors.continente}
                                value={data.continente}
                                required
                                onChange={(e) =>
                                    setData("continente", e.target.value)
                                }
                            >
                                <option value="" selected> Elige pais </option>
                                <option value="Asia">Asia</option>
                                <option value="Antártida">Antártida</option>
                                <option value="América del Sur">América del Sur</option>
                                <option value="América del Norte">América del Norte</option>
                                <option value="Europa">Europa</option>
                                <option value="Oceanía">Oceanía</option>
                            </select>
                            <span className="text-red-600">
                                {errors.continente}
                            </span>
                        </div>

                        <div className="mb-0">
                            <label className=""> Descripción </label>
                            <textarea
                                type="text"
                                className="w-full rounded"
                                label="descripcion"
                                name="descripcion"
                                errors={errors.descripcion}
                                value={data.descripcion}
                                required
                                onChange={(e) =>
                                    setData("descripcion", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.descripcion}
                            </span>
                        </div>

                        <div className="mb-0" >
                            <label className=""> Alérgenos </label>
                            <fieldset className="border border-secondary w-full rounded">
                                <li>
                                    <input onChange={(e) => {
                                        if (data.lacteos) { return setData("lacteos", false); } setData("lacteos", true)
                                    }}
                                        type="checkbox" value="lacteos" key={"lacteos".toString()} />
                                    Lácteos
                                </li>
                                <li>
                                    <input onChange={(e) => {
                                        if (data.huevo) { return setData("huevo", false); } setData("huevo", true)
                                    }}
                                        type="checkbox" value="huevo" key={"huevo".toString()} />
                                    Huevo
                                </li>
                                <li>
                                    <input onChange={(e) => {
                                        if (data.gluten) { return setData("gluten", false); } setData("gluten", true)
                                    }}
                                        type="checkbox" value="gluten" key={"gluten".toString()} />
                                    Gluten
                                </li>
                                <li>
                                    <input onChange={(e) => {
                                        if (data.soja) { return setData("soja", false); } setData("soja", true)
                                    }}
                                        type="checkbox" value="soja" key={"soja".toString()} />
                                    Soja
                                </li>
                                <li>
                                    <input onChange={(e) => {
                                        if (data.frutos) { return setData("frutos", false); } setData("frutos", true)
                                    }}
                                        type="checkbox" value="frutos" key={"frutos".toString()} />
                                    Frutos secos
                                </li>
                                <li>
                                    <input onChange={(e) => {
                                        if (data.cacahuete) { return setData("cacahuete", false); } setData("cacahuete", true)
                                    }}
                                        type="checkbox" value="cacahuete" key={"cacahuete".toString()} />
                                    Cacahuete
                                </li>
                                <li>
                                    <input onChange={(e) => {
                                        if (data.moluscos) { return setData("moluscos", false); } setData("moluscos", true)
                                    }}
                                        type="checkbox" value="moluscos" key={"moluscos".toString()} />
                                    Moluscos
                                </li>
                                <li>
                                    <input onChange={(e) => {
                                        if (data.crustaceos) { return setData("crustaceos", false); } setData("crustaceos", true)
                                    }}
                                        type="checkbox" value="crustaceos" key={"crustaceos".toString()} />
                                    Crustáceos
                                </li>
                                <li>
                                    <input onChange={(e) => {
                                        if (data.pescado) { return setData("pescado", false); } setData("pescado", true)
                                    }}
                                        type="checkbox" value="pescado" key={"pescado".toString()} />
                                    Pescado
                                </li>
                                <li>
                                    <input onChange={(e) => {
                                        if (data.mostaza) { return setData("mostaza", false); } setData("mostaza", true)
                                    }}
                                        type="checkbox" value="mostaza" key={"mostaza".toString()} />
                                    Mostaza
                                </li>
                            </fieldset>
                        </div>

                        <div className="mb-0">
                            <label className=""> Dificultad </label>
                            <select
                                className="w-full rounded"
                                label="dificultad"
                                name="dificultad"
                                errors={errors.dificultad}
                                value={data.dificultad}
                                required
                                onChange={(e) =>
                                    setData("dificultad", e.target.value)
                                }
                            >
                                <option value="" selected> Elige nivel dificultad </option>
                                <option value="Principiante"> Principiante </option>
                                <option value="Intermedio"> Intermedio </option>
                                <option value="Avanzado"> Avanzado </option>

                            </select>
                            <span className="text-red-600">
                                {errors.dificultad}
                            </span>
                        </div>

                        <div className="mb-4">
                            <label className=""> Tiempo </label>
                            <input
                                type="number"
                                className="w-full px-4 py-2"
                                label="tiempo"
                                name="tiempo"
                                value={data.tiempo}
                                placeholder="Duración en minutos"
                                required
                                onChange={(e) =>
                                    setData("tiempo", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.tiempo}
                            </span>
                        </div>

                        <div className="mb-4">
                            <label className=""> Calorías </label>
                            <input
                                type="number"
                                className="w-full px-4 py-2"
                                label="calorias"
                                name="calorias"
                                value={data.calorias}

                                onChange={(e) =>
                                    setData("calorias", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.calorias}
                            </span>
                        </div>

                        <div className="mb-4">
                            <label className=""> Nº de personas </label>
                            <input
                                type="number"
                                className="w-full px-4 py-2"
                                label="npersonas"
                                name="npersonas"
                                value={data.npersonas}
                                required
                                onChange={(e) =>
                                    setData("npersonas", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.npersonas}
                            </span>
                        </div>

                        <div className="mb-0">
                            <label className=""> Cantidades y Ingredientes </label>
                            <textarea
                                type="text"
                                className="w-full rounded"
                                label="ingreCantidad"
                                name="ingreCantidad"
                                errors={errors.ingreCantidad}
                                value={data.ingreCantidad}
                                placeholder="cantidad igrediente, cantidad igrediente, ... "
                                required
                                onChange={(e) =>
                                    setData("ingreCantidad", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.ingreCantidad}
                            </span>
                        </div>

                        <div className="mb-0">
                            <label className=""> Procedimiento </label>
                            <textarea
                                type="text"
                                className="w-full rounded"
                                label="procedimiento"
                                name="procedimiento"
                                errors={errors.procedimiento}
                                value={data.procedimiento}
                                placeholder="proceso 1, proceso 2, ... "

                                required
                                onChange={(e) =>
                                    setData("procedimiento", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.ingreCantidad}
                            </span>
                        </div>

                        <div className="mb-0">
                            <label className=""> Detalles </label>
                            <textarea
                                type="text"
                                className="w-full rounded"
                                label="detalles"
                                name="detalles"
                                errors={errors.detalles}
                                value={data.detalles}

                                onChange={(e) =>
                                    setData("detalles", e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.detalles}
                            </span>
                        </div>


                    </div>

                    <div className="mt-4">
                        <button
                            type="submit"
                            className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                        >
                            Guardar receta
                        </button>
                    </div>

                </form>

            </div>

            <Footer />

        </div>

    );
};

export default Create;