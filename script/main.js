document.querySelector('.js-slider__button-left').addEventListener('click', buttonLeft);
document.querySelector('.js-slider__button-right').addEventListener('click', buttonRight);
document.querySelectorAll('.js-circle').forEach(function (circle, index) {
  circle.addEventListener('click', function () { goToSliderCircle(index) });
});
document.querySelectorAll('.js-slider-option').forEach(function (option, index) {
  option.addEventListener('click', function () { goToSliderOption(index) });
});

const sliderTexts = [
  {
    city: 'Rostov-on-Don, LCD admiral',
    area: '81 m2',
    time: '3.5 months',
    cost: 'Upon request'
  },
  {
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months',
    cost: 'Upon request'
  },
  {
    city: 'Rostov-on-Don, Patriotic',
    area: '93 m2',
    time: '3 months',
    cost: 'Upon request'
  }
];

const circle = document.querySelectorAll('.js-circle');
const optionSlider = document.querySelectorAll('.js-slider-option');
const imageSlider = document.querySelectorAll('.js-slider-image');

let sliderCounter = 0;

circle[0].classList.add('js-circle-active');
optionSlider[0].classList.add('js-option-active');
imageSlider[0].classList.add('js-image-active');

//Левая кнопка
function buttonLeft() {
  sliderCounter--;

  if (sliderCounter < 0) {
    sliderCounter = circle.length - 1;
  }

  updateSlider();
}

//Правая кнопка
function buttonRight() {
  sliderCounter++;

  if (sliderCounter >= circle.length) {
    sliderCounter = 0;
  }

  updateSlider();
}

//Кружки
function goToSliderCircle(index) {
  sliderCounter = index;
  updateSlider();
}

//Опции
function goToSliderOption(index) {
  sliderCounter = index;
  updateSlider();
}

//Обновление слайдера
function updateSlider() {
  for (let i = 0; i < circle.length; i++) {
    circle[i].classList.remove('js-circle-active');
    optionSlider[i].classList.remove('js-option-active');
    imageSlider[i].classList.remove('js-image-active');
  }

  for (let i = 0; i < optionSlider.length; i++) {
    circle[i].classList.remove('js-circle-active');
    optionSlider[i].classList.remove('js-option-active');
    imageSlider[i].classList.remove('js-image-active');
  }

  circle[sliderCounter].classList.add('js-circle-active');
  optionSlider[sliderCounter].classList.add('js-option-active');
  imageSlider[sliderCounter].classList.add('js-image-active');

  //Описание
  const city = document.querySelector('.js-city');
  const area = document.querySelector('.js-area');
  const time = document.querySelector('.js-time');
  const cost = document.querySelector('.js-cost');

  city.textContent = sliderTexts[sliderCounter].city;
  area.textContent = sliderTexts[sliderCounter].area;
  time.textContent = sliderTexts[sliderCounter].time;
  cost.textContent = sliderTexts[sliderCounter].cost;
}