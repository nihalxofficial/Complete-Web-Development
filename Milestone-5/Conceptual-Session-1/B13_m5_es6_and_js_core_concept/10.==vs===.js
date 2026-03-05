// == vs ===

let num = 5;
let num2 = "5";

// == is loose equality -> 1. only check value, 2. Behind the scene type coercion
console.log(num == num2);


// === is strict equality -> 1. check value and data type both
console.log(num === num2);