// A. Sum all numbers in an array
// Write a function:
// function sumArray(arr)

// Requirements:
// Add all numbers
// Return the total
// If the array is empty → return 0

// Example:
// sumArray([1,2,3,4]) → 10
// sumArray([]) → 0
let total = 0;
function sumArray(arr){
    if( arr.length === 0) return 0;
    arr.forEach(num  => {
            total += num;
    })
    return total;
}

console.log(sumArray([1,2,3,4]));

// **B. Count how many numbers are greater than 10
// Function:
// function countGreaterThan10(arr)

// Example:
// countGreaterThan10([5,11,20,3,100]) → 3
function countGreaterThan10(arr){
    let count = 0;
  arr.forEach(num => {
   if(num > 10){
     count++;
   }; 
  })
  return count;
}

countGreaterThan10([5,11,2,200,100,1000]);

// C. Get the largest number (without using Math.max)
// Function:
// function getMax(arr)
// Rules:
// Loop manually
// If array is empty → return null
function getMax(arr){
  if(arr.length === 0) return null;
  
  let largest = arr[0];
  arr.forEach(n => {
    if(n > largest){
       largest = n;
    }
  })
  return largest;
}
console.log(getMax([10,20,30,1000]));
// D. Transform every number by doubling it
// Function:
// function doubleAll(arr)

// Return a new array (don’t modify original).
// Example:
// doubleAll([1,2,3]) → [2,4,6]
function doubleAll(arr){
  let sum = [];
  arr.forEach(n => {
    sum.push(n * 2);
  })
  return sum;
}

console.log(doubleAll([1,2,3,4,5]));

// E. Mini-Algorithm: Count vowels in a string
// Function:
// function countVowels(str)

// Vowels: a, e, i, o, u (both lower & upper)
// Example:
// countVowels("Hello") → 2

function countVowels(str){
  let count = 0;
  const vowels = "aeiouAEIOU"
  
  str.split("").forEach(char => {
    if(vowels.includes(char)){
      count++;
    }
  })
  return count;
}

console.log(countVowels("Hello World!"))