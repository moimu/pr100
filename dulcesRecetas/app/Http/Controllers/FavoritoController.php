<?php

namespace App\Http\Controllers;

use App\Models\Favorito;
use Illuminate\Http\Request;

// añadir inertia 
use Inertia\Inertia;

// redirecciones a rutas
use Illuminate\Support\Facades\Redirect;
// obtener reseñas de la receta
use Illuminate\Support\Facades\DB;

class FavoritoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // favoritos del usuario autenticado
        $favoritos = auth()->user()->favoritos;
        return Inertia::render('Favorito/Index', ['favoritos' => $favoritos]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = auth()->user();

        return Inertia::render('Favorito/Create', ['user' => $user]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // recibo reseña del componente Create valido e inserto

        $data = $request->validate([
            'user_id'=>'required|integer',
            'recetas_id'=>'required|integer',
            'recetas_nombre'=>'required|string',
            'recetas_img'=>'required|string',

        ]);

        $idreceta = $request['recetas_id'];
        $favorito = DB::table('favoritos')->where( "recetas_id", '=', $idreceta )->first();

        // dd($favorito);
        if( !isset($favorito) ){

            Favorito::create([
                'user_id' => $request['user_id'],
                'recetas_id' => $request['recetas_id'],
                'recetas_nombre' => $request['recetas_nombre'],
                'recetas_img' => $request['recetas_img'],
            ]);

        }
        
        $resenasDeLaReceta = DB::table('resenas')->where( "recetas_id", '=', $idreceta)->get();
        $ar = [];
        $ar[0] = $request['receta'];
        $ar[1] = $resenasDeLaReceta;

        return Inertia::render('Receta/Show',  ['receta' => $ar] );
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Favorito  $favorito
     * @return \Illuminate\Http\Response
     */
    public function show(Favorito $favorito)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Favorito  $favorito
     * @return \Illuminate\Http\Response
     */
    public function edit(Favorito $favorito)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Favorito  $favorito
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Favorito $favorito)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Favorito  $favorito
     * @return \Illuminate\Http\Response
     */
    public function destroy(Favorito $favorito)
    {
        $favorito->delete();
        return Redirect::route('resenas.index');
    }
}
