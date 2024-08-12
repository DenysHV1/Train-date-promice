import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
export function mainFunkBackTimer () {
	const backHours = document.querySelector('.back-hours-js');
	const backMinutes = document.querySelector('.back-minutes-js');
	const backSeconds = document.querySelector('.back-seconds-js');
	const backInput = document.querySelector('.input-numbers-js');
	const backButton = document.querySelector('.back-button-js');

	//* 1
	let seconds = 0;
	backInput.addEventListener('input', event => {
	const myNum = event.target.value;
	const promise = new Promise((resolve, reject) => {
		if (Number(myNum)) {
		resolve(myNum);
		} else if (myNum === '') {
		resolve(myNum);
		} else {
		reject(myNum);
		}
	});
	promise
		.then(number => {
		if (number) {
			seconds = number; //take seconds
		}
		})
		.catch(number => {
		iziToast.error({
			title: 'Error',
			message: `Rejected promise in ${number}ms`,
			position: 'topRight',
			color: '#ef4040',
			titleColor: '#fff',
			titleSize: '16px',
			titleLineHeight: '150%',
			messageColor: '#fff',
			messageSize: '16px',
			messageLineHeight: '150%',
		});
		});
	});

	//* 2 //convert seconds to time
	const timeObj = {
	backHours: 0,
	backMinutes: 0,
	backSeconds: 0,
	};

	function convertMs(ms) {
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	timeObj.backHours = Math.floor((ms % day) / hour);
	timeObj.backMinutes = Math.floor(((ms % day) % hour) / minute);
	timeObj.backSeconds = Math.floor((((ms % day) % hour) % minute) / second);
	return timeObj; //take timeObj
	}

	//* 3
	let interval;

	function backTimer() {
	let sec = timeObj.backSeconds;
	let min = timeObj.backMinutes;
	let hour = timeObj.backHours;

	interval = setInterval(() => {
		if (sec > 0) {
		sec -= 1;
		} else if (min > 0) {
		sec = 59;
		min -= 1;
		} else if (hour > 0) {
		sec = 59;
		min = 59;
		hour -= 1;
		} else {
		clearInterval(interval);
		interval = null;
		backButton.textContent = 'Start';
		}

		backHours.textContent = addZero(hour);
		backMinutes.textContent = addZero(min);
		backSeconds.textContent = addZero(sec);
	}, 1000);
	}

	function addZero(value) {
	return value.toString().padStart(2, '0');
	}

	backButton.addEventListener('click', () => {
	if (interval) {
		clearInterval(interval);
		interval = null;
		backButton.textContent = 'Start';
		backHours.textContent = '00';
		backMinutes.textContent = '00';
		backSeconds.textContent = '00';
		backInput.value = '';
	} else {
		if (seconds) {
		backButton.textContent = 'Stop';
		backInput.value = '';
		convertMs(seconds * 1000);
		backTimer();
		}
	}
	});
}

