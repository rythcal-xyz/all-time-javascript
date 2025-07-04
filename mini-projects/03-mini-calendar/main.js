const monthName = document.querySelector('.month-text');
const dayText = document.querySelector('.day-text');
const dayNumber = document.querySelector('.day-number');
const year = document.querySelector('.year');

const date = new Date();

monthName.innerText = date.toLocaleString('en', { month: 'long' });
dayText.innerText = date.toLocaleString('en', { weekday: 'long' });
dayNumber.innerText = date.getDate();
year.innerText = date.getFullYear();
