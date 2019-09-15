'use strict';

var CLOUD_WIDTH = 420,
CLOUD_HEIGHT = 270,
BAR_WIDTH = 40,
GAP = 50,
POSITION_X = 150,
POSITION_Y = 260;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7');
  renderCloud(ctx, 100, 10, '#fff');

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], (POSITION_X  * i), POSITION_Y);
  };

ctx.fillStyle = '#000';
ctx.font = 'PT Mono 16px';
ctx.fillText('Ура вы победили!', 130, 40);
ctx.fillText('Список результатов:', 130, 60);
}

// var CLOUD_WIDTH = 500,
// CLOUD_HEIGHT = 200,
// CLOUD_X = 100,
// CLOUD_Y = 50,
// GAP = 10,
// FONT_GAP = 15,
// TEXT_WIDTH = 50,
// BAR_HEIGHT = 20,

// barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

// var renderCloud = function(ctx, x, y, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
// };

// var getMaxElement = function(arr) {
//   var maxElement = arr[0];

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > maxElement) {
//       maxElement = arr[i];
//     }
//   }

//   return maxElement;
// }

// window.renderStatistics = function(ctx, players, times) {
//   renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP,  'rgba(0, 0, 0, 0.3');
//   renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

//   ctx.fillStyle = '#000';

//   var maxTime = getMaxElement(times);
  

//   for (var i = 0; i < players.length; i++) {
//     ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
//     ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT)
//   }
// }
