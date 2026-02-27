const students = [
    { name: 'Tormuj', age: 22 },
    { name: 'Zaved', age: 31 },
    { name: 'Naved', age: 23 }, 
    { name: 'Khaled', age: 20 },
    { name: 'Sajed', age: 34 },
    { name: 'Nahid', age: 22 },
    { name: 'Nasib', age: 41 },
]

const student = students.find(std => std.name[0] === 'N');
console.log(student);