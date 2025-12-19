
// Topic: Defensive Backend Logic + Error-Safe Patterns
// Next tasks (post answers only):
// A. Safe Getter
// function getUserEmail(user)

// Rules:
// If user is null → return null
// If user.email is missing → return null
// Else → return email
// Use early returns only

// function getUserEmail(user){
//   if(user === null) return null;
   
//   if(user.email === null) return null;
   
//   return user.email;
// }

// CORRECT WAY
function getUserEmail(user) {
    if (!user) return null;
    if (typeof user.email !== "string") return null;
    return user.email;
}

console.log(getUserEmail({ id: 1, email: "charles@gmail.com", age: 24, active: true }))
console.log(getUserEmail({ id: 1, email: null, age: 24, active: true }))

// B. Update User Name (IMMUTABLE)
// function updateUserName(users, id, newName)

// Rules:
// Do NOT mutate original array
// Update name of matching user
// If user not found → return original array
function updateUserName(users, id, newName){
    return users.map(u => {
        if(u.id === id){
            return {...u, name: newName}
        }
        return u;
    })
    
}
const users = [
    { id: 1, name: "Charles", age: 24, active: true },
    { id: 2, name: "Juan", age: 32, active: false },
    { id: 3, name: "John", age: 12, active: true }
];

console.log(updateUserName(users, 1, "Charlie"))

// C. Backend Guard
// function canAccessAdminRoute(user)

// Rules:
// user must exist
// user.role === "admin"
// user.active === true
// Return true / false
// No nesting
function canAccessAdminRoute(user){
    if(!user) return false;
    if(user.role !== 'admin') return false;
    if(!user.active) return false;
    return true;
}

console.log(canAccessAdminRoute({ role: "admin", active: true })); 
console.log(canAccessAdminRoute({ role: "user", active: true })); 
console.log(canAccessAdminRoute({ role: "admin", active: false }));
console.log(canAccessAdminRoute(null));