//Timer
let minval = document.querySelector(".minutes_value")
let startbtn = document.querySelector("#start")
let stopbtn = document.querySelector("#stop")
let resetbtn = document.querySelector("#reset")
let second = 1500;
let interval = null;
startbtn.addEventListener('click', start)
stopbtn.addEventListener('click', stop)
resetbtn.addEventListener('click', reset)

function timer() {
    second--;
    let mins = Math.floor(second / 60);
    let secs = second % 60;
    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    minval.innerText = `${mins} : ${secs}`

    if (secs == 0 && mins == 0) {
        Swal.fire('Zaman bitdi')
        stop()
    }
}

function start() {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000)
}

function stop() {
    clearInterval(interval)
    interval = null;
}

function reset() {
    stop()
    minval.innerText = '25 : 00'
    second = 1500;
    interval = null;
}

//Time now
function myTimer() {
    const date = new Date();
    document.getElementById("date").innerHTML = date.toLocaleTimeString();
  }
  setInterval(myTimer, 1000);

// let dates = document.querySelector("#date")
// var today = new Date();
// // var time = `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`;
// dates.innerHTML = time


// //TO DO LIST
const inputVal = document.querySelector("#inputval");
const form = document.querySelector(".form");
const addButton = document.querySelector("#addbutton");
const toDoList = document.querySelector(".todolist");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (inputVal.value == "") {
        Swal.fire({
            title: 'Warning',
            text: "please add text",
            icon: 'warning',
            cancelButtonColor: '#d33',
        })
    } else {
        const newTask = createNewItem(inputVal.value);
        toDoList.appendChild(newTask);
        inputVal.value = "";
    }
});
function createNewItem(inputValue) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    delBtn.className = "delbtn"
    span.textContent = inputValue;
    delBtn.textContent = "Delete";
    li.appendChild(span);
    li.appendChild(delBtn);
    delBtn.addEventListener("click", function () {
           li.remove()
        Swal.fire('Deleted')
    });
    span.addEventListener("click", () => {
        span.style.textDecoration = "line-through";
        Swal.fire('Done')

    })
    return li;
}