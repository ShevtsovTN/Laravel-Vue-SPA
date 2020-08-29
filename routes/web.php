<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Auth::routes();
Route::get('/getPromo', 'getDataToFrontend@getPromocodes');
Route::get('/getOrders', 'getDataToFrontend@getOrders');
Route::get('/auth', 'UserController@auth');
Route::get('/{any}', function () {
    return view('welcome');
});
