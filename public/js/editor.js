
var regexp = function(line){
  // 項目名
  if(line.match(/^### (.*)$/)) {
    return '<h3>' + line.match(/^### (.*)$/)[1] + '</h3>';
  } else if(line.match(/^## (.*)$/)) {
    return '<h2>' + line.match(/^## (.*)$/)[1] + '</h2>';
  } else if(line.match(/^# (.*)$/)) {
    return '<h1>' + line.match(/^# (.*)$/)[1] + '</h1><hr>';
  }

  // 個条書き
  if(line.match(/^- (.*)$/)) {
    return '<li>' + line.match(/^- (.*)$/)[1] + '</li>';
  }

  //　数値
  if(line.match(/^(\d)\. (.*)$/)) {
    return '<div class="num"><b>' + line.match(/^(\d)\. (.*)$/)[1] + '</b>.　' + line.match(/^(\d)\. (.*)$/)[2] + '</div>';
  }

  return line + '<br>';
}

$(function () {
  var sh = window.parent.screen.height,
      nh = $('.navbar').height(),
      height = sh - (nh + 30) * 2;

  $('.before, .after').css('height', height);


  $('textarea').keyup(function() {
    var text = $(this).val(),
        split_txt = text.split('\n');

    $('.after').empty();
    for(var i = 0; i < split_txt.length; i++){
      var line = split_txt[i];
      $('.after').append(regexp(line));
    }
  });
});
