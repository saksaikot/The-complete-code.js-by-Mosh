const url="https://myLogger.io/log";

function log(message){
    console.log(`Your message "${message}" sent to endPoint ${url}`);
}

// module.exports.log=log;
module.exports=log; //export as a function only