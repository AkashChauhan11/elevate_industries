<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// SPA fallback route - must be placed after all other web routes
// This ensures client-side routing (React Router) works when refreshing or directly
// visiting nested routes. It excludes typical backend paths like api and assets.
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '^(?!api|storage|_ignition).*$');
