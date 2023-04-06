var words = ['Let’s Naacho?'];
var part = '';
var i = 0;
var len = words.length;
var speed = 70;

var wordflick = function () {
  setInterval(function () {
    if (part.length == 0 || part.length == words[i].length) {
      // start revealing a new word
      i++;
      if (i >= len) {
        i = 0;
      }
    }
    if (part.length < words[i].length) {
      // gradually reveal the word letter by letter
      part = words[i].substr(0, part.length + 1);
      $('.word').text(part);
    }
  }, speed);
};

$(document).ready(function () {
  wordflick();
  
  $('.word').hover(
    function() {
      $('.word').html(words[0].replace("Naacho", "<u>Dance</u>"));
      $('body').css('background-color', '#F9FE00');
    },
    function() {
      $('.word').html(words[0]);
      $('body').css('background-color', 'rgba(238, 0, 171, 1)');
    }
  );
});
