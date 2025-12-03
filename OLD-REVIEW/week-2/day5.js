const http = require('http');
const fs = require('fs');

const PORT = 5000;

const server = http.createServer((req, res) => {
    // GET
   if( req.url === '/notes' && req.method === 'GET'){
    const data = fs.readFileSync("notes.json", 'utf-8');
    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.end(data)
    // POST
   }else if( req.url === '/notes' && req.method === 'POST'){
        let body = '';
        req.on("data", chunk => {
            body += chunk;
        })

        res.on("end", () => {
            const newNote = JSON.parse(body);
            const data = JSON.parse(fs.readFileSync("notes.json", "utf-8"));

            data.push(newNote);

            fs.writeFileSync("notes.json", JSON.stringify(data, null , 2))

            res.writeHead(201, {"Content-Type" : "application/json"});
            res.end(JSON.stringify(newNote))
        })
   }else{
    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.end(JSON.stringify({error: 'Not Found!'}));
   }
})

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})