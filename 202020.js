
const audioSource = document.getElementById("audioSource");
const TWENTY_MINUTE_INTERVAL = 40000;//1200000;
const TWENTY_SECOND_INTERVAL = 20000;

const playSound = (() => {
    clearTimeout(twentyMinuteInterval);
    console.log("we in play sound");
    audioSource.play();
    start20MinuteTimer();
    clearTimeout(twentySecondInterval);
});

let twentyMinuteInterval = null;
let twentySecondInterval = null;

function start20MinuteTimer() {
    twentyMinuteInterval = setTimeout(() => {
        // audioSource.setAttribute("muted", false);
        console.log("we in here");
        twentySecondInterval = setTimeout(playSound, TWENTY_SECOND_INTERVAL);
    }, TWENTY_MINUTE_INTERVAL);
}

function stop20MinuteTimer() {
    // audioSource.setAttribute("muted", true);
    clearTimeout(twentyMinuteInterval);
    clearTimeout(twentySecondInterval);
}

function clearTimeouts() {
    clearTimeout(twentyMinuteInterval);
    clearTimeout(twentySecondInterval);
}