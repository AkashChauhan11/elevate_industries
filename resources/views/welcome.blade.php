<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Elevate Industries</title>

        

        <!-- Styles / Scripts -->
        @viteReactRefresh
        @vite(['resources/js/index.css', 'resources/js/MainApp.jsx'])
    </head>
    <body >
        <div id="root"></div>
    
    </body>
</html>
