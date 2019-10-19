'use strict';
(function () {
  // открытие\закрытие окна
  window.globalVars.setupOpen.addEventListener('click', function () {
    window.globalVars.setup.classList.remove('hidden');
    window.globalVars.setup.style.top = '80px';
    window.globalVars.setup.style.left = '50%';
  });

  window.globalVars.setupClose.addEventListener('click', function () {
    window.globalVars.setup.classList.add('hidden');
  });

  window.globalVars.setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.globalVars.ENTER_KEYCODE) {
      window.globalVars.setup.classList.remove('hidden');
      window.globalVars.setup.style.top = '80px';
      window.globalVars.setup.style.left = '50%';
    }
  });

  window.globalVars.setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.globalVars.ESC_KEYCODE) {
      window.globalVars.setup.classList.add('hidden');
    }
  });

  window.globalVars.setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.globalVars.ENTER_KEYCODE) {
      window.globalVars.setup.classList.add('hidden');
    }
  });

  // перетаскивание
  var dialogHandle = document.querySelector('.upload');
  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startPoints = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    function mouseMoveHandler(moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var shift = {
        x: startPoints.x - moveEvt.clientX,
        y: startPoints.y - moveEvt.clientY
      };

      startPoints = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.globalVars.setup.style.top = (window.globalVars.setup.offsetTop - shift.y) + 'px';
      window.globalVars.setup.style.left = (window.globalVars.setup.offsetLeft - shift.x) + 'px';
    }

    function mouseUpHandler(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    }

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });


})();
