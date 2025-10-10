<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="Elevate Industries - Innovating the Future">


    {{--
    <link rel="icon" type="image/jpeg" href="/logo.jpeg" />
    --}}
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('assets/logo.jpeg') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="/logo.jpeg">

    <title>Elevate Industries</title>
    <!-- Styles / Scripts -->
    @viteReactRefresh
    @vite(['resources/js/index.css', 'resources/js/MainApp.jsx'])
</head>

<body>
    <div id="root"></div>

</body>

</html>