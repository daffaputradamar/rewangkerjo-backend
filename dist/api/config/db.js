"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-enygr.mongodb.net/test?retryWrites=true`;
mongoose_1.connect(connectionString, {
    useNewUrlParser: true,
})
    .then(() => {
    console.log("Connected to mongodb");
})
    .catch((err) => {
    console.log(err);
});
