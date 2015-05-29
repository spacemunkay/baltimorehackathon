var rate = 50;
var wWidth, wHeight;
var cloud_files = [ 'pirate_ship.png', 'wave.png', 'pirate_ship.png', 'wave.png' ];
var files = ['dirigible.png', 'airship-boat.png'];
var floaters = {}, floatCount = 0;

function animate() {
  var values = _.values(floaters);
  setInterval(function() { _.each(values, updateFloater) }, rate);
}

//Create floating stuff after everything on page is loaded
//so that the height of `document` is finalized
$(window).load(function() {
  iHeight = 0;
  iWidth = window.innerWidth;
  for(var i=50; i > 0; i--)
    clouds();
  for(var i=5; i > 0; i--)
    dirigibles();
  animate();
});

function create_floater(file, klass, x, y, delta)
{
  var ratio = Math.random();
  var spd = Math.ceil(ratio * delta);
  var amp = 5 * Math.random() + .1;
  var shift = 2 * Math.PI * Math.random();

  var image = $('<img/>', {
    src: 'images/' + file,
    style: 'width: ' + Math.floor(ratio * 100) + '%;'
  }).appendTo($('<div/>', {
    'class': klass,
    style: 'position: absolute; z-index: 100; opacity: ' + ratio + '; left: ' + x + 'px; top: ' + y + 'px; width: 60px; height: 60px;'
  }).appendTo('#boats'));

  var elem = image.parent(),
      elem_id = 'floater-' + floatCount++;
  elem.attr('id', elem_id);
  floaters[elem_id] = {
    element: elem,
    speed: spd,
    amplitude: amp,
    shift: shift,
    animate: true,
    x: x,
    y: y
  };

  return elem;
}

function clouds()
{
  var idx = Math.floor(Math.random()*cloud_files.length);
  var height = 200;
  var y = iHeight + Math.floor(Math.random()*height);
  var x = Math.floor(Math.random()*iWidth);

  create_floater(cloud_files[idx], 'cloud', x, y, 1);
}

function dirigibles()
{
  var idx = Math.floor(Math.random()*files.length);
  var height = 200;
  var y = iHeight + Math.floor(Math.random()*height);
  var x = Math.floor(Math.random()*iWidth);

  var dirig = create_floater(files[idx], 'dirig', x, y, 2);
  var image = dirig.find('img').first();

  dirig.css('width', image.clientWidth);
  dirig.css('height', image.clientHeight);
  dirig.click(function() {
    var floater = floaters[$(this).attr('id')];
    floater.animate = false;
    loop(floater);
  });
}

function loop(floater)
{
  floater.element.addClass('loop');
  setTimeout(function() {
    floater.element.removeClass('loop');
    floater.animate = true;
  }, 1000);
}

function updateFloater(floater) {
  if (floater.animate) {
    move_right(floater);
    bob(floater);
  }
}

// reset after passing right boundary
function move_right(floater)
{
  if(floater.x < window.innerWidth + 75) {
    floater.x += floater.speed;
  } else {
    floater.x = -75;
  }
  floater.element.css('left', floater.x + 'px');
}

function bob(floater)
{
  var feq = 0.1;
  floater.element.css('top', floater.y +
                             floater.amplitude * Math.sin(feq * floater.x + floater.shift) +
                             'px');
}
