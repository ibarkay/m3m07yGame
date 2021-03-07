let stopwatchInterval;
let startTime;
const passedTime = 0;
document.getElementById('stopwatch').innerText = '00:00:00';

function startTimer() {
  startTime = Date.now();
  setTimeout(() => {
    clearInterval(stopwatchInterval);
  }, 3600000);
  stopwatchInterval = setInterval(() => {
    const elapsed = new Date(Date.now() - startTime + passedTime);
    const sec = (`0${elapsed.getSeconds()}`).slice(-2);
    const minutes = (`0${elapsed.getMinutes()}`).slice(-2);
    const milisec = (
      `0${parseInt(elapsed.getMilliseconds() / 10)}`
    ).slice(-2);
    const time = `${minutes}:${sec}:${milisec}`;

    document.getElementById('stopwatch').innerText = time;
  }, 10);
}
