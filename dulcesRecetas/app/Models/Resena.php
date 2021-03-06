<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\Receta;

class Resena extends Model
{
    use HasFactory;

    protected $fillable = [
		'user_id',
		'recetas_id',
	    'estrellas',
	    'descripcion',
		'user_nombre',
		'recetas_img',
	];

	// retornar el usuario de la reseña
    public function user(){
	    return $this->belongsTo(User::class);
	}

	// retornar la receta de la reseña
	public function receta(){
		return $this->belongsTo(Receta::class);
	}

}