//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.


//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

let table = [];
table.push(element1);
table.push(element2);
table.push(element26);
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

console.log(table[1], table[1][1]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

let massOfElement1 = table[0][2];
let nameOfElement = table[1][0];
let symbolOfElement = table[2][1];
console.log("Mass of Element = "+massOfElement1);
console.log("Name of Element = "+nameOfElement);
console.log("Symbol of Element = "+symbolOfElement);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

let threeDimentional = [];

threeDimentional[0]=[];
threeDimentional[0].push('element1');
threeDimentional[0].push(table[0]);
threeDimentional[1]=[];
threeDimentional[1].push('element2');
threeDimentional[1].push(table[1]);
threeDimentional[2]=[];
threeDimentional[2].push('element3');
threeDimentional[2].push(table[2]);

console.log(threeDimentional);
console.log(threeDimentional[0][0] + ' => ' + threeDimentional[0][1][0]);
