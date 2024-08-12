export function setTime() {
  const seconds = document.querySelector('.time-seconds-js');
  const minutes = document.querySelector('.time-minutes-js');
  const hours = document.querySelector('.time-hours-js');
  const dateNow = new Date();
  hours.textContent = dateNow.getHours().toString().padStart(2, '0');
  minutes.textContent = dateNow.getMinutes().toString().padStart(2, '0');
  seconds.textContent = dateNow.getSeconds().toString().padStart(2, '0');
}
