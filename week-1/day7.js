// A. Create an array of objects 
// Make a variable called users that contains 3 objects: 
// Each object must have:
// name
// age
// isAdmin 

// Example structure:
// [
//   { name: "Charles", age: 21, isAdmin: false }, 
//   { ... },
//   { ... }
// ] 

// Then:
// Log the name of the 2nd user
// Add a new user to the END
// Remove the FIRST user
// Log the final array

const users = [
  { name: "Charles", age: 24, isAdmin: true },
  { name: "John", age: 20, isAdmin: false },
  { name: "Mad", age: 22, isAdmin: true }
];

console.log(users[1].name); // Logs the name of the 2nd user

users.push({ name: "Juan", age: 19, isAdmin: false }); // Add a new user to the end
users.shift(); // Remove the first user

console.log(users[2].name); // Logs the name of the 3rd user after modifications


// B. Write a function: findAdmin(users)
// Return the first user where isAdmin === true.
// If no admin found → return null.

// Example:
// findAdmin([
//   { name: "A", isAdmin: false },
//   { name: "B", isAdmin: true }
// ])
// → returns { name: "B", isAdmin: true }

// No console.log inside. Just return.

function findAdmin(users) {
  return users.find(user => user.isAdmin === true);
}

console.log(findAdmin([
  { name: "A", isAdmin: false },
  { name: "B", isAdmin: true }
])); // Logs { name: "B", isAdmin: true }


// C. Predict the output
// Do NOT run this first:

// const a = { value: 10 };
// const b = a;
// b.value = 99;
// console.log(a.value);
// console.log(b.value);

// Tell me:
// exact output
// WHY it happens

// Output:
// 99
// 99

// Explanation:
// The reason both outputs are 99 is because of the line `const b = a;`.
// In JavaScript, objects are reference types, meaning `b` and `a` refer to the same object in memory.
// When you modify `b.value = 99;`, it changes the value in the same object that both `a` and `b` reference.


// D. Mini Algorithm — countAdults(users)
// Age ≥ 18 → adult.
// Write a function that returns how many users are adults.

// Example:
// countAdults([
//   { age: 10 },
//   { age: 30 },
//   { age: 18 }
// ])
// → 2

function countAdults(users) {
  let count = 0;
  users.forEach(user => { // Use forEach instead of find
    if (user.age >= 18) {
      count++;
    }
  });
  return count;
}

console.log(countAdults([
  { age: 10 },
  { age: 30 },
  { age: 18 }
])); // Logs 2
