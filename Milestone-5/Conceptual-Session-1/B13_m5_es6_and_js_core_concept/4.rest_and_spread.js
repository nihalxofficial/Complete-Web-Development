// Rest operator ***
function myFunc(a, b, c, ...otherParamters) {
  console.log(a, b, c, otherParamters);
}

// myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Spread operator ***
// Array
let arr = [10, 5, 20, 30, 150];
// console.log(...arr);
let arr2 = [...arr]; //copy independently

console.log(Math.max(...arr));
console.log(Math.min(...arr));






// Object
const obj = {
  name: "Utsho",
  roll: 20,
};
const obj2 = { ...obj }; // copy independently
// const obj2 = obj;

obj.name = "Ahashan Habib";

obj.roll = 25;

// console.log(obj2);
