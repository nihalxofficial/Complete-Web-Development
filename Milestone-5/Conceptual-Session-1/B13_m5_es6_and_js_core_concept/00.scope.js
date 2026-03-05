// Scope -> গন্ডি বা সীমানা

// 3 types of scope -> 1. Global scope, 2. Block scope , 3. Function scope or local scope

// Global scope

const test = "test";

if (true) {
  console.log(test);
}
for(let i = 0; i<5;i++){
    console.log(test);
}


// Block scope
// var not maintains block scope
// let and const maintains block scope
{
  var test1 = "test1";
  let test2 = "test2";
}

console.log(test1);
// console.log(test2);

// Function or local scope
// var, let and const all are maintaining function scope
function myFunc() {
  // var test3 = "test3"
  let test4 = "test4";
  const test5 = "test5";
}

myFunc();
// console.log(test3);
// console.log(test5);
