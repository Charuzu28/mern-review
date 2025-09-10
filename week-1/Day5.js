// CONDITIONAL
let user = 'admin';

if(user === 'admin'){
    console.log('Welcome Admin!');
}else{
    console.log('You are not the admin!')
}

// Ternary Operator
console.log(user ? 'Welcome Admin!' : 'You are not the admin!');

// Switch
switch(user){
    case 'admin':
        console.log('Welcome admin!');
        break;
    case 'unknown':
        console.log('Who are you?');
        break;
    default:
        console.log('Youre not the admin!');
        break;
}

// FOR,WHILE, FOR ARRAY
for(let i = 0; i < 5; i++){
    console.log('whoami');
}

let n = 1;
while( n <= 5){
    console.log('tiger commando');
    n++;
}

let fruits = ['banana', 'apple', 'melon'];

for(let fruit of fruits){
    console.log(fruit)
};

// REAL-WORLD SCENARIO 
let users =[
    {name: 'Charles', age: 24, role: 'IT'},
    {name: 'Lebron', age: 29, role: 'NBA'},
    {name: 'Krazy', age: 6, role: 'CS'},
]

for(let user of users){
    if(user.age >= 18){
        console.log(`${user.name} is in legal age!`);
    }
}

// Write code that:
// Prints numbers 1–20.
// If divisible by 3 → print "Fizz".
// If divisible by 5 → print "Buzz".
// If divisible by both 3 & 5 → print "FizzBuzz".

for(let i = 1; i < 21; i++){
    if(i % 3 == 0){
        console.log("Fizz");
    }
    if(i % 5 == 0){
        console.log("Buzz");
    }
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
}