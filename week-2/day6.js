// Task 1: Sum of numbers
// Write a function that returns the total sum of all numbers.

// Example:
// sumAll([1, 2, 3, 4, 5]) // → 15

// Your starter template:
// function sumAll(arr){
//     return arr.reduce((acc, n) => {

//     }, 0);
// }

// console.log(sumAll([1,2,3,4,5]));
// Fill in the missing part.

function sumAll(arr){
    return arr.reduce((acc, n) => {
    return acc + n;
    }, 0);
}

console.log(sumAll([1,2,3,4,5]));

// 🧪 Task 2: Count how many users are active

// Given:

// [
//   { name: "Charles", active: true },
//   { name: "Anna", active: false },
//   { name: "Marco", active: true }
// ]

// You must return:

// 2

// Starter:

function countActive(users){
    return users.reduce((acc, user) => {
        return user.active - acc;
    }, 0);
}

console.log(countActive([
  { name: "Charles", active: true },
  { name: "Anna", active: false },
  { name: "Marco", active: true }
]));

// Correct way:

function countActive(users){
    return users.reduce((acc, user) => {
        return acc + (user.active ? 1 : 0);
    }, 0);
}
