console.log("ASSIGNMENTS")

///////////////////////////////////////
// Values and Variables
const country = "Germany";
const continent = "Europe";
let populationMillion = 80;
let population = populationMillion * 10 ** 6;

// console.log("The country " + country + " in " + continent + " has a population of around " + populationMillion + " million people.");

///////////////////////////////////////
// Data Types
const isIsland = false;
let language;
console.log("The country " + country + " is an island: " + isIsland + ", type: " + typeof isIsland);

///////////////////////////////////////
// Variable Declaration with let, const, var
language = "german";
populationMillion = 82;

console.log("The country " + country + " in " + continent + " has a population of around " + populationMillion + " million people.");

// continent = "Asia";

///////////////////////////////////////
// Operators
console.log("Half " + country + " would contain a popolation of " + populationMillion / 2 + " million people.");
population++;
console.log("One human is born in " + country + "! So the new population in million is " + population);

populationFinland = 6 * 10 ** 6;
console.log(country + " has a higher population than Finland: This is " + (population > populationFinland));

const avgPopulation = 33 * 10 ** 6;
if (population >= avgPopulation) {
    console.log(country + " has a population at least of the size of the average value of " + avgPopulation)
} else {
    console.log(country + " has a population smaller than the average value of " + avgPopulation)
};

const description = country + " is in " + continent + ", and its " + populationMillion + " million people speak " + language;
console.log(description)
