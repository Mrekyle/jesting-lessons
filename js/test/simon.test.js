const { game, newGame, showScore, addTurn, showTurns, lightsOn, playerTurn } = require('../scripts/simon')
// Same thing when importing the function into the testing file too. Using the {} allows multiple in one line of code

jest.spyOn(window, 'alert').mockImplementation(() => { })

beforeAll(() => {
    let fs = require('fs');
    let fileContents = fs.readFileSync('simon.html', ('utf-8'))
    document.open();
    document.write(fileContents)
    document.close();
})

/**
 * As this is the same testing block for the same variable we are able to perform all the tests inside the same code block.
 */
describe('Game object contains correct keys', () => {
    test('score key exists', () => {
        expect("score" in game).toBe(true)
    })
    test('currentGame key exists', () => {
        expect("currentGame" in game).toBe(true) 
    })
    test('playerMoves key exists', () => {
        expect("playerMoves" in game).toBe(true)
    })
    test('choices key exists', () => {
        expect("choices" in game).toBe(true)
    })
    test('choices contains the correct ids', () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"])
    })
    test('turnNumber exists in game', () => {
        expect('turnNumber' in game).toBe(true)
    })
    test('lastButton exists in game', () => {
        expect('lastButton' in game).toBe(true);
    })
    test('turnInProgress to exist in game', () => {
        expect('turnInProgress' in game).toBe(true)
    })
})

describe('New game function works correctly', () => {
    // False data to check if the function is working correctly. And calling the newGame function
    beforeAll(() => {
        game.score = 42;
        game.currentGame = [1, 3, 4, 6, 3, 2]
        game.playerMoves = [1, 3, 4, 6, 3, 3]
        document.getElementById('score').innerText = '42'
        newGame()
    })
    test('game score reset to 0', () => {
        expect(game.score).toEqual(0)
    })
    test('should be one element in the computers array', () => {
        expect(game.currentGame.length).toBe(1)
    })
    test('clears player moves', () => {
        expect(game.playerMoves.length).toBe(0)
    })
    test('clears computers moves', () => {
        expect(game.playerMoves.length).toBe(0)
    })
    test('should display 0 on the dom score', () => {
        expect(document.getElementById('score').innerText).toEqual(0)
    })
    test('turnNumber is reset in the newGame function', () => {
        expect(game.turnNumber).toEqual(0)
    })
    test('all data-listeners are set to true', () => {
        newGame()
        const elements = document.getElementsByClassName('circle')
        for (let element of elements) {
            expect(element.getAttribute('data-listener')).toEqual('true')
        }
    })
})

describe('gameplay functions are working as intended', () => {
    beforeEach(() => { // Runs before each test
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
        addTurn()
    })
    afterEach(() => { // Runs after each test. Clue in the name of each of the methods
        game.score = 0;
        game.playerMoves = [];
        game.currentGame = [];
    })
    test('currentGame array has a length of 1', () => {
        expect(game.currentGame.length).toEqual(1)
    })
    test('addTurn adds a turn to the currentGame array', () => {
        addTurn();
        expect(game.currentGame.length).toBe(2)
    }) 
    test('checking if the correct ids are added to the button', () => {
        let button = document.getElementById(game.currentGame[0]);
        lightsOn(game.currentGame[0]);
        expect(button.classList).toContain('light') // classList is checking the classes on the element
        // toContain is checking if the element contains the desired information
    })
    test('showTurns should update game.turnNumber', () => {
        game.turnNumber = 42;
        showTurns();
        expect(game.turnNumber).toBe(0)
    })
    test('should increment the score if the correct circle is clicked', () => {
        game.playerMoves.push(game.currentGame[0]);
        playerTurn();
        expect(game.score).toBe(1)
    })
    test('should call an alert if the playerMove is wrong', () => {
        game.playerMoves.push('wrong');
        playerTurn();
        expect(window.alert).toBeCalledWith("Wrong move!")
    })
    test('should toggle turnInProgress to be true', () => {
        expect(game.turnInProgress).toBe(true)
    })
    test('clicking during the computers turn should fail', () => {
        showTurns();
        game.lastButton = ""
        document.getElementById('button2').click();
        expect(game.lastButton).toEqual("")
    })
})
