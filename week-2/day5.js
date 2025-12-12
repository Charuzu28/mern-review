// 🧪 Exercise A — Convert Raw Data Into a Clean Format

// Given this messy API-style data:
// const rawUsers = [
//   { fullName: "Charles M. Alamares", yearsOld: 24, is_active: 1},
//   { fullName: "Anna L.", yearsOld: 17, is_active: 0 },
//   { fullName: "Marco P.", yearsOld: 30, is_active: 1 },
//   { fullName: "Bella", yearsOld: 15, is_active: 1 }
// ];

// Goal:
// Write a function:
// function normalizeUsers(arr)

// It must return a new, clean array with this structure:

// {
//   name: "...",
//   age: number,
//   active: boolean
// }

// Rules:
// Convert fullName → name
// Convert yearsOld → age
// Convert is_active

// 1 → true
// 0 → false
// Use map only.
// Don’t mutate original data.

// Expected Output:
// [
//   { name: "Charles M. Alamares", age: 24, active: true },
//   { name: "Anna L.", age: 17, active: false },
//   { name: "Marco P.", age: 30, active: true },
//   { name: "Bella", age: 15, active: true }
// ]

function normalizeUsers(users){
    return users.map(user => {
        return {
            name: user.fullName,
            age: user.yearsOld,
            active: user.is_active === 1
        }
    }
        )
}

console.log(normalizeUsers([
  { fullName: "Charles M. Alamares", yearsOld: 24, is_active: 1},
  { fullName: "Anna L.", yearsOld: 17, is_active: 0 },
  { fullName: "Marco P.", yearsOld: 30, is_active: 1 },
  { fullName: "Bella", yearsOld: 15, is_active: 1 }
]))