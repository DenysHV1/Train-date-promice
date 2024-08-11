
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function setDate() {
  const day = document.querySelector(".data-day-js");
  const month = document.querySelector(".data-month-js");
  const yer = document.querySelector(".data-yer-js");
  const dateNow = new Date();
  day.textContent = dateNow.getDate().toString().padStart(2, "0");
  month.textContent = (dateNow.getMonth() + 1).toString().padStart(2, "0");
  yer.textContent = dateNow.getFullYear().toString().padStart(2, "0");
}

setInterval(setDate, 1000);

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function setTime(){
	const seconds = document.querySelector(".time-seconds-js");
	const minutes = document.querySelector(".time-minutes-js");
	const hours = document.querySelector(".time-hours-js");
	const dateNow = new Date();
	hours.textContent = dateNow.getHours().toString().padStart(2, "0");
	minutes.textContent = dateNow.getMinutes().toString().padStart(2, "0");
	seconds.textContent = dateNow.getSeconds().toString().padStart(2, "0");
}

setInterval(setTime, 1000);

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const timerSeconds = document.querySelector('.seconds-js');
const timerMinutes = document.querySelector('.minutes-js');
const timerHours = document.querySelector('.hours-js');
let secondTimer = 0;
let minutesTimer = 0;
let hoursTimer = 0;
let interval;

const buttonTimer = document.querySelector('.button-start-stop-js');
let counting = () => {
	interval = setInterval(() =>{
			secondTimer+=1
			if (secondTimer === 60){
				secondTimer-=60;
				minutesTimer+=1;
				if (minutesTimer === 60){
					minutesTimer-=60;
					hoursTimer+=1
					if (hoursTimer === 24){
						secondTimer = 0;
						minutesTimer = 0;
						hoursTimer = 0;
						clearInterval(interval)
					}
				}
			}
			timerSeconds.textContent = secondTimer.toString().padStart(2, "0");
			timerMinutes.textContent = minutesTimer.toString().padStart(2, "0");
			timerHours.textContent = hoursTimer.toString().padStart(2, "0");
	},1000)
}

buttonTimer.addEventListener('click', ()=>{
	if (interval){
		buttonTimer.textContent = 'Start';
		clearInterval(interval);
		secondTimer = 0;
		minutesTimer = 0;
		hoursTimer = 0;
		interval = null;
		timerSeconds.textContent = '00';
		timerMinutes.textContent = '00';
		timerHours.textContent = '00';
	}else{
		buttonTimer.textContent = 'Stop'
		counting()
	}
})

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const backHours = document.querySelector('.back-hours-js');
const backMinutes = document.querySelector('.back-minutes-js');
const backSeconds = document.querySelector('.back-seconds-js');
const backInput = document.querySelector('.input-numbers-js');
const backButton = document.querySelector('.back-button-js');
let seconds = 0;
backInput.addEventListener('input', (event) => {
	const myNum = event.target.value
	const promise = new Promise ((resolve, reject) => {
		if (Number(myNum)){
			resolve(myNum);
		}else if(myNum === ''){
			resolve(myNum);
		}else{
			reject(myNum)
		}
	});
	promise.then(number => {
		if(number){
			seconds = number
		}
	}).catch(number => {
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
	})
});

const timeObj = {
	backHours: 0,
	backMinutes:0,
	backSeconds: 0,
}

function convertMs(ms) {
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;
  
	timeObj.backHours = Math.floor((ms % day) / hour);
	timeObj.backMinutes = Math.floor(((ms % day) % hour) / minute);
	timeObj.backSeconds = Math.floor((((ms % day) % hour) % minute) / second);
	return timeObj
  }

  function addZero(value) {
	return value.toString().padStart(2, '0');
  }

  backButton.addEventListener('click', ()=>{
	convertMs(seconds * 1000)

	//получил секунды через инпут и перевёл их в нужное время
	//застилизовать
	//сделать обратный отчёт
	backHours.textContent = addZero(timeObj.backHours);
	backMinutes.textContent = addZero(timeObj.backMinutes);
	backSeconds.textContent = addZero(timeObj.backSeconds);
  })

  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\