<?php

namespace App\Http\Controllers;

use App\Models\Filtro;
use Illuminate\Http\Request;

// añadir inertia
use Inertia\Inertia;
// consultas a table('recetas') filtradas
use Illuminate\Support\Facades\DB;




class FiltroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $alergenos = $request->all();
        array_pop($alergenos);
       
        $ar= [];
        // obtenemos array con alergenos que no  
        // queremos que contega la receta.
        foreach( $alergenos as $clave => $valor ){
            if( $valor === true ){
                array_push( $ar, $clave );
            }
        }
        
        // Construccion de la consulta que los campos alergenos recibido en la request
        // esten marcados en registro de la receta como 0
        $sql = "SELECT * FROM recetas";
        foreach ( $ar as $indice => $valor){
            if( $indice===0 ){ $sql = $sql . " WHERE $valor = 0"; }
            else{ $sql = $sql . " AND $valor = 0"; }
        }
        // dd( $sql );
       $recetas = DB::select($sql);

        return Inertia::render('Filtro/Index', ['recetas' => $recetas]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Filtro  $filtro
     * @return \Illuminate\Http\Response
     */
    public function show(Filtro $filtro)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Filtro  $filtro
     * @return \Illuminate\Http\Response
     */
    public function edit(Filtro $filtro)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Filtro  $filtro
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Filtro $filtro)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Filtro  $filtro
     * @return \Illuminate\Http\Response
     */
    public function destroy(Filtro $filtro)
    {
        //
    }
}
