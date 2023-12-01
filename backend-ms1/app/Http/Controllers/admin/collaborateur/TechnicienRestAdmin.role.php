<?php

namespace App\Http\Controllers\admin\collaborateur;

use App\Http\Controllers\Controller;
use App\Services\admin\collaborateur\TechnicienAdminService;
use Illuminate\Http\Request;

class TechnicienRestAdmin  extends Controller
{

    private TechnicienAdminService $service;

    public function __construct(TechnicienAdminService $service)
    {
        $this->service = $service;
    }

    public function save(Request $request)
    {
        $validated = $request->validate([

            'nom' => 'required|string',
            'prenom' => 'required|string',
            'email' => 'required|string',
            'credentialsNonExpired' => 'required|boolean',
            'enabled' => 'required|boolean',
            'accountNonExpired' => 'required|boolean',
            'accountNonLocked' => 'required|boolean',
            'passwordChanged' => 'required|boolean',
            'username' => 'required|string',
            'password' => 'required|string',

        ]);


        return $this->service->save($validated,           );

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
