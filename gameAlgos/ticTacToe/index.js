//Store status element
const statusDisplay = document.querySelector('.game--status');


//Declare some variables to track the state of the game
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

//Store game status messages that will be displayed to the user
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

//Set the initial message to let the players know whose turn it is
statusDisplay.innerHTML = currentPlayerTurn();


function handleCellPlayed(clickedCell, clickedCellIndex) {
    
    //Update the game state to reflect player moves and update the UI
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}


function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "0" : 'X';
    statusDisplay.innerHTML = currentPlayerTurn();
}

//      INDEX
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function handleResultValidation() {
    let roundwon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundwon = true;
            break
        }
    }

    //Winner was found, now update UI, set Active to false
    if (roundwon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    //Check if values in the game state array are still not populated with a 
    //player sign. If all spaces are full then it's a draw
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    //Else if no one won the game yet and there are still moves to be played,
    // continue by changing the current player
    handlePlayerChange();
}

function handleCellClicked(clickedCellEvent) {

    const clickedCell = clickedCellEvent.target;

    //Grab data cell attribute index number
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'))

    //Check if cell is clicked already, if so, igonore the click
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    //Otherwise proceed
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();

}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

// Handle event listeners to the actual game cells and the restart button
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame)