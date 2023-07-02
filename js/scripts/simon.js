let game = {
    currentGame: [],
    playerMoves: [],
    turnNumber: 0,
    score: 0,
    choices: ["button1", "button2", "button3", "button4"]
}

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;
    game.turnNumber = 0;
    showScore();
    addTurn();    
}

function showScore () {
    document.getElementById('score').innerText = game.score;
}

function addTurn () {
    game.playerMoves = []
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4 ))]) // Generates a random number between 
    // 0 and 3 and pushes that index of the game choice onto the currentGame array.
    showTurns()
}

function showTurns () {
    game.turnNumber = 0;
    let turns = setInterval(() => {
         lightsOn(game.currentGame[game.turnNumber]);
         game.turnNumber++;
         if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns)
         }
    }, 800)
}

function lightsOn (circ) {
    document.getElementById(circ).classList.add('light')
    setTimeout(() => {
        document.getElementById(circ).classList.remove('light')
    }, 400);
}

module.exports = { game, newGame, showScore, addTurn, showTurns, lightsOn } // Adding it in curly brackets allows us to export multiple at once in one line of code. So the code
// doesn't need to be repeated over and over again 