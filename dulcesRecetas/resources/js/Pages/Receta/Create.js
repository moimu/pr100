import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";

import '../../../css//receta.css'

const Create = () => {
    const { data, setData, errors, post } = useForm({
        nombre: "",
        continente: "",
        descripcion: "",
        alergenos: "",
        dificultad: "",
        tiempo: "",
        calorias: "",
        ingreCantidad: "",
        procedimiento: "",
        img: "",
        detalles: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        // envio datos del formulario a esta ruta
        post(route("recetas.store"));
    }
    function editalergenos(e){
        data.alergenos += e.currentTarget.value.toString()+",";
        console.log(data);
    }
    return (
        <div className="">
            <div className="containerEditoCreate mx-auto">

                <h1 className="mb-8 text-3xl font-bold hunoindex"> Nueva receta </h1>

                <div className="flex items-center justify-between mb-6 navedit">

                    <InertiaLink
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"

                        href={route("recetas.index")}
                    > Recetas
                    </InertiaLink>

                </div>

                <div className="max-w-6xl p-8 bg-white rounded shadow contenedorForm">
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
                                    <option value="América">América</option>
                                    <option value="América del Sur">América del Sur</option>
                                    <option value="América del Norte">América del Norte</option>
                                    <option value="Europa">Europa</option>
                                    <option value="Oceanía">Asia</option>
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
                                        <input onChange={ (e) => editalergenos( e )} 
                                            type="radio" value="Lácteos" key={"Lácteos".toString()}/>
                                            Lácteos
                                    </li>
                                    <li>
                                        <input onChange={ (e) => editalergenos( e )} 
                                            type="radio" value="Huevo" key={"Huevo".toString()}/>
                                            Huevo
                                    </li>
                                    <li>
                                        <input onChange={ (e) => editalergenos( e )} 
                                            type="radio" value="Gluten" key={"Gluten".toString()}/>
                                            Gluten
                                    </li>
                                    <li>
                                        <input onChange={ (e) => editalergenos( e )} 
                                            type="radio" value="Soja" key={"Soja".toString()}/>
                                            Soja
                                    </li>
                                    <li>
                                        <input onChange={ (e) => editalergenos( e )} 
                                            type="radio" value="Frutos secos" key={"Frutos secos".toString()}/>
                                            Frutos secos
                                    </li>
                                    <li>
                                        <input onChange={ (e) => editalergenos( e )} 
                                            type="radio" value="Cacahuete" key={"Cacahuete".toString()}/>
                                            Cacahuete
                                    </li>
                                    <li>
                                        <input onChange={ (e) => editalergenos( e )} 
                                            type="radio" value="Moluscos" key={"Moluscos".toString()}/>
                                            Moluscos
                                    </li>
                                    <li>
                                        <input onChange={ (e) => editalergenos( e )} 
                                            type="radio" value="Crustáceos" key={"Crustáceos".toString()}/>
                                            Crustáceos
                                    </li>
                                    <li>
                                        <input onChange={ (e) => editalergenos( e )} 
                                            type="radio" value="Pescado" key={"Pescado".toString()}/>
                                            Pescado
                                    </li>
                                    <li>
                                        <input onChange={ (e) => editalergenos( e )} 
                                            type="radio" value="Mostaza" key={"Mostaza".toString()}/>
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
            </div>
        </div>
    );
};

export default Create;