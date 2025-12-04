// A. Write a function:
// greet(name) → returns
// "Hello, <name>!"
// Output examples:
// greet("Charles") → "Hello, Charles!"
// greet("GPT") → "Hello, GPT!"
// Make sure it returns, not console.logs.
function greet(name){
    return `Hello, ${name}!`;
}

console.log(greet("Charles"));

// B. Write a function:
// add(a, b) → returns the sum.
// Rules:
// MUST return a number.
// No printing inside the function.
function add(a,b){
    return a + b;
}
console.log(add(5,10));

// C. Write a function:
// isAdult(age)
// If age ≥ 18 → return true
// Else → return false
// No console.log inside the function.
function isAdult(age){
    if(age >= 18){
        return true;
    }else {
        return false;
    }
}
console.log(isAdult(11));

// ANSWER: 
function isAdult(age) {
  return age >= 18;
}


// D. Predict the output (don’t run it first):
// function test(x) {
//   return x * 2;
// }

// console.log(test(5)); //10
// add value to x = 5, 5 * 2 = 10
// console.log(test("5")); //10
// the answer is 10 because of the coercion so the string is force to be converted to number whic is numeric coercion so it will be 5 * 2.
// console.log(test(true)); //2
//The answer is 2 but my prediction it will be undefine because boolean * to a number is cannot be done.
// console.log(test("hello")); //NaN
// the answer is NaN because it try to convert the string but it failed and the string "hello" becomes NaN so when calculated NaN * 2 it will always be NaN.




