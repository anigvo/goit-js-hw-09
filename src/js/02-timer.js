// Описаний в документації
import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector(`#datetime-picker`);
const startBtn = document.querySelector(`button[data-start]`);

const daysValue = document.querySelector(`[data-days]`);
const hoursValue = document.querySelector(`[data-hours]`);
const MinutesValue = document.querySelector(`[data-minutes]`);
const secondsValue = document.querySelector(`[data-seconds]`);

startBtn.addEventListener(`click`, onStartBtnClick);

// const timer = {
//     start() {
//         const startTime = Date.now()
//     }
// }

let currentDate = new Date();

function onStartBtnClick() {
  startBtn.disabled = true;
  const selectedDate = new Date(input.value);
  startChangeTime = setInterval(() => {
    currentDate = new Date();
    const convertValues = convertMs(
      selectedDate.getTime() - currentDate.getTime()
      );
      const { days, hours, minutes, seconds } = convertValues;
    daysValue.innerHTML = `${addLeadingZero(days)}`;
    hoursValue.innerHTML = `${addLeadingZero(hours)}`;
    MinutesValue.innerHTML = `${addLeadingZero(minutes)}`;
    secondsValue.innerHTML = `${addLeadingZero(seconds)}`;
  }, 1000);
}

const fp = flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < currentDate.getTime()) {
      Notiflix.Notify.failure('Введіть майбутню дату');
      startBtn.disabled = true;
      return;
    }
    Notiflix.Notify.success('Введена майбутня дата, все ОК!');
    startBtn.disabled = false;
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(timeValue) {
  return String(timeValue).padStart(2, `0`);
}