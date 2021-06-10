/**
 * Operators
 */

/**
 * Types of operators
 * 1. Arithmatic Operators
 * 2. Logical Ooerators
 * 3. Assignment Operators
 * 4. Bitwise Operators
 * 5. Type Operators
 * 6. Comparision Operators
 * 7. Ternary Comparision Operator
 */

// Arithmatic Operators
/**
 * Used in mathematical calculations
 * Mostly, binary operators
 * +, -, *, /, %, ++, --, **
 */


// Logical Operators
/**
 * Gives boolean results
 * AND (&&) , OR (||), NOT (!)
 */

// Assignment Operators
/**
 * Assignes value to variable
 * =, +=, -=, *=, /=, %=, **= 
 */
let a = 5;
a += 6; // a = a + 6; a = 11;
a -= 2; // a = a - 2; a = 9;
a **= 3; // a = a ** 3; a = a power 3; a = 729

console.log(a);

// Bitwise Operator
/**
 * &, |, ~, ^, >>, >>>, <<, <<< (Barely used)
 */


// Type Operator
/**
 * Gives type of data
 * typeof, instanceof
 */

let b = 123;
console.log(typeof b);

let string = new String('ABC');
console.log(string instanceof String);


// Comparision Operators
/**
 * Used to compare values
 * >, <, >=, <= ,!=, ==, ===, 
 */

// == checks only value of two variables
// === checks type of operator and value of operator


console.log("==============");
console.log(1 == "1");
console.log(1 === 1, "Both numbers");
console.log("1" === "1", "Both string");
console.log(1 === "1", "Number and String");


// Ternary Comparision Operator
/**
 * condition ? expression when true : expression when false 
 */
let result;
(1 === 1) ? (result = true) : (result = false);

alert("hello");
