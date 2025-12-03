// ES6 FEATURES

import { subtract } from "./math";

// TEMPLATE
let admin = 'Charles';
let age = 24;

console.log(`Hello my name is ${admin} and I'm ${age} years old.`);

// DESTRUCTURING
// Array
let number = [1, 2, 3, 4];

let {a, b, c} = number;

console.log(number);

// Object
let user = {name: 'Charles', age: 24, city: 'Legazpi City'};

let {name, city } = user;
    console.log(`I'm ${name} lives in ${city}`);

// SPREAD OPERATOR 
// Copy
let n = [1,2,3,4];
let n2 = [...n, 5,6];

console.log(n2);
// Merge
let n3 = [...n, ...n2];
    console.log(n3);


// REST OPERATOR
// Collect multiple values
function sum(...nums){
    return nums.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1,2,3,4));

// DEFAULT PARAMETERS
function greet(name = 'Guest'){
    return `Hello! ${name}`;
}

console.log(greet('Charles'));
console.log(greet());


// MODULES(IMPORT/EXPORT)
// Export is name math.js

import {add, subtract} from '../week-1/math';

console.log(add(1,2)); //1
console.log(subtract(10,5)); //5

// Do the following:
// Destructure { name, age } from an object.
// Merge two arrays [1,2] and [3,4] using spread.
// Write a function multiply(...nums) that multiplies all numbers given
// Use template literals to print: "Charles is 24 years old."

let user1 = {name: "Charles", age: 24,};

// let {name, age} = user1;
console.log(`${name} is ${age} years old.`);

let number1 = [1,2];
let number2 = [3,4];
let numbers = [...number1, ...number2];
    console.log(numbers);

function multiply(...nums){
    return numbers.reduce((acc, n) => acc * n, 1)
}
console.log(multiply(1,2,3,4));
