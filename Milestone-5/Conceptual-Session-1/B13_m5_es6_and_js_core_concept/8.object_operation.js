//   dot notation, bracket notation, nested object, optional chaining, Object.keys, Object.values, Object.entries, loop through using for in and array method after Object.keys, freeze, seal, delete,

let person = {
  name: "Utsho",
  age: 26,
  getInfo: () => {
    console.log(`My name is ${person.name}`);
  },
  address: {
    city: "Dhaka",
    country: "Bangladesh",
    street: {
      roadNumber: "27 Ab 10",
      test: "test",
    },
  },
};
let person2 = {
  name: "Rahim",
  age: 35,
  getInfo: () => {
    console.log(`My name is ${person.name}`);
  },
  address: {
    city: "Dhaka",
    country: "Bangladesh",
    street: null,
  },
};

// Access property's value
// Dot notation
// console.log(person.name);
// console.log(person.age);

// Bracket notation
let name = "name";
// console.log(person["name"]);
// console.log(person[name]); // dynamic

// Nested object ****
console.log(person.address.street?.roadNumber); // optional chaining
console.log(person2.address.street?.roadNumber); // optional chaining

// Object.keys, Object.values ****

let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);
// console.log(keys.length);

// for in and array method after Object.keys ****
// for (let property in person) {
//   console.log(property ," ->  ", person[property]);
// }

// for(let key of keys){
//     console.log(person[key]);
// }

// freeze, seal, delete, ***

let car = {
  brand: "Toyota",
  color: "Black",
  model: "ABC",
};
// delete car.color // delete a property

// Object.freeze(car) // Prevent insert, delete and update
// car.color = "White"
// delete car.model
// car.engine = "Test"

Object.seal(car); // prevent insert, delete
car.engine = "Test";
delete car.color;
car.color = "Red";

console.log(car);

// Copy obj independently ***
let car2 = { ...car };


