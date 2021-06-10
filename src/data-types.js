// Data types are seperated into two groups

/**
 * 1. Primitive Data Types
 * 2. Non-primitive Data Types
 */

// primitive types -> string, number, boolean, null, undefined
// non primitive types -> object, array, date

let a = 10; // number
let double = 12.235423432; // number
let b= "Name"; // string
let c = 'Name'; // string
let d = true; // boolean
let e = false; // boolean
let f = null; // null
let g; // undefined


// TODO: difference between null and undefined



// Non Primitive Data Types

let today = new Date();

// console.log(today.getSeconds());


// JS Objects

let Person = {
    // properties
    firstName: 'Aashan',
    lastName: 'Ghimire',
    age: 23, 
    address : {
        country: 'Nepal',
        city: 'Kathmandu',
        state: 'Bagmati'
    },
    hobbies: ['coding', 'singing'],

    // methods
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },

    eatFood: function() {
        console.log('I am eating food now!');
    }
};

// Person.eatFood();


// Arrays
let numberArray = [12, 'Name', 'sdfalk', 12.6, Person]; // this problem is solved by typescript
console.log(numberArray);
