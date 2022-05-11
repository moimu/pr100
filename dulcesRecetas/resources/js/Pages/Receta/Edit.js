import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

import '../../../css//receta.css'


const Edit = () => {
    const { receta } = usePage().props;
    const { data, setData, put, errors } = useForm({
        nombre: receta.nombre || "",
        // img: receta.img || "",
        continente: receta.continente || "",
        descripcion: receta.descripcion || "",
        alergenos: receta.alergenos || "",
        dificultad: receta.dificultad || "",
        tiempo: receta.tiempo || "",
        calorias: receta.calorias || "", 
        npersonas: receta.npersonas || "",
        ingreCantidad: receta.ingreCantidad || "",
        procedimiento: receta.procedimiento || "",
        detalles: receta.detalles || ""
    });
    console.log(data);
    function handleSubmit(e) {
        e.preventDefault();
        put(route("recetas.update", receta.id));
    }
    function destroy() {
        if (confirm("Seguro que quieres borrar este receta?")) {
            Inertia.delete(route("recetas.destroy", receta.id));
        }
    }
    return (
        <div className="">
            <div className="containerEditoCreate mx-auto">
                <div>
                    <h1 className="mb-8 text-3xl font-bold hunoindex">
                        <InertiaLink
                            href={route("recetas.index")}
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                            recetas
                        </InertiaLink>
                        <span className="font-medium text-indigo-600"> /</span>
                        Edición de Receta
                    </h1>
                </div>

                <div className="max-w-3xl p-8 bg-white rounded shadow contenedorForm">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">

                        <div className="mb-4">
                                <label className="">Nombre</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="nombre"
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

                            {/* <div className="mb-4">
                                <label className=""> Imagen </label>
                                <div>
                                    <input
                                        type="file"
                                        className="w-full px-4 py-2"
                                        label="img"
                                        name="img"
                                        onChange={(e) =>
                                            setData("img", e.target.files[0])
                                        }
                                    />
                                    <img src={data.img} alt="nueva imagen" className="imgreceta"></img>
                                </div>
                                <span className="text-red-600">
                                    {errors.img}
                                </span>
                            </div> */}

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

                            <div className="mb-0">
                                <label className=""> Alérgenos </label>
                                <select
                                    className="w-full rounded"
                                    label="alergenos"
                                    name="alergenos"
                                    errors={errors.alergenos}
                                    value={data.alergenos}
                                    
                                    onChange={(e) =>
                                        setData("alergenos", e.target.value)
                                    }
                                    
                                >
                                    <option value="" default> Sin alérgenos </option>
                                    <option value="Leche"> Leche </option>
                                    <option value="Huevos"> Huevos </option>
                                    <option value="Trigo"> Trigo </option>
                                    <option value="Soya"> Soya </option>
                                    <option value="Frutos secos"> Leche </option>
                                    <option value="Cacahuates"> Huevos </option>
                                    <option value="Pescado"> Trigo </option>
                                    <option value="Mariscos"> Soya </option>

                                </select> 
                                <span className="text-red-600">
                                    {errors.alergenos}
                                </span>
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
                                    <option value="Principiante"> principiante </option>
                                    <option value="Intermedio"> intermedio </option>
                                    <option value="Avanzado"> avanzado </option>

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
                                    value={data.tiempo }
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
                                    required
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
                                <label className=""> Ingredientes y Cantidades </label>
                                <textarea
                                    type="text"
                                    className="w-full rounded"
                                    label="ingreCantidad"
                                    name="ingreCantidad"
                                    errors={errors.ingreCantidad}
                                    value={data.ingreCantidad}
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

                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-green-500 rounded"
                            >
                                Actualizar
                            </button>
                            <button
                                onClick={destroy}
                                tabIndex="-1"
                                type="button"
                                className="px-4 py-2 text-white bg-red-500 rounded"
                            >
                                Borrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;