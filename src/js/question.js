export function choiceCorrectAnswer() {
  const answersList = document.querySelector('.answers-js');
  const resultAnswer = document.querySelector('.result-answer-js');
  let incorrectClicks = 0;
  resultAnswer.style.display = 'none';
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  let counter4 = 0;
  let counter5 = 0;
  let counter6 = 0;
  let counter7 = 0;
  
  function setMarkupButtons() {
    const arr = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
    ];
    let result = '';

    return arr
      .map(
        item =>
          result +
          `<button class="answer-from-js" type="submit" data-id="${item}">${item}</button>`
      )
      .join('');
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
      counter1 += 1;
      if (counter1 === 2) {
        counter1 = 0;
        incorrectClicks++;
        event.target.style.backgroundColor = 'red';
      }
    } else if (Number(myTarget) === 7) {
      resultAnswer.style.display = 'block';
      event.target.style.backgroundColor = 'green';
      resultAnswer.textContent =
        'Сім чудес Стародавнього світу: Піраміда Хеопса в Гізі (Єгипет) Висячі сади Семіраміди у Вавилоні (Ірак) Статуя Зевса в Олімпії (Греція) Храм Артеміди в Ефесі (Туреччина) Мавзолей у Галікарнасі (Туреччина) Колос Родоський (Греція) Александрійський маяк (Єгипет).';
      counter2 += 1;
      if (counter2 === 2) {
        counter2 = 0;
        resultAnswer.textContent = 'у музичній гамі 7 нот.';
      }
    } else if (Number(myTarget) === 24) {
      resultAnswer.style.display = 'block';
      event.target.style.backgroundColor = 'green';
      resultAnswer.textContent = 'Доба має 24 години.';
      counter3 += 1;
      if (counter3 === 2) {
        counter3 = 0;
        incorrectClicks++;
        event.target.style.backgroundColor = 'red';
      }
    } else if (Number(myTarget) === 32) {
      resultAnswer.style.display = 'block';
      event.target.style.backgroundColor = 'green';
      resultAnswer.textContent = 'У дорослої людини: 32 зуби.';
      counter4 += 1;
      if (counter4 === 2) {
        counter4 = 0;
        incorrectClicks++;
        event.target.style.backgroundColor = 'red';
      }
    } else if (Number(myTarget) === 5) {
      counter5 += 1;
      resultAnswer.style.display = 'block';
      event.target.style.backgroundColor = 'green';
      resultAnswer.textContent =
        'На планеті 5 океанів: Тихий, Атлантичний, Індійський, Північний Льодовитий та Південний.';
      if (counter5 === 2) {
        counter5 = 0;
        resultAnswer.textContent = 'У символі Олімпійських ігор 5 кілець.';
      }
    } else if (Number(myTarget) === 22) {
		counter7 += 1;
		resultAnswer.style.display = 'block';
		event.target.style.backgroundColor = 'green';
		resultAnswer.textContent =
		  'У футбольному матчі кожна команда складається з 11 гравців, включаючи воротаря1. Таким чином, у двох командах разом буде 22 гравці.';
		if (counter7 === 2) {
			counter7 = 0;
			incorrectClicks++;
			event.target.style.backgroundColor = 'red';
		}
	  } else if (Number(myTarget) === 8) {
      counter6 += 1;
      resultAnswer.style.display = 'block';
      event.target.style.backgroundColor = 'green';
      resultAnswer.textContent =
        'У Сонячній системі є вісім планет. Ось вони в порядку від найближчої до найдальшої від Сонця:Меркурій, Венера, Земля, Марс, Юпітер, Сатурн, Уран, Нептун';
      if (counter6 === 2) {
        counter6 = 0;
        incorrectClicks++;
        event.target.style.backgroundColor = 'red';
      }
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
}







