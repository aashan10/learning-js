// Functions
/**
 * 1. Normal Functions
 * 2. Arrow Functions
 * 3. Self Executing Functions
 * uses function keyword
 */

// Normal Function
function doSomething() {
    console.log('Doing something');
}



// Arrow Function
// executes block of code
(() => {
    console.log("This is self executing function");
})()

// (..parameters) => {
//  body of function
//  return 123;
// }

// it is used to write one line functions

function sum(a, b) {
    return a + b;
}

// return expression a + b
const add = (a, b) => a + b;

const doAnotherThing = () => {
    console.log("Doing another thing");
}


// syntax
// (arguments) => expression or block of code

// self executing functions

// (() => {})()

// sef executing add function
((a, b) => {console.log(a+ b)})(5,7);