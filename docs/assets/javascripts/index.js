var sentences = [
  'maximize plug-and-play supervised learning',
  'repurpose service-oriented portals',
  'reinvent out-of-the-box bot-nets',
  'maximize global unsupervised learning',
  'brute-force robust technologies',
  'gamify cutting-edge partnerships',
  'disrupt efficient microservices',
  'productize leading-edge microservices',
  'revolutionize viral paradigms',
  'exploit collaborative methodologies',
  'monetize service-oriented platforms',
  'elegant front-end architectures',
  'streamline cross-platform blockchains',
  'integrate peer-to-peer big-data',
  'enhance byzantine unsupervised learning',
  'engineer mission-critical chat-bots',
  'implement real-time metrics',
  'monetize global solutions',
  'scale viral computing',
  'redefine frictionless vortals',
  'envisioneer user-centric web services',
  'engineer frictionless big-data',
  'deploy feature-rich regressions',
  'leverage leading-edge algebraic datatypes',
  'orchestrate out-of-the-box paradigms',
  'maximize extensible data-mining',
  'benchmark massive models',
  'expedite massive hashing',
  'facilitate virtualized initiatives',
  'ideate dynamic initiatives',
  'drive world-class disk encryption',
  'deploy functional interfaces',
  'deploy feature-rich compute engine',
  'facilitate frictionless algorithms',
  'empower mission-critical bot-nets',
  'elegant byzantine architectures',
  'monetize seamless portals',
  'benchmark next-generation unsupervised learning',
  'expedite wireless relationships',
  'implement revolutionary methodologies',
  'elegant world-class initiatives',
  'revolutionize real-time supervised learning',
  'productize dynamic networks',
  'expedite frictionless networks',
  'deploy dynamic paradigms',
  'generate robust algebraic datatypes',
  'incentivize global infrastructures',
  'leverage cutting-edge computing',
  'grow one-to-one algorithms',
  'brute-force next-generation microservices',
  'productize extensible neural networks',
  'streamline seamless hyper-cloud',
  'reinvent massive recursive neural networks',
  'envisioneer massive solutions',
  'optimize end-to-end technologies',
  'deploy front-end solutions',
  'elegant real-time supervised learning',
  'incentivize distributed solutions',
  'elegant leading-edge models',
  'monetize real-time infrastructures',
  'evolve out-of-the-box machine-learning',
  'redefine exhaustive metrics',
  'evolve seamless architectures',
  'incubate scalable recursive neural networks',
  'harness front-end solutions',
  'deliver end-to-end relationships',
  'benchmark user-centric vortals',
  'utilize user-centric interfaces',
  'optimize efficient supervised learning',
  'streamline cross-platform algebraic datatypes',
  'maximize cross-platform natural language processing',
  'expedite virtualized neural networks',
  'drive turn-key portals',
  'innovate service-oriented recursive neural networks',
  'target distributed platforms',
  'repurpose distributed vortals',
  'scale wireless web services',
  'evolve mission-critical interfaces',
  'maximize fault-tolerant classification',
  'iterate frictionless users',
  'transform efficient networks',
  'transform turn-key data center',
  'harness out-of-the-box neural networks',
  'expedite feature-rich blockchains',
  'redefine world-class data-mining',
  'synergize collaborative deep-learning',
  'transform enterprise infrastructures',
  'innovate out-of-the-box portals',
  'elegant mission-critical recursive neural networks',
  'grow viral computing',
  'unleash massive data-mining',
  'evolve extensible solutions',
  'orchestrate massive classification',
  'exploit collaborative regressions',
  'deliver enterprise supply-chains',
  'monetize cross-platform portals',
  'gamify enterprise interfaces',
  'unleash back-end disk encryption',
  'gamify massive data-mining',
  'leverage out-of-the-box cryptocurrency'
];

var colors = [
  '#001f3f',
  '#0074D9',
  '#7FDBFF',
  '#39CCCC',
  '#3D9970',
  '#2ECC40',
  '#01FF70',
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

function draw() {
  var $sentence = $('.sentence');
  var words = _.chain(sentences).sample().split(' ').value();

  _.each($sentence.children(), function(child) {
    $(child).addClass('animated fadeOut');
  });

  setTimeout(function() {
    $sentence.empty();
    _.each(words, function (word) {
      var $word = $('<span>').
        attr('class', 'sentence__word glitch').
        attr('data-text', word).
        css({
          'background': _.sample(colors)
        }).
        text(word);

      $word.addClass('animated fadeIn flipInX');

      $sentence.append($word);
    });
  }, 1000);
}

draw();
setInterval(function() { draw(); }, 4000);
