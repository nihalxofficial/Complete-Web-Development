// Falsy value -> false, 0, "", null, undefined, NaN
// Truthy value => falsy value baad diye baki shob kichu hocche truthy value

// if("Utsho"){
//     console.log("Hello");
// }

let person = {
  name: "Utsho",
  hobby: null,
};

if (person.hobby) {
  console.log(person.hobby);
} else {
  person.hobby = ["Reading", "Traveling"];
  console.log(person.hobby);
}
