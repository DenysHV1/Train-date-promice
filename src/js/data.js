export function setDate() {
	const day = document.querySelector(".data-day-js");
	const month = document.querySelector(".data-month-js");
	const yer = document.querySelector(".data-yer-js");
	const dateNow = new Date();
	day.textContent = dateNow.getDate().toString().padStart(2, "0");
	month.textContent = (dateNow.getMonth() + 1).toString().padStart(2, "0");
	yer.textContent = dateNow.getFullYear().toString().padStart(2, "0");
  }