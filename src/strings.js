/**
 * Strings in JavaScript
 * lastIndexOf Strings in JavaScript
 */

/** variable define keyword (var/let/const) variable name = "" || '' **/

let firstName = 'Sarita';

// Length of a string
console.log(firstName.length);

// indexOf 

let veryLongText = "The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string";

// console.log(veryLongText.indexOf("of"));
// console.log(veryLongText.lastIndexOf("of", 70));

// // search
// console.log(veryLongText.search(/[of]/));

// Split Strings

let firstIndexOfOf = veryLongText.indexOf("of");
let lastIndexOfOf = veryLongText.lastIndexOf("of");

// console.log(veryLongText.slice(firstIndexOfOf, lastIndexOfOf));


// // substring
// console.log(veryLongText.substring(firstIndexOfOf, lastIndexOfOf));

// substr
// console.log(veryLongText.substr(firstIndexOfOf, lastIndexOfOf));


// replace 

// console.log(veryLongText.replace(/indexof/i, "search"))

// case 

// console.log(veryLongText.toUpperCase());
// console.log(veryLongText.toLowerCase());

// Concatination

// let fName = "Sarita";



// let lName = " Sharma";

// let fullName = fName.concat(" Poudel");

// console.log(fullName);

// fullName = fName + lName;

// console.log(fullName);

// console.log(fullName.charAt(0));
// console.log(fullName[0]);
// console.log(fullName.charCodeAt(0));



let string = "abcg,asdas,asdasd,dfsdf,ghfgh,werwe";

// Assignment is not valid but doesn not trigger any error
string[5] = "b";

console.log(string);

console.log(string.split(','));


