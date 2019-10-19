'use strict';
// создание моков
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
  'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var mockData = [];

document.querySelector('.overlay').classList.remove('hidden');

function createArrWithObjs(arr) {

  for (var i = 0; i < 4; i++) {
    var obj = {
      name: '',
      coatColor: '',
      eyesColor: ''
    };

    obj.name = NAMES[i] + ' ' + SURNAMES[i];
    obj.coatColor = COAT_COLORS[i];
    obj.eyesColor = EYES_COLORS[i];
    arr.push(obj);
  }
}
createArrWithObjs(mockData);
// клонирование
function makeWizards() {
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wrapper = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < mockData.length; i++) {
    var clone = template.cloneNode(true);

    clone.querySelector('.setup-similar-label').textContent = mockData[i].name;
    clone.querySelector('.wizard-coat').style.fill = COAT_COLORS[i];
    clone.querySelector('.wizard-eyes').style.fill = EYES_COLORS[i];

    fragment.appendChild(clone);
  }
  wrapper.appendChild(fragment);
}

makeWizards();

document.querySelector('.setup-similar').classList.remove('hidden');

// Открытие/закрытие окна персонажа
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;
var COLORS_OF_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
  'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COLORS_OF_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var COLORS_OF_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');
var colorOfWizardCoat = setup.querySelector('.wizard-coat');
var colorOfWizardEyes = setup.querySelector('.wizard-eyes');
var colorOfWizardFireball = setup.querySelector('.setup-fireball-wrap');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var icon = setup.querySelector('.setup-open-icon');
var setupSubmit = setup.querySelector('.setup-submit');

setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setup.classList.remove('hidden');
  }
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    setup.classList.add('hidden');
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setup.classList.add('hidden');
  }
});

// изменение цветовых параметров по клику
colorOfWizardCoat.addEventListener('click', function () {
  var newColor = Math.round(Math.random() * COLORS_OF_COAT.length);
  colorOfWizardCoat.style.fill = COLORS_OF_COAT[newColor];
  setup.querySelector('input[name="coat-color"]').value = COLORS_OF_COAT[newColor];
});


colorOfWizardEyes.addEventListener('click', function () {
  var newColor = Math.round(Math.random() * COLORS_OF_EYES.length);
  colorOfWizardEyes.style.fill = COLORS_OF_EYES[newColor];
  setup.querySelector('input[name="eyes-color"]').value = COLORS_OF_EYES[newColor];
});


colorOfWizardFireball.addEventListener('click', function () {
  var newColor = Math.round(Math.random() * COLORS_OF_FIREBALL.length);
  colorOfWizardFireball.style.background = COLORS_OF_FIREBALL[newColor];
  setup.querySelector('input[name="fireball-color"]').value = COLORS_OF_FIREBALL[newColor];
});

icon.setAttribute('tabindex', '0');
setupClose.setAttribute('tabindex', '0');
setupSubmit.setAttribute('tabindex', '0');
