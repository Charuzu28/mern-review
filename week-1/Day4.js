// Objects

let user = {
    name: 'Charles',
    age: 24,
    email: 'charlesmarfil.alamares@gmail.com'
};

// Accessing Properties
console.log(user.name);
console.log(user['email']);

// Updating & adding
user.role = 'Frontend';
user.age = 23;

//Destructuring
let {name, age} = user;
console.log(`I'm ${name} and I am ${age} years old.`)

// Spread & Rest with Objects
let updatedUser = {...user, city: 'Legazpi City'};

console.log(updatedUser);

// NESTED OBJECT
let account = {
    user: { name: "Charles", age: 24, email: "email@gmail.com"},
    role: ['IT', 'CS']
}

console.log(account);
console.log(account.user.name);
console.log(account.role[0]);

// TASK

// Do the following:
// Create an object book with properties: title, author, year.
// Print "Title: [title], Author: [author]".
// Add a property pages to the object.
// Use destructuring to extract title and year.
// Create a copy of the object with an extra property genre using the spread operator.

let book = {
    title: "Ego is the enemy",
    author: "Ryan Holiday",
    year: 2021
}

book.pages = 150;

console.log(book);
console.log(book.title);
console.log(book.author);

let {title , year} = book;
console.log(`I always read the book ${title} from ${year}.`);

let updatedBooks = {...book, genre: "Self Help Books"};

console.log(updatedBooks);
