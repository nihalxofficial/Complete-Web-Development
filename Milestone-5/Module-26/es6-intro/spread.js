const max = Math.max(3, 5, 1, 8, 2, 58, 1);
// console.log(max);

const numbers = [3, 5, 1, 8, 2, 58, 1];
const max2 = Math.max(...numbers);
console.log(...numbers);
const params = [45, 12, 3];
function sum(x, y, z) {
    console.log(x, y, z);
    return x + y + z;
}
// const result = sum(...params)
// console.log(result);

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);
const arr1 = [1, 2, 3];
const arr2 = [11, ...arr1, 66, 77];
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);

const person = { name: 'Alice', age: 30 };
// const person2 = person;
const person2 = {...person, designation: 'Developer'};
person.salary = 36000;
console.log(person);
console.log(person2);