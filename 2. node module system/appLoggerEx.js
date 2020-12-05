const Logger=require("./loggerEx");

const logger=new Logger();

logger.on("messageLoggedWithArgs",args=>console.log("message Logged emited with args "+ JSON.stringify (args)));
logger.log("please save this message");
