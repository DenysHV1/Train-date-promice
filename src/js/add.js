export function add() {
  const addModal = document.querySelector('.modal-add-js');
  const addCounter = document.querySelector('.add-counter-js');
  let counter = 10;

  // Проверяем, есть ли данные в sessionStorage
  const storedCounter = sessionStorage.getItem('add');
  if (storedCounter) {
    counter = JSON.parse(storedCounter);
    if (counter === 0) {
      counter = 3; // Устанавливаем counter в 3 при втором запуске
    }
  }

  setTimeout(() => {
    addModal.classList.add('is-open');
    const interval = setInterval(() => {
      counter -= 1;
      addCounter.textContent = counter;
      if (counter === 0) {
        clearInterval(interval);
        addCounter.textContent = '❌';
        addCounter.addEventListener('click', () => {
          addModal.classList.remove('is-open');
          addModal.style.cursor = 'pointer';
          counter = 3; // Устанавливаем counter в 3 при закрытии модального окна
          sessionStorage.setItem('add', JSON.stringify(counter));
        });
      }
    }, 1000);
  }, 3000);
}
