// A. Find ONE user by id
// function findUserById(users, id)

// Rules:
// Return the user object
// If not found → return null
// Use .find() only

// Example:

// findUserById([{id:1},{id:2}], 2) → {id:2}
// findUserById([{id:1}], 99) → null

function findUserById(users, id){
    return users.find(n => n.id === id || null)
}
console.log(findUserById([{id:1},{id:2}], 1))
// B. Check if ANY admin exists
// function hasAdmin(users)

// Rules:
// Return true / false
// Use .some()
// No loops
function hasAdmin(users){
    return users.some(u => u.role === 'admin');
}
console.log(hasAdmin([{id: 1, role: 'admin'}, {id: 1, role: 'user'}]))

// C. Remove a user IMMUTABLY
// function removeUser(users, id)

// Rules:
// Must NOT modify original array
// Return new array without the user
// Use .filter()

function removeUser(users, id){
  return users.filter(u => u.id !== id)
}
console.log(removeUser([{id: 1, role: 'admin'}, {id: 1, role: 'user'}, {id: 2, role: 'moderator'}], 1))