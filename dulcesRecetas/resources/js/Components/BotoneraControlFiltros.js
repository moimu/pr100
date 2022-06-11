import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

import '../../css//Filtros.css'

const BotoneraControlFiltros = () => {

    /**
     * Oculta filtros y muestra el selecionado
     * @param {} e 
     */
    function buscaFiltroDom(e) {

        let idFiltro = e.target.name;
        let filtroPaises = document.getElementById('FiltroPaises');
        let filtroAlergenos = document.getElementById('FiltroAlergenos');
        filtroPaises.classList.add('oculto');
        filtroAlergenos.classList.add('oculto');
        if (idFiltro == "FiltroAlergenos") {

            document.getElementById("btnFiltroPaises").classList.remove('btnActivo');
            document.getElementById("btnFiltroAlergenos").classList.add('btnActivo');

            filtroAlergenos.classList.remove('oculto');
        }
        if (idFiltro == "FiltroPaises") {

            document.getElementById("btnFiltroAlergenos").classList.remove('btnActivo');
            document.getElementById("btnFiltroPaises").classList.add('btnActivo');

            filtroPaises.classList.remove('oculto');
        }
    }

    return (

        <div className=" p-4 bg-white rounded containerFiltro bg-gray-100">
            <button
                className="px-4 py-2 text-white bg-yellow-500 rounded-md focus:outline-none"
                id="btnFiltroAlergenos"
                name="FiltroAlergenos"
                onClick={buscaFiltroDom}
            >
                Filtro alérgenos
            </button>
            <button
                className="px-4 py-2 text-white bg-yellow-500 rounded-md focus:outline-none"
                id="btnFiltroPaises"
                name="FiltroPaises"
                onClick={buscaFiltroDom}
            >
                Filtro Paises
            </button>

        </div>
    );
}


export default BotoneraControlFiltros; 