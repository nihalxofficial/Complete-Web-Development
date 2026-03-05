// Difference 1 -------
// var hoisted (Bad practice)
// let and const hoisted but in Temporal Dead Zone

// Difference 2 -------
// redeclare with same name by var
var name = "Utsho";
var name = "Ahashan Habib";

// console.log(name);
// Can't redeclare with same name by let and const
// let roll = 29;
// let roll = 20;
// const age = 25;
// const age = 23;

// Difference 3 -------
// reassign allowed by var and let but not const
var nationality = "Bangladesh";
nationality = "American";
console.log(nationality);

let age = 26;
age = 30;
console.log(age);

const fullName = "Ahashan Habib Utsho";
fullName = "Utsho";
console.log(fullName);

// Difference 4 -------
// scope
// var maintains only function scope, but not block scope or global scope
// let and const maintain all scope
