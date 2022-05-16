<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;


class Favorito extends Model
{
    use HasFactory;

    protected $fillable = [
	    'user_id',
		'recetas_id',
		'recetas_nombre',
		'recetas_img',
	];

	// retorna el usuario propietario del favorito
    public function user(){
	    return $this->belongsTo(User::class);
	}

}