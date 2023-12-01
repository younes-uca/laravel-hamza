<?php

namespace App\Http\Controllers\admin\site;

use App\Http\Controllers\Controller;
use App\Services\admin\site\SiteImageAdminService;
use Illuminate\Http\Request;

class SiteImageRestAdmin  extends Controller
{

    private SiteImageAdminService $service;

    public function __construct(SiteImageAdminService $service)
    {
        $this->service = $service;
    }

    public function save(Request $request)
    {
        $validated = $request->validate([

            'fileName' => 'required|string',
            'filePath' => 'required|string',
            'description' => 'required|string',

            'site_id' => 'required|exists:site,id',
        ]);


        return $this->service->save($validated,     );

    }

    public function deleteById($id) {
        return $this->service->deleteById($id);
    }

    public function findAll() {
        $items = $this->service->findAll();

        return  $items;
    }

    public function findBySiteId($id) {
        return $this->service->findBySiteId($id);
    }

    public function deleteBySiteId($id) {
        return  $this->service->deleteBySiteId($id);
    }



    public function findAllOptimized() {
        return $this->service->findAllOptimized();
    }

    public function findById($id) {
        return $this->service->findById($id);
    }
}
