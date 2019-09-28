var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 
'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var arr = [];

var coat = document.querySelector('.wizard-coat');
var eyes = document.querySelector('.wizard-eyes');
var template = document.querySelector('.setup-similar-item'); //вот эти элементы
var nameWiza = document.querySelector('.setup-similar-label'); // не находятся
document.querySelector('.setup').classList.remove('hidden');

var body = document.children[1];
for (var i = 0; i < body.children.length; i++) {
  var child = body.children[i];
  console.log(child.tagName.toLocaleLowerCase());
}

function createArrWithObjs (arr) {

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
createArrWithObjs(arr);

// function createElements () {
//   for (var i = 0; i < arr.length; i++) {
//     document.querySelector('.setup-similar-label').textContent = arr[i.name];
//     document.querySelector('.wizard-coat').style.fill = arr[i.coatColor];
//     document.querySelector('.wizard-eyes').style.fill = arr[i.eyesColor];
//   }
// }




//document.querySelector('.setup-similar').classList.remove('hidden');
//document.querySelector('.setup-similar-list').appendChild(template);
//name.textContent = arr[2].name;
console.log(coat, eyes, nameWiza, template); //coat..., eyes... null, null

