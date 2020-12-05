const EventEmitter= require("events");

const url="https://myLogger.io/log";

class LoggerEx extends EventEmitter {
    log(message){
        //sent a dumy http request 
        console.log(message);

        // raise an event
        this.emit("messageLoggedWithArgs",{id:1,url:"https://log.io.endPoint"});
    }
    

}

// module.exports.log=log;
module.exports=LoggerEx; //export as a function only