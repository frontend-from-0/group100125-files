// 1. Convert the function below into asyncrounous function using async/await and try/catch syntax.
function fetchPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => console.log(posts))
    .catch((error) => console.error(error));
}

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    console.log(posts);
  } catch (error) {
    console.error(error);
  }
}

// 2. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully!');
    }, 2000);
  });
};

(async function () {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();

// 3. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) throw Error('Failed fetching users');
  const users = await response.json();
  console.log(users);
  return users;
};

(async function () {
  try {
    const result = await fetchUsers();
    console.log('Total users:', users.length);
  } catch (error) {
    console.error(error);
  }
})();

// 4. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchUserData = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

fetchUserData()
  .then((user) => console.log('User data:', user))
  .catch((error) => console.error('Error:', error));

// 5. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const getPostsAndComments = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((post) => {
      return fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`,
      );
    })
    .then((response) => response.json())
    .then((comments) => console.log(comments))
    .catch((error) => console.error(error));
};

// 6.Convert the function below into asyncrounous function using async/await and try/catch syntax.

const fetchWithTimeout = (url, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error));
    }, timeout);
  });
};

fetchWithTimeout('https://jsonplaceholder.typicode.com/posts', 2000)
  .then((posts) => console.log(posts))
  .catch((error) => console.error(error));
