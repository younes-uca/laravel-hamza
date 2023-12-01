<?php

namespace App\Services\admin\site;

use Illuminate\Support\Facades\DB;
use App\Models\site\Site;
use App\Models\site\ModeAcces;
use App\Models\collaborateur\Technicien;
use App\Models\site\SiteImage;

class SiteAdminService
{

    public function save($item,$siteImages, ) {
        return DB::transaction(function () use ($item,$siteImages, ) {
            $savedItem = new Site($item);
            $savedItem->save();

            $savedSiteImages = [];
            foreach ($siteImages as $element) {
                $siteImage = new SiteImage($element);
                $savedSiteImages[] = $siteImage;
            }
            $savedItem->siteImages()->saveMany($savedSiteImages);

            return $savedItem;
        });
    }

    public function deleteById($id) {
        return DB::transaction(function () use ($id) {
            $item = Site::findOrFail($id);

            $item->siteImages()->delete();

            $item->delete();
            return true;
        });
    }

    public function findAll() {
        return Site::all();
    }

    public function findByTechnicienId($id) {
        return Site::where('technicien_id', $id)->get();
    }

    public function deleteByTechnicienId($id) {
        $items = Site::where('technicien_id', $id)->get();
        $count = 0;
        foreach ($items as $element ){
            $element->siteImages->each(function ($elementItem) {
                $elementItem->delete();
            });
            $element->delete();
            $count++;
        }
        return $count;
    }
    public function findByModeAccesId($id) {
        return Site::where('modeAcces_id', $id)->get();
    }

    public function deleteByModeAccesId($id) {
        $items = Site::where('modeAcces_id', $id)->get();
        $count = 0;
        foreach ($items as $element ){
            $element->siteImages->each(function ($elementItem) {
                $elementItem->delete();
            });
            $element->delete();
            $count++;
        }
        return $count;
    }


    public function findWithAssociatedLists($id) {
        return Site::with(['siteImages',])->find($id);
    }

    public function findAllOptimized() {
        return Site::select('id', 'nom')->get();
    }

    public function findById($id) {
        return Site::find($id);
    }
}
