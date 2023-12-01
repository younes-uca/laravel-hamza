<?php

namespace App\Services\admin\site;

use Illuminate\Support\Facades\DB;
use App\Models\site\SiteImage;
use App\Models\site\Site;

class SiteImageAdminService
{

    public function save($item,) {
        return DB::transaction(function () use ($item,) {
            $savedItem = new SiteImage($item);
            $savedItem->save();


            return $savedItem;
        });
    }

    public function deleteById($id) {
        return DB::transaction(function () use ($id) {
            $item = SiteImage::findOrFail($id);


            $item->delete();
            return true;
        });
    }

    public function findAll() {
        return SiteImage::all();
    }

    public function findBySiteId($id) {
        return SiteImage::where('site_id', $id)->get();
    }

    public function deleteBySiteId($id) {
        $items = SiteImage::where('site_id', $id)->get();
        $count = 0;
        foreach ($items as $element ){
            $element->delete();
            $count++;
        }
        return $count;
    }



    public function findAllOptimized() {
        return SiteImage::select('id', 'fileName')->get();
    }

    public function findById($id) {
        return SiteImage::find($id);
    }
}
