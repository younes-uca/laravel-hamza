<?php

namespace App\Models\site;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ModeAcces extends Model
{
    protected $table = 'mode_acces';
    protected $fillable = [
        'libelle',
        'code',
    ];



}


