<?php

namespace App\Http\Controllers;

use App\Models\Resena;
use Illuminate\Http\Request;

// añadir inertia 
use Inertia\Inertia;

class ResenaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // reseñas del usuario autenticado
        $resenas = auth()->user()->resenas;

        return Inertia::render('Resena/Index', ['resenas' => $resenas] );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = auth()->user();
       

        return Inertia::render('Resena/Create', ['user' => $user] );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // recibo reseña del componente create
        // valido e inserto nueva reseña
        
        $data = $request->validate([
            'user_id'=>'required|integer',
            'recetas_id'=>'required|integer',
            'estrellas'=>'required|integer',
            'descripcion'=>'required|string',
            'user_nombre'=>'required|string',
            
        ]);
        $resena = Resena::create([
            'user_id' => $request['user_id'],
            'recetas_id' => $request['recetas_id'],
            'estrellas' => $request['estrellas'],
            'descripcion' => $request['descripcion'],
            'user_nombre' => $request['user_nombre'],
            
        ]);

        $id = $request['recetas_id'];
        
        return Inertia::render("Receta/Show/$id" );

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Resena  $resena
     * @return \Illuminate\Http\Response
     */
    public function show(Resena $resena)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Resena  $resena
     * @return \Illuminate\Http\Response
     */
    public function edit(Resena $resena)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Resena  $resena
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Resena $resena)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Resena  $resena
     * @return \Illuminate\Http\Response
     */
    public function destroy(Resena $resena)
    {
        //
    }
}
