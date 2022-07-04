function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  onBtnStartChangeColor: document.querySelector('[data-start]'),
  onBodyColor: document.querySelector('body'),
  onBtnStop: document.querySelector('[data-stop]'),
};

const onChangeColor = () => {
  timerId = setInterval(() => {
    let bckgndColor = getRandomHexColor();
    refs.onBodyColor.style.backgroundColor = bckgndColor;
    console.dir(bckgndColor);
  }, 1000);
};

refs.onBtnStartChangeColor.addEventListener('click', onChangeColor);

refs.onBtnStop.addEventListener('click', () => {
  clearInterval(timerId);
});
