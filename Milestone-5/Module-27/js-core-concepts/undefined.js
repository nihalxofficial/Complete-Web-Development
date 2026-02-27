let data;
// console.log(data);
const sum = (a, b) => {
    console.log(a, b);
}
// sum(5);

const student = {
    name: 'Tormuj',
    age: 22,
    salary: null,
};

delete student.name;

// console.log(student.marks)
// console.log(student.name);

const arr = [1, 2, 3, 4];
delete arr[1];
console.log(arr[1]);

// console.log(typeof undefined);
console.log(typeof null);

function test() {
    console.log('Hello');
    return;
}

const result = test();