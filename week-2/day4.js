// ENVIRONMENT VARIABLES

// require('dotenv').config();

// const http = require('http');
// const PORT = process.env.PORT || 3000;
// const APP_NAME = process.env.APP_NAME;

// const server = http.createServer((req, res) => {
//     res.writeHead(200,{"Content-Type" : "text/plain"});
//     res.end(`Welcome to ${APP_NAME}`);
// });

// server.listen(PORT, () => {
//     console.log(`${APP_NAME} is running at http://localhost:${PORT}`);
// })

// Do the following:
// Use dotenv to set PORT=5000 and APP_NAME="Charles MERN Server".
// Run a server that prints "Welcome to Charles MERN Server" at http://localhost:5000.
// Confirm .env is ignored by Git.

require('dotenv').config();

const http = require('http');
const PORT = process.env.PORT || 4000;
const APP_NAME = process.env.APP_NAME;

const server = http.createServer((req, res) =>{
    res.writeHead(200,{"Content-Type" : "text/plain"});
    res.end(`Welcome to ${APP_NAME}!`);
})

server.listen(PORT, () =>{
    console.log(`${APP_NAME} is running at http://localhost:${PORT}`);
})