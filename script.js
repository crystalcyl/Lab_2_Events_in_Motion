// ----------------------------------------
// 1. TIME EVENT - LIVE CLOCK
// ----------------------------------------

const clock = document.getElementById("clock");

function updateClock() {
    const now = new Date();

    clock.textContent = now.toLocaleTimeString();
}

// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);


// ----------------------------------------
// 2. MOUSE EVENT - CHANGE THEME
// ----------------------------------------

const themeButton = document.getElementById("themeButton");
const mouseMessage = document.getElementById("mouseMessage");

let darkTheme = false;

themeButton.addEventListener("click", function () {

    if (darkTheme === false) {

        document.body.style.background =
            "linear-gradient(135deg, #141e30, #243b55)";

        mouseMessage.textContent =
            "Dark theme activated! Click again to return.";

        themeButton.textContent = "Light Theme";

        darkTheme = true;

    } else {

        document.body.style.background =
            "linear-gradient(135deg, #667eea, #764ba2)";

        mouseMessage.textContent =
            "Light theme activated! Click again to change it.";

        themeButton.textContent = "Dark Theme";

        darkTheme = false;
    }
});


// ----------------------------------------
// 3. KEYBOARD EVENT
// ----------------------------------------

const keyboardMessage =
    document.getElementById("keyboardMessage");

document.addEventListener("keydown", function(event) {

    keyboardMessage.textContent =
        "You pressed: " + event.key;

});


// ----------------------------------------
// 4. WINDOW RESIZE EVENT - BOM
// ----------------------------------------

const windowSize =
    document.getElementById("windowSize");

function updateWindowSize() {

    const width = window.innerWidth;
    const height = window.innerHeight;

    windowSize.textContent =
        "Window size: " + width + " × " + height + " pixels";
}

// Run when page loads
updateWindowSize();

// Run whenever browser window changes size
window.addEventListener("resize", updateWindowSize);


// ----------------------------------------
// 6. TOUCH EVENT - TAP COUNTER
// ----------------------------------------

const touchButton = document.getElementById("touchButton");
const touchMessage = document.getElementById("touchMessage");
const touchCount = document.getElementById("touchCount");

let taps = 0;

touchButton.addEventListener("touchstart", function() {

    taps++;

    touchCount.textContent = "Taps: " + taps;

    touchMessage.textContent =
        "Great! You tapped the button " + taps + " time(s)!";

});


// Also allow mouse clicks so it works on computers
touchButton.addEventListener("click", function() {

    // Don't double-count touch events on some devices
    if (window.matchMedia("(pointer: coarse)").matches) {
        return;
    }

    taps++;

    touchCount.textContent = "Taps: " + taps;

    touchMessage.textContent =
        "Great! You clicked the button " + taps + " time(s)!";

});


// ----------------------------------------
// 7. LOCAL STORAGE - BOM
// ----------------------------------------

const visitMessage =
    document.getElementById("visitMessage");

const resetButton =
    document.getElementById("resetButton");

// Get previous visit count
let visits = localStorage.getItem("visitCount");

if (visits === null) {
    visits = 1;
} else {
    visits = Number(visits) + 1;
}

// Save new visit count
localStorage.setItem("visitCount", visits);

// Display visit count
visitMessage.textContent =
    "You have visited this page " + visits + " time(s).";

    
// Reset visit count
resetButton.addEventListener("click", function() {

    localStorage.removeItem("visitCount");

    visitMessage.textContent =
        "Visit count has been reset! Refresh the page to start again.";

});