// FILE SYSTEM
const fs = require('fs');

// WRITING TO A FILE
        // fs.writeFileSync("text.js", "Hello Charles!");
        // console.log("File Created.js")
// // READING A FILE
//         const data = fs.readFileSync("text.js","utf-8");
//         console.log("File readed!", data);
        
// // APPENDING TO A FILE
//         const extraData = fs.appendFileSync("text.js", "\nThis is an extra line.");
//         console.log(data)
// DELETING A FILE
        // fs.unlinkSync("text.js");
        // console.log("Deleted the file!")
// NON BLOCKING(ASYNC) METHODS
    // fs.readFile("text.js", "utf-8", (err, data) =>{
    //     if(err) throw err;
    //     console.log("Async Read: ", data);
    // })

// Create week2-node/day2.js.
// Do the following:
// Write "Learning Node.js FS module" into a file notes.txt.
    fs.writeFileSync("notes.js", "Learning Node.js FS module");
    console.log("File created successfully!");
// Append "This is Ced’s MERN journey" to it.
    const extraData = fs.appendFileSync("notes.js", "\nAn extra line for greatness!");
// Read and print the content of notes.txt.
    fs.readFile("notes.js", "utf-8", (err,data) => {
        if(err) throw err;
            console.log("File Content: ", data);
    });
// (Optional) Try deleting notes.txt.
    fs.unlinkSync("notes.js");
    console.log("Deleted the file!");