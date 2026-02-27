const employee = { 
    name: 'John Doe', 
    1: 'desk one',
    'home-address': '123 Main St',
    salary: 50000,
    family: {
        father: 'Richard Doe',
        mother: {
            name: 'Jane Doe',
            age: 55
        }
    },
    position: 'Software Engineer' 
};

const value = employee.name;
console.log(employee.family?.mother?.age)