<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="Elevate Industries - Innovating the Future">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('assets/logo.jpeg') }}">

    <title>Elevate Industries</title>
    <!-- Minimal styles (if you had compiled CSS, include here) -->
    @if(file_exists(public_path('build/assets/app.css')))
        <link rel="stylesheet" href="{{ asset('build/assets/app.css') }}">
    @endif
</head>

<body
    style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; background: #fff8e8; color: #1f2937;">
    <main style="max-width: 900px; margin: 6rem auto; padding: 2rem; text-align: center;">
        <h1 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">Elevate Industries</h1>
        <p style="font-size:1.125rem; margin-bottom: 1.5rem;">This application is running in API mode. The React
            frontend has been removed. Use the /api endpoints for integrations (for example, POST /api/contact to send
            email).</p>

        <section
            style="background: white; padding: 1.25rem; border-radius: 0.75rem; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
            <h2 style="font-size:1.25rem; font-weight:600; margin-bottom:0.5rem;">API Endpoint</h2>
            <code
                style="display:block; background:#f3f4f6; padding:0.5rem; border-radius:0.375rem;">POST /api/contact</code>
            <p style="margin-top:0.75rem; color:#374151;">CSRF token is available via the meta tag if you call the API
                from a browser-based client.</p>
        </section>
    </main>
</body>

</html>