
const audio = document.getElementById("audio");
const audioSource = document.getElementById("audioSource");
let startBreakSound = document.getElementById("starterTimerSound").value;
let endBreakSound = document.getElementById("endTimerSound").value;


const TWENTY_MINUTE_INTERVAL = 20 * 60;
const TWENTY_SECOND_INTERVAL = 20;

function playSound(sound) {
    changeAudioSource(sound);
    audio.play();
};

let twentyMinuteInterval = null;
let twentySecondInterval = null;

function start20MinuteTimer() {
    let timer = startTimer(TWENTY_MINUTE_INTERVAL, document.querySelector("#remainingTime"));
    twentyMinuteInterval = setTimeout(
        () => {
            playSound(startBreakSound);
            clearTimeout(twentyMinuteInterval);
            clearInterval(timer);
            timer = startTimer(twentySecondInterval, document.querySelector("#remainingTime"));
            twentySecondInterval = setTimeout(
                () => {
                    playSound(endBreakSound)
                    clearInterval(timer);
                    start20MinuteTimer();
                    clearTimeout(twentySecondInterval);
                }, TWENTY_SECOND_INTERVAL * 1000
            );
        }, TWENTY_MINUTE_INTERVAL * 1000);
}

function stop20MinuteTimer() {
    clearTimeout(twentyMinuteInterval);
    clearTimeout(twentySecondInterval);
}

function clearTimeouts() {
    clearTimeout(twentyMinuteInterval);
    clearTimeout(twentySecondInterval);
}

function updateStartTimerSound(selectElement){
    startBreakSound = selectElement.value;
}

function updateEndTimerSound(selectElement){
    endBreakSound = selectElement.value;
}

function changeAudioSource(newSource){
    audio.src = newSource;
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    return setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function previewStartSound() {
    playSound(startBreakSound);
}

function previewEndSound() {
    playSound(endBreakSound);
}