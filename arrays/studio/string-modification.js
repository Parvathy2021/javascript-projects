const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let firstThreeCharacter = str.slice(0,3);
let nextCharacter = str.slice(3);
let newString = nextCharacter + firstThreeCharacter;



//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let inputNumber = input.question("How many letter should we relocate?");
let numCharInteger = Number(inputNumber);

let firstCharacters =str.slice(0, numCharInteger);
let lastCharacters = str.slice(numCharInteger);
let newNewString = lastCharacters + firstCharacters;

console.log(newNewString);


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

