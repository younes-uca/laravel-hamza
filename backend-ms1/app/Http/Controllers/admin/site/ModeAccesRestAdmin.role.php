<?php

namespace App\Http\Controllers\admin\site;

use App\Http\Controllers\Controller;
use App\Services\admin\site\ModeAccesAdminService;
use Illuminate\Http\Request;

class ModeAccesRestAdmin  extends Controller
{

    private ModeAccesAdminService $service;

    public function __construct(ModeAccesAdminService $service)
    {
        $this->service = $service;
    }

    public function save(Request $request)
    {
        $validated = $request->validate([

            'libelle' => 'required|string',
            'code' => 'required|string',

        ]);


        return $this->service->save($validated,   );

    }

    public function deleteById($id) {
        return $this->service->deleteById($id);
    }

    public function findAll() {
        $items = $this->service->findAll();

        return  $items;
    }



    public function findAllOptimized() {
        return $this->service->findAllOptimized();
    }

    public function findById($id) {
        return $this->service->findById($id);
    }
}
