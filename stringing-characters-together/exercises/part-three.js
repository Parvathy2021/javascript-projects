//Part Three section one

let language = 'JavaScript';
let initials = "";

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
 initials= language.slice(0,1)+language.slice(4,5);
console.log(initials);

//2. Without using slice(), use method chaining to accomplish the same thing.

console.log(language.replace(language.substring(1,4),"").substring(0,2));


//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for '${language}' is '${initials}'.`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(`${language.slice(0,1)}avas ${language.slice(4,10).toLowerCase()}`);
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let firstInitial = notTitleCase[0].toUpperCase();
let secondInitials =notTitleCase[6].toUpperCase();
console.log(`${firstInitial}${notTitleCase.slice(1,5)} ${secondInitials}${notTitleCase.slice(7,10)}`);
 
