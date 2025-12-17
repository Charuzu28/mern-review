// Next Tasks (post answers only):
// A. Toggle User Active (IMMUTABLE)
// function toggleActive(users, id)

// Rules:
// Do NOT mutate original array
// Flip active for matching user
// Return new array
// MY ANSWER
// function toggleActive(users, id){
//     return users.map(u => {
//         const {name, age, active} = u;
//         return{
//             name,
//             age,
//             active: u.active === id ? !active : active
//         }
//     })
// }
// CORRECT WAY
function toggleActive(users, id) {
    return users.map(user => {
        if (user.id !== id) return user;
        return {
            ...user,
            active: !user.active
        };
    });
}


console.log(toggleActive(
    [{ name: "Charles M. Alamares", age: 24, active: true},
    { name: "Juan A. De la cruz", age: 21, active: false},],false 
    ))

// B. Remove Invalid Users
// function removeInvalidUsers(users)

// Rules:
// Keep users with:
// name (string)
// age (number ≥ 0)
// Use .filter()
function removeInvalidUsers(users){
    return users.filter(u => {
        return typeof u.name === 'string' &&
        typeof u.age === 'number' && u.age >= 0;
    });
}
console.log(removeInvalidUsers(
    [{ name: "Charles M. Alamares", age: 24, active: true},
    { name: "Juan A. De la cruz", age: "1", active: false},] 
    ))


// C. Backend Sanity Check
// function hasDuplicateIds(users)

// Rules:
// Return true if ANY duplicate id exists
// Otherwise false
// No nested loops
function hasDuplicateIds(users) {
    const seenIds = new Set();
    for (const user of users) {
        if (seenIds.has(user.id)) {
            return true; // Duplicate found
        }
        seenIds.add(user.id);
    }
    return false; // No duplicates found
}

console.log(hasDuplicateIds([
    { id: 1, name: "Charles M. Alamares", age: 24, active: true },
    { id: 2, name: "Juan A. De la cruz", age: 32, active: false },
    { id: 2, name: "Pok A. De la cruz", age: 12, active: true }
]));


