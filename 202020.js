
const audio = document.getElementById("audio");
const audioSource = document.getElementById("audioSource");
let startBreakSound = document.getElementById("starterTimerSound").value;
let endBreakSound = document.getElementById("endTimerSound").value;

function playSound(sound) {
    changeAudioSource(sound);
    audio.play();
};

let workTimeoutHandle = null;
let breakTimeoutHandle = null;
let timer = null;

function startWorkTimer() {
    timer = startTimer(getWorkInterval(), document.querySelector("#remainingTime"));
    workTimeoutHandle = setTimeout(
        () => {
            playSound(startBreakSound);
            clearTimeout(workTimeoutHandle);
            clearInterval(timer);
            timer = startTimer(getBreakInterval(), document.querySelector("#remainingTime"));
            breakTimeoutHandle = setTimeout(
                () => {
                    playSound(endBreakSound)
                    clearInterval(timer);
                    startWorkTimer();
                    clearTimeout(breakTimeoutHandle);
                }, getBreakInterval() * 1000
            );
        }, getWorkInterval() * 1000);
}

function stopWorkTimer() {
    clearTimeout(workTimeoutHandle);
    clearTimeout(breakTimeoutHandle);
    clearInterval(timer);
}

function clearTimeouts() {
    clearTimeout(workTimeoutHandle);
    clearTimeout(breakTimeoutHandle);
    clearInterval(timer);

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

function getWorkInterval() {
    const hours = document.getElementById("workHoursDuration").value * 60 * 60;
    const minutes = document.getElementById("workMinutesDuration").value * 60;
    const seconds = document.getElementById("workSecondsDuration").value * 1;

    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    return hours + minutes + seconds;
}

function getBreakInterval() {
    const hours = document.getElementById("breakHoursDuration").value * 60 * 60;
    const minutes = document.getElementById("breakMinutesDuration").value * 60;
    const seconds = document.getElementById("breakSecondsDuration").value * 1;

    return hours + minutes + seconds;
}