"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectionString = `mongodb://localhost:27017/rewangid`;
mongoose_1.connect(connectionString, {
    useNewUrlParser: true,
})
    .then(() => {
    console.log('Connected to mongodb');
})
    .catch(err => {
    console.log(err);
});
