const { game, currentGame } = require('../scripts/simon')
// Same thing when importing the function into the testing file too. Using the {} allows multiple in one line of code

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
})