const http= require("http");


const server=http.createServer();
server.on("connection",()=>console.log("new connection"));
server.listen(3000);
console.log("server listening on port 3000")