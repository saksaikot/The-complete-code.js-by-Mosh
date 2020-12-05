const EventEmitter= require("events");

const emitter=new EventEmitter();

emitter.on("messageLogged",()=>console.log("message Logged emited"));

emitter.emit("messageLogged");


emitter.on("messageLoggedWithArgs",args=>console.log("message Logged emited with args "+ JSON.stringify (args)));

emitter.emit("messageLoggedWithArgs",{id:1,url:"https://log.io.endPont"});