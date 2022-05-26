<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;


class Receta extends Model
{
    use HasFactory;

    protected $fillable = [
	    'nombre',
	    'img',
		'continente',
		'descripcion',
		'dificultad',
		'tiempo',
		'calorias',
		'npersonas',
		'ingreCantidad',
		'procedimiento',
		'detalles',
		'lacteos',
		'huevo',
		'gluten',
		'soja',
		'frutos',
		'cacahuete',
		'moluscos',
		'crustaceos',
		'pescado',
		'mostaza',
	];

	public function resenas(){
        return $this->hasMany( Resena::class );
    }
}

