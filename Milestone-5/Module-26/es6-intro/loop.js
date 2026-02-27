const numbers = [1, 2, 3, 4, 5];

// for(const number of numbers) {
//     console.log(number);
// }

const employee = { 
    name: 'John Doe', 
    1: 'desk one',  
    'home-address': '123 Main St',
    salary: 50000,
    position: 'Software Engineer' 
};

for(const key in employee) {
    const value = employee[key];
    console.log(key, value)

}