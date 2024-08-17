
// const display = document.getElementById("#display");
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isrunning  = false;


// function start() {
//     if(!isrunning){
//        startTime = Date.now() - elapsedTime;
//        timer = setInterval(update, 10);
//        isrunning = true;
//     }
    
// }

// function stop() {
//     if(isrunning){
//         clearInterval(timer);
//         elapsedTime = Date.now() - startTime;
//         isrunning = false;
//     }

// }

// function reset() {
//     clearInterval(timer);
//     startTime = 0;
//     elapsedTime = 0;
//     isrunning = false;
//     display.textContent = "00:00:00:00";

// }


// function update() {
//     const currentTime = Date.now();
//     elapsedTime = currentTime - startTime

//     let hours = math.floor(elapsedTime / (1000 * 60 * 60));
//     let minuts = math.floor(elapsedTime / (1000 * 60) % 60);
//     let seconds = math.floor(elapsedTime / 1000 % 60);
//     let miliseconds = math.floor(elapsedTime % 1000 / 10);

//     hours = String(hours).padStart(2, "0");
//     minuts = String(minuts).padStart(2, "0");
//     seconds = String(seconds).padStart(2, "0");
//     miliseconds = String(miliseconds).padStart(2, "0");

//     display.textContent = `${hours}:${minuts}:${seconds}:${miliseconds}`

// }




const display = document.getElementById("display"); // Removed the "#" from getElementById
const StartBtn = document.getElementById("start-btn");
const StopBtn = document.getElementById("stop-btn");
const ResetBtn = document.getElementById("reset-btn");


let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;  // Corrected variable name from 'isrunning' to 'isRunning'


function start() {
    if(!isRunning){
       startTime = Date.now() - elapsedTime;
       timer = setInterval(update, 10);
       isRunning = true;
    }
}

function stop() {
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));   // Capitalized 'Math'
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);  // Corrected spelling to 'minutes'
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);    // Corrected spelling to 'milliseconds'

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");  // Corrected spelling here as well
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;  // Updated variable names
}


StartBtn.addEventListener("click", start);
StopBtn.addEventListener("click", stop);
ResetBtn.addEventListener("click", reset);
