<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\RecetaController;
use App\Http\Controllers\FavoritoController;
use App\Http\Controllers\ResenaController;
use App\Http\Controllers\FiltroController;
use App\Http\Controllers\UserController;



// Añadir modelo de receta para renderizar
// Receta/Index  para la ruta /
use App\Models\Receta;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Receta/Index', [
        'recetas' => Receta::all(),
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::resource('recetas', RecetaController::class);

Route::resource('favoritos', FavoritoController::class);

Route::resource('resenas', ResenaController::class);

// Route::resource('filtros', FiltroController::class);
Route::match(['get', 'post'], '/filtros', [FiltroController::class, 'index'])->name('filtros.index');


// permitir GET POST para method index del controller
// Route::match(['get', 'post'], '/recetas', [RecetaController::class, 'index'])->name('recetas.index');
// Route::get('/recetas/create', [RecetaController::class, 'create'])->name('recetas.create');
// Route::post('/recetas', [RecetaController::class, 'store'])->name('recetas.store');
// Route::get('/recetas/{receta}/edit', [RecetaController::class, 'edit'])->name('recetas.edit');
// Route::put('/recetas/{receta}', [RecetaController::class, 'update'])->name('recetas.update'); 
// Route::get('/recetas/{receta}',[RecetaController::class, 'show'])->name('recetas.show');
// Route::delete('/recetas/{receta}', [RecetaController::class, 'destroy'])->name('recetas.destroy');

require __DIR__.'/auth.php';

// Route::get('/', function () {
//     return view('welcome');
// });

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// // Manejadores de controladores   https://laravel.com/docs/8.x/controllers
// // Crear vista que usaremos en métodos PersonajeController u otras vistas

// Route::get('/personajes' , [PersonajeController::class , 'index'])->name('personajes.index');
// Route::get('/personajes/create', [PersonajeController::class, 'create'])->name('personajes.create');
// Route::post('/personajes', [PersonajeController::class, 'store'])->name('personajes.store');
// Route::get('/personajes/{personaje}/edit', [PersonajeController::class, 'edit'])->name('personajes.edit'); // retornar vista con formulario
// Route::put('/personajes/{personaje}', [PersonajeController::class, 'update'])->name('personajes.update');  // al update  PersonajeController  validar antes de update
// Route::delete('/personajes/{personaje}', [PersonajeController::class, 'destroy'])->name('personajes.destroy');
// Route::get('/personajes/{personaje}',[PersonajeController::class, 'show'])->name('personajes.show');

// // delete put get los hace un formulario  , en caso del delete aunque no hagamos vista para el entramos a la ruta dada por POST de form
// // mirar index.blade  boton de eliminar registro