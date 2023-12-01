<?php

namespace App\Services\admin\site;

use Illuminate\Support\Facades\DB;
use App\Models\site\ModeAcces;

class ModeAccesAdminService
{

    public function save($item,) {
        return DB::transaction(function () use ($item,) {
            $savedItem = new ModeAcces($item);
            $savedItem->save();


            return $savedItem;
        });
    }

    public function deleteById($id) {
        return DB::transaction(function () use ($id) {
            $item = ModeAcces::findOrFail($id);


            $item->delete();
            return true;
        });
    }

    public function findAll() {
        return ModeAcces::all();
    }




    public function findAllOptimized() {
        return ModeAcces::select('id', 'libelle')->get();
    }

    public function findById($id) {
        return ModeAcces::find($id);
    }
}
