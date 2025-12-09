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
    {
    name: "Charles",
    age: 24,
    isAdmin: true
    },
    {
    name: "John",
    age: 20,
    isAdmin: false
    },
    {
    name: "Mad",
    age: 22,
    isAdmin: true
    }
];

console.log(users[1].name);
users.push(
    {
    name: "Juan",
    age: 19,
    isAdmin: false
    }
    );
users.shift()
console.log(users[2].name);

// B. Write a function: findAdmin(users)
// Return the first user where isAdmin === true.
// If no admin found → return null.

// Example:
// findAdmin([
//     {name:"A", isAdmin:false},
//     {name:"B", isAdmin:true}
// ]) 

// → returns {name:"B", isAdmin:true}
// No console.log inside. Just return.
function findAdmin(users){
    const found =  users.find(user => user.isAdmin === true)
    return found || null;
}
console.log(findAdmin([
    {name:"A", isAdmin:false},
    {name:"B", isAdmin:true}
    ]));

// C. Predict the output
// Do NOT run this first:
// const a = { value: 10 };
// const b = a;
// b.value = 99;

// console.log(a.value); //99
// console.log(b.value); //99

// Tell me:
// exact output
// WHY it happens

//The output of both is 99 because of the (const b = a ) and it change the value of 10 because it redelcared because of b.value = 99;
//CORRECT ANSWER: 
// a and b both point to the same object in memory.
// Changing b.value changes the same object, so a.value also reflects the new value.
// That’s the real reason.

// D. Mini Algorithm — countAdults(users)
// Age ≥ 18 → adult.
// Write a function that returns how many users are adults.

// Example:
// countAdults([
//   {age:10},
//   {age:30},
//   {age:18}
// ])
// → 2

function countAdults(users){
    let count = 0;
    users.find(user => {
        if(user.age >= 18){
            count++;
        }
    })
    return count;
}
console.log(countAdults([
    {age:10},
     {age:30},
     {age:18}
    ]));