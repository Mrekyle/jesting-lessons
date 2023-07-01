// /**
//  * The below code and functions check to see if the html text on the page has been changed to the correct sting that was set. 
//  * Jest simulates certain parts of the DOM environment allowing us to run these tests not just in JS but also using HTML
//  */

// const buttonTest = require('../scripts/buttonclick.js')

// beforeEach(() => {
//     // TESTING A SINGLE HTML ELEMENT IN THE SIMULATED DOM
//     // document.body.innerHTML = '<p id="par"></p>'
    
//     // TESTING AN ENTIRE HTML DOCUMENT IN THE MOCK DOM - INDUSTRY GENERIC STANDARD FOR TESTING.. ONLY NEED TO CHANGE FILE NAME
//     let fs = require('fs') // Built in node module that allows us to open/read/write entire documents 
//     let fileContents = fs.readFileSync('index.html', 'utf-8') // No need for a directory, as it runs from the root directory as default
//     document.open // Creates and opens a new blank document for the testing environment
//     document.write(fileContents) // Writes the index.html file to the new testing mock document
//     document.close // Closes the document
// })

// describe('DOM Testing', () => {
//     describe('Check if when the button is clicked the text on the page changes', () => {
//         test('Should change the text on the page', () => {
//             buttonTest(); // Call the function in the simulated DOM enviroment before checking if the test is passed or not with the expect
//             expect(document.getElementById('par').innerHTML).toEqual("You Have Clicked on Test With Jest") 
//         }) 
//         test('H1 Tag should exist', () => {
//             // expect(document.getElementsByTagName('h1')) - Works perfectly as desired. But if we are checking multiple we need to use the length
//             expect(document.getElementsByTagName('h1').length).toBe(1) // Checking if there is 1 h1 element. If 2 '2' should be expected... and so on
//         })
//     })
// })