import express from 'express';
const bodyParser = require('body-parser');
const ejs = require('ejs');

const todo = require("./router/todo");
const start = require("./router/start");

const app = express();
const port: number = Number(process.env.PORT) || 3000;

app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);

app.use(bodyParser.urlencoded({extend : false}));

app.use("/", start);
app.use("/todo", todo);

app.listen(port, function(){
  console.log("server is opened!");
});
