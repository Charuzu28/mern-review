// Week 2 — Day 3
// Exercise A — Clean and Transform User Data

// You’ll simulate what backend devs do daily:
// filtering, mapping, and reshaping complex data.

// Given:
// const users = [
//   { name: "Charles", age: 24, active: true },
//   { name: "Anna", age: 17, active: false },
//   { name: "Marco", age: 30, active: true },
//   { name: "Bella", age: 15, active: true },
//   { name: "John", age: 40, active: false }
// ];
// Task:
// Write a function:
// function getActiveAdults(arr)
// Rules:
// Keep only users age 18 and above
// Keep only users where active === true
// Return a NEW array of names only
// → not age, not active, only names
// Must use filter → filter → map in that order
// Expected Output:
// getActiveAdults(users) 
// → ["Charles", "Marco"]

function getActiveAdults(arr) {
    return arr.filter(u => u.age >= 18 && u.active === true).map(n => n.name);
}
console.log(getActiveAdults([
    { name: "Charles", age: 24, active: true },
    { name: "Anna", age: 17, active: false },
    { name: "Marco", age: 30, active: true },
    { name: "Bella", age: 15, active: true },
    { name: "John", age: 40, active: false }
]))