console.log('Happy developing ✨')
// Declare the counter
let count = 0;
let timer = null;

// Function to display the counter
function updateCount() {

    document.getElementById("count").innerHTML = formatTime(count);
    if (count === 0) {
        document.getElementById("count").style.color = "red";
    } else {
        document.getElementById("count").style.color = "green";
    }
}

//formatcount
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
// Function to increase the counter
function increaseCount() {
    count++;
    updateCount();
}

// Function to decrease the counter
function decreaseCount() {
    count--;
    updateCount();
}

// Function to reset the counter
function resetCount() {
    count = 0;
    updateCount();
}

// Function to save the counter
function saveCount() {
    localStorage.setItem("count", count);
}

function setEi() {
    count=5*60;
    updateCount();
}

function setPizza() {
    count=10*60;
    updateCount();
}

function setGroente() {
    count=20*60;
    updateCount();
}

// Function to load the counter
function loadCount() {
    let saved = localStorage.getItem("count");
    if (saved !== null) {
        count = Number(saved);
    }
    updateCount();
}

function startCountdown() {
    if (timer !== null) {
        return; // timer draait al
    }

    timer = setInterval(()=> {
        console.log(count);
       if(count===0) {
           clearInterval(timer);
       } else {
           decreaseCount();
       }
    }, 1000);
}

function stopCountdown() {
    clearInterval(timer);
    timer=null;
}