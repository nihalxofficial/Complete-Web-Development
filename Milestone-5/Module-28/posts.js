const loadPost = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPost(data))
    .catch(error => console.log("Error is", error));
}


const displayPost = (posts) => {
    const postContainer = document.getElementById("posts-container");
    postContainer.innerHTML = "";
    posts.forEach(post => {
        console.log(post);
        const postCard = document.createElement("div");
        postCard.classList = "post-card space-y-3 shadow-md px-6 py-4 bg-white rounded-lg"
        postCard.innerHTML = `
            <h2 class="text-2xl font-bold">${post.title}</h2>
            <p class="font-semibold text-gray-600 text-justify">${post.body}</p>
        `        
        postContainer.appendChild(postCard);
    });
}
loadPost();