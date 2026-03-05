// Traditional function is hoisted, but arrow function is not

console.log("Multiplication -> ", multiply(5, 10));
function multiply(a, b) {
  return a * b;
}

// Arrow function
// const sum = (a, b) => a + b; //Implicitly return

const sqrt = (a) => a * a;

console.log(sum(5, 5));
console.log(sqrt(5));

// optional  ***
// function myFuncNormal() {
//   console.log(this);
// }
// myFuncNormal();

const myFuncArrow = () => {
  console.log(this);
};

let person = {
  name: "Utsho",
  age: 26,
  showMyInfo: function () {
    console.log(this.name);
  },
};

person.showMyInfo();
