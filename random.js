const min = 1;
const max = 6;
const rolldice = document.getElementById("Roller");
const rollbtn = document.getElementById("rollbtn");

// Add audio element
const diceSound = new Audio("dice-142528.mp3");

rollbtn.onclick = function () {
    diceSound.currentTime = 0; // rewind sound
    diceSound.play();

    let spins = 20; // number of spins
    let spinInterval = 50; // ms between spins
    let count = 0;

    const spinner = setInterval(() => {
        // Show random number during spin
        rolldice.textContent = Math.floor(Math.random() * max) + min;
        count++;
        if (count >= spins) {
            clearInterval(spinner);
            // Show final number
            const randomnum = Math.floor(Math.random() * max) + min;
            rolldice.textContent = randomnum;
        }
    }, spinInterval);
}