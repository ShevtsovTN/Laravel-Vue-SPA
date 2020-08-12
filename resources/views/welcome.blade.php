<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="/favicon.png">
        <title>SPA v2.0</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <!-- Styles -->
        <link href="/css/app.css" rel="stylesheet">
        <!-- Script -->
        <script src="{{ asset('js/app.js') }}" defer></script>

    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
