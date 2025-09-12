// ASYNC (PROMISES & ASYNC/AWAIT)

//callbacks(old style)
setTimeout(() => {
    console.log("This set to pop in 2 seconds.");
},2000)

// Promise
let promise = new Promise((resolve, reject) => {
    let success = true;
    
    if(success){
        resolve("Task Complete!"); //can be console.log("")
    }else{
        reject("Task Failed!"); //can be console.log("")
    }
})

promise
.then(result => console.log(resolve))
.catch(err => console.log(err))

// ASYNC & AWAIT
const getData = async () => {
    return 'Hello async!';
}
getData().then(console.log)

// with Await
const delayed = async () => {
    let promise = new Promise(resolve => {
        setTimeout(() => {console.log("Done after 2 sec")},2000);
    });
    
    let result = await promise;
    console.log(result);
}

delayed();

// FETCH API
const fetchPosts = async () => {
    try{
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        console.log(data.slice(0,3));
    }catch(err){
        console.log(err);
    }
}

fetchPosts();

// Do the following:
// Create a promise that resolves with "Hello Charles" after 2 seconds.
// Convert it into async/await.
// Use fetch to get posts from
// 👉 https://jsonplaceholder.typicode.com/posts
// and print the first 5 post titles.

const fetchPost = async () => {
    try{
        let promise = new Promise(resolve => {
        setTimeout(() => {resolve("Hello Charles!")}, 2000);
    })
             let result = await promise;
             console.log(result);
             
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data.slice(0,5));
    }catch(err){
        console.log("Error: ", err);
    }
    
}

fetchPost();