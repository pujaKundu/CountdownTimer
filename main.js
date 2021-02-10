const daysEL = document.querySelector('#days');
const hoursEL = document.querySelector('#hours');
const minsEL = document.querySelector('#mins');
const secondsEL = document.querySelector('#seconds');


const newYear = '1 Jan 2022';

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const diff = newYearDate - currentDate;
    const totalSeconds = diff / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    daysEL.textContent = zero(days);
    hoursEL.textContent = zero(hours);
    minsEL.textContent = zero(mins);
    secondsEL.textContent = zero(seconds);

    //console.log(days, hours, mins, seconds);
}

function zero(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);