/* 
Topic: JavaScript Basics

Focus: Variables, data types, arithmetic, strings, random numbers, template literals, increments
*/

// Instructions: Complete each exercise below by writing your code where indicated.

// 1. Declare variables firstNumber=5 and secondNumber=3 and log their sum.
// CODE HERE
const firstNumber = 5;
const secondNumber = 3;

console.log('Ex. 1', firstNumber + secondNumber);


// 2. Declare variables userName and userAge. Log a greeting: "Hello! I am (userName) and I am (userAge) years old."
// CODE HERE
const userName = 'John';
const userAge = 25;
// Using template literals:
console.log('Ex. 2', `Hello! I am ${userName} and I am ${userAge} years old.`);
// String concatenation:
console.log('Ex. 2', 'Hello! I am ' + userName + ' and I am ' + userAge + ' years old.');

// 3. Declare variables a=10 and b=4. Log the result of a-b, a*b, and a/b.
// CODE HERE
const a = 10;
const b = 4;
console.log('Ex 3', a - b, a * b, a / b);

// 4. Use template literals to log: "My name is (userName). I like JS."
console.log('Ex 4',`My name is ${userName} . I like JS.`);

// 5. Declare a string password = "securePass". Log the length of password.
const password = "securePass";
console.log('Ex.5. Password length: ', password.length);

// 6. Convert the string "hello world" to uppercase and log it.
// CODE HERE
const greeting = "hello world";
console.log('Ex.6.', greeting.toUpperCase());

let mixedCaseGreeting = '';
greeting.split('').forEach((char, index) => {
  if (index === 0 || index % 2 === 0) {
    mixedCaseGreeting += char.toUpperCase();
  } else {
    mixedCaseGreeting += char.toLowerCase();
  }
})
console.log(mixedCaseGreeting); // HeLlO WoRlD

/*
[
  'h', 'e', 'l', 'l',
  'o', ' ', 'w', 'o',
  'r', 'l', 'd'
]

*/

// 7. Concatenate "Hello" and "World" with a space in between and log the result.
// CODE HERE

// 8. Check the type of a variable, e.g., let x = 42. Log the type using typeof.
// CODE HERE
const x = 42;
console.log('Ex.8', typeof x);
// 9. Convert the number 100 to a string and log the result.
const number = 100;
console.log('Ex.9', number, number.toString());

// 10. Convert the string "50" to a number and log its type to confirm the conversion.
console.log('Ex.10', parseInt("50"), parseInt("2.5"), parseInt("2,5"), parseInt("Batikan") );

// 11. Generate a random integer between 2 and 10 and log it.
console.log(Math.random()); //0.8763250588907179
const randomFrom2To10 = Math.random() * 8 + 2;
console.log('Ex.11', Math.floor(randomFrom2To10));

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.
const down = Math.floor(3.7);
const up = Math.ceil(3.2);

console.log('Ex.12', down, up);



// 13. Declare a boolean variable isStudent = true. Log it.
const isStudent = true;
console.log('isStudent:', isStudent); // true


// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.
let counter = 0;
counter++;
console.log("counter:", counter); // 1


// 15. Initialize points = 10, add 5 to it using points += 5, then log points.
let points = 10;
points += 5;
console.log("points:", points); // 15


// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.
const namee = 'Alice';
const age = 30;
const city = 'Paris';

console.log('${namee} (${age}) lives in ${city}');

// 17. Declare variables x=5, y=10, z=15. Log their total sum.
const xx = 5;
const y = 10;
const z = 15;

console.log('Sum: ${xx + y + z}');  // Output: Sum: 30

// 18. Declare dividend=10 and divisor=3. Log the quotient (divisionResult) and difference (differenceResult).
// CODE HERE
const dividend = 10;
const divisor = 3;
const divisionResult = dividend / divisor;  // 3.3333333333333335
const differenceResult = dividend - divisor; // 7     
console.log('Ex.18', divisionResult, differenceResult);

// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.

const firstName = 'John';
const lastName = 'Doe';   

const fullName = firstName + ' ' + lastName; // John Doe
console.log('Ex.19', fullName); // John Doe

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
// CODE HERE
const firstFactor = 7;
const secondFactor = 2; 
const product = firstFactor * secondFactor; // 14
console.log('Ex.20', product); // 14

// 21. Log the value of Math.PI.

console.log('Ex.21', Math.PI); // 3.141592653589793

// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.
// CODE HERE
let counterEx22 = 0;
counterEx22++; // 1
console.log('Ex.22', counterEx22); // 1
counterEx22 += 1; // 2  

console.log('Ex.22', counterEx22); // 2
counterEx22 = counterEx22 + 1; // 3
console.log('Ex.22', counterEx22); // 3


// 23. Declare initialTemperature=20. Increase it by 5 and log the result.

const initialTemperature = 20;
const increase = 5; // 5 degrees increase
const finalTemperature = initialTemperature + increase; // 25 degrees 
console.log('Ex.23', finalTemperature); // 25 degrees


// 24. Declare numberEx9=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.
// CODE HERE

const numberEx9 = 6;
const incrementedValueEx9 = ++numberEx9; // 7 
console.log('Ex.24', numberEx9, incrementedValueEx9); // 7 7

// 25. Declare numberEx10=8. Increment it using the postfix ++ operator and log both the original variable and the incremented value.

const numberEx10 = 8;
const incrementedValueEx10 = numberEx10++; // 8 (original value)  
// 9 (incremented value)
console.log('Ex.25', numberEx10, incrementedValueEx10); // 9 8  


// 26. Declare numberEx11=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
// 

const numberEx11 = -3;
const incrementedValueEx11 = ++numberEx11; // -2  
const finalValueEx11 = incrementedValueEx11 * 2; // -4
console.log('Ex.26', numberEx11, incrementedValueEx11, finalValueEx11); // -2 -2 -4

// 27. Declare a=2 and b=3. Increment a using the prefix ++ operator, then add b to the result and log it.

const aEx27 = 2;
const bEx27 = 3;  
const incrementedValueEx27 = ++aEx27; // 3
const sumEx27 = incrementedValueEx27 + bEx27; // 6
console.log('Ex.27', incrementedValueEx27, sumEx27); // 3 6 