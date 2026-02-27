const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);
const friends = ['zaved', 'naved', 'khaled', 'sajed', 'nahid', 'nasib'];
const NFriends = friends.filter(frd => frd[0]=== 'n');

const students = [
    { name: 'Tormuj', age: 22 },
    { name: 'Zaved', age: 31 },
    { name: 'Naved', age: 23 }, 
    { name: 'Khaled', age: 20 },
    { name: 'Sajed', age: 34 },
    { name: 'Nahid', age: 22 },
    { name: 'Nasib', age: 41 },
]
const olderStudents = students.filter(std => std.age > 30);
console.log(olderStudents);