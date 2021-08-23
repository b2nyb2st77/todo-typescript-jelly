"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = require('body-parser');
var ejs = require('ejs');
var todo = require("./router/todo");
var start = require("./router/start");
var app = express_1.default();
var port = Number(process.env.PORT) || 3000;
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);
app.use(bodyParser.urlencoded({ extend: false }));
app.use("/", start);
app.use("/todo", todo);
app.listen(port, function () {
    console.log("server is opened!");
});
