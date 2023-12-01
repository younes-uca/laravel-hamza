<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('site', function (Blueprint $table) {
            $table->id();
            $table->string('g2r')->required();
            $table->string('nom')->required();
            $table->string('adresse')->required();
            $table->string('commentaire')->required();

            $table->unsignedBigInteger('technicien_id');
            $table->foreign('technicien_id')->references('id')->on('technicien');
            $table->unsignedBigInteger('modeAcces_id');
            $table->foreign('modeAcces_id')->references('id')->on('mode_acces');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('site');
    }
};
