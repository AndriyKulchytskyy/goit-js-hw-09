// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const UPDATE_TIME = 1000;

const refs = {
  picker: document.getElementById('datetime-picker'),
  start: document.querySelector('[data-start]'),
};

let countDown = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const currentDate = new Date();
let targetDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < currentDate) {
      window.alert('Please choose a date in the future');
    } else {
      refs.start.classList.remove('disabled');
      targetDate = selectedDates[0];
    }
  },
};

refs.start.classList.add('disabled');

refs.picker.addEventListener('input', flatpickr);

flatpickr('input#datetime-picker', options);

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

refs.start.addEventListener('click', onStart);

function onStart() {
  const intervalID = setInterval(() => {
    const dateNow = new Date();
    const timeLeft = convertMs(targetDate - dateNow);

    if (targetDate - dateNow < UPDATE_TIME) {
      clearInterval(intervalID);
    }

    countDown.days.textContent = timeLeft.days;
    countDown.hours.textContent = timeLeft.hours;
    countDown.minutes.textContent = timeLeft.minutes;
    countDown.seconds.textContent = timeLeft.seconds;
  }, UPDATE_TIME);
}
