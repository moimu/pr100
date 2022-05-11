<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;


class Favorito extends Model
{
    use HasFactory;

    protected $fillable = [
	    'id_receta',
	];

	// retorna el usuario propietario del favorito
    public function user(){
	    return $this->belongsTo(User::class);
	}

}