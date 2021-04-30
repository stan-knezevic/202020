
const audioSource = document.getElementById("audioSource");
const TWENTY_MINUTE_INTERVAL = 1200000;
const TWENTY_SECOND_INTERVAL = 20000;

const playSound = (() => {
    clearTimeout(twentyMinuteInterval);
    audioSource.play();
    start20MinuteTimer();
    clearTimeout(twentySecondInterval);
});

let twentyMinuteInterval = null;
let twentySecondInterval = null;

function start20MinuteTimer() {
    twentyMinuteInterval = setTimeout(() => {
        twentySecondInterval = setTimeout(playSound, TWENTY_SECOND_INTERVAL);
    }, TWENTY_MINUTE_INTERVAL);
}

function stop20MinuteTimer() {
    clearTimeout(twentyMinuteInterval);
    clearTimeout(twentySecondInterval);
}

function clearTimeouts() {
    clearTimeout(twentyMinuteInterval);
    clearTimeout(twentySecondInterval);
}