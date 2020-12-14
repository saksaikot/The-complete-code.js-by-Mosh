const express = require("express");

const startUpDebugger=require("debug")("app:startup");
const dbDebugger=require("debug")("app:db");
const config = require("config");
const logger=require("./middleware/logger");
const Joi = require("joi");
const helmet=require("helmet");
const morgan = require("morgan");
const app = express();

const genresRoute=require("./routes/generes");

startUpDebugger("app started....");
app.use(express.json());
app.use(logger);
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.static('public'));

app.use("/api/genres/",genresRoute);
const appEnv=app.get("env");
const processEnv=process.env.NODE_ENV;
dbDebugger(`appEnv : ${appEnv}, processEnv : ${processEnv}`);

// if(appEnv==='development'){
// }
dbDebugger(`app name ${config.get("name")}, mail host ${config.get("email.host")} ,password ${config.get("pass")}`)


const PORT=process.env.PORT || 3000;

app.listen(3000,()=>console.log(`server started, listening on ${PORT}...`));

