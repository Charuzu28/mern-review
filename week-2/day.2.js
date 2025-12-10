// Week 2 — Day 2 (Next Lesson)

// Time to level up.
// Topic: Array Methods in Real Use Cases (Chaining, Data Shaping)
// Exercise A — Chain .filter(), .map(), .reduce()

// Given:

// const products = [
//   { name: "Laptop", price: 40000 },
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1200 },
//   { name: "Monitor", price: 9000 },
//   { name: "USB", price: 300 }
// ];

// Task:
// Write a function:
// function totalExpensiveProducts(arr)

// Rules:
// Keep only products with price ≥ 1000
// Get only the prices (not the objects)
// Sum them using .reduce()

// Return the total
// Expected result:
// totalExpensiveProducts(products) → 40000 + 1200 + 9000 = 50200


function totalExpensiveProducts(arr){
    return arr.filter(n => n.price >= 1000).map(n => n.price).reduce((total, num) => total += num, 0)
}

console.log(totalExpensiveProducts([
  { name: "Laptop", price: 40000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1200 },
  { name: "Monitor", price: 9000 },
  { name: "USB", price: 300 }
]))
