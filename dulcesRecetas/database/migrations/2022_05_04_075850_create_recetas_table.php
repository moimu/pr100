<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recetas', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('nombre');
            $table->string('img')->nullable();
            $table->string('continente')->default('Europa');
            $table->string('descripcion');
            $table->string('alergenos')->nullable();
            $table->string('dificultad')->default('Principiante');
            $table->integer('tiempo')->default('30');
            $table->integer('calorias')->nullable();
            $table->integer('npersonas')->default('2');
            $table->longText('ingreCantidad');
            $table->longText('procedimiento');
            $table->string('detalles')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recetas');
    }
};

