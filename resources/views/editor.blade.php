<!DOCTYPE html>
<html lang="ja">
  <head>
    <title>Markdown Editor</title>
    <link rel="stylesheet" href="{{ asset('/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/flat-ui.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/editor.css') }}">
    <script src="{{ asset('/js/jquery.min.js') }}"></script>
    <script src="{{ asset('/js/flat-ui.min.js') }}"></script>
  </head>
  <body>
    <!--  Navbar -->
    <nav class="navbar navbar-inverse navbar-embossed" role="navigation">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Markdown Editor</a>
      </div>
    </nav>

    <!-- Textform_origin -->
    <textarea name="description" class="form-control flat before" rows="5"></textarea>
    <div name="description" class="form-control flat after"></div>

    <script src="{{ asset('/js/editor.js') }}"></script>
  </body>
</html>
