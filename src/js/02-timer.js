import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const INTERVAL_UPDATE_TIME = 1000;
let userInput;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userInput = selectedDates[0].getTime();
    checkSelectedDate();
  },
};

flatpickr('#datetime-picker', options);

const refs = {
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', '');
refs.startBtn.addEventListener('click', () => {
  intervalId = setInterval(updateTimeInterface, INTERVAL_UPDATE_TIME);
});

function checkSelectedDate() {
  if (userInput <= new Date().getTime()) {
    Notify.warning('Please choose a date in the future');
  } else {
    refs.startBtn.removeAttribute('disabled');
  }
}

function updateTimeInterface() {
  const difference = userInput - new Date().getTime();

  if (difference < 1000) {
    clearInterval(intervalId);
  }
  const time = convertMs(difference);

  refs.days.textContent = addLeadingZero(time.days);
  refs.hours.textContent = addLeadingZero(time.hours);
  refs.minutes.textContent = addLeadingZero(time.minutes);
  refs.seconds.textContent = addLeadingZero(time.seconds);

  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  let days = String(Math.floor(ms / day));
  // Remaining hours
  const hours = String(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = String(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = String(Math.floor((((ms % day) % hour) % minute) / second));
  if (days.length === 1) days = days;
  return { days, hours, minutes, seconds };
}
