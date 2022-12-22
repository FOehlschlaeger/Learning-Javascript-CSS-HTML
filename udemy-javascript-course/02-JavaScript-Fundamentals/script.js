/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Hello World");
console.log(23);

///////////////////////////////////////
// Declaring a variable in memory
let firstProject = "JavaScript";
console.log(firstProject);

// Syntax Error
//let 3years = 2;
//let java& script = "js";
//let new = 27;

///////////////////////////////////////
// Naming conventions for variables
let PI = 3.1415;
let course = "JavaScript";

let myFirstJob = "Data Scientist";
let myCurrentJob = "Software Developer";

console.log("After my first job as " + myFirstJob + ", continued as " + myCurrentJob)


///////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log("The variable " + javascriptIsFun + " is of type " + typeof javascriptIsFun);

console.log(typeof "Hallo");
console.log(typeof 23);
console.log(typeof javascriptIsFun);

// The type of the result of operator "typeof" is a string
console.log(typeof typeof 23);

// New declaration of variable "javascriptIsFun"
javascriptIsFun = "Yes";
console.log(typeof javascriptIsFun);

// Undefined
let year; // empty variable
console.log(year);
console.log(typeof year);
year = 2022;
console.log(year);
console.log(typeof year);

// Error in typeof
console.log(typeof null);
*/

///////////////////////////////////////
// Variable Declaration with let, var, const
let age = 30;
// birthday
age = 31; // reassignment, mutate the age variable

const birthYear = 2022;
// birthYear = 2020; // TypeError: Assignment to constant variable
// const job; // SyntaxError, const needs an initializer

var job = "data scientist";
job = "software developer";


///////////////////////////////////////
// Basic Operators
const now = 2022;
const ageMe = now - 1993;
const ageFriend = now - 1994;
console.log(ageMe, ageFriend);

console.log(ageMe * 2, ageMe / 10, 2 ** 4);

const firstName = "Friso";
const lastName = "Oehlschlaeger";
console.log("Full name: " + firstName + " " + lastName);

// typeof
console.log(typeof "Hallo"); // string
console.log(typeof 23); // number
console.log(typeof javascriptIsFun); // undefined
console.log(typeof typeof 23); // string

// Assignment Operators
let x = 10 + 5;
console.log(x);
x += 10; // x = x + 10 = 25
console.log(x);
x *= 4; // x = x * 4 = 100
console.log(x);
x /= 2; // x = x / 2 = 50
console.log(x);
x++; // x = x + 1 = 51
console.log(x);
x--; // x = x - 1 = 50
console.log(x);

// Comparison Operators
console.log(ageMe > ageFriend); // >, <, >=, <=
console.log(ageFriend >= 18); // true

const isFullAge = ageFriend >= 18;
console.log(typeof isFullAge);

console.log(now - 1993 > now - 1994);