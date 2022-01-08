const http = require('http');
const app = require('./app');
const port = 8000; //specifying port
const server = http.createServer(app); //starting server

console.log(server.listen(port))