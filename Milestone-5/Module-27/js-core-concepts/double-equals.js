// double equals does type coercion if it gets one or two primitive type
console.log(2==2);
console.log(2=='2'); // converts the string '2' to number 2 and then compares. returns true.
console.log(1 == true); // true is converted to 1 and then compared. returns true.
console.log(0 == false); // false is converted to 0 and then compared. returns true.
console.log(true == '1'); // true is converted to 1 and then compared with '1'. '1' is converted to number 1 and then compared. returns true.
console.log(false == '0');
console.log(null == undefined);
console.log(NaN == NaN);
console.log([5] == '5');
console.log({} == {});
console.log([] == []);

console.log([5].toString())