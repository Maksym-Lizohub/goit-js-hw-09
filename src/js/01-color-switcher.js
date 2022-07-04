function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  onBtnStart: document.querySelector('[data-start]'),
  onBodyColor: document.querySelector('body'),
  onBtnStop: document.querySelector('[data-stop]'),
};

refs.onBodyColor.style.backgroundColor = '';

let timerId = null;

refs.onBtnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    refs.onBodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.onBtnStart.disabled = true;
  refs.onBtnStop.disabled = false;
});

refs.onBtnStop.addEventListener('click', () => {
  refs.onBtnStart.disabled = false;
  refs.onBtnStop.disabled = true;

  clearInterval(timerId);
});
