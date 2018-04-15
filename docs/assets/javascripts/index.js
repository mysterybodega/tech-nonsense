function draw() {
  var $sentence = $('.sentence');
  var words = _.chain(window.sentences).sample().split(' ').value();

  _.each($sentence.children(), function(child) {
    $(child).
      removeClass('fadeIn flipInX').
      addClass('fadeOut flipOutX');
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
    var fontFamilies = ["'IBM Plex Mono', monospace;"];
    var fontFamily = _.sample(fontFamilies);

    _.each(words, function (word) {
      colors = _.shuffle(colors);

      var $word = $('<span>').
        addClass('sentence__word glitch').
        attr('data-text', word).
        css({
          'background': colors.pop(),
          'font-family': fontFamily
        }).
        text(word);

      $words.push($word);
    });

    $sentence.empty();

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
