// map, filter, find, foreach, reduce

let arr = [10, 20, 30, 40, 50];
const phones = [
  {
    name: "iPhone 14 pro",
    price: 90000,
  },
  {
    name: "iPhone 14 pro",
    price: 92000,
  },
  {
    name: "Google pixel 10 pro",
    price: 95000,
  },
  {
    name: "Motorola G85",
    price: 24000,
  },
  {
    name: "iPhone 16 pro",
    price: 135500,
  },
  {
    name: "Samsung S25 ultra",
    price: 112500,
  },
  {
    name: "Samsung j5",
    price: 9000,
  },
];

// Loop through
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// for (let elem of arr) {
//   console.log(elem);
// }

// map - update/modify element of an array ***
let updatedArr = arr.map((elem, ind, array) => elem * 2);

// console.log(updatedArr);

// Filter method -- Filter multiple elements ***
let overEighteen = arr.filter((elem) => elem > 20);
let richPhones = phones.filter(
  (elem) => elem.price > 100000 && elem.name.includes("Samsung"),
);

// console.log(overEighteen);
// console.log(richPhones);

// Find method -- find a single element ***
const findThirty = arr.find((elem) => elem == 30);
const findRichPhone = phones.find((elem) => elem.price > 100000);
// console.log(findThirty);
// console.log(findRichPhone);

// foreach -- Just loop iterate ***
// phones.forEach((elem, ind, arr)=> {
//     console.log(elem);
// })

// Reduce method -- optional  ****
const summation = phones.reduce(
  (accumulator, elem) => accumulator + elem.price,
  0,
);
console.log(summation);
