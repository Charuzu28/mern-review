// ✅ Assignment A — Transform an array using .map()

// Given:
// const numbers = [1, 2, 3, 4, 5];

// Make a function:
// function squareAll(arr)
// that returns a NEW array with all numbers squared.
// ✔ Do not mutate original array
// ✔ Must use .map()
// ✔ Must return, not print

// Expected output:
// squareAll([1,2,3]) → [1,4,9]
function squareAll(arr){
    return arr.map(n => n * n);
}
console.log(squareAll([1,2,3,4,5]));

// ✅ Assignment B — Filter an array using .filter()
// Given:
// const ages = [10, 18, 22, 15, 40];

// Write:
// function getAdults(arr)
// Return ALL ages ≥ 18.
// Expected:
// getAdults([10,18,22,15,40]) → [18,22,40]
function getAdults(arr){
    return arr.filter(age => age >= 18);
};
console.log(getAdults([10, 18, 22, 15, 40]));

// ✅ Assignment C — Use .reduce()

// Write:
// function sum(arr)

// Return the total of all numbers using .reduce()
// Expected:

// sum([1,2,3]) → 6

function sum(arr){
    return arr.reduce((total, num) => total += num, 0)
}
console.log(sum([1,2,3,4,5]));

// ✅ Assignment D — Object Deep Access
// Given:

const user = {
  name: "Charles",
  details: {
    age: 24,
    favorites: {
      language: "JavaScript",
      pet: "Cat"
    }
  }
};

// Log:
console.log(user.name)// "Charles"
console.log(user.details.age)// 24
console.log(user.details.favorites.language)// "JavaScript"
console.log(user.details.favorites.pet)// "Cat"
