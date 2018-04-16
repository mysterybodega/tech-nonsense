var fonts = [
  "'IBM Plex Mono', monospace",
  "'Libre Baskerville', serif"
];
var font = 1;

function draw() {
  var $sentence = $('.sentence');
  var words = _.chain(window.sentences).sample().split(' ').value();

  _.each($sentence.children(), function(child) {
    $(child).removeClass('fadeIn flipInX').addClass('fadeOut flipOutX');
  });

  _.delay(function() {
    var $words = [];
    var colors = [
      '#0074D9',
      '#7FDBFF',
      '#39CCCC',
      '#3D9970',
      '#2ECC40',
      '#FFDC00',
      '#FF851B',
      '#FF4136',
      '#85144b',
      '#F012BE',
      '#B10DC9',
      '#111111',
      '#AAAAAA',
      '#DDDDDD'
    ];

    _.each(words, function (word) {
      colors = _.shuffle(colors);
      var background = colors.pop();
      var $word = $('<span>').
        addClass('sentence__word glitch').
        attr('data-text', word).
        css('background', background).
        text(word);

      $words.push($word);
    });

    font = font === 0 ? 1 : 0;

    $sentence.
      empty().
      css('font-family', fonts[font]);

    var n = 500;

    _.each($words, function($word, i) {
      _.delay(function() {
        $sentence.append($word.addClass('animated fadeIn flipInX'));
      }, i * n);
    });

    _.delay(draw, $words.length * n * 2);
  }, 250);
}

$(document).ready(draw);
