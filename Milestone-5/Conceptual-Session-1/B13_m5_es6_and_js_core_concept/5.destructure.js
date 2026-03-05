// Array destructure
let arr = [10, 20, 30, 40, 50, 60, 70];

// let ten = arr[0];
// let fourty = arr[3];
// let fifth = arr[5];

let [ten, twenty, thirty, , , sixty, ...restElement] = arr;

// console.log(ten, twenty, thirty, sixty);

// Object destructure
let person = {
  name: "Utsho",
  roll: 29,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
    street: {
      roadNumber: "27 Ab 10",
      test: "test",
    },
  },
  isMarried: false,
  isMillioner: false,
  homeTown: null,
  hobby: ["Reading", "Traveling", "Watching movie"],
};

// let name = person.name;
// let roll = person.roll;
let {
  roll: myRoll,
  name: myName,
  address: {
    city,
    country,
    street: { roadNumber, test },
  },
  isMarried,
  ...rest
} = person;

console.log(myRoll, myName, city, country, roadNumber, test, rest);

