<?php

namespace App\Http\Controllers;

use App\Models\Resena;
use Illuminate\Http\Request;

// añadir inertia 
use Inertia\Inertia;

// obtener reseñas de la receta
use Illuminate\Support\Facades\DB;
// redirecciones a rutas
use Illuminate\Support\Facades\Redirect;


class ResenaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (auth()->user()) {

            // reseñas del usuario autenticado
            $resenas = auth()->user()->resenas;
            return Inertia::render('Resena/Index', ['resenas' => $resenas]);
        } else {
            return;
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = auth()->user();

        return Inertia::render('Resena/Create', ['user' => $user]);
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
            'user_id' => 'required|integer',
            'recetas_id' => 'required|integer',
            'estrellas' => 'required|integer',
            'descripcion' => 'required|string',
            'user_nombre' => 'required|string',
            'recetas_img' => 'required|string',

        ]);
        $resena = Resena::create([
            'user_id' => $request['user_id'],
            'recetas_id' => $request['recetas_id'],
            'estrellas' => $request['estrellas'],
            'descripcion' => $request['descripcion'],
            'user_nombre' => $request['user_nombre'],
            'recetas_img' => $request['recetas_img'],

        ]);

        $id = $request['recetas_id'];

        $resenasDeLaReceta = DB::table('resenas')->where("recetas_id", '=', $id)->get();

        $ar = [];
        $ar[0] = $request['receta'][0];
        $ar[1] = $resenasDeLaReceta;

        return Inertia::render('Receta/Show',  ['receta' => $ar]);
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
        return Inertia::render('Resena/Edit',  ['resena' => $resena]);
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
        // reglas de validacion para cada input 
        $data = $request->validate([
            'descripcion' => 'nullable|string',
            'estrellas' => 'nullable|integer',
        ]);

        $resena->update($data);

        return Redirect::route('resenas.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Resena  $resena
     * @return \Illuminate\Http\Response
     */
    public function destroy(Resena $resena)
    {
        $resena->delete();
        return Redirect::route('resenas.index');
    }
}
