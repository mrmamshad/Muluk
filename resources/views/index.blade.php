<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Muluk</title>
    @vite('resources/css/app.css')
</head>

<body>
    <!-- Navbar -->
    <header>@include('nav')</header>

    <!-- Main Content -->
    <div class="grid  sm:grid-cols-12   ">
        @include('side')

        <!-- Main Content Area -->

        @include('main')
    </div>




</body>

</html>
