const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};

let intID = null;

refs.start.addEventListener('click', onStart);

function onStart() {
  intID = setInterval(changeBgCol, 1000);
  refs.start.classList.add('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBgCol() {
  document.body.style.backgroundColor = getRandomHexColor();
}

refs.stop.addEventListener('click', onStop);

function onStop() {
  clearInterval(intID);
  refs.start.classList.remove('disabled');
}
