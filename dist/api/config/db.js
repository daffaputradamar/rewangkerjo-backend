"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectionString = `mongodb+srv://rewangkerjo:rewangkerjo@cluster0-vgbi2.mongodb.net/test?retryWrites=true&w=majority
`;
mongoose_1.connect(connectionString, {
    useNewUrlParser: true,
})
    .then(() => {
    console.log('Connected to mongodb');
})
    .catch(err => {
    console.log(err);
});
