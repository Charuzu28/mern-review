// Exercise: Sort + Transform + Format

// Given:

// const orders = [
//   { id: 1, item: "Keyboard", price: 1200 },
//   { id: 2, item: "Mouse", price: 500 },
//   { id: 3, item: "Monitor", price: 9000 },
//   { id: 4, item: "Laptop", price: 40000 },
//   { id: 5, item: "USB", price: 300 }
// ];

// Task:
// Write:
// function formatExpensiveOrders(arr)

// Rules:
// Keep only products with price ≥ 1000
// Sort them by price descending
// Convert them into strings in this format:
// "<item> — ₱<price>"


// Return the new array of formatted strings
// Expected Output:
// [
//   "Laptop — ₱40000",
//   "Monitor — ₱9000",
//   "Keyboard — ₱1200"
// ]

function formatExpensiveOrders(orders){
    return orders.sort((a, b) => a.price - b.price).filter(o => o.price >= 1000).map(o => o.item + " - " + o.price);
}

console.log(formatExpensiveOrders([
  { id: 1, item: "Keyboard", price: 1200 },
  { id: 2, item: "Mouse", price: 500 },
  { id: 3, item: "Monitor", price: 9000 },
  { id: 4, item: "Laptop", price: 40000 },
  { id: 5, item: "USB", price: 300 }
]))

//GPT CORRECTION
function formatExpensiveOrders(orders){
    return orders
        .filter(o => o.price >= 1000)
        .sort((a, b) => b.price - a.price)
        .map(o => `${o.item} — ₱${o.price}`);
}