//*Data
import { setDate } from './js/data.js';
setInterval(setDate, 1000);

//*Clock
import { setTime } from './js/clock.js';
setInterval(setTime, 1000);

//*BackTimer
import { mainFunkBackTimer } from './js/backTimer.js';
mainFunkBackTimer();

//*Timer
import { mainFunkTimer } from './js/timer.js';
mainFunkTimer();

//*add
import { add } from './js/add.js';
add();

const answersList = document.querySelector('.answers-js');
const resultAnswer = document.querySelector('.result-answer-js');
let incorrectClicks = 0;
resultAnswer.style.display = 'none';

function setMarkupButtons() {
	const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]
	let result = '';

	return arr.map((item) => result + `<button class="answer-from-js" type="submit" data-id="${item}">${item}</button>`).join('');

}
answersList.insertAdjacentHTML('afterbegin', setMarkupButtons());

answersList.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') {
	return;
  }
  const myTarget = event.target.dataset.id;

  if (Number(myTarget) === 4) {
	resultAnswer.style.display = 'block';
	event.target.style.backgroundColor = 'green';
	resultAnswer.textContent =
	  'В одному році 4 пори року: зима, весна, літо, осінь.';
  } else if (Number(myTarget) === 7) {
	resultAnswer.style.display = 'block';
	event.target.style.backgroundColor = 'green';
	resultAnswer.textContent =
	  'Сім чудес Стародавнього світу: Піраміда Хеопса в Гізі (Єгипет) Висячі сади Семіраміди у Вавилоні (Ірак) Статуя Зевса в Олімпії (Греція) Храм Артеміди в Ефесі (Туреччина) Мавзолей у Галікарнасі (Туреччина) Колос Родоський (Греція) Александрійський маяк (Єгипет).';
  } else if (Number(myTarget) === 24) {
	resultAnswer.style.display = 'block';
	event.target.style.backgroundColor = 'green';
	resultAnswer.textContent = 'Доба має 24 години.';
  } else if (Number(myTarget) === 32) {
	resultAnswer.style.display = 'block';
	event.target.style.backgroundColor = 'green';
	resultAnswer.textContent = 'У дорослої людини: 32 зуби.';
  } else if (Number(myTarget) === 5) {
	resultAnswer.style.display = 'block';
	event.target.style.backgroundColor = 'green';
	resultAnswer.textContent =
	  'На планеті 5 океанів: Тихий, Атлантичний, Індійський, Північний Льодовитий та Південний.';
  } else if (Number(myTarget) === 8) {
	resultAnswer.style.display = 'block';
	event.target.style.backgroundColor = 'green';
	resultAnswer.textContent =
	  'У Сонячній системі є вісім планет. Ось вони в порядку від найближчої до найдальшої від Сонця:Меркурій, Венера, Земля, Марс, Юпітер, Сатурн, Уран, Нептун';
  } else {
	event.target.style.backgroundColor = 'red';
	incorrectClicks++;
	console.log(`Количество неправильных кликов: ${incorrectClicks}`);
	if (incorrectClicks >= 3) {
	  resetChanges();
	}
  }
});

function resetChanges() {
  // Сбрасываем цвет кнопок
  const buttons = answersList.querySelectorAll('button');
  buttons.forEach(button => {
	button.style.backgroundColor = '';
  });
  resultAnswer.style.display = 'block';
  // Сбрасываем текст результата
  resultAnswer.textContent =
	'Ви вибрали 3 неправильні відповіді, тому давайте спробуємо знову!';

  // Сбрасываем счетчик неправильных кликов
  incorrectClicks = 0;
}