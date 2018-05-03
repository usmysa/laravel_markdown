<html>
  <head>
    <title>@yield('title')</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  </head>
  <body>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
    </nav>
    @section('body')
    @show
  </body>
</html>
