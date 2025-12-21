// A. Normalize Raw Input
// function normalizeUser(input)


// Input example:

// {
//   full_name: "Charles Alamares",
//   age: "24",
//   is_active: "true"
// }


// Rules:
// name → string
// age → number
// active → boolean
// Return normalized object:

// { name, age, active }

// MY ANSWER
function normalizeUser(input){
    return input.map((u) => {
        if(typeof u.full_name !== 'string') return;
        const age = Number(u.age);
        if(isNaN(age)) return;
        const active = u.is_active === 'true';
        
        return{
            name: u.full_name,
            age: age,
            active: active
        }
    }).filter(u => u)
}

// CORRECT WAY
function normalizeUser(input) {
    if (!input || typeof input !== "object") return null;

    if (typeof input.full_name !== "string") return null;

    const age = Number(input.age);
    if (!Number.isFinite(age)) return null;

    const active =
        input.is_active === true ||
        input.is_active === "true" ||
        input.is_active === 1;

    return {
        name: input.full_name,
        age,
        active
    };
}

console.log(normalizeUser([ 
    {
  full_name: "Charles Alamares",
  age: "24",
  is_active: "true"
    }
]))

// B. Reject Bad Payload
// function sanitizeUsers(users)


// Rules:

// Input is array of mixed garbage
// Keep users where:
// name is string
// age is number ≥ 18
// active is boolean

// Return CLEAN array
function sanitizeUsers(users){
    return users.filter(u => 
            typeof u.name === 'string' && 
            typeof u.age === 'number' && 
            u.age >= 18 && 
            typeof u.active === 'boolean'
        );
};

console.log(sanitizeUsers([
  { name: "John", age: 25, active: true },
  { name: "Alice", age: 17, active: true },
  { name: "Bob", age: 30, active: "yes" },
  { name: "Charlie", age: 22, active: false },
  { name: 123, age: 20, active: true },
  { name: "Eve", age: 19, active: "true" },  
  { name: "David", age: 40, active: true }
]))
// C. Backend Summary
// function getActiveUserNames(users)

// Rules:
// Only active users
// Return array of names

// Use chaining (filter + map)

function getActiveUserNames(users){
    return users.filter(u => u.active === true).map(u => u.name)
}
console.log(getActiveUserNames(
    [
  { name: "John", age: 25, active: true },
  { name: "Charlie", age: 22, active: false },
  { name: "David", age: 40, active: true }
    ]
))