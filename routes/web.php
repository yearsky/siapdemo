<?php

use App\Http\Controllers\CategoryController;
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

Route::prefix('home')->name('home.')->group(function(){
    Route::get('/',HomeController::class )->name('index');
});

Route::prefix('category')->name('category.')->group(function(){
    Route::get('/', [CategoryController::class,'index'])->name('index');
    Route::get('/api', [CategoryController::class,'apiCategory']);

    Route::post('/api/insert', [CategoryController::class, 'apiInsert']);
    Route::put('/api/update/{id}', [CategoryController::class, 'apiUpdate']);
    Route::delete('/api/delete/{id}', [CategoryController::class, 'apiDelete']);
});

Route::prefix('product')->name('product.')->group(function(){
    Route::get('/', [ProductController::class,'index'])->name('index');
    
    Route::get('/api', [ProductController::class,'apiProduct']);    
    // Route::get('/api/{id}', [ProductController::class, 'apiProductById']);

    Route::post('/api/insert', [ProductController::class, 'apiInsert']);
    Route::put('/api/update/{id}', [ProductController::class, 'apiUpdate']);
    Route::delete('/api/delete/{id}', [ProductController::class, 'apiDelete']);
});

Route::prefix('datagrid')->name('datagrid.')->group(function(){
    Route::get('/', DataGridController::class)->name('index');
});