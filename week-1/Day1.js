const user = "Charles";
let score = 10;

console.log(typeof(user));
console.log(typeof(score));

score = score + 10;
console.log(`The new score is ${score}`);

// Assignment A
    // Create variables for:
    // Your name
    // Your age
    // Your favorite programming language
    // Whether you like cats
    // Your birthday (string)
    // Then log them using template literals.
        
    const name = "Charles";
    const age = 24;
    const progLanguage = "Javascript";
    const likeCats = true;
    const birthday = "08/28/2001";

    console.log(`Hi, my name is ${name}. I'm ${age} y/o, my favorite programming language is ${progLanguage}. Do I like cats? ${likeCats}. I was born in ${birthday}.`)

//Assignment B
    // Show me:
    // strict equality (===)
    // loose equality (==)
    // explain what happened
const num1 = 5;
const num2 = '5';

if(num1 == num2){
    console.log("loose equality") // it shows that the string 5 is converted to 5 so its means even they're not actually
                                    // equal in == it considered because the string 5 is converted to number - note in == it converted types
}
if(num1 === num2){              // Here as you can see it doesnt convert the type because === is more strict means it must
                                //  be   identical or really equal to be true
    console.log("not equal") 
}else{
    console.log("strict equality")
}

// Assignment C
    // Predict the output (NO RUNNING FIRST):
    // console.log("5" + 1); //Answer: 51
    // console.log("5" - 1); //Answer:  4
    // console.log("5" * "2"); //Answer:  10
    // console.log("hello" * 2); //Answer:  NaN
    // Give explanations.
    //The first output is 51 because the operator + concatenates the two operands if either operand is a string.
    //JS automatically converts the other to string if the there is a string in the operand.
    // In second output is 4 because operator - does not exist for the string so both will be converted to number.
    // For the third ouput the answer is 10 because it's the same as - it's undefined for the strings to it will be force to be converted in integer or numeric coercion
    //In last part the answer is NaN because "hello" cannot be converted so it be NaN * 2 so when it caculated it will be NaN because it cannot be calculated.


// DAY 1 — INTERVIEW QUIZ
// Answer these WITHOUT guessing:
// Difference between let and const?
    // The difference between let and const are let can be changed while constant is the variable will be cosntant means cannot be replaced or changed;
// Why is var dangerous?
    //var is dangerous becuase its a legacy and old means it has bugs.
// What does === do that == does not?
    //The === do is its more strict and always check even its same data but different types and it doesnt convert types. While the == is not that strict so it converts some types and just they are equal data they can be true.
// What is dynamic typing?
    // Dynamic typing is the constant change of variable.
// What is a template literal?
    // Template literal is enclosed with backticks note quoation marks