// Pull elements from HTML
const formControlEl = document.querySelector(".form-control").innerHTML;
const btnEl = document.querySelectorAll("button");
const scheduleTimeEl = document.querySelector(".scheduleTime").innerHTML;

// Shows the current day
var now = moment();
$("#currentDay").text(now.format("dddd, MMMM Do"));

console.log(moment().format("hh A"));
console.log(scheduleTimeEl);
function timeColorCoder () {
    for(var i = 0; i < scheduleTimeEl.length; i++)
    if (scheduleTimeEl = moment ().format("hh A")) {
        console.log("current time!")
    } else if (scheduleTimeEl < moment ().format("hh A")) {
        console.log ("Past!")
    } else (scheduleTimeEl > moment ().format("hh A")); {
        console.log("Future!")
    }return
}

for (i of btnEl) {
    i.addEventListener("click", saveData)
};

function saveData () {
    // write the code that will save input data from formControlEl
    console.log("This button works!")
};