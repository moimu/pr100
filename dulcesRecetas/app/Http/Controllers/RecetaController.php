<?php

namespace App\Http\Controllers;

use App\Models\Receta;
use Illuminate\Http\Request;

// redirecciones a rutas
use Illuminate\Support\Facades\Redirect;

// Intervention para tratar imágenes php
use Intervention\Image\Facades\Image;

// añadir inertia
use Inertia\Inertia;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

use App\Models\Resena;

// para obtener resenas
use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use Symfony\Component\VarDumper\VarDumper;

class RecetaController extends Controller
{
    /**
     * @return void
     */
    public function __construct()
    {
        // Si requerimos autentificación del usuario
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $recetas = Receta::all();

        // Intento de mostrar tarjetas de recetas y sus reseñas ------
        // $resenas = DB::table('resenas')->get();
        // $recetasYresenas[0] =  $recetas;
        // $recetasYresenas[1] =  $resenas;

        return Inertia::render('Receta/Index', ['recetas' => $recetas]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Receta/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // Antes de crear nueva receta verificamos existencia en bd
        $recetas = Receta::all()->where('nombre', $request->nombre)->first();
        if ($recetas) {
            return back()
                ->withErrors(['nombre' => 'Receta existente']) // mensaje informativo error rojo
                ->withInput(['nombre' => $request->nombre])    // mostrar en input valor erroneo
            ;
        }

        // reglas de validacion para cada input
        $data = $request->validate([
            'nombre' => 'required|string',
            'img' => 'required|image',
            'continente' => 'required|string',
            'descripcion' => 'required|string',
            'dificultad' => 'required|string',
            'tiempo' => 'required|integer',
            'calorias' => 'nullable|integer',
            'npersonas' => 'required|integer',
            'ingreCantidad' => 'required|string',
            'procedimiento' => 'required|string',
            'detalles' => 'nullable|string',
            'lacteos' => 'required|boolean',
            'huevo' => 'required|boolean',
            'gluten' => 'required|boolean',
            'soja' => 'required|boolean',
            'frutos' => 'required|boolean',
            'cacahuete' => 'required|boolean',
            'moluscos' => 'required|boolean',
            'crustaceos' => 'required|boolean',
            'pescado' => 'required|boolean',
            'mostaza' => 'required|boolean',
        ]);

        // guardar imagen servidor e insertar receta en bd
        $path = Storage::disk('public')->putFile('images', $request['img']);
        $path = asset('storage/' . $path);

        $receta = Receta::create([
            'nombre' => $request['nombre'],
            'img' => $path,
            'continente' => $request['continente'],
            'descripcion' => $request['descripcion'],
            'dificultad' => $request['dificultad'],
            'tiempo' => $request['tiempo'],
            'calorias' => $request['calorias'],
            'npersonas' => $request['npersonas'],
            'ingreCantidad' => $request['ingreCantidad'],
            'procedimiento' => $request['procedimiento'],
            'detalles' => $request['detalles'],
            'lacteos' => $request['lacteos'],
            'huevo' => $request['huevo'],
            'gluten' => $request['gluten'],
            'soja' => $request['soja'],
            'frutos' => $request['frutos'],
            'cacahuete' => $request['cacahuete'],
            'moluscos' => $request['moluscos'],
            'crustaceos' => $request['crustaceos'],
            'pescado' => $request['pescado'],
            'mostaza' => $request['mostaza'],
        ]);

        return Redirect::route('recetas.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Receta  $receta
     * @return \Illuminate\Http\Response
     */
    public function show(Receta $receta)
    {

        $id = $receta->id;
        $resenasDeLaReceta = DB::table('resenas')->where("recetas_id", '=', $id)->get();

        $ar = [];
        $ar[0] = $receta;
        $ar[1] = $resenasDeLaReceta;
        return Inertia::render('Receta/Show',  ['receta' => $ar]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Receta  $receta
     * @return \Illuminate\Http\Response
     */
    public function edit(Receta $receta)
    {

        return Inertia::render('Receta/Edit',  ['receta' => $receta]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Receta  $receta
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Receta $receta)
    {

     

        // reglas de validacion para cada input sin imagen
        $data = $request->validate([
            'nombre' => 'nullable|string',
            'continente' => 'nullable|string',
            'descripcion' => 'nullable|string',
            'alergenos' => 'nullable|string',
            'dificultad' => 'nullable|string',
            'tiempo' => 'nullable|integer',
            'calorias' => 'nullable|integer',
            'npersonas' => 'nullable|integer',
            'ingreCantidad' => 'nullable|string',
            'procedimiento' => 'nullable|string',
            'detalles' => 'nullable|string',
        ]);

        // if( $request->hasFile('img') ){

        //     // borrar antigua imagen
        //     if($receta->img){
        //         $exists = Storage::disk('public')->exists("images/{$receta->img}");
        //         if( $exists ){
        //             Storage::disk('public')->delete("images/{$receta->img}");
        //         }
        //     }

        //     $path = Storage::disk('public')->putFile('images', $request['img']);
        //     $path = asset('storage/' . $path);
        //     $receta->img = $path;
        //     $receta->save();
        // }

        $receta->update($data);

        return Redirect::route('recetas.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Receta  $receta
     * @return \Illuminate\Http\Response
     */
    public function destroy(Receta $receta)
    {


        // borrado de las reseñas asociadas a la receta ya que restringen su borrado.
        DB::table('resenas')->where("recetas_id", '=', $receta->id)->delete();

        // borrado de favoritos asociadas a la receta ya que carecen de sentido.
        DB::table('favoritos')->where("recetas_id", '=', $receta->id)->delete();


        // borrado de la receta
        $receta->delete();

        return Redirect::route('recetas.index');
    }
}
