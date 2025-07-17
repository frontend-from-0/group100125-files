/*
Promises in JS
A *Promise* is like a placeholder for a future value or action.

Think of it like ordering food at a restaurant: you place an order (Promise), and you'll get your food (result) when it's ready.


Here’s why we need them:

1. Asynchronous Operations: JavaScript, being single-threaded, executes operations asynchronously for tasks like fetching data from a server, reading files, or waiting for user input. Promises provide a way to manage these operations without blocking the main thread.

2. Sequential Execution: Promises allow us to chain asynchronous operations sequentially using .then() and .catch() methods, making the code more readable and maintainable compared to nested callbacks.

3. Error Handling: Promises have built-in error handling through the .catch() method, which makes it easier to manage and propagate errors across asynchronous operations in a chain.

4. Composition: Promises can be composed together using Promise.all(), Promise.race(), and other methods, allowing us to coordinate multiple asynchronous operations and handle their results collectively.

5. Readability: Promises improve the readability of asynchronous code by making it resemble synchronous code in structure. This makes it easier for developers to reason about the flow of execution.


Fetch API uses Promises under the hood, it's the main way how we will be using them.
*/

/*
  How to create a Promise?

  const myExamplePromise = new Promise((resolve, reject) => { 
    //code here 
  });
*/

const myPromise = new Promise((resolve, reject) => {
  // Inside the Promise, you can place the code you want to execute asynchronously.

  // Simulate a delay using setTimeout
  setTimeout(() => {
    const randomValue = Math.random(); // Generate a random number

    // Simulate success (resolve) if the random number is greater than 0.5
    if (randomValue > 0.5) {
      resolve(`Success! Random Value: ${randomValue}`);
    } else {
      // Simulate an error (reject) if the random number is 0.5 or less
      reject(`Error! Random Value: ${randomValue}`);
    }
  }, 2000); // Delay for 2 seconds (2000 milliseconds)
});

myPromise
  .then((result) => {
    console.log(result); // This code will execute if the Promise is resolved
  })
  .catch((error) => {
    console.error(error); // This code will execute if the Promise is rejected
  });

console.log('Promise created. Waiting for it to resolve or reject...');

/* Asyc / await syntax for working with Promises */

// Examples of making a function asyncronous
// Function declaration
async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  const posts = await response.json();

  function fetchComments(posts) {
    posts.map(async function (post) {
      const commentsRes = await fetch(
        `https://google.com/posts/${post.id}/comments`,
      );
      const comments = await commentsRes.json();
    });
  }
  fetchComments(posts);
}

fetchData();

// Function expression
// const fetchData = async function () {
//   const response = await fetch('https://google.com/posts');
//   const posts = await response.json();
// }
// Arrow function

// const fetchPosts = async () => {
//   const response = await fetch('https://google.com/posts');
//   const posts = await response.json();
// }

// const fetchPost = async (postId) => {
//   const response = await fetch('https://google.com/posts/' + postId);
//   const posts = await response.json();
// }

// Try, catch, finally

async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw Error('Failed fetching users');
    const users = await response.json();
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Done fetching users!');
  }
}

// const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts/1');
// const fetchComments = fetch(
//   'https://jsonplaceholder.typicode.com/posts/1/comments',
// );

// Promise.all([fetchPosts, fetchComments])
//   .then((responses) => {
//     const postsRes = responses[0];
//     const commentsRes = responses[1];
//     return [postsRes.json(), commentsRes.json()];
//   })
//   .then((data) => {});

// async function getPosts() {
//   try {
//     const response = await fetch(URL);
//     if (!response.ok) throw Error('Failed to fetch posts');
//     const json = await response.json();

//     json.map((post) => {
//       const div = document.createElement('div');
//       div.classList.add('post');
//       const h3 = document.createElement('h3');
//       h3.innerText = post.title;

//       const p = document.createElement('p');
//       p.innerText = post.body;

//       div.appendChild(h3);
//       div.appendChild(p);

//       const container = document.getElementById('container');
//       container.appendChild(div);
//     });
//   } catch (error) {
//     const errorElement = document.createElement('p');
//     errorElement.innerText = 'Failed to fetch posts, please try again later';

//     container.appendChild(errorElement);

//     console.error(`Failed to fetch posts, please try again later.`);
//   }
// }
