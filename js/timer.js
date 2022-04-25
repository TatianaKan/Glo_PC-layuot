const timer = document.querySelector('.timer');
const daysBlock = document.querySelector('.timer__days');
const hoursBlock = document.querySelector('.timer__hours');
const minutesBlock = document.querySelector('.timer__minutes');
const secondsBlock = document.querySelector('.timer__seconds');

let interval;

const numWord = (val, words) => {
  val = Math.abs(val) % 100;

  const lastNum = val % 10;

  if (val > 10 & val < 20) return words[2];
  if (lastNum > 1 & lastNum < 5) return words[1];
  if (lastNum === 1) return words[0]
  return words[2]
}

const upDateTimer = () => {
  const date = new Date();

  //обратный отсчет:
  const dateDeadline = new Date('27 april 2022').getTime();

  const timeRemaining = (dateDeadline - date) / 1000;

  const days = Math.floor(timeRemaining / 60 / 60 / 24);
  const hours = Math.floor(timeRemaining / 60 / 60) % 24;
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);

  //текущее время:

  // const hours = date.getHours();
  // const minutes = date.getMinutes();
  // const seconds = date.getSeconds();

  const fDays = days < 10 ? '0' + days : days;
  const fHours = hours < 10 ? '0' + hours : hours;
  const fMinutes = minutes < 10 ? '0' + minutes : minutes;
  const fSeconds = seconds < 10 ? '0' + seconds : seconds;

  daysBlock.textContent = fDays;
  hoursBlock.textContent = fHours;
  minutesBlock.textContent = fMinutes;
  secondsBlock.textContent = fSeconds;

  daysBlock.nextElementSibling.textContent =
    numWord(fDays, ['День', 'Дня', 'Дней']);

  hoursBlock.nextElementSibling.textContent =
    numWord(fHours, ['Час', 'Часа', 'Часов']);

  minutesBlock.nextElementSibling.textContent =
    numWord(fMinutes, ['Минута', 'Минуты', 'Минут']);

  secondsBlock.nextElementSibling.textContent =
    numWord(fSeconds, ['Секунда', 'Секунды', 'Секунд']);

  if (timeRemaining <= 0) {
    clearInterval(interval);
    daysBlock.textContent = '00';
    hoursBlock.textContent = '00';
    minutesBlock.textContent = '00';
    secondsBlock.textContent = '00';

    timer.style.color = 'red'
  }
}

upDateTimer();
interval = setInterval(upDateTimer, 500);



