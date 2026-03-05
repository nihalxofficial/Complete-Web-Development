const greet = (name, message, cb) => {
  console.log(`Hi, ${name}`);
  cb(message)
};

const sayGreetings = (message) => {
  console.log(message);
};

greet("Utsho", "Good night", sayGreetings);
