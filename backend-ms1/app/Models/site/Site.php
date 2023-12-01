<?php

namespace App\Models\site;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Site extends Model
{
    protected $table = 'site';
    protected $fillable = [
        'g2r',
        'nom',
        'adresse',
        'commentaire',
        'technicien_id',
        'modeAcces_id',
    ];

    public function technicien(): BelongsTo {
        return $this->belongsTo(Technicien::class);
    }
    public function modeAcces(): BelongsTo {
        return $this->belongsTo(ModeAcces::class);
    }

    public function siteImages(): HasMany {
        return $this->hasMany(SiteImage::class);
    }

}


