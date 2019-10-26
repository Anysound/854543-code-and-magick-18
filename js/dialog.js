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

  // загрузка с сервера
  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);
    dialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'position: absolute; display: block; width: 350px; height: 100px; z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.left = 'calc(50% - 175px)';
    node.style.top = 'calc(50% - 100px)';
    node.style.fontSize = '30px';
    node.style.lineHeight = '100px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };
  window.backend.load(successHandler, errorHandler);
  // отправка на сервер
  var dialog = document.querySelector('.setup');
  dialog.classList.remove('hidden');

  var similarListElement = dialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    return wizardElement;
  };

  dialog.querySelector('.setup-similar').classList.remove('hidden');

  var form = dialog.querySelector('.setup-wizard-form');

  var successPostHandler = function () {
    dialog.classList.add('hidden');
  };

  var errorPostHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'position: absolute; display: block; width: 500px; height: 100px; z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.left = 'calc(50% - 250px)';
    node.style.top = 'calc(50% - 100px)';
    node.style.fontSize = '30px';
    node.style.lineHeight = '100px';
    node.style.whiteSpace = 'nowrap';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), successPostHandler, errorPostHandler);
    evt.preventDefault();
  });
})();
