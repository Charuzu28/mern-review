// A.
// console.log( 5 === "5");  //false
// - is a strict equality 
//- coersion doesn't happen

// console.log( 5 == "5");   //true
// - is a loosen equality
// - coersion happen convert the string to number

// console.log(10 > 2 && 2 > 1);  //false
// its true because in && logical operator if one of the condition is true it makes them true so meaning they need to be both true
// console.log(false || 0 || "hello"); //"hello"
// The answer is "hello" because in false = false, the number 0 is a false, and "hello" is a string so the OR choose whats true.


// B.
// Write logic:
// If temperature > 30 → "Hot"
// If 20–30 → "Warm"
// Else → "Cold"

const temperature = 30;

if(temperature > 30){
    console.log("Hot")
}else if(temperature >= 20 && temperature <= 30 ){
    console.log("Warm")
}else{
    console.log("cold")
}