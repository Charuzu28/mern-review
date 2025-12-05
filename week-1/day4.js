// A. Create an array
// Create a variable called fruits that contains:
// "apple"
// "banana"
// "mango"
// Then:
const fruits = ["apple", "banana", "mango"];
// Log the first item
console.log(fruits[fruits.length - 3]);
// Log the last item
console.log(fruits[fruits.length - 1]);
// Add "orange" to the END
fruits.push("orange");
console.log(fruits[3])
// Add "grapes" to the START
fruits.unshift("grapes");
console.log(fruits[0])
// Remove the last item
fruits.pop()
console.log(fruits[3])
// Log the final array
console.log(fruits)

// B. Write a function getLast(arr)
// It returns the last element of the array.
// No console.log inside the function.
// If the array is empty → return null.
// Examples:
// getLast([10, 20, 30]) → 30
// getLast([]) → null
function getLast(arr){
    if([] == null){
        return null;
    }else{
        return arr[arr.length - 1]
    }
}

console.log(getLast([10,20,30,40,60]));
console.log(getLast([]))

// C. Predict the output (NO running first):
// const nums = [1, 2, 3];
// const doubled = nums.map(n => n * 2);
// console.log(nums);
// console.log(doubled);
// Tell me EXACT outputs AND explain why.
//The output first will be [1,2,3] when it got double it got x 2 so the out put will be [2,4,6] because of map function if transfer every value to it and times it into 2.
// D. Short reasoning
// Explain the difference between:
// .push()
// .pop()
// .unshift()
// .shift()
// Short, sharp, no essays.
//.push() adding in the END of the array
//.pop() removing the END of the array
//.unshift() adding in the START of the array
//.shift() removing in the START of the array
