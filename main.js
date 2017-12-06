const digital = {
    hours: document.querySelector('.digital-hours'),
    minutes: document.querySelector('.digital-minutes'),
    seconds: document.querySelector('.digital-seconds')
};

const binary = {
    hours: document.querySelector('.binary-hours'),
    minutes: document.querySelector('.binary-minutes'),
    seconds: document.querySelector('.binary-seconds')
};


const binaryCheck = (totalTime, timeUnit, selector) => {
    if (totalTime / timeUnit >= 1) {
        selector.querySelector(`.dot-${timeUnit}`).classList.add('active');
        return totalTime - timeUnit;
    }
    return totalTime;
}

const binaryTime = (selector, unitTime) => {
    const dots = [...selector.querySelectorAll('.dots')];
    const binaryNumbers = [40, 20, 10, 8, 4, 2, 1];
    let time = unitTime;
    dots.map(dot => dot.classList.remove('active'));
    binaryNumbers.map(unit => {
         return time = binaryCheck(time, unit, selector);
    });
}

const time = () => {
    const now = new Date();
    let hours = digitHours = now.getHours();
    let minutes = digitMinutes = now.getMinutes();
    let seconds = digitSeconds = now.getSeconds();

    // Digital timer
    digitSeconds < 10 ? digitSeconds = `0${digitSeconds}` : digitSeconds;
    digitMinutes < 10 ? digitMinutes = `0${digitMinutes}` : digitMinutes;

    digital.seconds.textContent = digitSeconds;
    digital.minutes.textContent = digitMinutes;
    digital.hours.textContent = digitHours;

    //Binary Timer
    binaryTime(binary.hours, hours);
    binaryTime(binary.minutes, minutes);
    binaryTime(binary.seconds, seconds);
}

time();
setInterval(time, 1000);