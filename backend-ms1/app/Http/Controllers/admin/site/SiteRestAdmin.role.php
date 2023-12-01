<?php

namespace App\Http\Controllers\admin\site;

use App\Http\Controllers\Controller;
use App\Services\admin\site\SiteAdminService;
use Illuminate\Http\Request;

class SiteRestAdmin  extends Controller
{

    private SiteAdminService $service;

    public function __construct(SiteAdminService $service)
    {
        $this->service = $service;
    }

    public function save(Request $request)
    {
        $validated = $request->validate([

            'g2r' => 'required|string',
            'nom' => 'required|string',
            'adresse' => 'required|string',
            'commentaire' => 'required|string',

            'technicien_id' => 'required|exists:technicien,id',
            'modeAcces_id' => 'required|exists:mode_acces,id',
        ]);

        $validatedSiteImages = $request->validate([
            'siteImages.*.fileName' => 'required|string',
            'siteImages.*.filePath' => 'required|string',
            'siteImages.*.description' => 'required|string',
        ]);

        return $this->service->save($validated,        $validatedSiteImages['siteImages'], );

    }

    public function deleteById($id) {
        return $this->service->deleteById($id);
    }

    public function findAll() {
        $items = $this->service->findAll();

        return  $items;
    }

    public function findByTechnicienId($id) {
        return $this->service->findByTechnicienId($id);
    }

    public function deleteByTechnicienId($id) {
        return  $this->service->deleteByTechnicienId($id);
    }

    public function findByModeAccesId($id) {
        return $this->service->findByModeAccesId($id);
    }

    public function deleteByModeAccesId($id) {
        return  $this->service->deleteByModeAccesId($id);
    }


    public function findWithAssociatedLists($id) {
        return  $this->service->findWithAssociatedLists($id);
    }

    public function findAllOptimized() {
        return $this->service->findAllOptimized();
    }

    public function findById($id) {
        return $this->service->findById($id);
    }
}
