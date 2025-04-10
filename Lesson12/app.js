let greeting = 'Hello, world!';
greeting = 'Bye';

// "Hello, world!";

const age = 25;
const height = 180.5;
console.log('The height is:', typeof height);


let isAdmin = true;
// console.log('First console.log statement:', isAdmin);

isAdmin = false;

console.log('Is admin? ', typeof isAdmin);


let userName;
console.log('The type of the name:', typeof userName);

userName='admin';
console.log(
  'The type of the name:',
  typeof userName,
  userName);

// In JS, we user camelCase for variables

const userStatus = null;
console.log('The type of the userStatus:', typeof userStatus, userStatus);


const userAddress = {
  // Key - value pair
  line1: '123 Main St',
  city: 'New York',
  state: 'NY',
  postalCode: '10001',
  country: 'USA',
  isActive: true,
};

const user = {
  name: 'John Doe',
  age: 30,
  isAdmin: false,
  address: userAddress,
}

const user2 = {
  name: 'Jane Doe',
  age: 25,
  isAdmin: true,
  address: {
    line1: '456 Elm St',
    city: 'Los Angeles',
    state: 'CA',
    postalCode: '90001',
    country: 'USA',
    isActive: false,
  },
}

const contactBook = [
  user, // 0 
  user2 // 1
];


// const contactBookObj = {
//   0: user,
//   1: user2,
// }



const mixedArray = [
  1,
  'Hello',
  true,
  null,
  undefined,
  { name: 'John' },
  [1, 2, 3],
  function() { console.log('Hello from the function!'); },
]



