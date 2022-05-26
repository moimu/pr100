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
            $table->string('dificultad')->default('Principiante');
            $table->integer('tiempo')->default('30');
            $table->integer('calorias')->nullable();
            $table->integer('npersonas')->default('2');
            $table->longText('ingreCantidad');
            $table->longText('procedimiento');
            $table->string('detalles')->nullable();
            $table->boolean('lacteos');
            $table->boolean('huevo');
            $table->boolean('gluten');
            $table->boolean('soja');
            $table->boolean('frutos');
            $table->boolean('cacahuete');
            $table->boolean('moluscos');
            $table->boolean('crustaceos');
            $table->boolean('pescado');
            $table->boolean('mostaza');
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

