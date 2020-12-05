// const logger=require("./logger"); // logger was pointing to an object
// logger.log("node module example");

const log=require("./logger"); // log is now pointing to function directly
log("node module example");
