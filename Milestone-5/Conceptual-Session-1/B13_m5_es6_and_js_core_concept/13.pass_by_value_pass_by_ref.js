// Pass by value (pass by primitive value)
const name = "utsho";

const myFunc = (value) => {
    value = "MR Utsho"
  console.log("Inside func -> ", value);
};

// myFunc(name);
// console.log(name);



// Pass by reference (pass by non primitive or referential data type)

const obj = {
    color: "red",
    model: "1j"
}

const myFunc2 = (param)=> {
  param.color = "black"
  console.log("Inside func -> ", param);
}
myFunc2(obj)

console.log(obj);