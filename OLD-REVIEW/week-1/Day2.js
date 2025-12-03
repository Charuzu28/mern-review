// FUNCTIONS

// Task 1
function square(a){
    return Math.sqrt(a)
}
console.log(square(55));

// TASK 2

function isEven(a){
    return a % 2 === 0;
}
console.log(isEven(10));

// TASK 3

function greet(){
    console.log('Good Morning!');
}

greet();

// ARROW FUNCTION
const greet = () => 'wassup!';

console.log(greet()); // wassup

const square = (a) => {
    return Math.sqrt(a)
}
console.log(square(55));  // 7.8


const even = (a) => {
    return a % 2 === 0;
}
console.log(even(55)); // False
