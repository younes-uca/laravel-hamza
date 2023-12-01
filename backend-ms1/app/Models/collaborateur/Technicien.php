<?php

namespace App\Models\collaborateur;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Technicien extends Model
{
    protected $table = 'technicien';
    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'credentialsNonExpired',
        'enabled',
        'accountNonExpired',
        'accountNonLocked',
        'passwordChanged',
        'username',
        'password',
    ];



}


