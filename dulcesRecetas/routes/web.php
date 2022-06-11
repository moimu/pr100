<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\RecetaController;
use App\Http\Controllers\FavoritoController;
use App\Http\Controllers\ResenaController;
use App\Http\Controllers\FiltroController;


// Añadir modelo de receta para renderizar
// Receta/Index  para la ruta /
use App\Models\Receta;
use Illuminate\Support\Facades\DB;

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
    return Inertia::render('Welcome', [
        'recetas' => [],
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


// Permitir GET POST para method index del FiltroController

// Route::resource('filtros', FiltroController::class);
Route::match(['get', 'post'], '/filtros', [FiltroController::class, 'index'])->name('filtros.index');


require __DIR__.'/auth.php';
