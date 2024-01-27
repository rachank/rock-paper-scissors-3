/* Constants for DOM elements and game options */

let startImages = document.querySelectorAll(".startimage");
let compPick;

//Variable to get Modal and close Modal
var modal = document.getElementById("howtomodal");
var span = document.getElementsByClassName("closemodal")[0];
var bttn = document.getElementById("playButton")

//Variables to track scores
let playerScore = 0;
let computerScore = 0;

//Open Modal on Page load
window.onload = function() {
    modal.style.display = "block";
}

// Close Modal on (x) Click
span.onclick = function() {
    modal.style.display = "none";
}

// Close Modal when User Clicks outside of Modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Close Modal when User Clicks on Play Game Button
bttn.onclick = function() {
    modal.style.display = "none";
    
}



//Update score display
function updateScore() {
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

// GameBoard area - play game

function playGame(e) {
    //Check if player has chosen a start image.
    if (e.target.id === "") {
        alert("Please chose one of the images of Rock, Paper or Scissors to start the game")
        return;
    }

    const pPick = e.target.id;
    findCompPick();

    // Determine game result
    const result = findWinner(pPick, compPick);

    //Display result of game
    document.getElementById('result').textContent = result;
}
// Event Listener for each initial click on start images to play game
startImages.forEach(startimage => startimage.addEventListener('click', playGame));

//Get computer random choice of image for game function
function findCompPick() {
    const randPick = Math.floor(Math.random() * 3) + 1;
    switch (randPick) {
        case 1:
            compPick = "rock";
            break;
        case 2:
            compPick = "paper";
            break;
        case 3:
            compPick = "scissors";
            break;
    }
    // Update the computer's choice display
    document.getElementById('compPick').textContent = compPick;
}

//Get the Winner of the game
function findWinner(pPick, compPick) {
    if (pPick === compPick) {
        return "It's a tie game!";
    } else if (
        (pPick === "rock" && compPick === 'scissors') ||
        (pPick === "paper" && compPick === 'rock') ||
        (pPick === 'scissors' && compPick === 'paper')
    ) {
        //update player score and display player winner
        playerScore++;
        updateScore();
        return "You win!";
    } else {
        //Update computer score and display computer winner
        computerScore++;
        updateScore();
        return "Computer wins!";
    }
}