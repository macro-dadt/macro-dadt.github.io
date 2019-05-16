/* Shapes */
var svgContainer_logo = document.getElementById('svgContainer_logo');
var animItem_logo = bodymovin.loadAnimation({
  wrapper: svgContainer_logo,
  animType: 'svg',
  autoplay: true,
  path: 'scripts/NEW-LOGO MOTION/JSON/data.json'
});
animItem_logo.setSpeed(2);

var svgContainer = document.getElementById('svgContainer');
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  autoplay: true,
  path: 'scripts/NEW-S1/JSON/data.json'
});

var svgContainer1 = document.getElementById('svgContainer1');
var animItem1 = bodymovin.loadAnimation({
  wrapper: svgContainer1,
  animType: 'svg',
  path: 'scripts/NEW-S2/JSON 1/data.json'
});
var svgContainer1_1 = document.getElementById('svgContainer1_1');
var animItem1_1 = bodymovin.loadAnimation({
  wrapper: svgContainer1_1,
  animType: 'svg',
  loop: true,
  autoplay: true,
  path: 'scripts/NEW-S2/JSON 2 - LOOP/data.json'
});
animItem1.addEventListener('complete', function(){
  animItem1.destroy();
  svgContainer1_1.style.display = svgContainer1_1.style.display === 'none' ? 'block' : 'block';
});


var svgContainer2 = document.getElementById('svgContainer2');
var animItem2 = bodymovin.loadAnimation({
  wrapper: svgContainer2,
  animType: 'svg',
  loop: true,
  autoplay: true,
  path: 'link.json'
});


// var svgContainer2 = document.getElementById('svgContainer2');
// var animItem2 = bodymovin.loadAnimation({
//   wrapper: svgContainer2,
//   animType: 'svg',
//   loop: true,
//   path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
// });
