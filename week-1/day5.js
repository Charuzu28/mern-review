// A. Write a loop that prints numbers 1 → 10
// Use a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// B. Write a loop that prints ONLY even numbers from 1 → 20
// No extra arrays.
// Just simple logic.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
// C. Rewrite this loop using while instead of for:
// for (let i = 5; i >= 1; i--) {
//     console.log(i);
// }
// Same behavior. No changes to output.
let i = 5;
while (i >= 1) {
    console.log(i);
    i--;
}
// D. Predict the output (NO running first):
// let total = 0;
// for (let i = 1; i <= 3; i++) {
//   total += i;
// }
// console.log(total);
// Explain EXACTLY why.
//- Output: 6
//- total = 1 + 1 = 1; 1 + 2 = 3; 3 + 3 = 6;

// E. Mini-Function
// Write:
// function countDown(n)
// It should:
// Print numbers from n down to 1
// If n <= 0, do nothing
// Use a loop (your choice)
// Example:
// countDown(5) → 5 4 3 2 1
function countDown(n) {
    if (n <= 0) return;
    while (n >= 1) {
        console.log(n);
        n--;
    }

}

console.log(countDown(5));

