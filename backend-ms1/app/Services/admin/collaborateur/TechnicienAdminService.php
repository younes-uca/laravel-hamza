<?php

namespace App\Services\admin\collaborateur;

use Illuminate\Support\Facades\DB;
use App\Models\collaborateur\Technicien;

class TechnicienAdminService
{

    public function save($item,) {
        return DB::transaction(function () use ($item,) {
            $savedItem = new Technicien($item);
            $savedItem->save();


            return $savedItem;
        });
    }

    public function deleteById($id) {
        return DB::transaction(function () use ($id) {
            $item = Technicien::findOrFail($id);


            $item->delete();
            return true;
        });
    }

    public function findAll() {
        return Technicien::all();
    }




    public function findAllOptimized() {
        return Technicien::select('id', 'email')->get();
    }

    public function findById($id) {
        return Technicien::find($id);
    }
}
