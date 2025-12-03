// HTTP SERVER (CORE NODE)
const http = require('http');
const fs = require('fs');
// CREATE SERVER
    // const  server = http.createServer((req,res) => {
    //     res.writeHead(200, {"Content-Type" : "text/plain"});
    //     res.end("Hello from my first node server!");
    // })

// HANDLE DIFFERENT ROUTES
    // const  server = http.createServer((req,res) => {
    //     if(req.url === '/'){
    //         res.writeHead(200, {"Content-Type" : "text/plain"});
    //         res.end("Welcome to homepage!");
    //     }else if(req.url === '/about'){
    //         res.writeHead(200,{"Content-Type" : "text/plain"});
    //         res.end("Welcome to about page!");
    //     }else{
    //         res.writeHead(404, {"Content-Type" : "text/plain"});
    //         res.end("Error 404")
    //     }
    // })

    // SERVING HTML
        // const server = http.createServer((req,res) => {
        //     if(req.url === '/'){
        //         res.writeHead(200,{'Content-Type' : 'text/plain'});
        //         const html = fs.readFileSync("text.js", "utf-8");
        //         res.end(html);
        //     }
        // })
    // LISTEN ON A PORT
        // server.listen(3000, () =>{
        //     console.log("Server running at http://localhost:3000");
        // })

// Do the following:
// Create a server that:
// / → responds with "Welcome Charles to Node.js server!"
// /about → responds with "About Page"
// Any other route → "404 Page Not Found".
// Bonus: Create an index.html file and serve it when accessing /.

const server = http.createServer((req, res) =>{
    
    if(req.url === '/'){
        try {
            res.writeHead(200,{"Content-Type" : "text/plain"});
            const html = fs.readFileSync("index.html","utf-8");
            res.end(html);
            return;
        } catch (error) {
            res.writeHead(200,{"Content-Type" : "text/plain"});
            res.end("Welcome Charles to Node.js server!");
            return;
        }
    }
    
    if(req.url === '/about'){
        res.writeHead(200,{"Content-Type" : "text/plain"});
        res.end("About Page!");
        return;
    }
        res.writeHead(404,{"Content-Type" : "text/plain"});
        res.end("ERROR 404!");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
})