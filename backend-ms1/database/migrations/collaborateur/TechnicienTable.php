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
        Schema::create('technicien', function (Blueprint $table) {
            $table->id();
            $table->string('nom')->required();
            $table->string('prenom')->required();
            $table->string('email')->required();
             $table->boolean('credentialsNonExpired')->default(false);
             $table->boolean('enabled')->default(false);
             $table->boolean('accountNonExpired')->default(false);
             $table->boolean('accountNonLocked')->default(false);
             $table->boolean('passwordChanged')->default(false);
            $table->string('username')->required();
            $table->string('password')->required();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('technicien');
    }
};
