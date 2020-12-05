const http=require("http");

const server=http.createServer((req,res)=>{
if(req.url==="/"){
    res.write("service working for root directory");
    
}
else {
    res.write("this path is not configured");
}
res.end();
})

server.listen(3000);
console.log("server started at localhost on port 3000")