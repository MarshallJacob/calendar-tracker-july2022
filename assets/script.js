// Pull elements from HTML
// const planInput = document.querySelector(".planInput");
// const btnEl = document.querySelectorAll("button");
const scheduleTimeEl = document.querySelector(".scheduleTime").innerHTML;
const nineEl = document.getElementById("9")
const tenEl = document.getElementById("10")
const elevenEl = document.getElementById("11")
const twelveEl = document.getElementById("12")
const oneEl = document.getElementById("1")
const twoEl = document.getElementById("2")
const threeEl = document.getElementById("3")
const fourEl = document.getElementById("4")
const fiveEl = document.getElementById("5")
const btn9El = document.getElementById("btn9")
const btn10El = document.getElementById("btn10")
const btn11El = document.getElementById("btn11")
const btn12El = document.getElementById("btn12")
const btn1El = document.getElementById("btn1")
const btn2El = document.getElementById("btn2")
const btn3El = document.getElementById("btn3")
const btn4El = document.getElementById("btn4")
const btn5El = document.getElementById("btn5")


// Shows the current day
var now = moment();
$("#currentDay").text(now.format("dddd, MMMM Do"));

console.log(moment().format("hh A"));
console.log(scheduleTimeEl);
function timeColorCoder () {
    for(var i = 0; i < scheduleTimeEl.length; i++)
    if (scheduleTimeEl.value = moment ().format("hh A")) {
        console.log("current time!")
    } else if (scheduleTimeEl.value < moment ().format("hh A")) {
        console.log ("Past!")
    } else (scheduleTimeEl > moment ().format("hh A")); {
        console.log("Future!")
    }return
}

// event listeners for each button
btn9El.addEventListener("click", saveData(nineEl.id))
btn10El.addEventListener("click", saveData(tenEl.id))
btn11El.addEventListener("click", saveData(elevenEl.id))
btn12El.addEventListener("click", saveData(twelveEl.id))
btn1El.addEventListener("click", saveData(oneEl.id))
btn2El.addEventListener("click", saveData(twoEl.id))
btn3El.addEventListener("click", saveData(threeEl.id))
btn4El.addEventListener("click", saveData(fourEl.id))
btn5El.addEventListener("click", saveData(fiveEl.id))

// for (i of btnEl) {
//     i.addEventListener("click", saveData)
// };


function saveData (timeId) {
    // write the code that will save input data from formControlEl
    
    // console.log(timeId)
    // console.log("This button works!")
    return (e) => {
        console.log(timeId)
      }
};