const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for( const num of numbers) {
    sum = sum + num;
}

// const total = numbers.reduce((acc, num) =>acc + num, 0)
const total = numbers.reduce((acc, num) => acc + num, 0)
console.log(sum);