// ADVANCE DESTRUCTURING

// Task 1
// Destructure nested objects.
 const user = {
    name: "Charles",
    age: 24,
    gender: "Male"
 };

 const { name } = user;
 console.log(name);
// Swap two variables using array destructuring.
const array = [1, 2, 3];

let [num1, num2] = array;
console.log(`${num1} and ${num2}`);

[num1, num2] = [num2, num1];
console.log(`${num1} and ${num2}`);

// Task 2
// Clone and merge two arrays using spread.
const number = [1,2,3,4];
const number2 = [5,6,7];

const merge = [...number, ...number2];
console.log(merge); //123456

// Write a function that uses rest parameters to calculate an average.
function ave (...args){
   const total = args.reduce((sum, num,) => sum + num,0 );
   return total / args.length;
}
console.log(ave(1,2,3,4)); //2.5

// Task 3
// Create a utils.js file that exports formatDate, capitalize, and randomNumber functions.
// Import and use them in index.js.
import { formatDate, capitalize, randomNumber } from "./utils";

console.log(formatDate(new Date()))
console.log(capitalize('Hello'))
console.log(randomNumber(1,100))

// Task4 
// Write your own version of map and filter.
// Use reduce to flatten a 2D array.

const fruits = [
    {   name: "apple",
        price: 65,
        quantity: 3
    },
    {
        name: "banana",
        price: 76,
        quantity: 5
    },
    {
        name: "grapes",
        price: 100,
        quantity: 2
    }
];
// Filter
const expensiveFruits = fruits.filter(fruit => fruit.price > 70);
console.log(expensiveFruits);
// Map
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);
// Reduce
const totalCost = fruits.reduce((sum, fruit) =>{
    return sum + fruit.price * fruit.quantity;
},0)
console.log(totalCost);