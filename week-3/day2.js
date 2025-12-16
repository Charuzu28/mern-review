// Day 2 Task
// A. Safe Login Check
// function canLogin(user)

// Rules:
// If user is null → return false
// If user.active !== true → return false
// If user.banned === true → return false
// Else → return true
// Use early returns only.
// No nested if.
// MY ANSWER:
// function canLogin(users){
//     return users.map( user => {
//         if(user === null){
//         return false;
//         }else if(user.active !== true){
//             return false;
//         }else if(user.banned === true){
//             return false;
//         }else{
//             return true;
//         }
//     })
    
// }
// CORRECT WAY
function canLogin(user) {
    if (user === null) return false;
    if (user.active !== true) return false;
    if (user.banned === true) return false;
    return true;
}

console.log(canLogin(
    [{id: 1, active: true, banned: false},]
        )
    )


// B. Get First Adult User
// function getFirstAdult(users)

// Rules:
// Age ≥ 18
// User.find()
// If none found → return null
// MY ANSWER:
// function getFirstAdult(users){
//     return users.find(u => u.age >= 18 || null);
// }

// CORRECT ANSWER
function getFirstAdult(users) {
    const user = users.find(u => u.age >= 18);
    return user || null;
}

console.log(getFirstAdult(
    [{id: 1, age: 11},
    {id: 2, age: 18},
    {id: 3, age: 24},]
        )
    )

// C. Validate Payload
// function isValidUserPayload(payload)

// Rules:
// Must be object
// Must have name (string)
// Must have age (number)
// Return true / false
// No try/catch. No libraries.
// MY ANSWER:
// function isValidUserPayload(payload){
//     return payload.map(u => {
//         if(typeof u === 'object' && typeof u === 'string' && typeof u === 'number'){
//             return true;
//         }else{
//             return false;
//         }
//     })
// }
function isValidUserPayload(payload) {
    if (typeof payload !== "object" || payload === null) return false;
    if (typeof payload.name !== "string") return false;
    if (typeof payload.age !== "number") return false;
    return true;
}

console.log(getFirstAdult(
    [{id: 1, age: 11, name: "Charles"},
    {id: 2, age: 18, name: "Juan"},
    {id: 3, age: 24, name: "Johnny"},]
        )
    )

