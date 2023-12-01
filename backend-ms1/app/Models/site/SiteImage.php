<?php

namespace App\Models\site;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SiteImage extends Model
{
    protected $table = 'site_image';
    protected $fillable = [
        'fileName',
        'filePath',
        'description',
        'site_id',
    ];

    public function site(): BelongsTo {
        return $this->belongsTo(Site::class);
    }


}


