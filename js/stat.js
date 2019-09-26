'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_WIDTH = 40;
var GAP = 50;
var INITIAL_POSITION_X = 160;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7');
  renderCloud(ctx, 100, 10, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = 'PT Mono 16px';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  for (var i = 0; i < names.length; i++) {
    var maxTime = getMaxElement(times);
    ctx.fillText(names[i], INITIAL_POSITION_X + (BAR_WIDTH + GAP) * i, 260);
    ctx.fillStyle = 'rgb(255, Math.round(Math.random() * 255), Math.round(Math.random() * 255))';
    ctx.fillStyle = 'hsl(210,' + Math.random() * 100 + '%' + ',' + Math.random() * 100 + '%';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(INITIAL_POSITION_X + (BAR_WIDTH + GAP) * i, 230, BAR_WIDTH, (-150 * times[i] / maxTime));
    ctx.fillText(Math.round(times[i]), INITIAL_POSITION_X + (BAR_WIDTH + GAP) * i, (-50 * times[i] / maxTime) + 120);
  }
};
