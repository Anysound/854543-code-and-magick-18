'use strict';
(function () {
  window.globalVars.colorOfWizardCoat.addEventListener('click', function () {
    var newColor = Math.round(Math.random() * window.globalVars.COLORS_OF_COAT.length);
    window.globalVars.colorOfWizardCoat.style.fill = window.globalVars.COLORS_OF_COAT[newColor];
    window.globalVars.setup.querySelector('input[name="coat-color"]').value = window.globalVars.COLORS_OF_COAT[newColor];
  });

  window.globalVars.colorOfWizardEyes.addEventListener('click', function () {
    var newColor = Math.round(Math.random() * window.globalVars.COLORS_OF_EYES.length);
    window.globalVars.colorOfWizardEyes.style.fill = window.globalVars.COLORS_OF_EYES[newColor];
    window.globalVars.setup.querySelector('input[name="eyes-color"]').value = window.globalVars.COLORS_OF_EYES[newColor];
  });

  window.globalVars.colorOfWizardFireball.addEventListener('click', function () {
    var newColor = Math.round(Math.random() * window.globalVars.COLORS_OF_FIREBALL.length);
    window.globalVars.colorOfWizardFireball.style.background = window.globalVars.COLORS_OF_FIREBALL[newColor];
    window.globalVars.setup.querySelector('input[name="fireball-color"]').value = window.globalVars.COLORS_OF_FIREBALL[newColor];
  });

  window.globalVars.icon.setAttribute('tabindex', '0');
  window.globalVars.setupClose.setAttribute('tabindex', '0');
  window.globalVars.setupSubmit.setAttribute('tabindex', '0');
})();
