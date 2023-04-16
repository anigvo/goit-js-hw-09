const startBtn = document.querySelector(`button[data-start]`);
const stopBtn = document.querySelector(`button[data-stop]`);
const body = document.querySelector(`body`);

startBtn.addEventListener(`click`, onStartBtnClick);
stopBtn.addEventListener(`click`, onStopBtnClick);

stopBtn.disabled = true;
let changeColor = null;
function onStartBtnClick() {
  startBtn.disabled = true;
    stopBtn.disabled = false;
    // перший раз щоб колір змінився відразу після натискання кнопки
    body.style.background = getRandomHexColor();
    // наступні рази будуть виконуватися з інтервалом в 1 секунду
  changeColor = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick() {
  stopBtn.disabled = true;
    startBtn.disabled = false;
    clearInterval(changeColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}