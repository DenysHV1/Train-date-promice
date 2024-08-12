export function mainFunkTimer () {
	const buttonTimer = document.querySelector('.button-start-stop-js');
	const timerSeconds = document.querySelector('.seconds-js');
	const timerMinutes = document.querySelector('.minutes-js');
	const timerHours = document.querySelector('.hours-js');
	let secondTimer = 0;
	let minutesTimer = 0;
	let hoursTimer = 0;
	let interval;
	
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
}
