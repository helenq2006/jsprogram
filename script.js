//vars
let secret;
let currentGuess = 50;
let remaining = 5;
const logList = document.getElementById("logList");
const currentGuessElement = document.getElementById("currentGuess");
const guessesRemainingElement = document.getElementById("guessesRemaining");

//functions

//random number generation
function randomGen() {
    return Math.floor(Math.random() * 100) + 1;
}

//updates guess log
function updateLog(guess, response) {
    const listItem = document.createElement("li");
    listItem.textContent = `Guess: ${guess}, Response: ${response}`;
    logList.appendChild(listItem);
}

//checks guess
function check() {
    const difference = Math.abs(secret - currentGuess);

    if (difference <= 5) {
        updateLog(currentGuess, "Very Hot!!!!");
    } else if (difference <= 8) {
        updateLog(currentGuess, "Hot!!!");
    } else if (difference <= 15) {
        updateLog(currentGuess, "Very Warm!!");
    } else if (difference <= 20) {
        updateLog(currentGuess, "Warm!");
    } else if (difference <= 30) {
        updateLog(currentGuess, "Cool.");
    } else if (difference <= 40) {
        updateLog(currentGuess, "Very Cool..");
    } else if (difference <= 55) {
        updateLog(currentGuess, "Cold...");
    } else {
        updateLog(currentGuess, "Very Cold....");
    }

    if (secret === currentGuess) {
        alert("Congratulations! You've won!");
        reset();
    } else {
        if (difference > 5) {
            remaining--; //if incorrect but not Very Hot, subtract
        }

        if (remaining === 0) {
            alert(`You Lost. The number was ${secret}.`);
            reset();
        } else {
            guessesRemainingElement.textContent = remaining;
        }
    }
}


//resets game
function reset() {
    secret = randomGen();
    currentGuess = 50;
    remaining = 5;
    logList.innerHTML = "";
    currentGuessElement.textContent = currentGuess;
    guessesRemainingElement.textContent = remaining;
}


//all button event listeners
document.getElementById("add1").addEventListener("click", () => {
    currentGuess = Math.min(100, currentGuess + 1);
    currentGuessElement.textContent = currentGuess;
});

document.getElementById("sub1").addEventListener("click", () => {
    currentGuess = Math.max(1, currentGuess - 1);
    currentGuessElement.textContent = currentGuess;
});

document.getElementById("add5").addEventListener("click", () => {
    currentGuess = Math.min(100, currentGuess + 5);
    currentGuessElement.textContent = currentGuess;
});

document.getElementById("sub5").addEventListener("click", () => {
    currentGuess = Math.max(1, currentGuess - 5);
    currentGuessElement.textContent = currentGuess;
});

document.getElementById("add10").addEventListener("click", () => {
    currentGuess = Math.min(100, currentGuess + 10);
    currentGuessElement.textContent = currentGuess;
});

document.getElementById("sub10").addEventListener("click", () => {
    currentGuess = Math.max(1, currentGuess - 10);
    currentGuessElement.textContent = currentGuess;
});

document.getElementById("add25").addEventListener("click", () => {
    currentGuess = Math.min(100, currentGuess + 25);
    currentGuessElement.textContent = currentGuess;
});

document.getElementById("sub25").addEventListener("click", () => {
    currentGuess = Math.max(1, currentGuess - 25);
    currentGuessElement.textContent = currentGuess;
});

document.getElementById("commit").addEventListener("click", check);

document.getElementById("reset").addEventListener("click", reset);

// Initialize the game
reset();

function revealSecretNumber() {
    document.getElementById("secretNumber").textContent = `Secret Number: ${secretNumber}`;
    document.getElementById("secretNumber").style.display = "block";
}

