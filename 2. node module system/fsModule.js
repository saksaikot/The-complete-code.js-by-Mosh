const fs = require ("fs");
const dir=fs.readdirSync("./");

console.log(dir);

const dirASync=fs.readdir("./",function(err,files){
    if(err)console.log("error",err);
    else console.log(files);
})