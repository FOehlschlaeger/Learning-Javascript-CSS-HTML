/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Hello World");
console.log(23);

// Declaring a variable in memory
let firstProject = "JavaScript";
console.log(firstProject);

// Syntax Error
//let 3years = 2;
//let java& script = "js";
//let new = 27;

// Naming conventions for variables
let PI = 3.1415;
let course = "JavaScript";

let myFirstJob = "Data Scientist";
let myCurrentJob = "Software Developer";

console.log("After my first job as " + myFirstJob + ", continued as " + myCurrentJob)
*/

// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log("The variable " + javascriptIsFun + " is of type " + typeof (javascriptIsFun));

console.log(typeof "Hallo");
console.log(typeof 23);
console.log(typeof javascriptIsFun);

// The type of the result of operator "typeof" is a string
console.log(typeof typeof 23);

// New declaration of variable "javascriptIsFun"
javascriptIsFun = "Yes";
console.log(typeof javascriptIsFun);

// Undefined
let year;
console.log(year);
console.log(typeof year);
year = 2022;
console.log(year);
console.log(typeof year);

// Error in typeof
console.log(typeof null);