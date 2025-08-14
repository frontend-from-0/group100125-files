// 1. Array Destructuring
// Given the following array, use array destructuring to assign the values of x, y, and z to their respective variables:
const coordinates = [10, 20, 30];

const [x, y, z] = coordinates;
console.log(`Ex. 1. Result is x: ${x} y: ${y} z: ${z}`);

// 2. Object Destructuring
// Given the following object, use object destructuring to assign the values of name and age to their respective variables:
const personE14 = {
  isStudent: true,
  name: 'John Doe',
  age: 25,
};

const { age, name } = personE14;
console.log(`Ex. 2 age: ${age} name: ${name}`);

// 3. Array Destructuring with Default Values
// Given the following array, use array destructuring with default values to assign the values of a, b, and c, with default values of 1, 2, and 3 respectively:
let numbers = [4, undefined, NaN];
const [a = 1, b = 2, c = 3] = numbers;
console.log(`Ex:3 Result is a: ${a} b: ${b} c:${c}`);

// 4. Object Destructuring with Renaming
// Given the following object, use object destructuring with renaming to assign the value of name to a variable named fullName:
const personE16 = {
  name: 'Jane Doe',
};

const { name: fullName } = personE16;
console.log(`Ex4: Full name is: ${fullName}`);

// 5. Nested Object Destructuring
// Given the following nested object, use object destructuring to assign the values of name, age, and city to their respective variables:
const personE17 = {
  name: 'John Doe',
  age: 25,
  address: {
    city: 'New York',
  },
};

const {
  name: nameE17,
  age: ageE17,
  address: { city: cityE17 },
} = personE17;
console.log(`Ex5. name: ${nameE17} age: ${ageE17} city: ${cityE17}`);

// 6. Default Parameters + Arrow function
// Convert Named Function to Arrow Function with Default Parameters
function greet(name = 'Aysen', greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}

console.log(greet());
console.log(greet('Batikan'));
console.log(greet('Anna', 'Hi!'));
console.log(greet(undefined, 'How are you?'));

// 7. Default Parameters
// Add Default Parameters to an Existing Arrow Function, Default tax rate 0.1, default discount is 0.
const calculateTotal = (price, taxRate = 0.1, discount = 0) => {
  return price + price * taxRate - discount;
};

console.log('Price: ' + calculateTotal(150));

// Optional Chaining
// Optional chaining allows you to safely access deeply nested properties.

// 8. Safe Access to Nested Object Properties
// Update the code to safely access userName and userCity using optional chaining to handle cases where properties might be missing.
const userEx8 = {
  profile: {
    // optional
    name: 'Alice',
    address: {
      city: 'Wonderland',
    },
  },
};

console.log(
  `Ex:8 UserName is: ${userEx8?.profile?.name} and User City is: ${
    userEx8?.profile?.address?.city ?? 'Nicosia'
  }`,
);

// 9. Handle Missing Properties
// Update the code to use optional chaining to safely access userCountry and provide a default value of 'Unknown' if the property is missing.

const userEx9 = {
  profile: {
    name: 'Alice',
  },
};

console.log(
  `Ex.9 userCountry is: ${userEx9?.profile?.userCountry ?? 'Unknown'}`,
);

// 10. Optional Chaining with Function Calls
// Update the code to safely call the getName function using optional chaining, considering that profile or getName might be missing.

const userEx10 = {
  profile: {
    getName: function () {
      console.log('Alice');
    },
  },
};

console.log(
  `Ex.10 user name is: ${userEx10?.profile?.getName?.() ?? 'Unknown'}`,
);

// 11. Rewrite the code using the nullish coalescing operator to assign a default value to storedData only if userInput is null or undefined.
let userInput = false;
let storedData = userInput ?? 'Default Value';

console.log('Ex. 11: ', storedData); // Default Value

// 12. Rewrite the code using the nullish coalescing operator to display number of users even if it is 0.
let userCount = 0;
let displayCount = userCount ?? 'No users';

console.log('Ex. 12', displayCount); // No users

// 13. Rewrite the code using the nullish coalescing operator to assign a default value of 3000 to timeout if config.timeout is null or undefined.

const config = {
  timeout: null,
};

const timeout = config.timeout ?? 3000;

console.log(timeout); // 3000
