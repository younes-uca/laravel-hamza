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
        Schema::create('site_image', function (Blueprint $table) {
            $table->id();
            $table->string('fileName')->required();
            $table->string('filePath')->required();
            $table->string('description')->required();

            $table->unsignedBigInteger('site_id');
            $table->foreign('site_id')->references('id')->on('site');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('site_image');
    }
};
