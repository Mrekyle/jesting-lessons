/**
 * When installing on a new machine Node.js must be installed to allow npm to work. 
 * 
 * Then install jest by following the docs.. 
 * Initialize jest framework by setting the test command to jest, by running npm init
 */

describe('Calculator test', ()=> { // Describing the test being performed in english in JS using the describe method
    describe('Addition test', () => {
        test('Should return sium of 42', () => { // The test that is actually wanting to be tested
            expect(addition(20, 22)).toBe(42) // The parameters being tested and the answer or the test with the toBe method
        })
    })
})

/**
 * All functions and methods available are found in the jest DOCS
 * 
 * Dependent on the developers preference the tests can be held in the same directory(folder) as the main scripts
 * Or in another separate directory(folder)
 */