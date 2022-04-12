<?php

use App\Http\Controllers\Auth\RedirectAuthenticatedUsersController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DataGridController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Home',[
//         'user'=> 'farizharisuddin'
//     ]);
// });
Route::get('/', function () {
    return redirect()->route('login');
});

Route::resource('users', UsersController::class);



Route::group(['middleware' => 'auth'], function () {

    Route::group(['middleware' => 'checkRole:admin'], function () {
        Route::prefix('home')->name('home.')->group(function () {
            Route::get('/', HomeController::class)->name('index');
        });
    });
    Route::group(['middleware' => 'checkRole:client'], function () {
        Route::inertia('/userdashboard', 'Users')->name('Users');
    });
    Route::get("/redirectAuthenticatedUsers", [RedirectAuthenticatedUsersController::class, "home"]);
});

Route::prefix('user')->name('user.')->group(function () {
    Route::get('/', [UsersController::class, 'index'])->name('index');
    Route::get('/api', [UsersController::class, 'apiUser']);

    Route::post('/api/insert', [UsersController::class, 'apiInsert']);
    Route::put('/api/update/{id}', [UsersController::class, 'apiUpdate']);
    Route::delete('/api/delete/{id}', [UsersController::class, 'apiDelete']);
});


Route::prefix('category')->name('category.')->group(function () {
    Route::get('/', [CategoryController::class, 'index'])->name('index');
    Route::get('/api', [CategoryController::class, 'apiCategory']);

    Route::post('/api/insert', [CategoryController::class, 'apiInsert']);
    Route::put('/api/update/{id}', [CategoryController::class, 'apiUpdate']);
    Route::delete('/api/delete/{id}', [CategoryController::class, 'apiDelete']);
});

Route::prefix('product')->name('product.')->group(function () {
    Route::get('/', [ProductController::class, 'index'])->name('index');

    Route::get('/api', [ProductController::class, 'apiProduct']);
    // Route::get('/api/{id}', [ProductController::class, 'apiProductById']);

    Route::post('/api/insert', [ProductController::class, 'apiInsert']);
    Route::put('/api/update/{id}', [ProductController::class, 'apiUpdate']);
    Route::delete('/api/delete/{id}', [ProductController::class, 'apiDelete']);
});

Route::prefix('datagrid')->name('datagrid.')->group(function () {
    Route::get('/', DataGridController::class)->name('index');
    // Route::get('/customers', DataGridController::class)->name('customers');
});
// Route::get('usergrid', [DataGridController::class])->name('usergrid');

Route::get('customer', [CustomerController::class, 'showCustomer']);
Route::post('customer', [CustomerController::class, 'insertCustomer']);
