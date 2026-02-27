const employee = { 
    name: 'John Doe', 
    1: 'desk one',
    'home-address': '123 Main St',
    salary: 50000,
    position: 'Software Engineer' 
};

// dot notation
// console.log(employee.name);
// console.log(employee.1);
// console.log(employee.home-address);
const salary = employee.salary;

// bracket notation
console.log(employee['name']);
console.log(employee[1]);
console.log(employee['home-address']);

const money = employee ['salary'];
const key = 'position';

console.log(employee[key]);