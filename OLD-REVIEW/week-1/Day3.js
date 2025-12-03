// ARRAY

let num = [1,2,3,4,5];

console.log(num);

// PUSH,POP,UNSHIFT,SHIFT
let arr = [1,2,3,4,5];

//num.pop();
//num.push(4);
//num.unshift(3);
//num.shift();

console.log(num);

// ITERATE ARRAYS
let fruits = ['apple', 'banana', 'guava', 'avocado'];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

//fruits.forEach(fruit => console.log(fruit));


//Map, Filter, Reduce = Power tool in js
let n = [1,2,3,4,5,6];

let square = n.map(n => n* n);
let even = n.filter(n => n % 2 === 0);
let sum = n.reduce((acc, n) => acc + n, 0)

console.log(square);
console.log(even);
console.log(sum);

// Find, Every, Some

let users = ['Bruno', 'Hisham', 'Sabrina'];

console.log(users.find(u => u === 'Bruno'));
console.log(users.some(u => u.startsWith('H')));
console.log(users.every(u => u.length > 2));

// TASK
// Do the following:
// Make an array of numbers [2, 4, 6, 8, 10].
// Use map → return each number squared.
// Use filter → return only numbers > 5.
// Use reduce → find the sum.
// Use find → get the first number greater than 7.

let n2 = [2,4,6,8,10];

console.log(num.map(n => n * n)); //SQAURE
console.log(num.filter(n => n % 5 === 0)); //5
console.log(num.reduce((acc, n) => acc + n, 0)); //Sum = 15
console.log(num.find(n => n > 7));