// Your Task (Day 1 Challenge)
// Create week3-express/server.js with full CRUD.
// Test all routes in Postman.
// Try different IDs to confirm update/delete works.

const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 5000;

app.use(express.json());

// GET
app.get("/task", (req, res) => {
    const data = JSON.parse(fs.readFileSync("task.json", "utf-8"));
    res.json(data)
});
// POST
app.post("/task", (req, res) => {
    const newTask = req.body;
    const data = JSON.parse(fs.readFileSync("task.json", "utf-8"));

    data.push(newTask);

    fs.writeFileSync("task.json", JSON.stringify(data, null, 2))
    res.status(201).json(newTask);
});
// PUT
app.put("/task/:id", (req, res) =>{
    const { id } = req.params
    const updatedTask = req.body;
    let data = JSON.parse(fs.readFileSync("task.json", "utf-8"));

    data = data.map(task => (task.id == id ? {...task, ...updatedTask} : task));
    fs.writeFileSync("task.json", JSON.stringify(data, null, 2));

    res.json({message: "Updated Tasks", task: updatedTask});
})
// DELETE
app.delete("/task/:id", (req, res) => {
    const { id } = req.params;
    let data = JSON.parse(fs.readFileSync("task.json", "utf-8"));

    data = data.filter(task => task.id != id);

    fs.writeFileSync("task.json", JSON.stringify(data, null, 2));
    res.json({message: "Deleted task!"});
})
// LISTEN/SERVER

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})