<?php

use App\Http\Controllers\admin\site\ModeAccesRestAdmin;
use App\Http\Controllers\admin\site\SiteImageRestAdmin;
use App\Http\Controllers\admin\site\SiteRestAdmin;
use App\Http\Controllers\admin\collaborateur\TechnicienRestAdmin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/admin/modeAcces/', [ModeAccesRestAdmin::class, 'findAll']);
Route::post('/admin/modeAcces/', [ModeAccesRestAdmin::class, 'save']);
Route::delete('/admin/modeAcces/id/{id}', [ModeAccesRestAdmin::class, 'deleteById']);
Route::get('/admin/modeAcces/id/{id}', [ModeAccesRestAdmin::class, 'findById']);


Route::get('/admin/modeAcces/optimized', [ModeAccesRestAdmin::class, 'findAllOptimized']);



Route::get('/admin/siteImage/', [SiteImageRestAdmin::class, 'findAll']);
Route::post('/admin/siteImage/', [SiteImageRestAdmin::class, 'save']);
Route::delete('/admin/siteImage/id/{id}', [SiteImageRestAdmin::class, 'deleteById']);
Route::get('/admin/siteImage/id/{id}', [SiteImageRestAdmin::class, 'findById']);


Route::get('/admin/siteImage/optimized', [SiteImageRestAdmin::class, 'findAllOptimized']);

Route::get('/admin/siteImage/site/id/{id}', [SiteImageRestAdmin::class, 'findBySiteId']);
Route::delete('/admin/siteImage/site/id/{id}', [SiteImageRestAdmin::class, 'deleteBySiteId']);


Route::get('/admin/site/', [SiteRestAdmin::class, 'findAll']);
Route::post('/admin/site/', [SiteRestAdmin::class, 'save']);
Route::delete('/admin/site/id/{id}', [SiteRestAdmin::class, 'deleteById']);
Route::get('/admin/site/id/{id}', [SiteRestAdmin::class, 'findById']);

Route::get('/admin/site/detail/id/{id}', [SiteRestAdmin::class, 'findWithAssociatedLists']);

Route::get('/admin/site/optimized', [SiteRestAdmin::class, 'findAllOptimized']);

Route::get('/admin/site/technicien/id/{id}', [SiteRestAdmin::class, 'findByTechnicienId']);
Route::delete('/admin/site/technicien/id/{id}', [SiteRestAdmin::class, 'deleteByTechnicienId']);
Route::get('/admin/site/modeAcces/id/{id}', [SiteRestAdmin::class, 'findByModeAccesId']);
Route::delete('/admin/site/modeAcces/id/{id}', [SiteRestAdmin::class, 'deleteByModeAccesId']);


Route::get('/admin/technicien/', [TechnicienRestAdmin::class, 'findAll']);
Route::post('/admin/technicien/', [TechnicienRestAdmin::class, 'save']);
Route::delete('/admin/technicien/id/{id}', [TechnicienRestAdmin::class, 'deleteById']);
Route::get('/admin/technicien/id/{id}', [TechnicienRestAdmin::class, 'findById']);


Route::get('/admin/technicien/optimized', [TechnicienRestAdmin::class, 'findAllOptimized']);




// UserController Routes
Route::get('/user', [UserController::class, 'index']); // List all user
Route::get('/user/{id}', [UserController::class, 'retrieveById']); // Get a user by ID
Route::post('/user/token', [UserController::class, 'retrieveByToken']); // Retrieve user by token
Route::put('/user/token', [UserController::class, 'updateRememberToken']); // Update user's remember token
Route::post('/user/credentials', [UserController::class, 'retrieveByCredentials']); // Retrieve user by credentials
Route::post('/user/validate-credentials', [UserController::class, 'validateCredentials']); // Validate user credentials
Route::post('/user', [UserController::class, 'save']); // Create a new user
Route::put('/user', [UserController::class, 'update']); // Update user
Route::delete('/user/{id}', [UserController::class, 'delete']); // Delete user by ID


// RoleController Routes
Route::get('/role', [RoleController::class, 'findAll']); // List all roles
Route::get('/role/authority', [RoleController::class, 'findByAuthority']); // Find role by authority
Route::delete('/role/authority', [RoleController::class, 'deleteByAuthority']); // Delete role by authority
Route::get('/role/{id}', [RoleController::class, 'findById']); // Find role by ID
Route::delete('/role/{id}', [RoleController::class, 'deleteById']); // Delete role by ID
Route::post('/role/create', [RoleController::class, 'create']); // Create multiple roles
Route::put('/role/{id}', [RoleController::class, 'update']); // Update role by ID
Route::delete('/role/{id}', [RoleController::class, 'delete']); // Delete role by ID
Route::post('/role/username', [RoleController::class, 'findByUserName']); // Find role by username
