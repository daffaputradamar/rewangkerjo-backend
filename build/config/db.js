"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var connectionString = "mongodb+srv://wri:" + process.env.PASSWORD + "@cluster0-enygr.mongodb.net/test?retryWrites=true";
console.log(connectionString);
mongoose_1.connect(connectionString, {
    useNewUrlParser: true,
})
    .then(function () {
    console.log("Connected to mongodb");
})
    .catch(function (err) {
    console.log(err);
});
