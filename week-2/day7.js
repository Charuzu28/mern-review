// Lesson 1 — Build a Frequency Map (IMPORTANT)

function countRoles(users){
    return users.reduce((roleCount, role) => {
        roleCount[role] = (roleCount[role] || 0) + 1;
        return roleCount;
    },{})
    
}

console.log(countRoles(
    [
    "admin",
    "user",
    "admin",
    "moderator",
    "user",
    "admin"
    ]
    ));
    
// Lesson 2 — Group Objects by Property
function groupByRole(users){
    return users.reduce((acc,u) => {
        if(u.role === "admin"){
            if(!acc.admin){
                acc.admin = [];
            }
            acc.admin.push(u.name);
        }
        else if(u.role === "user"){
            if(!acc.user){
                acc.user = [];
            }
            acc.user.push(u.name);
        }
    return acc;
    },{})
}

console.log(groupByRole([
  { name: "Charles", role: "admin" },
  { name: "Anna", role: "user" },
  { name: "Marco", role: "admin" },
  { name: "Bella", role: "user" }
]));

// Lesson 3 — Backend-Style Data Summary

function totalSpentPerUser(users){
    return users.reduce((acc, user) => {
        acc[user.user] = (acc[user.user] || 0) + user.total;
        return acc;
    },{})
}

console.log(totalSpentPerUser([
  { user: "Charles", total: 1200 },
  { user: "Anna", total: 500 },
  { user: "Charles", total: 300 },
  { user: "Anna", total: 700 }
]))




