<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'Api\UserController@login')->middleware('checkapilogin');

Route::post('user/create', 'Api\UserController@create')->middleware('checkapicreateaccount');

Route::put('user/{user_id}/lesson', 'Api\LessonController@getListByLevel');