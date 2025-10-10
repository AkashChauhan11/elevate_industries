<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::post('/contact', [ContactController::class, 'sendEmail']);
Route::get('/demo', function () {
    return 'Hello';
});

