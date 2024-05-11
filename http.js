const http = require('http');

// This server is an event emitter
const server = http.createServer ((req, res) => {
    if (req.url === '/') {
        res.write('Hello World!');
        res.end(); // We can see Hello World on http://localhost:3000
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end(); // If we go to http://localhost:3000/api.courses , we get an array with 3 numbers
    }
})

// server.on("connection", (socket) => {
//     console.log("New connection"); // Listening on port 3000
// })

server.listen(3000)

console.log('Listening on port 3000');

// As you see, building a web server with Node is very easy. However, in the real world, we are not going to use this HTTP module to build a back-end service for our application. The reason for this is as you ses here, as we add more routes, this code gets more complex because we add all of them in a linear way inside this callback function. So, instead we use a framework called Express which gives our application a clean structure to handle various routes. Internally, the Express framework is built on top of the HTTP module in Node.