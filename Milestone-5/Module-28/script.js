const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  occupation: "Developer",
  hobbies: ["reading", "gaming", "hiking"],
};

// console.log(person);

const personJson = JSON.stringify(person);
// console.log(personJson);


const parseJson = JSON.parse(personJson);
// console.log(parseJson);


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json));


const loadPost = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPost(data))
    .catch(error => console.log("Error is", error));
}


const displayPost = (posts) => {
    // console.log(posts);
    posts.forEach(post => {
        console.log(post);
    });
    
}